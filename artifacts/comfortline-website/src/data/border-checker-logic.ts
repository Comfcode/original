// Screening logic for the Belarus-by-car checker. Adapted from the supplied guide.html
// script (research dated 2026-10-16). Pure functions only: nothing here touches network or storage.
import { COUNTRIES } from "./border-countries";

export type L = "ru" | "en";
export type Bi = { ru: string; en: string };

export const RULES_DATE_ISO = "2026-10-16";

export const EU = new Set("AT BE BG HR CY CZ DK EE FI FR DE GR HU IE IT LV LT LU MT NL PL PT RO SK SI ES SE".split(" "));
export const EUROPE_38 = new Set("AT AD BE BG BA VA GB HU GR DK IE IS ES IT CY LI LU LV LT MT MC NL NO PL PT RO SM MK SK SI FI FR DE HR CZ CH SE EE".split(" "));
export const NEIGHBOR_VISA = new Set(["PL", "LT", "LV", "XN-LV"]);

export type BorderCode = "PL" | "LT" | "LV";
export const CHECKPOINTS: Record<BorderCode, { code: string; name: string }[]> = {
  PL: [
    { code: "PLT", name: "Terespol — Brest" },
    { code: "PLB", name: "Bobrowniki — Berestovitsa" },
    { code: "PLK", name: "Kuźnica — Bruzgi (cars only / только легковые)" },
  ],
  LT: [
    { code: "LTM", name: "Medininkai — Kamenny Log" },
    { code: "LTS", name: "Šalčininkai — Benyakoni" },
  ],
  LV: [{ code: "LVP", name: "Pāternieki — Grigorovshchina" }],
};

export const SOURCES: { id: string; url: string; ru: string; en: string }[] = [
  { id: "S1", url: "https://eur-lex.europa.eu/eli/reg/2006/765/2026-07-24/eng", ru: "Регламент (ЕС) № 765/2006, консолидированная редакция 24.07.2026", en: "Regulation (EC) No 765/2006, consolidated version 24.07.2026" },
  { id: "S2", url: "https://mano.muitine.lt/en/knowledge-bank/prohibitions-and-restrictions/international-sanctions/restrictions-export-passenger-vehicles-belarus", ru: "Таможня Литвы: ограничения вывоза легковых авто, 15.09.2026", en: "Lithuanian Customs: export restrictions on passenger cars, 15.09.2026" },
  { id: "S3", url: "https://eur-lex.europa.eu/eli/reg/2025/1472/oj/eng", ru: "Регламент Совета (ЕС) 2025/1472, изменения Приложения XVIII", en: "Council Regulation (EU) 2025/1472, changes to Annex XVIII" },
  { id: "S4", url: "https://eur-lex.europa.eu/eli/reg/2026/513/oj/eng", ru: "Регламент Совета (ЕС) 2026/513 (апрель 2026)", en: "Council Regulation (EU) 2026/513 (April 2026)" },
  { id: "S5", url: "https://www.gov.pl/web/kas/nowe-zasady-przywozu-samochodow-osobowych-zarejestrowanych-na-bialorusi", ru: "Таможня Польши (KAS): машины с номерами BY, 22.07.2024", en: "Polish Customs: Belarus-plated vehicles, 22.07.2024" },
  { id: "S6", url: "https://muitine.lrv.lt/en/news/updated-procedure-for-admitting-cars-with-belarusian-registration-to-enter-lithuania/", ru: "Таможня Литвы: машины с номерами BY, 26.11.2024", en: "Lithuanian Customs: Belarus-plated vehicles, 26.11.2024" },
  { id: "S7", url: "https://www.vid.gov.lv/lv/jaunums/personas-ar-baltkrievijas-republika-registretu-transportlidzekli-turpmak-nevares-iebraukt-latvija", ru: "Служба госдоходов Латвии: авто с номерами BY, 15.07.2024", en: "Latvian Revenue Service: Belarus-plated cars, 15.07.2024" },
  { id: "S8", url: "https://www.gov.pl/web/kas/przejscia-graniczne-z-bialorusia-w-bobrownikach-i-kuznicy-otwarte", ru: "Таможня Польши: Bobrowniki и Kuźnica открыты, 17.11.2025", en: "Polish Customs: Bobrowniki and Kuźnica reopened, 17.11.2025" },
  { id: "S9", url: "https://vsat.lrv.lt/lt/naujienos/atidaromi-salcininku-ir-medininku-pasienio-kontroles-punktai/", ru: "Погранохрана Литвы: Medininkai и Šalčininkai открыты, 19.11.2025", en: "Lithuanian Border Guard: Medininkai and Šalčininkai reopened, 19.11.2025" },
  { id: "S10", url: "https://www.lvborder.lv/en/", ru: "Латвийская система электронной записи на границе, 2026", en: "Latvian electronic border reservation system, 2026" },
  { id: "S11", url: "https://t.me/s/gpkgovby?before=8073", ru: "ГПК Беларуси: безвиз продлён до 31.12.2026", en: "Belarus State Border Committee: visa waiver extended to 31.12.2026" },
  { id: "S12", url: "https://www.mfa.bg/en/embassyinfo/belarus", ru: "МИД Болгарии: условия безвиза / Беларусь, 14.09.2026", en: "Bulgarian MFA: visa-free conditions / Belarus, 14.09.2026" },
  { id: "S13", url: "https://eec.eaeunion.org/upload/iblock/93c/TK-EAES.pdf", ru: "Таможенный кодекс ЕАЭС, ст. 264: временный ввоз личных ТС", en: "EAEU Customs Code, Art. 264: temporary import of personal vehicles" },
  { id: "S14", url: "https://www.consilium.europa.eu/en/policies/sanctions-against-belarus/", ru: "Совет ЕС: обзор санкций против Беларуси, 2026", en: "Council of EU: Belarus sanctions overview, 2026" },
  { id: "S15", url: "https://granica.gov.pl/", ru: "Польша: официальные данные по пунктам пропуска", en: "Polish Border / Customs official crossing data" },
  { id: "S16", url: "https://www.gov.pl/web/bialorus/komunikat-dla-kierowcow-udajacych-sie-na-bialorus", ru: "МИД Польши: страхование / «Зелёная карта», 08.05.2023", en: "Polish MFA: bilateral motor insurance / Green Cards, 08.05.2023" },
  { id: "S17", url: "https://home-affairs.ec.europa.eu/policies/schengen/visa-policy_en", ru: "Еврокомиссия: визовая политика Шенгена", en: "EU Commission: Schengen visa policy" },
  { id: "S18", url: "https://www.consilium.europa.eu/en/policies/eu-visa-policy/", ru: "Совет ЕС: Шенген, ЕС и визовые страны", en: "Council of EU: Schengen vs EU and visa states" },
  { id: "S19", url: "https://eur-lex.europa.eu/eli/reg_impl/2026/1817/oj/eng", ru: "Списки ЕС по Беларуси: имплементационный регламент 2026/1817", en: "EU Belarus listings: implementing regulation 2026/1817" },
  { id: "S20", url: "https://eur-lex.europa.eu/eli/reg/2026/1846/oj/eng", ru: "Регламент Совета (ЕС) 2026/1846 (июль 2026)", en: "Council Regulation (EU) 2026/1846 (July 2026)" },
  { id: "S21", url: "https://gpk.gov.by/", ru: "Беларусь: официальные очереди и пункты пропуска (ГПК)", en: "Belarus: official border queues and checkpoints" },
  { id: "S22", url: "https://www.gov.uk/foreign-travel-advice/belarus/entry-requirements", ru: "МИД Великобритании (FCDO): въезд в Беларусь, 2026", en: "UK FCDO: Belarus entry, 2026" },
  { id: "S23", url: "https://base.garant.ru/71903282/", ru: "Решение Совета ЕЭК № 107: таможенное оформление личных авто (Гарант)", en: "EAEU Council Decision No.107: customs for personal vehicles (Garant)" },
  { id: "S24", url: "https://www.consilium.europa.eu/en/policies/sanctions-against-belarus/timeline-eu-sanctions-against-belarus/", ru: "Совет ЕС: хронология санкций против Беларуси, 2026", en: "Council of EU: sanctions against Belarus timeline, 2026" },
  { id: "S25", url: "https://www.lvrtc.lv/en/news/jaunumi/no-sodienas-latvijas-robezu-ar-krieviju-un-baltkrieviju-var-skersot-tikai-pec-registracijas-elektroniskas-rindas-rezervacijas-sistema/", ru: "Правительство Латвии: электронная очередь обязательна с 15.10.2025", en: "Latvian government: electronic queue mandatory since 15.10.2025" },
  { id: "S26", url: "https://eur-lex.europa.eu/eli/reg/2025/2041/oj/eng", ru: "Регламент Совета (ЕС) 2025/2041: Приложение XXV, перечень CN", en: "Council Regulation (EU) 2025/2041: amended Annex XXV vehicle CN list" },
];

export const sourceUrl = (id: string) => SOURCES.find((s) => s.id === id)?.url ?? "#";

export type Power = "petrol" | "diesel" | "hev" | "phev" | "bev" | "other";

export interface CheckerInput {
  citizenship: string;
  passport: "ordinary" | "special" | "other";
  border: BorderCode;
  checkpoint: string;
  registration: string;
  residence: "eu" | "by" | "else";
  use: "private" | "sale" | "commercial";
  ownership: "own" | "passenger" | "other";
  returnVisa: "unknown" | "ltvisa" | "euvisa" | "eu" | "none";
  power: Power;
  volume: string;
  clearance: string;
  year: string;
  value: string;
  returnTrip: "yes" | "no" | "unknown";
}

export const DEFAULT_INPUT: CheckerInput = {
  citizenship: "",
  passport: "ordinary",
  border: "PL",
  checkpoint: "PLT",
  registration: "",
  residence: "eu",
  use: "private",
  ownership: "own",
  returnVisa: "unknown",
  power: "petrol",
  volume: "1968",
  clearance: "180",
  year: "2020",
  value: "25000",
  returnTrip: "yes",
};

export type FieldErrors = Partial<Record<keyof CheckerInput, Bi>>;

export const MAX_YEAR = 2027;

export function validate(i: CheckerInput): FieldErrors {
  const err: FieldErrors = {};
  if (!i.citizenship) err.citizenship = { ru: "Выберите гражданство по паспорту.", en: "Select the passport nationality." };
  if (!i.registration) err.registration = { ru: "Выберите страну регистрации автомобиля.", en: "Select the vehicle registration country." };
  const num = (s: string) => (s.trim() === "" ? null : Number(s));
  const vol = num(i.volume);
  if (vol !== null && (!Number.isFinite(vol) || !Number.isInteger(vol) || vol < 1 || vol > 12000))
    err.volume = { ru: "Целое число от 1 до 12 000 см³ (не литры).", en: "A whole number from 1 to 12,000 cm³ (not litres)." };
  const cl = num(i.clearance);
  if (cl !== null && (!Number.isFinite(cl) || cl < 50 || cl > 600))
    err.clearance = { ru: "Число от 50 до 600 мм.", en: "A number from 50 to 600 mm." };
  const yr = num(i.year);
  if (yr !== null && (!Number.isFinite(yr) || !Number.isInteger(yr) || yr < 1950 || yr > MAX_YEAR))
    err.year = { ru: `Целый год от 1950 до ${MAX_YEAR}.`, en: `A whole year from 1950 to ${MAX_YEAR}.` };
  const val = num(i.value);
  if (val !== null && (!Number.isFinite(val) || val < 0 || val > 3000000))
    err.value = { ru: "Сумма от 0 до 3 000 000 €.", en: "An amount from 0 to 3,000,000 €." };
  return err;
}

export type FindingKind = "risk" | "caution" | "info" | "nomatch";
export interface Finding {
  kind: FindingKind;
  heading: Bi;
  detail: Bi;
  src: string;
}

const T = {
  special: { ru: "Тип паспорта требует отдельной проверки. Туристические безвизовые правила не обязательно действуют для служебного/специального паспорта.", en: "Passport category needs individual review; the ordinary tourist waiver may not apply." },
  specialDoc: { ru: "Нужна индивидуальная проверка статуса, вида проездного документа и оснований безвиза по правилам Беларуси.", en: "Verify the precise travel document and status-based Belarus visa waiver eligibility." },
  visa90: { ru: "Безвиз потенциально применим до 31.12.2026: до 90 дней за визит и 90 за календарный год. Не для работы, учёбы или получения ВНЖ и не для маршрута через РФ. Проверьте страховки, регистрацию пребывания и остальные документы по ГПК; после этой даты нужно новое подтверждение.", en: "Waiver potentially available through 31 December 2026: up to 90 days per visit and calendar year. Not for work, study, obtaining residence or travel through Russia. Check insurance, registration of stay and other Border Committee documents; a later trip requires new confirmation." },
  visa30: { ru: "Безвиз потенциально применим до 31.12.2026: до 30 дней за визит и 90 за календарный год. Не для работы, учёбы или получения ВНЖ и не для маршрута через РФ. Проверьте страховки, регистрацию пребывания и остальные документы по ГПК; после этой даты нужно новое подтверждение.", en: "Waiver potentially available through 31 December 2026: up to 30 days per visit and 90 per calendar year. Not for work, study, obtaining residence or travel through Russia. Check insurance, registration of stay and other Border Committee documents; a later trip requires new confirmation." },
  visaBY: { ru: "Гражданин Беларуси: въезд в Беларусь оценивается по белорусским документам, не по иностранному туристическому безвизу.", en: "Belarusian citizen: Belarus entry depends on Belarusian documents, not the foreign tourist visa waiver." },
  visaOther: { ru: "Требуется отдельная проверка визового режима Беларуси для данного паспорта; анкета не подтверждает безвиз.", en: "Check the Belarusian visa regime for this specific passport; this tool cannot confirm visa-free entry." },
  ban: { ru: "Высокий риск санкционного запрета на вывоз автомобиля в Беларусь: параметры соответствуют позиции Приложения XVIII, ст. 1bb (тип привода + объём/клиренс). Не выезжайте без проверки CN и письменного подтверждения таможни.", en: "HIGH RISK of EU vehicle export prohibition: parameters match a passenger-car category in Annex XVIII, Article 1bb. Verify CN classification and obtain written customs guidance before travel." },
  other: { ru: "Нужна отдельная классификация CN: для 8703 10 (снегоходы/гольф-кары) и 8703 90 (другие двигатели) в Приложении XVIII нет порога клиренса. Малый клиренс и объём не исключают запрет; автоматического вывода нет.", en: "Individual CN classification required: Annex XVIII entries 8703 10 (snow/golf vehicles) and 8703 90 (other engines) have no clearance threshold. Low clearance or displacement does not exclude a ban; no automatic conclusion is possible." },
  maybe: { ru: "По введённым техническим данным не выявлено совпадения с основными автомобильными позициями Приложения XVIII. Это НЕ означает, что вывоз разрешён: проверьте стоимость, CN и иные меры.", en: "No match detected in the main Annex XVIII passenger-car technical tests. This DOES NOT confirm that export is lawful: check value, CN and other sanctions." },
  missing: { ru: "Укажите точный объём (для бензина/дизеля) и клиренс по документам. Без них нельзя оценить критерии санкций — результат не считается пройденным.", en: "Enter accurate engine capacity (petrol/diesel) and clearance from vehicle records. Without them the sanctions test cannot be assessed and is NOT treated as passed." },
  lux: { ru: "Стоимость свыше 50 000 €. Это НЕ автоматический санкционный запрет для обычного легкового автомобиля CN 8703: после поправки ЕС 2025/2041 его нет в таблице (9) Приложения XXV. Но проверьте точный CN и другие ограничения.", en: "Value exceeds €50,000. This does NOT automatically prohibit an ordinary CN 8703 passenger car under Annex XXV following Regulation 2025/2041. Verify exact CN classification and other controls." },
  valUnknown: { ru: "Уточните стоимость для определения таможенного режима и возможных иных санкций, но цена одна не устанавливает запрет для CN 8703.", en: "Enter a reliable customs value for classification and other rules; value alone does not establish an export ban for CN 8703." },
  temp: { ru: "Временный ввоз и постоянная растаможка различаются. По ст. 264 срок — до года при соблюдении условий, а не автоматически год без пошлин. При таможенном проживании в ЕАЭС обычно нужно обеспечение; оно также требуется для второго ТС того же типа, пока ранее ввезённое не вывезено. Анкета не устанавливает таможенное проживание и не рассчитывает пошлины; полная актуальная таблица S23 не подтверждена.", en: "Temporary import and permanent clearance differ. Article 264 allows up to a year subject to conditions, not an automatic duty-free year. EAEU customs residents generally need security; so does an additional vehicle of the same type while a previous import remains. This form cannot determine customs residence or calculate duty; the full current S23 tariff table is unconfirmed." },
  sale: { ru: "Ввоз для продажи или регистрации требует отдельного санкционного анализа и полного таможенного оформления; туристические упрощения неприменимы.", en: "Sale/permanent registration requires separate sanctions assessment and customs clearance; tourist simplifications are insufficient." },
  commercial: { ru: "Коммерческий трансфер/такси требует отдельного анализа экспортных запретов, лицензирования, пассажирской перевозки и страхования. Льготы для личного использования могут не действовать.", en: "Commercial transfers/taxis require separate export controls, transport authorisations and insurance analysis. Personal-use exceptions may not apply." },
  ownership: { ru: "Автомобиль оформлен не на водителя (либо принадлежит компании/лизингодателю). Проверьте полномочия, согласия собственника и исключения.", en: "Driver is not the registered owner or vehicle is company/leased; verify authorization and any exception conditions." },
  byPL: { ru: "BY-номера при возврате через Польшу: KAS описывает условный допуск личных машин физических лиц с собственником в салоне; коммерческие случаи требуют отдельного разрешения.", en: "BY plates returning via Poland: official guidance allows certain qualifying private cars with the owner present; commercial vehicles require further review." },
  byLT: { ru: "BY-номера через Литву: S6 от 26.11.2024 указывает личный автомобиль, не на продажу, собственника-водителя BY с литовской визой/ВНЖ либо собственника-водителя — гражданина ЕС, проживающего в Беларуси. Та же страница запрещает пребывание BY-авто после 18.01.2025. Применение исключений в 2026 г. не подтверждено однозначно: не планируйте возврат без актуального письменного ответа таможни. Дипломатические/гуманитарные случаи анкета не подтверждает.", en: "BY plates via Lithuania: S6 dated 26 November 2024 lists strictly personal, not-for-sale cars driven by a BY owner with Lithuanian visa/permit or an EU-citizen owner resident in Belarus. The same page bars BY vehicles remaining after 18 January 2025. Application of exceptions in 2026 is not conclusively confirmed: do not plan a return without current written customs guidance. Diplomatic/humanitarian grounds are not established by this form." },
  byConditions: { ru: "Выбранные ответы не подтверждают историческое исключение: для Литвы нужны собственник за рулём, личное использование, отсутствие продажи и соответствующие гражданство/проживание/литовские документы; для Польши — физлицо-собственник за рулём или в салоне и некоммерческое использование. Не считайте это разрешением.", en: "Your answers do not establish the historical exception: Lithuania requires an owner-driver, strictly personal use, no sale and the appropriate nationality/residence/Lithuanian documents; Poland requires an individual owner driving or present and non-commercial use. This is not permission." },
  byLV: { ru: "BY-номера при въезде обратно в Латвию: для обычных частных автомобилей заявлен запрет. Не рассчитывайте на этот маршрут без подтверждённого исключения.", en: "BY plates re-entering Latvia: ordinary private cars face a general ban. Do not plan this route without a confirmed applicable exception." },
  ltDocs: { ru: "Опубликованное литовское исключение для граждан Беларуси требует именно литовскую визу или ВНЖ; выбранного документа может быть недостаточно.", en: "Published Lithuania exception for Belarusian citizens requires Lithuanian visa or permit; your selected status may not qualify." },
  nonEU: { ru: "Для обратного въезда в ЕС по данному паспорту отдельно проверьте визовые требования и национальные основания пересечения границы.", en: "Independently verify the passenger's basis to re-enter the EU/Schengen area and any national requirements." },
  queue: { ru: "Pāternieki: обязательная запись на lvborder.lv для выезда из Латвии, кроме предусмотренных законом исключений. Запись не гарантирует работу перехода или допуск автомобиля.", en: "Pāternieki: compulsory lvborder.lv booking for departure from Latvia, subject to statutory exemptions. Booking guarantees neither an operating crossing nor vehicle admission." },
  age: { ru: "Год выпуска не является самостоятельным санкционным порогом. Возраст влияет на постоянный ввоз в ЕАЭС, но полная актуальная тарифная таблица S23 не подтверждена; уточните группы и ставки у таможни.", en: "Model year alone is not a sanctions threshold. Age affects permanent EAEU import, but the full current S23 tariff table is unconfirmed; ask customs for age bands and rates." },
  status: { ru: "Список основан на датированных источниках, не на оперативном мониторинге. Выбор пункта не подтверждает его работу. Уточните статус с обеих сторон и очередь в день выезда; литовские пункты в S9 — только автотранспорт, без пешеходов/велосипедов.", en: "The list uses dated sources, not live monitoring. Selecting a crossing does not confirm it is open. Check both sides and queues on departure day; the Lithuanian S9 crossings allow motor vehicles, not pedestrians/cycles." },
  sanctionsList: { ru: "Анкета не проверяет ФИО, VIN, контрагентов и банки. Для коммерческих, корпоративных и платёжных вопросов нужен отдельный скрининг санкционных списков ЕС.", en: "This form does not screen names, VINs, counterparties or banks. Commercial, corporate or payment questions need separate EU sanctions-list screening." },
};

const H = (ru: string, en: string): Bi => ({ ru, en });

export function evaluate(i: CheckerInput): Finding[] {
  const f: Finding[] = [];
  const push = (kind: FindingKind, heading: Bi, detail: Bi, src: string) => f.push({ kind, heading, detail, src });
  const country = i.citizenship;
  const special = i.passport !== "ordinary";
  const hasReturn = i.returnTrip !== "no";
  const toNum = (s: string) => (s.trim() === "" ? NaN : Number(s));
  const cc = toNum(i.volume);
  const clear = toNum(i.clearance);
  const cost = toNum(i.value);
  const ice = i.power === "petrol" || i.power === "diesel";

  if (special) push("caution", H("Паспорт", "Passport"), T.special, "S11");
  if (country === "XN-LV" || country === "XN-EE")
    push("caution", H("Специальный проездной документ", "Special travel document"), T.specialDoc, "S11");

  if (country === "BY") push("info", H("Въезд человека в Беларусь", "Personal entry into Belarus"), T.visaBY, "S11");
  else if (NEIGHBOR_VISA.has(country) && !special) push("info", H("Белорусский безвиз", "Belarus visa waiver"), T.visa90, "S11");
  else if (EUROPE_38.has(country) && !special) push("info", H("Белорусский безвиз", "Belarus visa waiver"), T.visa30, "S11");
  else push("caution", H("Визовый статус", "Visa status"), T.visaOther, "S11");

  // Vehicle sanctions test. Empty / unusable data is flagged, never passed.
  const clearOk = Number.isFinite(clear) && clear >= 50;
  const ccOk = Number.isFinite(cc) && cc > 0;
  if (i.power === "other") push("caution", H("Классификация ТС", "Vehicle classification"), T.other, "S2");
  else if (!clearOk || (ice && !ccOk)) push("caution", H("Нет точных данных по автомобилю", "Missing vehicle specification"), T.missing, "S2");
  else {
    const listed = clear >= 165 && (ice ? cc > 1900 : true);
    if (listed) push("risk", H("Возможный санкционный запрет на выезд из ЕС", "Potential export restriction"), T.ban, "S2");
    else push("nomatch", H("Техническая проверка по Приложению XVIII: совпадений нет", "Annex XVIII technical screen: no match"), T.maybe, "S2");
  }

  if (!Number.isFinite(cost)) push("caution", H("Стоимость", "Vehicle value"), T.valUnknown, "S26");
  else if (cost > 50000) push("info", H("Стоимость свыше 50 000 €", "Value above €50,000"), T.lux, "S26");

  if (i.use === "sale") push("risk", H("Не туристический ввоз", "Not a temporary visit"), T.sale, "S13");
  else if (i.use === "commercial") push("risk", H("Коммерческое использование", "Commercial use"), T.commercial, "S1");
  if (!["BY", "RU", "KZ", "AM", "KG"].includes(i.registration)) push("caution", H("Таможенный статус ЕАЭС", "EAEU customs status"), T.temp, "S13");

  if (i.ownership !== "own") push("caution", H("Собственник и документы", "Ownership and documentation"), T.ownership, "S5");

  if (i.registration === "BY" && hasReturn) {
    const b = i.border;
    push(b === "PL" ? "caution" : "risk", H("Возвращение в ЕС на BY-номерах", "BY-plate return to EU"), b === "PL" ? T.byPL : b === "LT" ? T.byLT : T.byLV, b === "PL" ? "S5" : b === "LT" ? "S6" : "S7");
    if (
      (b === "PL" && (i.ownership === "other" || i.use !== "private")) ||
      (b === "LT" && (i.ownership !== "own" || i.use !== "private" ||
        !(country === "BY" || (EU.has(country) && i.residence === "by"))))
    ) push("risk", H("Условия исключения не подтверждены", "Exception conditions not established"), T.byConditions, b === "PL" ? "S5" : "S6");
    if (b === "LT" && country === "BY" && i.returnVisa !== "ltvisa")
      push("risk", H("Литовское исключение: документы", "Lithuanian exception: documentation"), T.ltDocs, "S6");
  }

  if (hasReturn && !EU.has(country)) {
    if (i.returnVisa === "none") push("risk", H("Документы для возвращения", "Documents for return"), T.nonEU, "S17");
    else if (i.returnVisa === "unknown") push("caution", H("Возвращение в Шенген", "Re-entering Schengen"), T.nonEU, "S17");
  }

  if (i.border === "LV") push("info", H("Электронная очередь", "Electronic queue"), T.queue, "S10");
  if (Number.isFinite(toNum(i.year))) push("info", H("Год выпуска", "Vehicle age"), T.age, "S23");

  const cp = CHECKPOINTS[i.border].find((c) => c.code === i.checkpoint)?.name ?? "";
  push("caution", H("Действительность пункта пропуска", "Checkpoint status"), { ru: `${cp}. ${T.status.ru}`, en: `${cp}. ${T.status.en}` }, i.border === "PL" ? "S15" : i.border === "LT" ? "S9" : "S10");
  push("info", H("Санкционные списки и контрагенты", "Sanctions lists and counterparties"), T.sanctionsList, "S14");

  const order: Record<FindingKind, number> = { risk: 0, caution: 1, info: 2, nomatch: 3 };
  return f.sort((a, b) => order[a.kind] - order[b.kind]);
}

export const countryName = (code: string, lang: L) => {
  const c = COUNTRIES.find((x) => x[0] === code);
  return c ? (lang === "ru" ? c[1] : c[2]) : code;
};
