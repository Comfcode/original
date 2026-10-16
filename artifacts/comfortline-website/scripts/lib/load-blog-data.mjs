import { readFileSync } from "node:fs";
import { dirname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const dataRoot = resolve(dirname(fileURLToPath(import.meta.url)), "../../src/data");

// Loads the real data graph offline, including imported article-body constants.
// Deliberately does not run Vite, a browser, fetch(), or a dev server.
export function createDataLoader(root = dataRoot) {
  const cache = new Map();
  function load(name) {
    const path = resolve(root, `${name}.ts`);
    if (!path.startsWith(root + sep)) throw new Error(`Data import escapes root: ${name}`);
    if (cache.has(path)) return cache.get(path).exports;
    const module = { exports: {} };
    cache.set(path, module);
    const code = ts.transpileModule(readFileSync(path, "utf8"), {
      compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
      fileName: path,
    }).outputText;
    const requireLocal = (specifier) => {
      if (!specifier.startsWith(".")) throw new Error(`Unexpected non-local data import: ${specifier}`);
      return load(resolve(dirname(path), specifier).slice(root.length + 1));
    };
    new Function("require", "module", "exports", code)(requireLocal, module, module.exports);
    return module.exports;
  }
  return load;
}
