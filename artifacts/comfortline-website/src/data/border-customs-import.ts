import type { Block } from "./blog-articles";
import type { Bi, Power } from "./border-checker-logic";

// Editorial inspection, not a live tariff feed or an individual customs ruling.
export const CUSTOMS_REVIEW_DATE = "2026-10-17";
export const CUSTOMS_ANNEX_2_URL = "https://eec.eaeunion.org/upload/medialibrary/48d/754bnati3u804penijmb0h866e5g6cng/Prilozhenie-2_107.pdf";

export const CUSTOMS_REFERENCES = [
  {
    id: "C1",
    url: "https://eec.eaeunion.org/comission/department/dep_tamoj_zak/transferenceProduct.php",
    ru: "ЕЭК: официальная страница с приложениями к Решению № 107",
    en: "EEC: official guidance linking Decision 107 annexes",
    note: {
      ru: "Подтверждает применение Приложения 2 и отдельный порядок определения момента выпуска по Решению Коллегии № 74 от 30.06.2017. Возраст не определяется одним модельным годом.",
      en: "Links Annex 2 and identifies Board Decision 74 of 30 June 2017 as the separate manufacture-date rule. Model year alone is insufficient.",
    },
  },
  {
    id: "C2",
    url: "https://eec.eaeunion.org/upload/medialibrary/e51/rf0fgji3ws0bcs8fzlz4k51m93ytecqh/Prilozhenie-3_107.pdf",
    ru: "Решение № 107: официальное Приложение 3, включая № 111/2025 и № 35/2026",
    en: "Decision 107: official Annex 3, including amendments 111/2025 and 35/2026",
    note: {
      ru: "Прочитаны пп. 9 и 9(1): льгота 2026 года, гражданство/ПМЖ, документ, квота, ограничения передачи и использования; п. 9(1) отдельно касается льготных ввозов 2022–2025 гг. Это не изменение возрастных групп таблицы 2.",
      en: "Read paragraphs 9 and 9(1): 2026 relief, citizenship/residence, document, quota, and transfer/use restrictions. Paragraph 9(1) separately covers relieved imports in 2022–2025; it does not change Table 2 age bands.",
    },
  },
  {
    id: "C3",
    url: "https://docs.eaeunion.org/upload/iblock/db1/hwvca13w5zfkp6bbk0kjn823yeuflqm7/Reshenie-Soveta-_-111-ot-5-dekabrya-2025-g.pdf",
    ru: "Официальный акт: Решение Совета ЕЭК № 111 от 05.12.2025",
    en: "Authentic act: EEC Council Decision 111 of 5 December 2025",
    note: {
      ru: "Для Беларуси указан код 8703 80 000 3, а не 8703 80 000 5. ГТК подтверждает начало применения 22.01.2026; окончание — 31.12.2026. Льгота не обещает свободную перепродажу или неограниченное использование в других странах ЕАЭС.",
      en: "Belarus relief specifies code 8703 80 000 3, not 8703 80 000 5. Belarus Customs confirms application from 22 January through 31 December 2026. Relief does not promise unrestricted resale or use elsewhere in the EAEU.",
    },
  },
  {
    id: "C4",
    url: "https://www.customs.gov.by/news/ob-ustanovlenii-lgot-v-otnoshenii-elektromobiley-na-2026-god/",
    ru: "ГТК, 30.12.2025: льготы 2026 года не распространяются на гибриды",
    en: "Belarus Customs, 30 December 2025: 2026 EV relief excludes hybrids",
    note: {
      ru: "Подтверждены исключение всех типов гибридных установок и значение даты регистрации декларации после 21.01.2026, а не только физического ввоза.",
      en: "Confirms exclusion of all hybrid types and the importance of declaration registration after 21 January 2026, not just the physical arrival date.",
    },
  },
  {
    id: "C5",
    url: "https://www.customs.gov.by/news/ob-izmenenii-zakonodatelstva-reguliruyushchego-primenenie-lgot-v-otnoshenii-elektromobiley-v-2026-g-/",
    ru: "ГТК, 07.05.2026: распределение квоты электромобилей",
    en: "Belarus Customs, 7 May 2026: EV quota allocation",
    note: {
      ru: "После постановления № 223: 6 200 в реестре по Решению № 107 и 13 800 по Решению № 130. Остаток на май исторический: наличие мест на дату покупки или подачи декларации не установлено.",
      en: "After Resolution 223: 6,200 register places under Decision 107 and 13,800 under Decision 130. May remaining balances are historical; availability at purchase/declaration time has not been established.",
    },
  },
  {
    id: "C6",
    url: "https://www.customs.gov.by/news/ob-izmeneniyakh-v-tn-ved-eaes-kasayushchikhsya-elektromobiley-i-posledovatelnykh-gibridov/",
    ru: "ГТК, 13.10.2025: детализация BEV и последовательных гибридов",
    en: "Belarus Customs, 13 October 2025: BEV / series-hybrid classification",
    note: {
      ru: "Разъясняет разделение 8703 80 000 3 и 8703 80 000 5. Это сообщение о принятой детализации и планируемом вступлении; применение льготы в 2026 г. сверено отдельно по C2–C4.",
      en: "Explains codes 8703 80 000 3 and 8703 80 000 5. This notice discusses adopted detail and planned commencement; 2026 relief was checked separately against C2–C4.",
    },
  },
  {
    id: "C7",
    url: "https://president.gov.by/fp/v1/501/document-thumb__70501__original/70501.1765469807.9aa4ef2b5f.pdf",
    ru: "Официальный Указ № 428 от 11.12.2025: новая редакция Указа № 92",
    en: "Authentic Decree 428 of 11 December 2025: revised Decree 92",
    note: {
      ru: "Прочитан подп. 1.4: до 31.12.2028 ставка НДС 0% для указанных личных ввозов чистых электромобилей не старше 5 лет постоянно проживающими в Беларуси физлицами; с 01.01.2026 все типы гибридов исключены. Это не освобождение от всех платежей.",
      en: "Read subparagraph 1.4: through 31 December 2028, 0% VAT for specified personal imports of pure EVs no more than five years old by permanent residents of Belarus; all hybrid types excluded from 1 January 2026. Not an exemption from every charge.",
    },
  },
  {
    id: "C8",
    url: "https://www.customs.gov.by/news/ob-izmenenii-zakonodatelstva-reguliruyushchego-poryadok-uplaty-utilizatsionnogo-sbora/",
    ru: "ГТК, 27.04.2026: утилизационный сбор и документы для льгот",
    en: "Belarus Customs, 27 April 2026: recycling fee and relief documents",
    note: {
      ru: "Постановление № 195 меняет ставки с 29.04.2026; с 01.07.2026 документ РС требуется и при освобождении. Отдельно описаны оценка авто из других стран ЕАЭС и исключения. Сумма сбора здесь не рассчитывается.",
      en: "Resolution 195 changes rates from 29 April 2026; the recycling-fee declaration is required even for relief from 1 July 2026. Also discusses appraisal of cars arriving from other EAEU states and exceptions. No fee amount calculated here.",
    },
  },
  {
    id: "C9",
    url: "https://www.customs.gov.by/calc/",
    ru: "ГТК: калькулятор пошлин и налогов для личных легковых авто",
    en: "Belarus Customs: personal passenger-car duties/taxes calculator",
    note: {
      ru: "Официальный калькулятор повторяет границы ≤3, >3–≤5 и >5 лет; курс для оплаты — на день регистрации пассажирской декларации. Не полный бюджет ввоза и не калькулятор льгот BEV.",
      en: "Official calculator corroborates ≤3, >3–≤5 and >5-year boundaries; payment exchange rate is tied to passenger declaration registration. Not a full import budget or BEV-relief calculator.",
    },
  },
];

const AGE_BANDS: Bi = {
  ru: "Не более 3 лет (ровно 3 включено); более 3, но не более 5 лет (ровно 5 включено); более 5 лет.",
  en: "No more than 3 years (exactly 3 included); more than 3 but no more than 5 (exactly 5 included); more than 5.",
};

export function customsAgeNote(power: Power): Bi {
  const intro: Bi = {
    ru: "Сверка 17.10.2026. Год выпуска не является самостоятельным санкционным порогом. Анкета не определяет точную дату выпуска, тарифную группу, право на льготу или сумму платежей. ",
    en: "Reviewed 17 October 2026. Model year alone is not a sanctions threshold. The form does not determine exact manufacture date, tariff band, relief eligibility or a payment amount. ",
  };
  const detail: Bi = power === "petrol" || power === "diesel" ? {
    ru: `Для личных легковых авто по п. 3 таблицы 2 Приложения 2 к Решению № 107: ${AGE_BANDS.ru} Это постоянный ввоз, не временный по ст. 264.`,
    en: `Personal passenger cars under Annex 2 Table 2(3), Decision 107: ${AGE_BANDS.en} These are permanent-import rules, not Article 264 temporary entry.`,
  } : power === "bev" ? {
    ru: "Для BEV применяется п. 4 таблицы 2 — совокупный таможенный платёж, не шкала возраста ДВС. Льгота ЕАЭС 2026 года условна и ограничена квотой; наличие остатка не проверено. Отдельный НДС 0% по Указу № 92 касается указанных личных ввозов чистых EV не старше 5 лет постоянными жителями Беларуси до 31.12.2028. Прочие сборы и условия проверяются отдельно.",
    en: "BEVs fall under Table 2(4), aggregate customs payment, not the ICE age scale. The conditional 2026 EAEU relief is quota-limited; remaining availability is unverified. Separate 0% VAT under Decree 92 covers specified personal pure-EV imports no more than five years old by Belarus permanent residents through 31 December 2028. Other fees and conditions need separate checking.",
  } : {
    ru: `Для гибрида нужен код ТН ВЭД и схема привода, не только надпись HEV/PHEV: при применении п. 3 таблицы 2 группы такие: ${AGE_BANDS.ru} Последовательный гибрид с электрическим приводом колёс может относиться к 8703 80 000 5 и п. 4 (совокупный платёж), а не к шкале ДВС. Белорусские льготы 2026 года для чистых EV на гибриды не переносятся; другой привод также требует классификации.`,
    en: `Hybrids require an EAEU code and drivetrain classification, not just HEV/PHEV branding. Where Table 2(3) applies: ${AGE_BANDS.en} A series hybrid with electric-only wheel drive may fall under 8703 80 000 5 / Table 2(4), aggregate payment, not the ICE scale. Belarus's 2026 pure-EV relief does not extend to hybrids; other powertrains also need classification.`,
  };
  return { ru: intro.ru + detail.ru, en: intro.en + detail.en };
}

export const CUSTOMS_IMPORT_RU: Block[] = [
  { type: "h3", text: "Постоянный личный ввоз: возрастные границы подтверждены" },
  { type: "p", text: "Редакционная сверка 17.10.2026: прочитана полная официальная таблица 2 Приложения 2 к Решению Совета ЕЭК № 107 от 20.12.2017, опубликованная ЕЭК. Приложение 3 на том же официальном ресурсе включает поправки № 111 от 05.12.2025 и № 35 от 24.02.2026. Возрастные границы относятся к постоянному личному ввозу в соответствующей категории, а не к разрешению на туристическую поездку или коммерческую перепродажу. [S23][C1][C2]" },
  {
    type: "table",
    headers: ["Личные легковые авто по п. 3 таблицы 2", "Как устроен платёж, без расчёта суммы"],
    rows: [
      ["Не более 3 лет — ровно 3 года включено", "Единая ставка по стоимости с минимумом за см³ рабочего объёма двигателя."],
      ["Более 3, но не более 5 лет — ровно 5 лет включено", "Единая ставка за см³ в зависимости от рабочего объёма двигателя."],
      ["Более 5 лет", "Другая шкала единых ставок за см³ в зависимости от рабочего объёма двигателя."],
    ],
  },
  { type: "p", text: "Момент выпуска определяют по документам и специальному порядку Решения Коллегии ЕЭК № 74 от 30.06.2017, а не простым вычитанием модельного года. Анкета собирает только год, поэтому не выбирает вам группу на пограничной дате 3 или 5 лет. Единая ставка включает пошлины и налоги: нельзя автоматически добавлять к ней ещё «20% НДС». Калькулятор ГТК не заменяет полный бюджет ввоза. [C1][C9]" },
  { type: "h3", text: "ДВС, гибрид и чистый электромобиль — не одна тарифная схема" },
  { type: "ul", items: [
    "ДВС: указанные возрастные группы применяются к личному легковому автомобилю, отнесённому к п. 3 таблицы 2; спецкатегории и коммерческий ввоз проверяются отдельно.",
    "Обычные HEV/PHEV: при отнесении к п. 3 — те же возрастные границы и объём ДВС. Но последовательный гибрид с электрическим приводом колёс может иметь код 8703 80 000 5 и относиться к п. 4 с совокупным платежом. Маркетингового названия модели недостаточно. [S23][C6]",
    "BEV: п. 4 таблицы 2 предусматривает совокупный таможенный платёж по применимому тарифу и налогам, а не возрастную шкалу ДВС. Код 8703 80 000 3 для личных ввозов в Беларусь может подпадать под условную льготу 2026 года; код последовательных гибридов 8703 80 000 5 — не под эту белорусскую льготу. [S23][C2][C3][C4]",
  ] },
  { type: "p", text: "Льгота ЕАЭС по п. 9 Приложения 3 действует с 22.01.2026 по 31.12.2026 при соблюдении гражданства и постоянного проживания в соответствующем государстве, наличии документа уполномоченного органа и места в квоте. ГТК 07.05.2026 указал распределение: 6 200 мест по Решению № 107 и 13 800 по Решению № 130. Это не подтверждает наличие свободных мест сегодня: остаток на дату покупки и регистрации декларации здесь не проверен. Есть ограничения передачи и пользования, в частности в РФ/Казахстане; поправка № 35/2026 отдельно регулирует льготные ввозы 2022–2025 гг. [C2][C3][C4][C5]" },
  { type: "h3", text: "Белорусские налоги и сборы: льгота ≠ нулевая итоговая стоимость" },
  { type: "p", text: "Отдельно от квоты ЕАЭС подп. 1.4 Указа № 92 в редакции Указа № 428 предусматривает до 31.12.2028 НДС 0% для указанных личных ввозов чистых электромобилей не старше 5 лет постоянно проживающими в Беларуси гражданами, иностранцами и лицами без гражданства. С 01.01.2026 гибридные установки всех типов исключены. Льгота по НДС не равна освобождению от пошлины, утилизационного сбора или всех расходов; при неприменении льготы проверяют обычное налогообложение. [C7]" },
  { type: "p", text: "До покупки запросите письменный расчёт, который отдельно охватывает применимую пошлину/налоги (единую ставку либо совокупный платёж, без двойного НДС), таможенные сборы за операции и утилизационный сбор либо документальное основание освобождения. Для утильсбора действуют белорусские правила и изменённые с 29.04.2026 ставки; с 01.07.2026 документ РС нужен и при освобождении. Оформление ЭПТС, оценка/подтверждение соответствия, регистрация и услуги посредника могут быть отдельными расходами, не пошлиной по Решению № 107. Эта статья не рассчитывает ни сумму платежей, ни итоговую цену ввоза. [C8]" },
];

export const CUSTOMS_IMPORT_EN: Block[] = [
  { type: "h3", text: "Permanent personal import: confirmed age boundaries" },
  { type: "p", text: "Editorial inspection, 17 October 2026: read the complete official Annex 2 Table 2 of EEC Council Decision 107 of 20 December 2017 published by the EEC. Annex 3 on the same official resource includes amendments 111 of 5 December 2025 and 35 of 24 February 2026. The age boundaries concern permanent personal import in the relevant category, not tourist admission or commercial resale. [S23][C1][C2]" },
  {
    type: "table",
    headers: ["Personal passenger cars under Table 2(3)", "Payment basis, not an amount quoted"],
    rows: [
      ["No more than 3 years — exactly 3 included", "Unified value-based rate subject to a minimum per cm³ of engine displacement."],
      ["More than 3 but no more than 5 years — exactly 5 included", "Unified rate per cm³, depending on engine displacement."],
      ["More than 5 years", "A different unified per-cm³ scale, depending on engine displacement."],
    ],
  },
  { type: "p", text: "Manufacture date follows the documents and the specific procedure under EEC Board Decision 74 of 30 June 2017, not simple subtraction of model years. The form collects only a year, so cannot assign your band at the three- or five-year boundary. The unified rate covers duties and taxes: do not automatically add another '20% VAT' to it. The Customs calculator is not a complete import budget. [C1][C9]" },
  { type: "h3", text: "ICE, hybrid and pure electric cars do not share one tariff scheme" },
  { type: "ul", items: [
    "ICE: the confirmed age bands apply to a personal passenger car falling under Table 2(3); special categories and commercial imports need separate assessment.",
    "Conventional HEV/PHEV: where Table 2(3) applies, use the same age boundaries and ICE displacement. However, a series hybrid with electric-only wheel drive may fall under code 8703 80 000 5 / Table 2(4), aggregate payment. Marketing labels alone cannot establish classification. [S23][C6]",
    "BEV: Table 2(4) provides for aggregate customs payment under the applicable tariff and taxes, not the ICE age scale. Personal imports into Belarus under code 8703 80 000 3 may qualify for conditional 2026 relief; series-hybrid code 8703 80 000 5 does not qualify for that Belarus relief. [S23][C2][C3][C4]",
  ] },
  { type: "p", text: "EAEU relief under Annex 3(9) applies from 22 January through 31 December 2026, subject to citizenship and permanent residence in the corresponding member state, an authorised document and quota availability. On 7 May 2026 Belarus Customs reported allocation of 6,200 places under Decision 107 and 13,800 under Decision 130. This does not establish availability today: remaining places at purchase/declaration time have not been verified here. Transfer/use restrictions apply, notably for Russia/Kazakhstan; amendment 35/2026 separately regulates relieved imports from 2022–2025. [C2][C3][C4][C5]" },
  { type: "h3", text: "Belarus taxes and fees: relief is not a zero total import cost" },
  { type: "p", text: "Separate from the EAEU quota, subparagraph 1.4 of Decree 92 as revised by Decree 428 provides 0% VAT through 31 December 2028 for specified personal imports of pure EVs no more than five years old by citizens, foreign citizens and stateless persons permanently resident in Belarus. All hybrid types are excluded from 1 January 2026. VAT relief is not an exemption from duty, the recycling fee or all other costs; where relief is unavailable, ordinary taxation needs assessment. [C7]" },
  { type: "p", text: "Before buying, obtain a written calculation separately covering the applicable duties/taxes (unified rate or aggregate payment, without double-counting VAT), customs-operation fees and recycling fee or documented grounds for relief. Belarus recycling-fee rules and rates changed from 29 April 2026; from 1 July 2026 the recycling-fee declaration is required even for relief. Electronic vehicle passport, appraisal/conformity assessment, registration and intermediary services may be separate costs, not Decision 107 duty. This article calculates neither a payment amount nor a total import price. [C8]" },
];
