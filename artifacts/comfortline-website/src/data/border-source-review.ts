import type { Bi } from "./border-checker-logic";

// Editorial inspection date, not an agency approval or a live-status timestamp.
export const SOURCE_REVIEW_DATE = "2026-10-16";
export const VISA_DETAIL_URL = "https://gpk.gov.by/peresechenie-granitsy/bezvizovyy-vezd-v-belarus-dlya-grazhdan-litvy-i-latvii/";
export const POLISH_STATUS_URL = "https://granica.gov.pl/index_wait.php?k=w&p=b&v=en";

// Record what was actually accessible, including gaps. Displayed beside each reference.
export const SOURCE_REVIEW: Record<string, Bi> = {
  S1: {
    ru: "Прочитаны ст. 1bb, 1ga, 1ra и автомобильные позиции приложений XVIII, XXV, XXVII в редакции 24.07.2026. Подтверждены > 1 900 см³ и ≥ 165 мм; CN 8703 отсутствует в таблице (9) XXV. Это датированная редакция, не гарантия отсутствия последующих поправок.",
    en: "Read Articles 1bb, 1ga, 1ra and vehicle entries in Annexes XVIII, XXV and XXVII in the 24 July 2026 consolidation. Confirmed >1,900 cc and ≥165 mm; CN 8703 is absent from XXV table (9). A dated version, not a guarantee against subsequent amendments.",
  },
  S2: {
    ru: "Разъяснение от 15.09.2026 подтверждает технические критерии и квалификацию временного выезда как экспорта. Для 8703 10 и 8703 90 порога клиренса нет; исключение для скорой помощи указано у соответствующих позиций ДВС.",
    en: "Guidance dated 15 September 2026 confirms technical criteria and temporary departure as export. Entries 8703 10 and 8703 90 have no clearance threshold; ambulance exclusions are specified for the relevant ICE entries.",
  },
  S3: {
    ru: "Акт от 18.07.2025: проверены автомобильные строки заменённого Приложения XVIII, включая границы объёма, гибриды и электромобили.",
    en: "Act dated 18 July 2025: checked vehicle rows of the replaced Annex XVIII, including displacement boundaries, hybrids and EVs.",
  },
  S4: {
    ru: "Подтверждены акт от 23.04.2026 и поправки к санкционному режиму. Не самостоятельное основание для разрешения частной поездки.",
    en: "Confirmed the act of 23 April 2026 and amendments to the sanctions regime. Not standalone permission for private travel.",
  },
  S5: {
    ru: "KAS, 22.07.2024: личный транспорт физлица, собственник за рулём или в салоне, без коммерческого использования/продажи и обхода ограничений. Право человека на въезд проверяется отдельно.",
    en: "KAS, 22 July 2024: private individual’s transport, owner driving or present, no commercial use/sale or circumvention. The person’s admission is separate.",
  },
  S6: {
    ru: "Таможня Литвы, 26.11.2024: подтверждены узкие исключения для собственника-водителя BY с литовской визой/ВНЖ и гражданина ЕС, проживающего в Беларуси. Та же страница содержит запрет пребывания после 18.01.2025; его соотношение с исключениями для поездки в 2026 г. не разъяснено. Требуется актуальный письменный ответ таможни.",
    en: "Lithuanian Customs, 26 November 2024: narrow exceptions for a BY owner-driver with Lithuanian visa/permit and an EU citizen resident in Belarus. The same page says vehicles cannot remain after 18 January 2025; its interaction with entry exceptions for a 2026 trip is not explained. Obtain current written customs guidance.",
  },
  S7: {
    ru: "VID, 15.07.2024: с 16.07.2024 запрещён обычный въезд на BY-номерах через границы LV–BY и LV–RU; указано дипломатическое исключение. Выезд из ЕС в Беларусь — другое направление.",
    en: "VID, 15 July 2024: ordinary BY-plate entry barred from 16 July 2024 at LV–BY and LV–RU borders; diplomatic exception stated. Departure from the EU to Belarus is a different direction.",
  },
  S8: {
    ru: "KAS подтвердил открытие 17.11.2025: Bobrowniki — легковые и автобусы, Kuźnica — легковые без автобусов. Это историческое объявление, не текущая оперативная сводка.",
    en: "KAS confirms reopening on 17 November 2025: Bobrowniki cars/coaches, Kuźnica cars without coaches. Historical announcement, not a current operations bulletin.",
  },
  S9: {
    ru: "VSAT: объявление 19.11.2025, обновлено 21.11.2025; открытие Medininkai/Šalčininkai с 00:00 20.11.2025, только автотранспорт, без пеших и велосипедов. Не подтверждает непрерывную работу сегодня.",
    en: "VSAT: announced 19 November, updated 21 November 2025; Medininkai/Šalčininkai reopened at 00:00 on 20 November 2025, motor vehicles only, no pedestrians/cycles. Does not confirm uninterrupted operation today.",
  },
  S10: {
    ru: "ERRS подтверждает обязательную запись для выезда из Латвии, с предусмотренными законом исключениями. Есть сообщение о перерыве 31.07.2026 и возобновлении 04.08.2026; это не гарантия работы в день поездки.",
    en: "ERRS confirms compulsory booking for departure from Latvia, subject to statutory exemptions. Notices show disruption on 31 July and resumption on 4 August 2026; not a travel-day operating guarantee.",
  },
  S11: {
    ru: "В ленте найдено сообщение № 8071 от 09.12.2025: продление до 31.12.2026, 30/90 суток за визит и 90 за календарный год, исключения по паспортам и России. Полный список и документы сверены также по специальной странице ГПК, приведённой ниже.",
    en: "Located post 8071 dated 9 December 2025: extension to 31 December 2026, 30/90 days per visit and 90 per calendar year, passport/Russia exclusions. Full list and documents also checked against the dedicated Border Committee page linked below.",
  },
  S12: {
    ru: "МИД Болгарии, обновлено 14.09.2026: 30/90 суток и продление до конца 2026 г. для болгарских обычных паспортов. Не самостоятельный источник для всех 38 гражданств.",
    en: "Bulgarian MFA, updated 14 September 2026: 30/90 days and extension through 2026 for ordinary Bulgarian passports. Not independently a source for all 38 nationalities.",
  },
  S13: {
    ru: "Прочитана ст. 264, пп. 1–5 официального PDF: до года, обеспечение для указанных категорий и второго/последующего ТС того же типа при невывезенном первом; обязанность завершить режим. Не расчёт пошлины.",
    en: "Read Article 264(1)–(5) in the official PDF: up to one year, security for specified categories and additional vehicles of the same type while a previous one remains, and obligation to close the procedure. Not a duty calculation.",
  },
  S14: {
    ru: "Обзор Совета ЕС подтверждает продление до 28.02.2027 и санкции против лиц/организаций; не индивидуальная проверка санкционных списков.",
    en: "Council overview confirms extension to 28 February 2027 and person/entity sanctions; not individual list screening.",
  },
  S15: {
    ru: "Домашняя страница — указатель. Отдельно открыта таблица выезда в Беларусь с датой данных 16.10.2026: легковые в Terespol, Bobrowniki, Kuźnica; Połowce/Sławatycze отмечены закрытыми. Ссылка на таблицу ниже; очереди здесь не воспроизводятся как живые.",
    en: "Homepage is an index. Separately opened the Belarus exit table dated 16 October 2026: cars at Terespol, Bobrowniki, Kuźnica; Połowce/Sławatycze marked suspended. Table linked below; waits are not reproduced here as live data.",
  },
  S16: {
    ru: "МИД Польши, 08.05.2023: изменение признания страховки с 01.06.2023 и необходимость пограничной страховки. Проверяйте территорию действия конкретного полиса.",
    en: "Polish MFA, 8 May 2023: insurance-recognition changes from 1 June 2023 and border insurance requirements. Verify the territorial cover of the actual policy.",
  },
  S17: {
    ru: "Еврокомиссия: 90 суток в любые 180 для кратких поездок; визовые требования зависят от гражданства и статуса. Не разрешение на национальной границе.",
    en: "Commission: short stays use 90 days in any 180; visa requirements depend on nationality and status. Not national border permission.",
  },
  S18: {
    ru: "Совет ЕС, отметка проверки страницы 16.10.2026: Ирландия и Кипр не выдают шенгенские визы; подтверждено различие ЕС/Шенгена.",
    en: "Council page reviewed 16 October 2026: Ireland and Cyprus do not issue Schengen visas; EU/Schengen distinction confirmed.",
  },
  S19: {
    ru: "Подтверждён имплементационный акт от 23.07.2026 о списках. Не меняет технический тест автомобиля сам по себе.",
    en: "Confirmed implementing act of 23 July 2026 concerning listings. Not itself a change to the vehicle specification test.",
  },
  S20: {
    ru: "Подтверждён акт от 23.07.2026; изменения, в том числе по ст. 1ra, не дают общего разрешения для BY-автомобилей.",
    en: "Confirmed act of 23 July 2026; amendments, including to Article 1ra, do not grant blanket BY-car admission.",
  },
  S21: {
    ru: "Главная ГПК содержит новости, но не является датированным подтверждением всех переходов. Визовые условия проверены на отдельной странице; статусы очередей нужно открывать перед выездом.",
    en: "Border Committee homepage contains news, not dated confirmation of every crossing. Visa conditions checked on a dedicated page; queue status must be opened before departure.",
  },
  S22: {
    ru: "FCDO: рекомендация против любых поездок; для британского паспорта подтверждены 2026, 30/90 суток, страховка ≥ 10 000 €, ограничения маршрута через РФ. Не переносить паспортные условия на все страны.",
    en: "FCDO advises against all travel; confirms 2026, 30/90 days, ≥€10,000 medical cover and Russia-route limits for British passports. Do not generalise passport-specific conditions to every country.",
  },
  S23: {
    ru: "ГАРАНТ — вторичная, не официальная публикация. В открытом фрагменте Приложения 2 видна категория не более 3 лет, но полная актуальная тарифная таблица недоступна. Официальный портал ЕАЭС при открытии карточки вернул каталог, не текст акта. Точные возрастные группы и суммы не считаются независимо подтверждёнными.",
    en: "Garant is a secondary, not official publication. The public Annex 2 excerpt shows the up-to-three-year category, but the full current tariff table is unavailable. Opening the EAEU official record returned a catalogue, not the act. Exact age bands and duty amounts are not independently confirmed.",
  },
  S24: {
    ru: "Хронология Совета ЕС: запись 26.02.2026 подтверждает продление режима до 28.02.2027, а не неизменность всех правил до этой даты.",
    en: "Council timeline: 26 February 2026 entry confirms extension through 28 February 2027, not unchanged rules until that date.",
  },
  S25: {
    ru: "LVRTC, государственный оператор системы, 15.10.2025: начало обязательной записи, включая Pāternieki. Направление и законные исключения уточняются в S10.",
    en: "LVRTC, the state-owned system operator, 15 October 2025: mandatory booking introduced, including Pāternieki. Direction and statutory exemptions clarified in S10.",
  },
  S26: {
    ru: "Акт от 23.10.2025, приложение, п. 6: таблица (9) XXV заменена; CN 8703 не перечислен. Сверено с S1. Цена > 50 000 € не самостоятельный запрет для обычного CN 8703; это не разрешение на вывоз.",
    en: "Act of 23 October 2025, annex point 6: XXV table (9) replaced; CN 8703 not listed. Cross-checked with S1. A value >€50,000 is not a standalone bar for ordinary CN 8703; not export permission.",
  },
};
