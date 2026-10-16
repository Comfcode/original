import { useId, useRef, useState, type ReactNode } from "react";
import { AlertTriangle, ExternalLink, Info, Lock, MinusCircle, RotateCcw, ShieldAlert } from "lucide-react";
import { useLang } from "@/context/language-context";
import { COUNTRIES } from "@/data/border-countries";
import {
  CHECKPOINTS,
  DEFAULT_INPUT,
  evaluate,
  RULES_DATE_ISO,
  sourceUrl,
  validate,
  type BorderCode,
  type CheckerInput,
  type FieldErrors,
  type Finding,
  type FindingKind,
} from "@/data/border-checker-logic";

const fieldCls =
  "w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-primary aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-1 aria-[invalid=true]:ring-destructive/60";

const KIND: Record<FindingKind, { icon: typeof Info; box: string; chip: string; ru: string; en: string }> = {
  risk: { icon: ShieldAlert, box: "border-red-500/50 bg-red-500/10", chip: "text-red-600 dark:text-red-400", ru: "Высокий риск", en: "High risk" },
  caution: { icon: AlertTriangle, box: "border-amber-500/50 bg-amber-500/10", chip: "text-amber-700 dark:text-amber-400", ru: "Проверить", en: "Verify" },
  info: { icon: Info, box: "border-border bg-muted/40", chip: "text-primary", ru: "К сведению", en: "Note" },
  nomatch: { icon: MinusCircle, box: "border-primary/40 bg-primary/5", chip: "text-primary", ru: "Совпадений нет — не разрешение", en: "No match — not a permission" },
};

function Field({ id, label, hint, error, children }: { id: string; label: string; hint?: string; error?: string; children: ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-xs font-semibold text-foreground/90">
        {label}
      </label>
      {children}
      {hint && !error && <p id={`${id}-hint`} className="text-[11px] text-muted-foreground leading-snug">{hint}</p>}
      {error && (
        <p id={`${id}-err`} role="alert" className="text-[11px] font-medium text-destructive dark:text-red-400 leading-snug">
          {error}
        </p>
      )}
    </div>
  );
}

function Group({ title, children }: { title: string; children: ReactNode }) {
  return (
    <fieldset className="rounded-2xl border border-border bg-card p-4 md:p-5">
      <legend className="px-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">{title}</legend>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{children}</div>
    </fieldset>
  );
}

export function BorderVehicleChecker() {
  const { lang } = useLang();
  const ru = lang === "ru";
  const t = (a: string, b: string) => (ru ? a : b);
  const uid = useId().replace(/:/g, "");
  const [form, setForm] = useState<CheckerInput>(DEFAULT_INPUT);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [findings, setFindings] = useState<Finding[] | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const set = <K extends keyof CheckerInput>(k: K, v: CheckerInput[K]) => {
    setForm((p) => ({ ...p, [k]: v }));
    setErrors((p) => (p[k] ? { ...p, [k]: undefined } : p));
    setFindings(null); // stale results must never linger after an edit
  };
  const id = (n: string) => `${uid}-${n}`;
  const inv = (k: keyof CheckerInput) => (errors[k] ? true : undefined);
  const desc = (k: keyof CheckerInput) => (errors[k] ? `${id(k)}-err` : `${id(k)}-hint`);
  const er = (k: keyof CheckerInput) => (errors[k] ? (ru ? errors[k]!.ru : errors[k]!.en) : undefined);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      setFindings(null);
      const first = (Object.keys(errs) as (keyof CheckerInput)[])[0];
      document.getElementById(id(first))?.focus();
      return;
    }
    setFindings(evaluate(form));
    requestAnimationFrame(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }));
  };

  const reset = () => {
    setForm(DEFAULT_INPUT);
    setErrors({});
    setFindings(null);
  };

  const onBorder = (b: BorderCode) => {
    setForm((p) => ({ ...p, border: b, checkpoint: CHECKPOINTS[b][0].code }));
    setFindings(null);
  };

  const riskCount = findings?.filter((x) => x.kind === "risk").length ?? 0;
  const cautionCount = findings?.filter((x) => x.kind === "caution").length ?? 0;
  const dateLabel = new Date(RULES_DATE_ISO).toLocaleDateString(ru ? "ru-RU" : "en-GB", { day: "numeric", month: "long", year: "numeric" });

  const ices = form.power === "petrol" || form.power === "diesel";

  return (
    <section
      aria-labelledby={id("title")}
      className="not-prose my-10 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/5 via-transparent to-transparent p-4 md:p-7"
      data-testid="border-vehicle-checker"
    >
      <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-primary mb-2">{t("Скрининг", "Screening")}</p>
      <h2 id={id("title")} className="text-2xl font-bold text-foreground mb-2">
        {t("Предварительная проверка поездки на автомобиле в Беларусь", "Preliminary car-trip screening for Belarus")}
      </h2>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {t(
          `Исследование и редакционная сверка доступных источников: ${dateLabel}; результаты и пробелы — в списке источников ниже. Мониторинга в реальном времени нет. Применение литовских исключений для BY-номеров в 2026 году и полная актуальная таблица тарифов ЕАЭС не подтверждены. Это не разрешение, не юридическое заключение и не гарантия: перед выездом сверьтесь с таможней и погранслужбой.`,
          `Research and editorial inspection of accessible sources: ${dateLabel}; findings and gaps are recorded in the source list below. No real-time monitoring. Application of Lithuania's BY-plate exceptions in 2026 and the full current EAEU tariff table remain unconfirmed. This is not permission, legal advice or a guarantee: confirm with customs and border agencies before travel.`,
        )}
      </p>
      <p className="flex items-start gap-2 text-xs text-foreground/75 mb-6 rounded-xl border border-border bg-card px-3 py-2">
        <Lock className="h-3.5 w-3.5 mt-0.5 shrink-0 text-primary" />
        {t(
          "Данные остаются в вашем браузере: ничего не отправляется и не сохраняется. Не вводите паспортные данные и VIN — они не нужны.",
          "Answers stay in your browser: nothing is sent or stored. Do not enter passport numbers or VINs — they are not needed.",
        )}
      </p>

      <form onSubmit={submit} onReset={(e) => { e.preventDefault(); reset(); }} noValidate className="space-y-4">
        <Group title={t("Путешественник", "Traveller")}>
          <Field id={id("citizenship")} label={t("1. Гражданство по паспорту", "1. Passport nationality")} error={er("citizenship")}>
            <select id={id("citizenship")} className={fieldCls} required aria-required="true" aria-invalid={inv("citizenship")} aria-describedby={desc("citizenship")} value={form.citizenship} onChange={(e) => set("citizenship", e.target.value)} data-testid="select-citizenship">
              <option value="">{t("— Выберите —", "— Select —")}</option>
              {COUNTRIES.map(([c, a, b]) => (
                <option key={c} value={c}>{ru ? a : b}{c.length === 2 && a !== b ? (ru ? ` / ${b}` : ` / ${a}`) : ""}</option>
              ))}
            </select>
          </Field>
          <Field id={id("passport")} label={t("2. Тип паспорта", "2. Passport type")}>
            <select id={id("passport")} className={fieldCls} value={form.passport} onChange={(e) => set("passport", e.target.value as CheckerInput["passport"])} data-testid="select-passport">
              <option value="ordinary">{t("Обычный заграничный", "Ordinary passport")}</option>
              <option value="special">{t("Дипломатический / служебный", "Diplomatic / official")}</option>
              <option value="other">{t("Иной / статус негражданина", "Other / non-citizen")}</option>
            </select>
          </Field>
          <Field id={id("residence")} label={t("6. Постоянное проживание", "6. Habitual residence")} hint={t("Для таможни важно фактическое проживание, а не только гражданство.", "Customs looks at actual residence, not just citizenship.")}>
            <select id={id("residence")} aria-describedby={`${id("residence")}-hint`} className={fieldCls} value={form.residence} onChange={(e) => set("residence", e.target.value as CheckerInput["residence"])} data-testid="select-residence">
              <option value="eu">{t("ЕС", "European Union")}</option>
              <option value="by">{t("Беларусь / ЕАЭС", "Belarus / EAEU")}</option>
              <option value="else">{t("Другая страна", "Another country")}</option>
            </select>
          </Field>
          <Field id={id("returnVisa")} label={t("9. Право обратного въезда в ЕС", "9. Basis for re-entering the EU")}>
            <select id={id("returnVisa")} className={fieldCls} value={form.returnVisa} onChange={(e) => set("returnVisa", e.target.value as CheckerInput["returnVisa"])} data-testid="select-return-visa">
              <option value="unknown">{t("Пока не знаю", "Not sure yet")}</option>
              <option value="ltvisa">{t("Виза / ВНЖ Литвы", "Lithuanian visa / permit")}</option>
              <option value="euvisa">{t("Другая шенгенская виза / ВНЖ", "Other Schengen visa / permit")}</option>
              <option value="eu">{t("Паспорт гражданина ЕС", "EU citizen passport")}</option>
              <option value="none">{t("Нет визы или ВНЖ ЕС", "No EU visa / permit")}</option>
            </select>
          </Field>
        </Group>

        <Group title={t("Маршрут", "Route")}>
          <Field id={id("border")} label={t("3. Граница выезда из ЕС", "3. EU exit border")}>
            <select id={id("border")} className={fieldCls} value={form.border} onChange={(e) => onBorder(e.target.value as BorderCode)} data-testid="select-border">
              <option value="PL">PL → BY · {t("Польша", "Poland")}</option>
              <option value="LT">LT → BY · {t("Литва", "Lithuania")}</option>
              <option value="LV">LV → BY · {t("Латвия", "Latvia")}</option>
            </select>
          </Field>
          <Field id={id("checkpoint")} label={t("4. Пункт пропуска", "4. Border crossing")} hint={t("Статус перехода проверяйте в день выезда.", "Check the crossing status on the day you leave.")}>
            <select id={id("checkpoint")} aria-describedby={`${id("checkpoint")}-hint`} className={fieldCls} value={form.checkpoint} onChange={(e) => set("checkpoint", e.target.value)} data-testid="select-checkpoint">
              {CHECKPOINTS[form.border].map((c) => (
                <option key={c.code} value={c.code}>{c.name}</option>
              ))}
            </select>
          </Field>
          <Field id={id("returnTrip")} label={t("15. Планируете обратный въезд в ЕС?", "15. Planning to re-enter the EU?")}>
            <select id={id("returnTrip")} className={fieldCls} value={form.returnTrip} onChange={(e) => set("returnTrip", e.target.value as CheckerInput["returnTrip"])} data-testid="select-return-trip">
              <option value="yes">{t("Да", "Yes")}</option>
              <option value="no">{t("Нет", "No")}</option>
              <option value="unknown">{t("Не знаю", "Not sure")}</option>
            </select>
          </Field>
        </Group>

        <Group title={t("Автомобиль", "Vehicle")}>
          <Field id={id("registration")} label={t("5. Страна номеров автомобиля", "5. Vehicle registration country")} error={er("registration")}>
            <select id={id("registration")} className={fieldCls} required aria-required="true" aria-invalid={inv("registration")} aria-describedby={desc("registration")} value={form.registration} onChange={(e) => set("registration", e.target.value)} data-testid="select-registration">
              <option value="">{t("— Выберите —", "— Select —")}</option>
              {COUNTRIES.filter(([c]) => !c.startsWith("XN-")).map(([c, a, b]) => (
                <option key={c} value={c}>{ru ? a : b}{a !== b ? (ru ? ` / ${b}` : ` / ${a}`) : ""}</option>
              ))}
            </select>
          </Field>
          <Field id={id("power")} label={t("10. Тип двигателя", "10. Engine / powertrain")}>
            <select id={id("power")} className={fieldCls} value={form.power} onChange={(e) => set("power", e.target.value as CheckerInput["power"])} data-testid="select-power">
              <option value="petrol">{t("Бензин (только ДВС)", "Petrol (ICE only)")}</option>
              <option value="diesel">{t("Дизель (только ДВС)", "Diesel (ICE only)")}</option>
              <option value="hev">{t("Гибрид HEV (без розетки)", "Hybrid HEV (not plug-in)")}</option>
              <option value="phev">{t("Гибрид PHEV (от розетки)", "Plug-in hybrid PHEV")}</option>
              <option value="bev">{t("Электромобиль", "Battery electric")}</option>
              <option value="other">{t("Другой / неизвестно", "Other / unknown")}</option>
            </select>
          </Field>
          <Field id={id("volume")} label={t("11. Рабочий объём, см³ (не литры)", "11. Engine capacity, cm³ (not litres)")} hint={ices ? t("Критерий: строго больше 1 900 см³ (ровно 1 900 — не «более»). Берите число из документов.", "Test: strictly more than 1,900 cm³ (exactly 1,900 does not count). Use the figure from your documents.") : t("Для гибридов и электромобилей объём не является критерием.", "Displacement is not a criterion for hybrids and EVs.")} error={er("volume")}>
            <input id={id("volume")} type="number" inputMode="numeric" min={1} max={12000} step={1} placeholder="1968" className={fieldCls} aria-invalid={inv("volume")} aria-describedby={desc("volume")} value={form.volume} onChange={(e) => set("volume", e.target.value)} data-testid="input-volume" />
          </Field>
          <Field id={id("clearance")} label={t("12. Клиренс (дорожный просвет), мм", "12. Ground clearance, mm")} hint={t("165 мм ровно — критерий уже выполнен («не менее 165»).", "Exactly 165 mm already meets the test (\"165 mm or greater\").")} error={er("clearance")}>
            <input id={id("clearance")} type="number" inputMode="numeric" min={50} max={600} step={1} placeholder="165" className={fieldCls} aria-invalid={inv("clearance")} aria-describedby={desc("clearance")} value={form.clearance} onChange={(e) => set("clearance", e.target.value)} data-testid="input-clearance" />
          </Field>
          <Field id={id("year")} label={t("13. Год выпуска", "13. Manufacture year")} hint={t("Сам по себе не санкционный критерий.", "Not a sanctions criterion on its own.")} error={er("year")}>
            <input id={id("year")} type="number" inputMode="numeric" min={1950} max={2027} step={1} className={fieldCls} aria-invalid={inv("year")} aria-describedby={desc("year")} value={form.year} onChange={(e) => set("year", e.target.value)} data-testid="input-year" />
          </Field>
          <Field id={id("value")} label={t("14. Оценочная стоимость, €", "14. Estimated value, €")} hint={t("Цена свыше 50 000 € сама по себе не запрещает обычный CN 8703.", "A price above €50,000 alone does not prohibit an ordinary CN 8703 car.")} error={er("value")}>
            <input id={id("value")} type="number" inputMode="decimal" min={0} max={3000000} step={100} className={fieldCls} aria-invalid={inv("value")} aria-describedby={desc("value")} value={form.value} onChange={(e) => set("value", e.target.value)} data-testid="input-value" />
          </Field>
        </Group>

        <Group title={t("Использование и владение", "Use and ownership")}>
          <Field id={id("use")} label={t("7. Цель использования ТС", "7. Vehicle use")}>
            <select id={id("use")} className={fieldCls} value={form.use} onChange={(e) => set("use", e.target.value as CheckerInput["use"])} data-testid="select-use">
              <option value="private">{t("Личная поездка / вернуться обратно", "Private trip / intend to return")}</option>
              <option value="sale">{t("Продажа / ввоз для регистрации", "Sale / permanent import")}</option>
              <option value="commercial">{t("Коммерческий трансфер / работа", "Commercial transfer / work")}</option>
            </select>
          </Field>
          <Field id={id("ownership")} label={t("8. Кому принадлежит машина", "8. Vehicle ownership")}>
            <select id={id("ownership")} className={fieldCls} value={form.ownership} onChange={(e) => set("ownership", e.target.value as CheckerInput["ownership"])} data-testid="select-ownership">
              <option value="own">{t("Мне, я буду за рулём", "Mine, I am the driver")}</option>
              <option value="passenger">{t("Мне, но ведёт другой", "Mine, someone else drives")}</option>
              <option value="other">{t("Другому лицу / аренда / компания", "Another person / rental / company")}</option>
            </select>
          </Field>
        </Group>

        {Object.keys(errors).length > 0 && (
          <p role="alert" className="text-sm font-medium text-destructive dark:text-red-400">
            {t("Исправьте отмеченные поля — без корректных данных результат не показывается.", "Fix the highlighted fields — no result is shown without valid input.")}
          </p>
        )}

        <div className="flex flex-wrap gap-3">
          <button type="submit" data-testid="button-check" className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 active:scale-[0.98] transition shadow-lg shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
            {t("Проверить предварительно", "Run preliminary check")}
          </button>
          <button type="reset" data-testid="button-reset" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border text-sm font-semibold text-foreground/80 hover:border-primary/50 hover:text-primary active:scale-[0.98] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <RotateCcw className="h-4 w-4" /> {t("Сбросить", "Reset")}
          </button>
        </div>
      </form>

      <div ref={resultRef} role="status" aria-live="polite" className="scroll-mt-28" data-testid="border-checker-result">
        {findings && (
          <div className="mt-8 space-y-3">
            <h3 className="text-lg font-bold text-foreground">{t("Ваш предварительный результат", "Your preliminary assessment")}</h3>
            <p className="text-sm text-foreground/80" data-testid="text-result-summary">
              {t(
                `Найдено: высокий риск — ${riskCount}, требует проверки — ${cautionCount}. Отсутствие красных пунктов не означает, что поездка или вывоз автомобиля разрешены.`,
                `Found: high risk — ${riskCount}, needs verification — ${cautionCount}. Having no red items does not mean the trip or vehicle export is permitted.`,
              )}
            </p>
            <ul className="space-y-2.5">
              {findings.map((x, n) => {
                const k = KIND[x.kind];
                const Icon = k.icon;
                return (
                  <li key={n} className={`rounded-xl border px-4 py-3 ${k.box}`} data-testid={`finding-${x.kind}-${n}`}>
                    <div className="flex items-start gap-3">
                      <Icon className={`h-4 w-4 mt-0.5 shrink-0 ${k.chip}`} aria-hidden="true" />
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-foreground">
                          <span className={`text-[10px] uppercase tracking-wider mr-2 ${k.chip}`}>{ru ? k.ru : k.en}</span>
                          {ru ? x.heading.ru : x.heading.en}
                        </p>
                        <p className="text-sm text-foreground/80 leading-relaxed mt-1">
                          {ru ? x.detail.ru : x.detail.en}{" "}
                          <a href={sourceUrl(x.src)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-0.5 text-primary font-semibold hover:underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
                            [{x.src}] <ExternalLink className="h-3 w-3" aria-hidden="true" />
                          </a>
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <p className="text-xs text-muted-foreground leading-relaxed border-t border-border pt-3">
              {t(
                `Информационный скрининг по исследованию от ${dateLabel}, не разрешение на поездку. Правила и пункты пропуска меняются: проверьте документы и обновления погранслужб, таможни и МИД непосредственно перед выездом. Для спорного автомобиля получите письменный ответ таможни.`,
                `Informational screening based on research dated ${dateLabel}, not permission to travel. Rules and crossings change: confirm documents and updates with border, customs and foreign-affairs agencies right before departure. For a borderline vehicle, get written customs guidance.`,
              )}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
