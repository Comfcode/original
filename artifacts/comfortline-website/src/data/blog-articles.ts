// Blog articles. Russian-only — Yandex is the priority audience and all topics
// are Belarus / RU-speaker focused. Each article ships a structured body so we
// can render it in React AND prerender the full text into the static HTML.

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; text: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "link"; href: string; label: string; description?: string }
  | { type: "img"; src: string; alt: string; caption?: string }
  | { type: "liveQueue" }
  | { type: "editorial-correction"; heading: string; text: string }
  | { type: "info-notice"; text: string };

export interface Article {
  slug: string;
  slugEn?: string;
  titleEn?: string;
  descriptionEn?: string;
  ogSlug: string;
  title: string;
  description: string;
  intro: string;
  introEn?: string;
  dateISO: string;
  dateModified?: string;
  readingMin: number;
  category: string;
  categoryEn?: string;
  tags: string[];
  body: Block[];
  bodyEn?: Block[];
  related: string[];
  ctaRoute?: { label: string; labelEn?: string; path: string };
  disclaimerBanner?: boolean;
  citation?: string[];
}

export const BLOG_BASE_RU = "/блог";
export const BLOG_BASE_EN = "/blog";

export const ARTICLES: Article[] = [
  {
    slug: "граница-беларусь-литва",
    slugEn: "belarus-lithuania-border-crossing-guide",
    titleEn: "Belarus–Lithuania Border Crossing Guide 2026: Wait Times, Documents & Checkpoints",
    descriptionEn: "Everything about crossing the Belarus–Lithuania border in 2026: open checkpoints, typical wait times, required documents and tips from ComfortLine drivers.",
    ogSlug: "blog-granitsa-belarus-litva",
    title: "Как пересечь границу Беларусь — Литва в 2026: время, документы, КПП",
    description:
      "Подробный гайд по границе Беларусь–Литва в 2026: какие КПП работают, сколько стоят очереди, какие документы нужны для въезда в ЕС, советы водителей ComfortLine.",
    intro:
      "Граница Беларусь–Литва — это самый востребованный маршрут наших трансферов. Ниже собрано всё, что нужно знать перед поездкой в 2026 году: список рабочих КПП, среднее время прохождения, документы, типичные причины отказа и советы из практики.",
    dateISO: "2026-04-15",
    disclaimerBanner: true,
    readingMin: 9,
    category: "Граница",
    tags: ["граница", "Литва", "КПП", "документы"],
    body: [
      { type: "h2", text: "Какие КПП работают в 2026" },
      {
        type: "p",
        text:
          "Из четырёх исторических переходов между Беларусью и Литвой к 2026 году для легкового транспорта стабильно работают только два: Каменный Лог (Лоша) и Бенякони. Котловка функционирует ограниченно, Лаворишкес для частных авто закрыт. Перед выездом всегда сверяемся со сводкой ГТК Беларуси и ситуацией на сайте Государственной пограничной охраны Литвы (VSAT).",
      },
      {
        type: "table",
        headers: ["КПП", "Литовская сторона", "Авто", "Среднее время"],
        rows: [
          ["Каменный Лог", "Мядининкай", "Легковые + автобусы", "2–5 ч"],
          ["Бенякони", "Шальчининкай", "Легковые", "3–6 ч"],
          ["Котловка", "Лаворишкес", "Ограниченно", "—"],
        ],
      },
      { type: "h2", text: "Документы для въезда в Литву" },
      {
        type: "ul",
        items: [
          "Действующий паспорт (срок действия не менее 3 месяцев после выезда из ЕС).",
          "Шенгенская виза или ВНЖ страны ЕС.",
          "Медицинская страховка с покрытием от 30 000 €.",
          "Подтверждение цели поездки: бронь отеля, билеты, приглашение.",
          "Подтверждение финансового обеспечения (~50 € в день).",
          "Для несовершеннолетних — нотариальное согласие, если ребёнок едет без обоих родителей.",
        ],
      },
      { type: "h2", text: "Сколько по времени стоять на границе" },
      {
        type: "p",
        text:
          "Самое непредсказуемое в маршруте Минск–Вильнюс — именно граница. По данным наших водителей за 2025–2026 год, в будние дни утром и днём время прохождения Каменного Лога — 2,5–4 часа. По пятницам вечером и в воскресенье днём — может вырасти до 6–8 часов. Бенякони обычно медленнее на 1–1,5 часа, но иногда наоборот — зависит от смены.",
      },
      {
        type: "link",
        href: "https://mon.declarant.by/#/zone",
        label: "Электронная очередь в зонах ожидания — mon.declarant.by",
        description: "Лучший источник живой информации об очередях на границе в интернете: официальный сервис мониторинга регистрации транспорта в системе электронной очереди на белорусских КПП, включая Каменный Лог и Бенякони, в реальном времени. Если сайт не открывается — попробуйте зайти через VPN.",
      },
      { type: "liveQueue" },
      { type: "h3", text: "Лайфхаки от наших водителей" },
      {
        type: "ul",
        items: [
          "Самое спокойное время — вторник и среда с 6:00 до 11:00.",
          "В пятницу и воскресенье берите запас 6 часов до вылета сверх обычного времени поездки.",
          "Если граница встала, водитель ComfortLine оперативно меняет маршрут — Каменный Лог ↔ Бенякони отличаются на 40 минут езды.",
          "Заправляйтесь в Беларуси: в Литве топливо дороже на 30–40%.",
          "Готовьте документы заранее в одной папке — это ускоряет проверку.",
        ],
      },
      { type: "h2", text: "Типичные причины отказа во въезде" },
      {
        type: "ul",
        items: [
          "Истёкшая или некорректно оформленная страховка.",
          "Отсутствие подтверждения цели поездки и обратных билетов.",
          "Неверно заполненная декларация о ввозимых товарах.",
          "Подозрение на санкционные товары (см. отдельный гайд).",
          "Истекающий через 1–2 месяца паспорт.",
        ],
      },
      {
        type: "callout",
        text:
          "Если вам важна гарантия, что вы успеете на рейс — закажите трансфер ComfortLine с буфером на границу. Водители знают актуальные очереди в реальном времени и могут оперативно сменить КПП.",
      },
      { type: "h2", id: "official-sources", text: "Официальные источники" },
      { type: "link", href: "https://www.vsat.lt/en", label: "Государственная пограничная охрана Литвы (VSAT) — vsat.lt", description: "Актуальные условия въезда, статус КПП, официальные новости и предупреждения" },
      { type: "link", href: "https://www.lrmuitine.lt/web/guest/fiziniams-asmenims", label: "Таможня Литовской Республики — lrmuitine.lt", description: "Нормы провоза товаров, запреты, таможенное оформление для физических лиц" },
      { type: "link", href: "https://gtk.gov.by", label: "Государственный таможенный комитет Беларуси — gtk.gov.by", description: "Официальный сайт ГТК: нормативная база, правила ввоза и вывоза товаров" },
      { type: "link", href: "https://mon.declarant.by/#/zone", label: "Электронная очередь на КПП — mon.declarant.by", description: "Актуальное количество автомобилей в электронной очереди на Каменном Логе, Бенякони и других КПП — обновляется в реальном времени." },
      { type: "info-notice", text: "Правила въезда, визовые требования и таможенные нормы могут изменяться без уведомления. Всегда проверяйте актуальную информацию на официальных сайтах перед поездкой." },
    ],
    categoryEn: "Border",
    introEn:
      "The Belarus–Lithuania border is our busiest transfer route. Here is everything you need to know for 2026: open checkpoints, average crossing times, required documents, common reasons for refusal and tips from our drivers.",
    bodyEn: [
      { type: "h2", text: "Open Checkpoints in 2026" },
      {
        type: "p",
        text: "Of the four historic crossings between Belarus and Lithuania, only two operate reliably for private cars in 2026: Kamenny Log (Losha) and Benyakoni. Kotlovka operates on a restricted basis; Lavorishkes is closed to private vehicles. Always check the Belarusian State Customs Committee and Lithuanian State Border Guard Service (VSAT) before departure.",
      },
      {
        type: "table",
        headers: ["Checkpoint (BY)", "Lithuanian side", "Vehicles", "Avg. wait time"],
        rows: [
          ["Kamenny Log", "Medininkai", "Cars + buses", "2–5 h"],
          ["Benyakoni", "Šalčininkai", "Cars", "3–6 h"],
          ["Kotlovka", "Lavorishkes", "Restricted", "—"],
        ],
      },
      { type: "h2", text: "Documents for Entry into Lithuania" },
      {
        type: "ul",
        items: [
          "Valid passport (at least 3 months' validity beyond the planned EU exit date).",
          "Schengen visa or EU residence permit.",
          "Medical insurance with coverage of at least €30,000.",
          "Proof of purpose of trip: hotel booking, tickets, invitation letter.",
          "Proof of sufficient funds (~€50 per day).",
          "For minors travelling without both parents — notarised parental consent.",
        ],
      },
      { type: "h2", text: "How Long Does the Border Take?" },
      {
        type: "p",
        text: "The border is the most unpredictable part of the Minsk–Vilnius journey. Based on our drivers' data for 2025–2026, on weekdays in the morning and afternoon Kamenny Log takes 2.5–4 hours. On Friday evenings and Sunday afternoons it can stretch to 6–8 hours. Benyakoni is typically 1–1.5 hours slower, though shifts occasionally change this.",
      },
      {
        type: "link",
        href: "https://mon.declarant.by/#/zone",
        label: "Electronic queue at waiting zones — mon.declarant.by",
        description: "The best live queue information available online: the official Belarusian customs monitoring service for vehicle registration in the electronic waiting-zone queue at border checkpoints, including Kamenny Log and Benyakoni, updated in real time. If the site doesn't load, try opening it with a VPN.",
      },
      { type: "liveQueue" },
      { type: "h3", text: "Driver Tips" },
      {
        type: "ul",
        items: [
          "Quietest time: Tuesday–Wednesday, 6:00–11:00.",
          "On Fridays and Sundays allow an extra 6-hour buffer on top of normal journey time.",
          "If one crossing is jammed, a ComfortLine driver will switch routes — Kamenny Log and Benyakoni are 40 minutes apart.",
          "Fill up in Belarus: fuel is 30–40% cheaper than in Lithuania.",
          "Keep all documents in one folder — it speeds up the inspection noticeably.",
        ],
      },
      { type: "h2", text: "Common Reasons for Entry Refusal" },
      {
        type: "ul",
        items: [
          "Expired or incorrectly issued insurance.",
          "No confirmation of purpose of trip or return tickets.",
          "Incorrectly completed customs declaration.",
          "Suspected sanctioned goods (see our separate customs guide).",
          "Passport expiring within 1–2 months.",
        ],
      },
      {
        type: "callout",
        text: "If you need to guarantee you make your flight — book a ComfortLine transfer with a border buffer. Our drivers monitor queue lengths in real time and can switch checkpoints instantly.",
      },
      { type: "h2", id: "official-sources", text: "Official Sources" },
      { type: "link", href: "https://www.vsat.lt/en", label: "Lithuanian State Border Guard Service (VSAT) — vsat.lt", description: "Current entry conditions, checkpoint status and official news" },
      { type: "link", href: "https://www.lrmuitine.lt/web/guest/fiziniams-asmenims", label: "Lithuanian Customs — lrmuitine.lt", description: "Allowances, prohibitions and customs procedures for individuals" },
      { type: "link", href: "https://gtk.gov.by", label: "Belarusian State Customs Committee — gtk.gov.by", description: "Official customs regulations and import/export rules" },
      { type: "link", href: "https://mon.declarant.by/#/zone", label: "Live border queue — mon.declarant.by", description: "Current vehicle queue counts at Kamenny Log, Benyakoni and other checkpoints, updated in real time." },
      { type: "info-notice", text: "Entry requirements and customs allowances may change without notice. Always check official sources before travelling." },
    ],
    related: ["какой-кпп-выбрать", "что-нельзя-ввозить-в-ес", "как-добраться-до-аэропорта-вильнюса"],
    ctaRoute: { label: "Заказать трансфер Минск — Вильнюс (VNO)", labelEn: "Book Minsk–Vilnius (VNO) transfer", path: "/трансфер-минск-вильнюс-аэропорт" },
  },

  {
    slug: "стоимость-трансфер-минск-варшава",
    slugEn: "minsk-warsaw-transfer-price-2026",
    titleEn: "Minsk to Warsaw Transfer Price 2026: Fixed Costs, Inclusions & Booking",
    descriptionEn: "How much does a private transfer from Minsk to Warsaw cost in 2026? Fixed prices by car type, what's included, border tips, and how to book.",
    ogSlug: "blog-stoimost-transfer-minsk-varshava",
    title: "Сколько стоит трансфер Минск — Варшава в 2026",
    description:
      "Из чего складывается цена трансфера Минск–Варшава: расстояние, класс авто, очереди на границе, доплаты. Сравнение комфорт- и бизнес-класса, реальные кейсы.",
    intro:
      "Трансфер Минск–Варшава — это поездка в 550–600 км с пересечением границы. Цена зависит не столько от километров, сколько от класса авто, времени суток и сезона. Разбираем, из чего она складывается.",
    dateISO: "2026-04-10",
    readingMin: 7,
    category: "Цены",
    tags: ["цена", "Варшава", "трансфер"],
    body: [
      { type: "h2", text: "Из чего состоит цена" },
      {
        type: "ul",
        items: [
          "Топливо туда-обратно — зависит от класса авто и расхода.",
          "Время водителя (8–12 часов по маршруту + ожидание).",
          "Дорожные сборы и платные дороги в Польше.",
          "Амортизация авто на дальнем маршруте.",
          "Простой на границе.",
        ],
      },
      { type: "h2", text: "Сравнение классов авто" },
      {
        type: "table",
        headers: ["Класс", "Авто", "Пассажиров", "Стоимость"],
        rows: [
          ["Эконом", "VW Polo / Renault Logan", "до 3", "По запросу"],
          ["Комфорт", "VW Passat / Skoda Octavia", "до 3", "По запросу"],
          ["Бизнес", "Mercedes E-class", "до 3", "По запросу"],
          ["Минивэн", "Hyundai Palisade / Kia Carnival", "до 4–5", "По запросу"],
          ["Микроавтобус", "Fiat Scudo и аналоги", "до 8", "По запросу"],
        ],
      },
      {
        type: "p",
        text:
          "Финальная стоимость зависит от точки подачи в Минске, конкретного аэропорта Варшавы (Шопен или Модлин), сезона и времени суток. Все цены ComfortLine фиксированные — что назвал менеджер, то вы и платите, без счётчика и доплат за пробки. Точную стоимость сообщим в ближайшее время после заявки.",
      },
      { type: "h2", text: "Когда трансфер дороже" },
      {
        type: "ul",
        items: [
          "Праздничные даты (новогодние, майские, католические праздники в Польше).",
          "Поездка ночью с подачей с 23:00 до 06:00.",
          "Срочный заказ менее чем за 12 часов.",
          "Подача за пределами Минска (область, регионы).",
          "Дополнительные остановки в маршруте.",
        ],
      },
      { type: "h2", text: "Что входит в цену ComfortLine" },
      {
        type: "ul",
        items: [
          "Подача от любого адреса в Минске.",
          "Помощь водителя на границе и с багажом.",
          "Бутилированная вода в авто.",
          "Wi-Fi и USB-зарядки.",
          "Детское кресло по запросу — бесплатно.",
        ],
      },
      {
        type: "callout",
        text:
          "Хотите точную цену под ваши даты? Оставьте заявку — менеджер пришлёт расчёт в ближайшее время.",
      },
    ],
    categoryEn: "Pricing",
    introEn:
      "A Minsk–Warsaw transfer covers 550–600 km including a border crossing. The price depends less on distance and more on car class, time of day and season. Here is how it all adds up.",
    bodyEn: [
      { type: "h2", text: "What Makes Up the Price" },
      {
        type: "ul",
        items: [
          "Fuel for the round trip — depends on car class and fuel consumption.",
          "Driver's time (8–12 hours on the route plus border waiting).",
          "Road tolls and motorway charges in Poland.",
          "Vehicle wear on a long-distance route.",
          "Waiting time at the border.",
        ],
      },
      { type: "h2", text: "Car Class Comparison" },
      {
        type: "table",
        headers: ["Class", "Vehicle", "Passengers", "Price"],
        rows: [
          ["Economy", "VW Polo / Renault Logan", "up to 3", "On request"],
          ["Comfort", "VW Passat / Skoda Octavia", "up to 3", "On request"],
          ["Business", "Mercedes E-Class", "up to 3", "On request"],
          ["Minivan", "Hyundai Palisade / Kia Carnival", "up to 4–5", "On request"],
          ["Minibus", "Fiat Scudo and similar", "up to 8", "On request"],
        ],
      },
      {
        type: "p",
        text: "The final price depends on your pick-up address in Minsk, which Warsaw airport (Chopin or Modlin), season and time of day. All ComfortLine prices are fixed — what the manager quotes is what you pay, with no meter and no surcharge for traffic. We'll confirm an exact price shortly after your request.",
      },
      { type: "h2", text: "When the Transfer Costs More" },
      {
        type: "ul",
        items: [
          "Public holidays (New Year, May holidays, Polish national holidays).",
          "Night journeys with pick-up between 23:00 and 06:00.",
          "Last-minute booking less than 12 hours in advance.",
          "Pick-up outside Minsk city (Minsk region or other Belarusian cities).",
          "Additional stops along the route.",
        ],
      },
      { type: "h2", text: "What Is Included in the ComfortLine Price" },
      {
        type: "ul",
        items: [
          "Pick-up from any address in Minsk.",
          "Driver assistance at the border and with luggage.",
          "Bottled water in the car.",
          "Wi-Fi and USB chargers.",
          "Child seat on request — free of charge.",
        ],
      },
      {
        type: "callout",
        text: "Want an exact price for your dates? Send us a request — our manager will reply with a quote shortly.",
      },
    ],
    related: ["граница-беларусь-литва", "что-нельзя-ввозить-в-ес"],
    ctaRoute: { label: "Заказать трансфер Минск — Варшава Шопен (WAW)", labelEn: "Book Minsk–Warsaw Chopin (WAW) transfer", path: "/трансфер-минск-варшава-шопен" },
  },

  {
    slug: "что-нельзя-ввозить-в-ес",
    slugEn: "what-not-to-bring-from-belarus-to-eu",
    titleEn: "What You Cannot Bring from Belarus into the EU: Limits & Prohibitions 2026",
    descriptionEn: "Current customs rules for entering Lithuania, Poland and Latvia from Belarus: sanctions prohibitions, alcohol, tobacco, fuel, purchases and official sources.",
    ogSlug: "blog-chto-nelzya-vvozit-v-es",
    title: "Что нельзя ввозить из Беларуси в ЕС в 2026 году: правила Литвы, Польши и Латвии",
    description:
      "Актуальные правила ввоза из Беларуси в Литву, Польшу и Латвию: санкционные запреты, алкоголь, табак, топливо, покупки и официальные источники.",
    intro:
      "Литва, Польша и Латвия применяют санкционные правила ЕС при въезде из Беларуси. Ниже — актуальные лимиты, запреты, отличия по странам и официальные источники для проверки перед поездкой.",
    dateISO: "2026-05-20",
    dateModified: "2026-07-30",
    readingMin: 15,
    category: "Таможня",
    categoryEn: "Customs",
    tags: ["таможня", "ЕС", "санкции", "запреты", "граница", "Литва", "Польша", "Латвия", "декларирование", "нормы ввоза", "таможенные правила 2026"],
    disclaimerBanner: true,
    citation: [
      "https://www.customs.gov.by/fizicheskim-litsam/besposhlinnyy-vvoz-vyvoz-tovarov-dlya-lichnogo-polzovaniya/",
      "https://www.customs.gov.by/fizicheskim-litsam/vvoz-tovarov-dlya-lichnogo-polzovaniya-s-uplatoy-tamozhennykh-platezhey/",
      "https://europa.eu/youreurope/citizens/travel/carry/alcohol-tobacco-cash/index_en.htm",
      "https://eur-lex.europa.eu/eli/reg/2006/765/oj/eng",
      "https://eur-lex.europa.eu/eli/reg/2026/1846/oj/eng",
      "https://muitine.lrv.lt/en/for-passengers/coming-from-third-countries/",
      "https://podatki.gov.pl/informacje-o-cle/podstawowe-informacje-o-cle/informacje-dla-osob-fizycznych/towary-przywozone-przez-podroznych-zwolnione-z-oplat",
      "https://www.vid.gov.lv/en/excise-goods",
    ],
    body: [
      { type: "editorial-correction", heading: "Обновление редакции от 30 июля 2026 года", text: "Ранее опубликованная таблица показывала общие беспошлинные нормы для въезда в ЕС из третьих стран, но недостаточно учитывала санкционные запреты для товаров белорусского происхождения, дополнительные ограничения Литвы, правила для частых пересечений границы и транспортных экипажей, а также действующие правила для парфюмерии.\n\nТаблица и пояснения ниже были исправлены. Общие беспошлинные нормы применяются только к товарам, ввоз которых не запрещён санкциями или национальным законодательством страны въезда." },
      { type: "info-notice", text: "Информация предназначена для обычных пассажиров, перевозящих товары для личного пользования. Для водителей, транспортных экипажей, приграничных работников и лиц, часто пересекающих границу, могут действовать другие нормы." },
      { type: "h2", text: "Товары, запрещённые к ввозу из Беларуси в ЕС" },
      {
        type: "p",
        text: "Следующие категории запрещены санкциями ЕС или национальным законодательством стран въезда. Наличие общей беспошлинной нормы не отменяет санкционный запрет.",
      },
      {
        type: "ul",
        items: [
          "Спиртные напитки по коду CN 2208 (крепкий алкоголь и ликёры), происходящие из Беларуси или вывозимые из Беларуси — запрещены санкциями ЕС.",
          "Сигареты, сигариллы и сигары (код CN 2402) белорусского происхождения или экспорта — запрещены санкциями ЕС. Литва применяет более широкий национальный запрет на табак и произведённые заменители табака белорусского происхождения.",
          "Нефтепродукты (топливо) белорусского происхождения или экспорта в переносных канистрах — Литва и Латвия: 0 л. К Польше: общий лимит в 10 л не применяется к запрещённому топливу белорусского происхождения.",
          "Военная техника, охотничье оружие, пневматика, газовые баллончики самообороны.",
          "Лекарственные препараты в количестве, превышающем личные нужды на поездку.",
          "Продукты животного происхождения (мясо, мясопродукты, молоко и молочные продукты) — запрещены к ввозу в ЕС из Беларуси как из третьей страны без ветеринарного сертификата. Таможенный орган вправе оценивать конкретный товар, его количество, происхождение, стоимость, упаковку и заявленную цель ввоза.",
          "Свежие фрукты, овощи, растения, семена, саженцы, почва — действуют фитосанитарные ограничения ЕС; таможня оценивает каждый случай.",
          "Товары под санкциями ЕС: отдельные виды стали, древесины, калийных удобрений, техники — перечень определяется актуальным регламентом (последнее изменение: Регламент ЕС 2026/1846 от 23 июля 2026 года).",
        ],
      },
      { type: "h2", id: "eu-entry-allowances", text: "Въезд из Беларуси в ЕС по земле: нормы для обычных пассажиров" },
      {
        type: "p",
        text: "Нормы действительны для совершеннолетних обычных пассажиров при въезде из третьих стран наземным транспортом. Могут применяться сниженные нормы в зависимости от статуса пересекающего границу лица (см. раздел о водителях ниже).",
      },
      {
        type: "callout",
        text: "Значение «0» означает, что обычная беспошлинная норма не применяется к товару, запрещённому из-за его происхождения, страны экспорта или товарной классификации. Если происхождение или код товара неясны, необходимо заранее обратиться в таможенный орган страны въезда.",
      },
      {
        type: "table",
        headers: ["Категория", "Литва", "Польша", "Латвия"],
        rows: [
          ["Сигареты, сигариллы и сигары", "0, если товар происходит из Беларуси или вывозится из Беларуси", "0, если товар происходит из Беларуси или вывозится из Беларуси", "0 для сигарет, сигарилл и сигар из Беларуси"],
          ["Курительный или самокруточный табак", "Табак белорусского происхождения подпадает под более широкий национальный запрет Литвы", "Общая норма — до 50 г, если товар разрешён с учётом происхождения, классификации и санкций", "До 50 г или пропорциональная комбинация разрешённых табачных изделий; обычно не чаще одного раза в 30 дней"],
          ["Крепкий алкоголь и ликёры, CN 2208", "0, если происходит из Беларуси или вывозится из Беларуси", "0, если происходит из Беларуси или вывозится из Беларуси", "0, если происходит из Беларуси или вывозится из Беларуси"],
          ["Алкоголь до 22%", "Общая норма — до 2 л, однако алкоголь белорусского происхождения охватывается более широким национальным запретом Литвы", "До 2 л, только если товар не запрещён; некоторые ликёры относятся к запрещённой категории CN 2208", "До 2 л разрешённых напитков, если они не относятся к запрещённым спиртным напиткам"],
          ["Тихое вино", "До 4 л, только если товар не имеет запрещённого происхождения и не подпадает под национальные ограничения", "До 4 л", "До 4 л натурального негазированного виноградного вина"],
          ["Пиво", "До 16 л, только если товар не имеет запрещённого происхождения и не подпадает под национальные ограничения", "До 16 л", "До 16 л; натурально ферментированное пиво исключено из конкретного латвийского запрета на спиртные напитки"],
          ["Духи и туалетная вода", "Отдельного лимита в миллилитрах нет; стоимость входит в общий лимит товаров", "Отдельного лимита в миллилитрах нет; стоимость входит в общий лимит товаров", "Отдельного лимита в миллилитрах нет; стоимость входит в общий лимит товаров"],
          ["Другие покупки и подарки", "До €300 для обычного пассажира, въезжающего наземным транспортом", "До €300 при въезде наземным транспортом", "До €300 при въезде наземным транспортом"],
          ["Топливо в переносной канистре", "0 л для топлива из Беларуси", "Не применять общий лимит 10 л к запрещённому топливу белорусского происхождения или экспорта", "0 л для топлива из Беларуси"],
          ["Топливо в штатном баке автомобиля", "Допускается с учётом условий и санкционных исключений", "Обычно допускается для собственного использования транспортным средством, с учётом санкций и проверки таможней", "Возможно только для обоснованных основных потребностей поездки; таможня может запросить пояснения или подтверждение"],
        ],
      },
      {
        type: "callout",
        text: "Важно: указанные нормы действуют только для разрешённых товаров некоммерческого характера и не отменяют санкционные запреты. Табачные изделия — 40 сигарет, 20 сигарилл, 10 сигар или 50 г табака — являются альтернативными нормами. Допускается пропорциональное сочетание в пределах 100% общей нормы.\n\nДля алкоголя 1 л напитков крепостью свыше 22% или 2 л напитков крепостью до 22% — альтернативная норма, допускающая пропорциональное сочетание. Дополнительно разрешаются 4 л тихого вина и 16 л пива, если соответствующий товар не подпадает под санкционный или национальный запрет.",
      },
      { type: "h2", text: "Отдельные правила для водителей и транспортных экипажей" },
      {
        type: "p",
        text: "Таблица выше предназначена для обычных пассажиров. Водители, члены экипажей транспортных средств, работники приграничной зоны, жители приграничной зоны и лица, регулярно пересекающие границу, могут подпадать под отдельные или сниженные нормы.",
      },
      {
        type: "ul",
        items: [
          "Литва устанавливает для некоторых членов экипажей регулярных международных маршрутов общий стоимостной лимит €150 и сниженные нормы на алкоголь.",
          "Польша указывает для членов экипажей, приграничных работников и жителей приграничной зоны сниженные нормы: 0,5 л крепкого либо более слабого алкоголя, дополнительно 0,5 л вина и 2 л пива.",
          "В Латвии ввоз отдельных подакцизных товаров для личного пользования обычно допускается не чаще одного раза в 30 дней. При более частом пересечении границы или по требованию таможни может потребоваться письменное заявление.",
          "Классификация водителя частного трансфера как члена экипажа регулярного международного транспорта может зависеть от характера перевозки и решения таможенного органа.",
        ],
      },
      { type: "h2", text: "Европейский союз → Беларусь: беспошлинный ввоз" },
      {
        type: "p",
        text: "Норма беспошлинного ввоза зависит от способа пересечения границы. Для наземного транспорта (машина, автобус) и пешего перехода — то есть для всех пассажиров ComfortLine — с 1 апреля 2024 года действует сниженная норма: стоимость товаров не выше 500 € и вес не более 25 кг на одного взрослого пассажира.",
      },
      {
        type: "table",
        headers: ["Способ ввоза", "Стоимость", "Вес"],
        rows: [
          ["Наземный транспорт / пешком (с 1 апреля 2024)", "до 500 €", "до 25 кг"],
          ["Воздушный транспорт (самолёт)", "до 10 000 €", "до 50 кг"],
          ["Доставка перевозчиком (не лично)", "до 200 €", "до 31 кг"],
          ["Международные почтовые отправления", "до 200 €", "до 31 кг (брутто)"],
        ],
      },
      {
        type: "p",
        text: "Табак и табачные изделия — отдельная норма, одинаковая для всех способов ввоза: 200 сигарет, или 50 сигар (сигарилл), или 200 стиков нагреваемого табака, или 250 г табака (либо ассорти этих товаров общим весом не более 250 г). Алкогольные напитки крепостью более 0,5% — не более 3 л при ввозе в багаже. Нормы на алкоголь и табак действуют для лиц старше 18 лет.",
      },
      {
        type: "p",
        text: "Сверх этих лимитов ввоз облагается таможенными платежами: для товаров в багаже наземным транспортом — 30% от суммы превышения стоимости, но не менее 4 € за каждый кг превышения по весу. Для товаров, доставленных перевозчиком или почтой, ставка ниже — 15% от превышения, но не менее 2 € за кг. Алкоголь в количестве от 3 до 5 л облагается по ставке 10 € за литр сверх нормы 3 л; этиловый спирт (до 5 л) — 22 € за литр. Товары с признаками коммерческой партии (оптовые количества, несколько одинаковых единиц) декларируются и оформляются отдельно как товары не для личного пользования.",
      },
      {
        type: "link",
        href: "https://www.customs.gov.by/fizicheskim-litsam/besposhlinnyy-vvoz-vyvoz-tovarov-dlya-lichnogo-polzovaniya/",
        label: "ГТК Беларуси — беспошлинный ввоз/вывоз товаров для личного пользования",
        description: "Официальные стоимостные, весовые и количественные нормы беспошлинного ввоза и вывоза товаров физическими лицами",
      },
      {
        type: "link",
        href: "https://www.customs.gov.by/fizicheskim-litsam/vvoz-tovarov-dlya-lichnogo-polzovaniya-s-uplatoy-tamozhennykh-platezhey/",
        label: "ГТК Беларуси — ввоз товаров с уплатой таможенных платежей",
        description: "Официальные ставки таможенных пошлин и налогов при превышении беспошлинных норм ввоза",
      },
      { type: "h2", text: "Наличные деньги и декларирование" },
      {
        type: "p",
        text: "Правила вывоза наличных из Беларуси и ввоза в ЕС регулируются независимо — белорусской таможней (ГТК) и таможней страны въезда в ЕС.",
      },
      { type: "h3", text: "Вывоз наличных из Беларуси" },
      {
        type: "ul",
        items: [
          "До 10 000 USD (или эквивалент в любой валюте) — без декларации.",
          "Свыше 10 000 USD — обязательная письменная таможенная декларация при пересечении белорусской границы.",
          "Незадекларированные суммы сверх лимита подлежат взысканию в соответствии с законодательством Беларуси.",
          "Ювелирные украшения для личного пользования, банковские карты и дорожные чеки к денежному лимиту не относятся.",
        ],
      },
      { type: "h3", text: "Ввоз наличных в ЕС (Литва, Польша, Латвия)" },
      {
        type: "ul",
        items: [
          "До 10 000 € (или эквивалент) — без декларации на стороне ЕС.",
          "Свыше 10 000 € — обязательная декларация EU Cash Declaration при въезде в зону ЕС.",
          "Декларация подаётся таможне страны въезда (литовской, польской или латвийской).",
          "Незадекларированные суммы сверх лимита могут быть задержаны и стать предметом административного или уголовного производства.",
        ],
      },
      {
        type: "link",
        href: "https://www.customs.by/deklarirovaniye",
        label: "ГТК Беларуси — официальная страница: правила декларирования",
        description: "Актуальные нормы вывоза наличных, ювелирных изделий и товаров физическими лицами при выезде из Беларуси",
      },
      { type: "h2", text: "Международные посылки и товары из интернет-магазинов" },
      {
        type: "p",
        text: "Если вы везёте посылку, полученную через белорусскую почту или СДЭК, либо товары, заказанные на OZON/Wildberries/AliExpress, таможня применяет отдельные правила контроля международных почтовых отправлений.",
      },
      {
        type: "ul",
        items: [
          "Товары из ЕАЭС (Россия, Казахстан и др.) при пересечении белорусско-европейской границы рассматриваются как товары из третьей страны.",
          "Норма беспошлинного ввоза в ЕС — до 150 € на посылку, свыше — таможенная пошлина и НДС страны въезда.",
          "Товары с коммерческими признаками (несколько одинаковых единиц, упаковка с ценниками оптом) — таможня вправе переквалифицировать как коммерческий груз.",
          "Правила ГТК РБ о контроле товаров, следующих в адрес физических лиц из ЕАЭС, описаны на официальном сайте таможни.",
        ],
      },
      {
        type: "link",
        href: "https://customs.gov.by/participants-ved/perevozchikam/informatsiya-o-provedenii-kontrolya-mezhdunarodnykh-pochtovykh-otpravleniy-i-tovarov-sleduyushchikh-/",
        label: "ГТК РБ — контроль международных почтовых отправлений и товаров физических лиц",
        description: "Официальная информация о порядке таможенного контроля посылок и товаров, ввозимых физическими лицами из государств ЕАЭС",
      },
      { type: "h2", text: "Что проверяют на границе Беларусь–ЕС" },
      {
        type: "ul",
        items: [
          "Топливные баки — пограничники Литвы и Латвии могут запросить открыть бак для проверки.",
          "Сигареты и табак — пограничники проверяют акцизные марки и считают количество.",
          "Алкоголь — проверяют наличие акцизных марок, сверяют количество.",
          "Электроника и покупки — могут запросить чеки или выписки для оценки стоимости относительно общей нормы ввоза.",
          "Продукты питания — холодильники и сумки с едой осматриваются на наличие запрещённых категорий.",
          "Содержимое багажника и чемоданов — рентгеновский сканер, иногда ручной досмотр.",
        ],
      },
      { type: "h2", text: "Что будет за нарушение таможенных правил" },
      {
        type: "table",
        headers: ["Нарушение", "Последствие"],
        rows: [
          ["Сигареты и табак, запрещённые из-за происхождения или сверх нормы", "Конфискация"],
          ["Алкоголь сверх лимита или запрещённого происхождения", "Конфискация + возможный штраф"],
          ["Незадекларированные наличные свыше 10 000 €", "Задержание суммы и административное/уголовное производство"],
          ["Запрещённые продукты питания", "Конфискация на месте"],
          ["Топливо в канистре из Беларуси (Литва/Латвия)", "Конфискация канистры с топливом"],
          ["Товары с признаками коммерческой партии без декларации", "Задержание товара, оформление, возможная пошлина"],
        ],
      },
      { type: "h2", text: "Частые вопросы о таможне на границе Беларусь–ЕС" },
      { type: "h3", text: "Можно ли везти домашнюю еду в Литву или Польшу?" },
      {
        type: "p",
        text: "Продукты животного происхождения (мясо, молочное, яйца) запрещены к ввозу в ЕС из Беларуси. В отношении других продуктов питания таможенный орган вправе оценивать конкретный товар, его количество, происхождение, стоимость, упаковку и заявленную цель ввоза. При сомнениях необходимо заранее обратиться в таможню страны въезда.",
      },
      { type: "h3", text: "Считаются ли сигареты в кармане отдельно от сигарет в чемодане?" },
      {
        type: "p",
        text: "Нет, лимит суммарный на человека. 40 сигарет (при условии, что они разрешены к ввозу по происхождению) — это 2 пачки суммарно, независимо от того, где они находятся.",
      },
      { type: "h3", text: "Нужно ли декларировать ноутбук или телефон?" },
      {
        type: "p",
        text: "Новая электроника, подарки и другие покупки учитываются в рамках общей стоимостной нормы (до 300 € при въезде наземным транспортом). Таможня вправе оценивать, предназначены ли товары для личного или коммерческого использования. При сомнениях рекомендуется заранее проконсультироваться с таможней страны въезда.",
      },
      { type: "h3", text: "Есть ли разница между Каменным Логом, Терехово и Брузги?" },
      {
        type: "p",
        text: "Общие нормы ЕС применяются на всех КПП, однако конкретные процедуры и интенсивность проверок могут различаться. Выбор КПП влияет на время ожидания. Для уточнения требований конкретного пункта пропуска рекомендуется обращаться в таможенную службу соответствующей страны.",
      },
      {
        type: "callout",
        text: "Правила меняются: санкционные пакеты ЕС обновляются несколько раз в год. Перед поездкой проверяйте актуальные нормы на официальных сайтах таможни Беларуси и страны въезда.",
      },
      { type: "h2", id: "official-sources", text: "Официальные источники и дата проверки" },
      { type: "h3", text: "Беларусь" },
      {
        type: "link",
        href: "https://www.customs.gov.by/fizicheskim-litsam/besposhlinnyy-vvoz-vyvoz-tovarov-dlya-lichnogo-polzovaniya/",
        label: "Государственный таможенный комитет Республики Беларусь — беспошлинный ввоз и вывоз товаров для личного пользования",
      },
      {
        type: "link",
        href: "https://www.customs.gov.by/fizicheskim-litsam/vvoz-tovarov-dlya-lichnogo-polzovaniya-s-uplatoy-tamozhennykh-platezhey/",
        label: "Государственный таможенный комитет Республики Беларусь — ввоз товаров с уплатой таможенных платежей",
      },
      { type: "h3", text: "Европейский союз" },
      {
        type: "link",
        href: "https://europa.eu/youreurope/citizens/travel/carry/alcohol-tobacco-cash/index_en.htm",
        label: "Your Europe — правила перевозки алкоголя, табака и других товаров",
        description: "Официальный портал ЕС",
      },
      {
        type: "link",
        href: "https://trade.ec.europa.eu/access-to-markets/en/content/guide-import-goods",
        label: "European Commission Access2Markets — руководство по импорту товаров",
      },
      {
        type: "link",
        href: "https://eur-lex.europa.eu/eli/reg/2006/765/oj/eng",
        label: "Council Regulation (EC) No 765/2006 — restrictive measures concerning Belarus",
        description: "EUR-Lex — официальный текст",
      },
      {
        type: "link",
        href: "https://eur-lex.europa.eu/eli/reg/2026/1846/oj/eng",
        label: "Council Regulation (EU) 2026/1846 of 23 July 2026 — latest amendment",
        description: "EUR-Lex — официальный текст",
      },
      { type: "h3", text: "Литва" },
      {
        type: "link",
        href: "https://muitine.lrv.lt/en/for-passengers/coming-from-third-countries/",
        label: "Lietuvos Respublikos muitinė — Coming from third countries",
        description: "Официальный сайт Таможни Литовской Республики",
      },
      { type: "h3", text: "Польша" },
      {
        type: "link",
        href: "https://podatki.gov.pl/informacje-o-cle/podstawowe-informacje-o-cle/informacje-dla-osob-fizycznych/towary-przywozone-przez-podroznych-zwolnione-z-oplat",
        label: "Ministerstwo Finansów / Krajowa Administracja Skarbowa — товары, ввозимые путешественниками без пошлин",
        description: "Официальный сайт налоговой администрации Польши",
      },
      { type: "h3", text: "Латвия" },
      {
        type: "link",
        href: "https://www.vid.gov.lv/en/excise-goods",
        label: "Valsts ieņēmumu dienests — Excise goods",
        description: "Официальный сайт Службы государственных доходов Латвии",
      },
      {
        type: "callout",
        text: "Информация проверена: 30 июля 2026 года. Следующая редакционная проверка: 30 января 2027 года.\n\nПравила могли измениться после указанной даты. Перед выездом откройте официальные источники и проверьте требования повторно.",
      },
    ],
    introEn:
      "Lithuania, Poland and Latvia enforce EU sanctions rules on entry from Belarus. Below are current allowances, prohibitions, country-by-country differences and official sources to check before travel.",
    bodyEn: [
      { type: "editorial-correction", heading: "Editorial correction, 30 July 2026", text: "The previously published table showed general EU duty-free allowances for travellers arriving from third countries, but did not adequately reflect the sanctions-based prohibitions for goods of Belarusian origin, Lithuania's additional national restrictions, rules for frequent border crossings and transport crews, or the current rules for perfume and eau de toilette.\n\nThe table and explanations below have been corrected. General duty-free allowances apply only to goods whose import is not prohibited by sanctions or the national legislation of the country of entry." },
      { type: "info-notice", text: "The information is intended for ordinary passengers carrying goods for personal use. Different rules may apply to drivers, transport crew members, border workers and persons who cross the border frequently." },
      { type: "h2", text: "Goods Prohibited from Belarus into the EU" },
      {
        type: "p",
        text: "The following categories are prohibited under EU sanctions or the national legislation of the entry country. A general duty-free allowance does not override a sanctions prohibition.",
      },
      {
        type: "ul",
        items: [
          "Spirit drinks under CN 2208 (spirits and liqueurs) originating in or exported from Belarus — prohibited under EU sanctions.",
          "Cigarettes, cigarillos and cigars (CN 2402) of Belarusian origin or export — prohibited under EU sanctions. Lithuania applies a broader national prohibition covering Belarus-origin tobacco and manufactured tobacco substitutes.",
          "Petroleum products (fuel) of Belarusian origin or export in portable containers — Lithuania and Latvia: 0 l. For Poland: the general 10 l allowance does not apply to prohibited fuel of Belarusian origin.",
          "Military equipment, hunting weapons, air guns, self-defence gas sprays.",
          "Medicinal products in quantities exceeding personal needs for the trip.",
          "Animal-origin food (meat, meat products, milk and dairy products) — prohibited from import into the EU from Belarus as a third country without a veterinary certificate. Customs may assess a specific product on its quantity, origin, value, packaging and declared purpose.",
          "Fresh fruit, vegetables, plants, seeds, seedlings, soil — EU phytosanitary restrictions apply; customs assesses each case.",
          "EU-sanctioned goods: certain types of steel, timber, potassium fertilisers, machinery — the list is set by the current EU regulation (latest amendment: Council Regulation (EU) 2026/1846 of 23 July 2026).",
        ],
      },
      { type: "h2", id: "eu-entry-allowances", text: "Entry from Belarus into the EU by land: allowances for ordinary passengers" },
      {
        type: "p",
        text: "Allowances apply to adult ordinary passengers entering from third countries by land. Reduced or different allowances may apply depending on the traveller's status (see the section on drivers below).",
      },
      {
        type: "callout",
        text: "A value of '0' means that the standard duty-free allowance does not apply to a product prohibited because of its origin, country of export or tariff classification. If the origin or product code is unclear, contact the customs authority of the entry country before travelling.",
      },
      {
        type: "table",
        headers: ["Category", "Lithuania", "Poland", "Latvia"],
        rows: [
          ["Cigarettes, cigarillos and cigars", "0 if goods originate in or are exported from Belarus", "0 if goods originate in or are exported from Belarus", "0 for cigarettes, cigarillos and cigars from Belarus"],
          ["Smoking or hand-rolling tobacco", "Belarus-origin tobacco is covered by Lithuania's broader national prohibition", "General allowance — up to 50 g, if the goods are permitted having regard to origin, classification and sanctions", "Up to 50 g or a proportional combination of permitted tobacco products; normally not more than once every 30 days"],
          ["Spirits and liqueurs, CN 2208", "0 if originating in or exported from Belarus", "0 if originating in or exported from Belarus", "0 if originating in or exported from Belarus"],
          ["Alcohol up to 22% ABV", "General allowance — up to 2 l, however Belarus-origin alcohol is covered by Lithuania's broader national prohibition", "Up to 2 l, only if the goods are not prohibited; some liqueurs fall under the prohibited CN 2208 category", "Up to 2 l of permitted beverages, provided they are not prohibited spirits"],
          ["Still wine", "Up to 4 l, only if the goods do not have a prohibited origin and are not subject to national restrictions", "Up to 4 l", "Up to 4 l of naturally fermented still grape wine"],
          ["Beer", "Up to 16 l, only if the goods do not have a prohibited origin and are not subject to national restrictions", "Up to 16 l", "Up to 16 l; naturally fermented beer is excluded from Latvia's specific prohibition on spirit drinks"],
          ["Perfume and eau de toilette", "No separate millilitre allowance; value counts towards the general goods allowance", "No separate millilitre allowance; value counts towards the general goods allowance", "No separate millilitre allowance; value counts towards the general goods allowance"],
          ["Other purchases and gifts", "Up to €300 for an ordinary passenger arriving by land", "Up to €300 when arriving by land", "Up to €300 when arriving by land"],
          ["Fuel in a portable container", "0 l for Belarus-origin fuel", "Do not apply the general 10 l allowance to prohibited fuel of Belarusian origin or export", "0 l for Belarus-origin fuel"],
          ["Fuel in the vehicle's standard tank", "Permitted subject to conditions and sanctions exceptions", "Normally permitted for the vehicle's own use, subject to sanctions and customs assessment", "Permitted only for legitimate essential travel needs; customs may request an explanation or supporting evidence"],
        ],
      },
      {
        type: "callout",
        text: "Important: these allowances apply only to permitted goods of a non-commercial nature and do not override sanctions prohibitions. The tobacco figures — 40 cigarettes, 20 cigarillos, 10 cigars or 50 g of smoking tobacco — are alternative allowances. Proportional combinations within 100% of the total allowance are permitted.\n\nFor alcohol, 1 l of drinks above 22% ABV or 2 l of drinks up to 22% ABV is an alternative allowance and may be used in proportional combination. An additional 4 l of still wine and 16 l of beer are permitted, provided the product is not subject to a sanctions or national prohibition.",
      },
      { type: "h2", text: "Separate Rules for Drivers and Transport Crews" },
      {
        type: "p",
        text: "The table above is for ordinary passengers. Drivers, transport crew members, border workers, border-area residents and persons who cross the border regularly may be subject to separate or reduced allowances.",
      },
      {
        type: "ul",
        items: [
          "Lithuania sets a general value allowance of €150 and reduced alcohol allowances for certain crew members on regular international routes.",
          "Poland states reduced allowances for crew members, border workers and border-area residents: 0.5 l of spirits or lower-alcohol equivalent, plus 0.5 l of wine and 2 l of beer.",
          "In Latvia, import of certain excisable goods for personal use is normally permitted no more than once every 30 days. A written declaration may be required for more frequent crossings or at customs' request.",
          "Whether a private-transfer driver qualifies as a crew member of a regular international service may depend on the nature of the journey and the decision of the customs authority.",
        ],
      },
      { type: "h2", text: "European Union → Belarus: duty-free import" },
      {
        type: "p",
        text: "The duty-free allowance depends on how you cross the border. For land transport (car, bus) or on foot — which covers all ComfortLine passengers — a reduced allowance has applied since 1 April 2024: goods worth no more than €500 and weighing no more than 25 kg per adult passenger.",
      },
      {
        type: "table",
        headers: ["Mode of entry", "Value", "Weight"],
        rows: [
          ["Land transport / on foot (since 1 April 2024)", "up to €500", "up to 25 kg"],
          ["Air transport (flight)", "up to €10,000", "up to 50 kg"],
          ["Delivered by carrier (not carried in person)", "up to €200", "up to 31 kg"],
          ["International postal items", "up to €200", "up to 31 kg (gross)"],
        ],
      },
      {
        type: "p",
        text: "Tobacco products have a separate allowance that is the same for every mode of entry: 200 cigarettes, or 50 cigars (cigarillos), or 200 heated-tobacco sticks, or 250 g of tobacco (or an assortment totalling no more than 250 g). Alcoholic drinks over 0.5% ABV — no more than 3 l when carried in baggage. Alcohol and tobacco allowances apply to travellers aged 18 and over.",
      },
      {
        type: "p",
        text: "Above these limits, customs duty applies: for goods in baggage entering by land, the rate is 30% of the excess value, but no less than €4 per kilogram over the weight limit. For goods delivered by a carrier or by post, the rate is lower — 15% of the excess, but no less than €2 per kilogram. Alcohol between 3 and 5 l is charged at €10 per litre over the 3 l allowance; ethyl spirit (up to 5 l) is charged at €22 per litre. Goods showing signs of a commercial shipment (wholesale quantities, multiple identical items) are declared and processed separately.",
      },
      {
        type: "link",
        href: "https://www.customs.gov.by/fizicheskim-litsam/besposhlinnyy-vvoz-vyvoz-tovarov-dlya-lichnogo-polzovaniya/",
        label: "Belarus State Customs Committee — duty-free import/export of goods for personal use",
        description: "Official value, weight and quantity allowances for duty-free import and export of goods by individuals",
      },
      {
        type: "link",
        href: "https://www.customs.gov.by/fizicheskim-litsam/vvoz-tovarov-dlya-lichnogo-polzovaniya-s-uplatoy-tamozhennykh-platezhey/",
        label: "Belarus State Customs Committee — import of goods with payment of customs duties",
        description: "Official customs duty and tax rates for goods that exceed the duty-free import allowances",
      },
      { type: "h2", text: "Cash and Declaration Requirements" },
      {
        type: "p",
        text: "Rules on exporting cash from Belarus and importing it into the EU are regulated independently — by Belarusian customs (SCC) and by the customs authority of the EU entry country.",
      },
      { type: "h3", text: "Exporting Cash from Belarus" },
      {
        type: "ul",
        items: [
          "Up to USD 10,000 (or equivalent in any currency) — no declaration required.",
          "Over USD 10,000 — mandatory written customs declaration at the Belarusian border.",
          "Undeclared amounts above the limit may be subject to enforcement action under Belarusian law.",
          "Personal jewellery, bank cards and traveller's cheques do not count towards the cash limit.",
        ],
      },
      { type: "h3", text: "Importing Cash into the EU (Lithuania, Poland, Latvia)" },
      {
        type: "ul",
        items: [
          "Up to €10,000 (or equivalent) — no declaration required on the EU side.",
          "Over €10,000 — mandatory EU Cash Declaration upon entering the EU zone.",
          "The declaration is submitted to the customs of the entry country (Lithuanian, Polish or Latvian).",
          "Undeclared amounts above the limit may be detained and become subject to administrative or criminal proceedings.",
        ],
      },
      {
        type: "link",
        href: "https://www.customs.by/deklarirovaniye",
        label: "Belarusian State Customs Committee — official declaration rules",
        description: "Current limits on exporting cash, jewellery and goods for private individuals leaving Belarus",
      },
      { type: "h2", text: "Parcels and Online Shopping Items" },
      {
        type: "p",
        text: "If you are carrying a parcel from a Belarusian courier service or goods ordered online (OZON, Wildberries, AliExpress), customs applies separate rules for international postal items.",
      },
      {
        type: "ul",
        items: [
          "Goods from EAEU countries (Russia, Kazakhstan, etc.) are treated as goods from a third country at the Belarus–EU border.",
          "EU duty-free import threshold — up to €150 per parcel; above that, customs duty and VAT of the entry country apply.",
          "Goods with commercial characteristics (multiple identical units, wholesale retail packaging) may be reclassified as commercial cargo.",
          "Belarusian SCC rules on controlling goods sent to private individuals from the EAEU are on the official customs website.",
        ],
      },
      {
        type: "link",
        href: "https://customs.gov.by/participants-ved/perevozchikam/informatsiya-o-provedenii-kontrolya-mezhdunarodnykh-pochtovykh-otpravleniy-i-tovarov-sleduyushchikh-/",
        label: "Belarusian SCC — control of international postal items and personal goods",
        description: "Official information on customs procedures for parcels and goods imported by private individuals from EAEU states",
      },
      { type: "h2", text: "What Border Guards Check at Belarus–EU Crossings" },
      {
        type: "ul",
        items: [
          "Fuel tanks — Lithuanian and Latvian border guards may ask you to open the tank for inspection.",
          "Cigarettes and tobacco — border guards check excise stamps and count quantities.",
          "Alcohol — excise stamps are checked and quantities verified.",
          "Electronics and purchases — receipts or bank statements may be requested to assess value against the general goods allowance.",
          "Food — coolers and food bags are inspected for prohibited categories.",
          "Boot and luggage — X-ray scanner, sometimes manual search.",
        ],
      },
      { type: "h2", text: "Consequences of Customs Violations" },
      {
        type: "table",
        headers: ["Violation", "Consequence"],
        rows: [
          ["Cigarettes and tobacco prohibited due to origin or above the limit", "Confiscation"],
          ["Alcohol above the limit or of prohibited origin", "Confiscation + possible fine"],
          ["Undeclared cash over €10,000", "Amount detained; administrative or criminal proceedings"],
          ["Prohibited food products", "On-the-spot confiscation"],
          ["Belarus-origin fuel in a portable container (Lithuania/Latvia)", "Confiscation of container and fuel"],
          ["Goods showing commercial characteristics without declaration", "Goods detained; customs processing; possible duty"],
        ],
      },
      { type: "h2", text: "Frequently Asked Questions" },
      { type: "h3", text: "Can I bring home-cooked food into Lithuania or Poland?" },
      {
        type: "p",
        text: "Animal-origin products (meat, dairy, eggs) are prohibited from import into the EU from Belarus. For other food products, customs may assess the specific item on its quantity, origin, value, packaging and declared purpose. If in doubt, contact the customs authority of your entry country before travelling.",
      },
      { type: "h3", text: "Do cigarettes in my pocket count separately from those in my suitcase?" },
      {
        type: "p",
        text: "No, the limit is total per person. 40 cigarettes (provided they are permitted having regard to origin) means 2 packs in total, regardless of where they are.",
      },
      { type: "h3", text: "Do I need to declare a laptop or phone?" },
      {
        type: "p",
        text: "New electronics, gifts and other purchases normally count towards the general value allowance (up to €300 when entering by land). Customs may assess whether goods are for personal or commercial use. If you are unsure whether a specific item falls within the allowance, contact the customs authority of your entry country.",
      },
      { type: "h3", text: "Is there a difference between Kamenny Log, Terekhovka and Bruzgi?" },
      {
        type: "p",
        text: "General EU rules apply at all checkpoints, but specific procedures and inspection intensity may vary. Your choice of crossing affects waiting time. To clarify requirements at a specific checkpoint, contact the customs service of the relevant country.",
      },
      {
        type: "callout",
        text: "Rules change: EU sanctions packages are updated several times a year. Check the current limits on the official customs websites of Belarus and your entry country before every trip.",
      },
      { type: "h2", id: "official-sources", text: "Official Sources and Verification Date" },
      { type: "h3", text: "Belarus" },
      {
        type: "link",
        href: "https://www.customs.gov.by/fizicheskim-litsam/besposhlinnyy-vvoz-vyvoz-tovarov-dlya-lichnogo-polzovaniya/",
        label: "State Customs Committee of the Republic of Belarus — duty-free import and export of goods for personal use",
      },
      {
        type: "link",
        href: "https://www.customs.gov.by/fizicheskim-litsam/vvoz-tovarov-dlya-lichnogo-polzovaniya-s-uplatoy-tamozhennykh-platezhey/",
        label: "State Customs Committee of the Republic of Belarus — import of goods with payment of customs duties",
      },
      { type: "h3", text: "European Union" },
      {
        type: "link",
        href: "https://europa.eu/youreurope/citizens/travel/carry/alcohol-tobacco-cash/index_en.htm",
        label: "Your Europe — alcohol, tobacco and other goods",
        description: "Official EU citizens' portal",
      },
      {
        type: "link",
        href: "https://trade.ec.europa.eu/access-to-markets/en/content/guide-import-goods",
        label: "European Commission Access2Markets — guide to importing goods",
      },
      {
        type: "link",
        href: "https://eur-lex.europa.eu/eli/reg/2006/765/oj/eng",
        label: "Council Regulation (EC) No 765/2006 — restrictive measures concerning Belarus",
        description: "EUR-Lex — official text",
      },
      {
        type: "link",
        href: "https://eur-lex.europa.eu/eli/reg/2026/1846/oj/eng",
        label: "Council Regulation (EU) 2026/1846 of 23 July 2026 — latest amendment",
        description: "EUR-Lex — official text",
      },
      { type: "h3", text: "Lithuania" },
      {
        type: "link",
        href: "https://muitine.lrv.lt/en/for-passengers/coming-from-third-countries/",
        label: "Lietuvos Respublikos muitinė — Coming from third countries",
        description: "Official website of Lithuanian Customs",
      },
      { type: "h3", text: "Poland" },
      {
        type: "link",
        href: "https://podatki.gov.pl/informacje-o-cle/podstawowe-informacje-o-cle/informacje-dla-osob-fizycznych/towary-przywozone-przez-podroznych-zwolnione-z-oplat",
        label: "Ministerstwo Finansów / Krajowa Administracja Skarbowa — goods brought by travellers free of duty",
        description: "Official Polish tax administration website",
      },
      { type: "h3", text: "Latvia" },
      {
        type: "link",
        href: "https://www.vid.gov.lv/en/excise-goods",
        label: "Valsts ieņēmumu dienests — Excise goods",
        description: "Official website of the State Revenue Service of Latvia",
      },
      {
        type: "callout",
        text: "Information verified: 30 July 2026. Next editorial review: 30 January 2027.\n\nRules may have changed since this date. Before travelling, open the official sources above and verify the current requirements.",
      },
    ],
    related: ["граница-беларусь-литва", "какой-кпп-выбрать", "граница-беларусь-польша"],
    ctaRoute: { label: "Заказать трансфер в Литву, Польшу или Латвию", labelEn: "Book a transfer to Lithuania, Poland or Latvia", path: "/трансфер-минск-вильнюс-аэропорт" },
  },

  {
    slug: "какой-кпп-выбрать",
    slugEn: "which-belarus-border-crossing-to-choose",
    titleEn: "Kamenny Log vs Kotlovka vs Benyakoni: Which Belarus Border Crossing Is Fastest",
    descriptionEn: "Comparing Belarus–Lithuania border checkpoints in 2026: average wait times, working hours, truck restrictions and which crossing is best for car transfers.",
    ogSlug: "blog-kakoy-kpp-vybrat",
    title: "Каменный Лог vs Котловка vs Бенякони — какой КПП выбрать в 2026",
    description:
      "Сравнение литовских КПП Каменный Лог, Котловка и Бенякони в 2026: время прохождения, инфраструктура, плюсы и минусы каждого пункта пропуска.",
    intro:
      "Если вы едете из Минска в Литву, у вас три варианта пунктов пропуска. Выбор КПП может сэкономить или, наоборот, отнять до 4 часов. Разбираем каждый — на основе ежедневной статистики наших водителей.",
    dateISO: "2026-03-28",
    disclaimerBanner: true,
    readingMin: 6,
    category: "Граница",
    tags: ["КПП", "Литва", "Каменный Лог", "Бенякони"],
    body: [
      { type: "h2", text: "Каменный Лог — основной выбор" },
      {
        type: "p",
        text:
          "Главный КПП по объёму трафика. Хорошая инфраструктура, две полосы для легкового транспорта, есть зона для оплаты сборов, кафе и туалеты с обеих сторон. Расположен на трассе М7 Минск–Вильнюс. Литовская сторона называется Мядининкай (Medininkai).",
      },
      {
        type: "ul",
        items: [
          "Плюсы: быстрая обработка, развитая инфраструктура, удобная трасса.",
          "Минусы: самый загруженный КПП, в часы пик стоит до 6 часов.",
          "Лучшее время: вт–ср, 6:00–11:00.",
        ],
      },
      { type: "h2", text: "Бенякони — резервный вариант" },
      {
        type: "p",
        text:
          "Запасной КПП в 60 км южнее Каменного Лога, литовская сторона — Шальчининкай (Šalčininkai). Меньше потока, но и меньше пропускная способность. Ехать дальше — крюк +40 минут до Вильнюса.",
      },
      {
        type: "ul",
        items: [
          "Плюсы: меньше очередь в выходные.",
          "Минусы: дольше путь до Вильнюса (~140 км вместо 100 км от Каменного Лога), скромная инфраструктура.",
          "Когда выбирать: пятница вечер и воскресенье день, когда Каменный Лог встал.",
        ],
      },
      { type: "h2", text: "Котловка — ограниченно работает" },
      {
        type: "p",
        text:
          "С 2023 года движение через Котловку ограничено. Для большинства легковых пассажирских маршрутов в 2026 году КПП фактически недоступен. Перед поездкой обязательно сверяйтесь с актуальной сводкой.",
      },
      { type: "h2", text: "Как выбрать КПП в день поездки" },
      {
        type: "ol",
        items: [
          "Зайдите на сайт ГТК Беларуси и проверьте текущее количество авто в очереди.",
          "Сравните: если на Каменном Логе >150 авто, рассмотрите Бенякони.",
          "Учитывайте день недели: пятница–воскресенье — точно Бенякони.",
          "Проверьте VSAT (литовская сторона) — иногда литовцы тормозят сильнее белорусов.",
          "Доверьтесь водителю — у нас данные обновляются каждые 30 минут.",
        ],
      },
      {
        type: "link",
        href: "https://mon.declarant.by/#/zone",
        label: "Электронная очередь в зонах ожидания — mon.declarant.by",
        description: "Лучший источник живой информации об очередях на границе в интернете: официальный сервис мониторинга регистрации транспорта в электронной очереди на КПП, обновляется в реальном времени. Если сайт не открывается — попробуйте зайти через VPN.",
      },
      { type: "liveQueue" },
      {
        type: "callout",
        text:
          "В ComfortLine водитель сам решает по дороге, какой КПП быстрее. Это часть фиксированной цены — никаких доплат за смену маршрута.",
      },
      { type: "h2", id: "official-sources", text: "Официальные источники" },
      { type: "link", href: "https://www.vsat.lt/en", label: "Государственная пограничная охрана Литвы (VSAT) — vsat.lt", description: "Актуальный статус КПП и условия въезда" },
      { type: "link", href: "https://www.lrmuitine.lt/web/guest/fiziniams-asmenims", label: "Таможня Литовской Республики — lrmuitine.lt", description: "Нормы провоза товаров, запреты, оформление для физических лиц" },
      { type: "link", href: "https://gtk.gov.by", label: "Государственный таможенный комитет Беларуси — gtk.gov.by", description: "Официальный сайт ГТК: нормативная база, правила ввоза и вывоза товаров" },
      { type: "link", href: "https://mon.declarant.by/#/zone", label: "Электронная очередь на КПП — mon.declarant.by", description: "Актуальные очереди на Каменном Логе, Бенякони и других КПП — обновляется в реальном времени." },
      { type: "info-notice", text: "Данные об очередях и статусе КПП могут изменяться. Всегда проверяйте актуальную информацию перед поездкой." },
    ],
    categoryEn: "Border",
    introEn:
      "Travelling from Minsk to Lithuania, you have three checkpoint options. The choice of crossing can save — or cost — up to 4 hours. Here is a breakdown based on our drivers' daily statistics.",
    bodyEn: [
      { type: "h2", text: "Kamenny Log — The Main Choice" },
      {
        type: "p",
        text: "The highest-traffic checkpoint. Good infrastructure, two lanes for private cars, a fee zone, café and toilets on both sides. Located on the M7 Minsk–Vilnius highway. The Lithuanian side is called Medininkai.",
      },
      {
        type: "ul",
        items: [
          "Pros: fast processing, well-developed infrastructure, convenient highway.",
          "Cons: the busiest crossing — can queue up to 6 hours at peak times.",
          "Best time: Tuesday–Wednesday, 6:00–11:00.",
        ],
      },
      { type: "h2", text: "Benyakoni — The Backup Option" },
      {
        type: "p",
        text: "A backup crossing 60 km south of Kamenny Log; the Lithuanian side is Šalčininkai. Less traffic but also lower throughput. The detour adds about 40 minutes to Vilnius.",
      },
      {
        type: "ul",
        items: [
          "Pros: shorter queue on weekends.",
          "Cons: longer route to Vilnius (~140 km instead of ~100 km from Kamenny Log), modest facilities.",
          "When to choose: Friday evening and Sunday afternoon when Kamenny Log is backed up.",
        ],
      },
      { type: "h2", text: "Kotlovka — Restricted Operation" },
      {
        type: "p",
        text: "Since 2023, traffic through Kotlovka has been restricted. For most private passenger routes in 2026 the checkpoint is effectively unavailable. Always check the latest situation before departure.",
      },
      { type: "h2", text: "How to Choose a Crossing on the Day of Travel" },
      {
        type: "ol",
        items: [
          "Check the Belarusian State Customs Committee website for the current queue length.",
          "Compare: if Kamenny Log shows more than 150 cars, consider Benyakoni.",
          "Factor in the day of the week: Friday–Sunday — strongly consider Benyakoni.",
          "Check VSAT (Lithuanian side) — Lithuanian processing sometimes takes longer than Belarusian.",
          "Trust your driver — our queue data is updated every 30 minutes.",
        ],
      },
      {
        type: "link",
        href: "https://mon.declarant.by/#/zone",
        label: "Electronic queue at waiting zones — mon.declarant.by",
        description: "The best live queue information available online: the official Belarusian customs monitoring service for vehicle registration in the electronic border-crossing queue, updated in real time. If the site doesn't load, try opening it with a VPN.",
      },
      { type: "liveQueue" },
      {
        type: "callout",
        text: "A ComfortLine driver decides en route which crossing is faster. This is part of the fixed price — no extra charge for a route change.",
      },
      { type: "h2", id: "official-sources", text: "Official Sources" },
      { type: "link", href: "https://www.vsat.lt/en", label: "Lithuanian State Border Guard Service (VSAT) — vsat.lt", description: "Current checkpoint status and entry conditions" },
      { type: "link", href: "https://www.lrmuitine.lt/web/guest/fiziniams-asmenims", label: "Lithuanian Customs — lrmuitine.lt", description: "Allowances, prohibitions and customs procedures for individuals" },
      { type: "link", href: "https://gtk.gov.by", label: "Belarusian State Customs Committee — gtk.gov.by", description: "Official customs regulations and import/export rules" },
      { type: "link", href: "https://mon.declarant.by/#/zone", label: "Live border queue — mon.declarant.by", description: "Real-time queue counts at Kamenny Log, Benyakoni and other checkpoints." },
      { type: "info-notice", text: "Queue data and checkpoint status may change at any time. Always check before travelling." },
    ],
    related: ["граница-беларусь-литва", "как-добраться-до-аэропорта-вильнюса"],
    ctaRoute: { label: "Заказать трансфер Минск — Вильнюс (VNO)", labelEn: "Book Minsk–Vilnius (VNO) transfer", path: "/трансфер-минск-вильнюс-аэропорт" },
  },

  {
    slug: "трансфер-с-детьми",
    slugEn: "family-airport-transfer-with-children",
    titleEn: "Airport Transfer with Children from Minsk: Family Travel Checklist",
    descriptionEn: "How to travel with kids from Minsk to the airport by private transfer: car seats, luggage, timing and tips for a smooth family journey.",
    ogSlug: "blog-transfer-s-detmi",
    title: "Трансфер с детьми из Минска в аэропорт: чек-лист для родителей",
    description:
      "Чек-лист для трансфера с детьми из Минска в аэропорты Европы: документы, кресла, питание в дороге, советы по границе. Опыт водителей ComfortLine.",
    intro:
      "Поездка с детьми в аэропорт — это всегда стресс. Дальняя дорога, граница, ночные смены и капризы. Ниже — выжимка из опыта наших водителей за 8 лет: как сделать трансфер комфортным для всех.",
    dateISO: "2026-03-20",
    readingMin: 6,
    category: "С детьми",
    tags: ["дети", "семья", "трансфер"],
    body: [
      { type: "h2", text: "Документы на ребёнка" },
      {
        type: "ul",
        items: [
          "Загранпаспорт ребёнка (даже грудничку).",
          "Шенгенская виза или вписан в визу родителя.",
          "Свидетельство о рождении — оригинал.",
          "Если ребёнок едет без обоих родителей — нотариальное согласие, переведённое и заверенное.",
          "Медицинская страховка с покрытием от 30 000 €.",
        ],
      },
      { type: "h2", text: "Детские кресла" },
      {
        type: "p",
        text:
          "По правилам Беларуси и ЕС дети до 12 лет ростом до 150 см обязательно перевозятся в специальном автокресле или с использованием бустера. ComfortLine предоставляет кресла бесплатно — нужно только указать возраст и вес ребёнка при бронировании.",
      },
      {
        type: "table",
        headers: ["Возраст", "Вес", "Тип удерживающего устройства"],
        rows: [
          ["0–1 год", "до 13 кг", "Автолюлька группы 0/0+"],
          ["1–4 года", "9–18 кг", "Автокресло группы 1"],
          ["3–7 лет", "15–25 кг", "Автокресло группы 2"],
          ["7–12 лет", "22–36 кг", "Бустер группы 3"],
        ],
      },
      { type: "h2", text: "Что взять в дорогу" },
      {
        type: "ul",
        items: [
          "Воду и перекус на 4–6 часов (на границе магазинов нет).",
          "Влажные салфетки, бумажные полотенца, мусорные пакеты.",
          "Сменную одежду на случай разлива/недомогания.",
          "Любимую игрушку и наушники для мультиков.",
          "Лёгкое одеяло — в авто работает кондиционер.",
          "Препараты от укачивания, если ребёнок чувствителен.",
        ],
      },
      { type: "h2", text: "Как пройти границу с ребёнком быстрее" },
      {
        type: "ul",
        items: [
          "Не выезжайте в пиковое время — пятница вечер и воскресенье день.",
          "Имейте все документы в одной папке.",
          "При сильной очереди попросите водителя узнать о \"семейной\" полосе — на некоторых КПП Литвы пропускают вне очереди при маленьких детях.",
          "Заранее покормите и сводите ребёнка в туалет.",
        ],
      },
      {
        type: "callout",
        text:
          "Закажите трансфер минивэном — больше места, ребёнку удобнее в кресле, есть куда поставить коляску. ComfortLine подаёт Hyundai Palisade или Kia Carnival.",
      },
    ],
    categoryEn: "Family Travel",
    introEn:
      "Travelling to the airport with children is always stressful — a long road, a border crossing, night departures and restless kids. Below is the distilled experience of our drivers over 8 years: how to make the transfer comfortable for everyone.",
    bodyEn: [
      { type: "h2", text: "Documents for Your Child" },
      {
        type: "ul",
        items: [
          "International passport for the child (including infants).",
          "Schengen visa, or the child is entered into a parent's visa.",
          "Birth certificate — original.",
          "If the child travels without both parents — notarised parental consent, translated and certified.",
          "Medical insurance with at least €30,000 coverage.",
        ],
      },
      { type: "h2", text: "Child Seats" },
      {
        type: "p",
        text: "Under Belarusian and EU law, children under 12 who are shorter than 150 cm must travel in an approved child restraint system or booster seat. ComfortLine provides seats free of charge — just specify the child's age and weight when booking.",
      },
      {
        type: "table",
        headers: ["Age", "Weight", "Restraint type"],
        rows: [
          ["0–1 year", "up to 13 kg", "Group 0/0+ infant carrier"],
          ["1–4 years", "9–18 kg", "Group 1 car seat"],
          ["3–7 years", "15–25 kg", "Group 2 car seat"],
          ["7–12 years", "22–36 kg", "Group 3 booster"],
        ],
      },
      { type: "h2", text: "What to Pack for the Journey" },
      {
        type: "ul",
        items: [
          "Water and snacks for 4–6 hours (no shops at the border).",
          "Wet wipes, paper towels, small bin bags.",
          "A change of clothes in case of spills or motion sickness.",
          "A favourite toy and headphones for videos.",
          "A light blanket — the car has air conditioning.",
          "Anti-nausea medication if your child is prone to motion sickness.",
        ],
      },
      { type: "h2", text: "How to Cross the Border with Children More Quickly" },
      {
        type: "ul",
        items: [
          "Avoid peak times — Friday evening and Sunday afternoon.",
          "Keep all documents in one folder.",
          "If the queue is long, ask the driver about a family lane — some Lithuanian checkpoints allow families with young children to go ahead of the queue.",
          "Feed the children and take a bathroom break before the border.",
        ],
      },
      {
        type: "callout",
        text: "Book a minivan — more space, a more comfortable seat for the child, room for a pram. ComfortLine provides the Hyundai Palisade or Kia Carnival.",
      },
    ],
    related: ["граница-беларусь-литва", "стоимость-трансфер-минск-варшава"],
    ctaRoute: { label: "Заказать минивэн с детским креслом", labelEn: "Book a minivan with child seat", path: "/трансфер-хендай-палисад" },
  },

  {
    slug: "как-добраться-до-аэропорта-вильнюса",
    slugEn: "how-to-get-to-vilnius-airport-from-minsk",
    titleEn: "How to Get from Minsk to Vilnius Airport (VNO): All Options 2026",
    descriptionEn: "Complete guide to reaching Vilnius Airport from Minsk in 2026: private transfer, bus, minibus — travel times, prices and an honest comparison.",
    ogSlug: "blog-kak-dobratsya-do-vno",
    title: "Как добраться из Минска в аэропорт Вильнюса (VNO) в 2026",
    description:
      "Все способы добраться из Минска в аэропорт Вильнюса (VNO) в 2026: трансфер, такси, автобус, личное авто. Сравнение цены, времени и удобства.",
    intro:
      "Аэропорт Вильнюса (VNO) — самый удобный международный хаб для жителей Беларуси. Из Минска до VNO ~175 км. Ниже сравниваем все варианты, как туда добраться.",
    dateISO: "2026-03-15",
    readingMin: 5,
    category: "Аэропорт",
    tags: ["VNO", "Вильнюс", "аэропорт"],
    body: [
      { type: "h2", text: "Сравнение вариантов" },
      {
        type: "table",
        headers: ["Способ", "Время", "Стоимость", "Комфорт"],
        rows: [
          ["Личный трансфер ComfortLine", "3–5 ч", "По запросу", "★★★★★"],
          ["Сборное такси", "4–6 ч", "Дешевле трансфера", "★★★"],
          ["Автобус Минск–Вильнюс", "5–7 ч", "Самый бюджетный", "★★"],
          ["Личное авто", "3–5 ч", "Топливо + парковка", "★★★★"],
        ],
      },
      { type: "h2", text: "Трансфер: плюсы и минусы" },
      {
        type: "p",
        text:
          "Индивидуальный трансфер — самый предсказуемый вариант. Подача от двери в назначенное время, заранее согласованная стоимость, водитель помогает на границе и с багажом. Подходит, если нужно быть уверенным во времени или едет семья с детьми.",
      },
      { type: "h2", text: "Сборное такси и автобус" },
      {
        type: "p",
        text:
          "Дешевле, но менее предсказуемо. Сборные машины ждут заполнения, могут собирать пассажиров по нескольким адресам в Минске. Автобусы ходят по расписанию, но останавливаются в общем потоке на КПП и могут стоять дольше из-за группового досмотра.",
      },
      { type: "h2", text: "Личное авто" },
      {
        type: "p",
        text:
          "Хороший вариант, если поездка короткая (3–5 дней). На длительные поездки добавляются расходы на парковку в аэропорту, топливо туда-обратно и страховку «Зелёная карта».",
      },
      {
        type: "callout",
        text:
          "Если для вас важно успеть на рейс без сюрпризов — индивидуальный трансфер ComfortLine. Заказ онлайн или по телефону, расчёт в ближайшее время.",
      },
    ],
    categoryEn: "Airport",
    introEn:
      "Vilnius Airport (VNO) is the most convenient international hub for Belarusian travellers. Minsk to VNO is around 175 km. Here we compare all the options for getting there.",
    bodyEn: [
      { type: "h2", text: "Options Compared" },
      {
        type: "table",
        headers: ["Option", "Time", "Price", "Comfort"],
        rows: [
          ["Private transfer ComfortLine", "3–5 h", "On request", "★★★★★"],
          ["Shared taxi", "4–6 h", "Less than private transfer", "★★★"],
          ["Bus Minsk–Vilnius", "5–7 h", "Most budget-friendly", "★★"],
          ["Own car", "3–5 h", "Fuel + parking", "★★★★"],
        ],
      },
      { type: "h2", text: "Private Transfer: Pros and Cons" },
      {
        type: "p",
        text: "A private transfer is the most predictable option. Door-to-door pick-up at an agreed time, a price confirmed in advance, and a driver who assists at the border and with luggage. Ideal when you need certainty about timing or are travelling as a family with children.",
      },
      { type: "h2", text: "Shared Taxi and Bus" },
      {
        type: "p",
        text: "Cheaper, but less predictable. Shared vehicles wait until full and may collect passengers at several addresses across Minsk. Buses run on a fixed schedule but stop in the common queue at the checkpoint and can be delayed by group passport inspections.",
      },
      { type: "h2", text: "Own Car" },
      {
        type: "p",
        text: "A good option for short trips of 3–5 days. For longer trips, costs add up: airport parking fees, fuel for the return journey and a Green Card insurance policy.",
      },
      {
        type: "callout",
        text: "If catching your flight without surprises matters — choose a private ComfortLine transfer. Book online or by phone; quote shortly.",
      },
    ],
    related: ["граница-беларусь-литва", "какой-кпп-выбрать", "трансфер-с-детьми"],
    ctaRoute: { label: "Заказать трансфер Минск — Вильнюс (VNO)", labelEn: "Book Minsk–Vilnius (VNO) transfer", path: "/трансфер-минск-вильнюс-аэропорт" },
  },

  {
    slug: "аэропорт-варшавы-вав",
    slugEn: "warsaw-chopin-airport-guide-from-belarus",
    titleEn: "Warsaw Chopin Airport (WAW): Complete Guide for Travelers from Belarus",
    descriptionEn: "Everything about Warsaw Chopin Airport for passengers from Belarus: terminals, check-in tips, transfer options and how to get there from Minsk.",
    ogSlug: "blog-airport-warsaw-waw",
    title: "Аэропорт Варшавы (WAW): полный гайд для пассажиров из Беларуси",
    description:
      "Всё об аэропорте Варшавы Фредерик Шопен (WAW) для путешественников из Беларуси: терминалы, регистрация, транзит, где встречают водители, Модлин (WMI) как альтернатива.",
    intro:
      "Аэропорт Варшавы имени Фредерика Шопена (WAW) — крупнейший хаб Польши и один из самых востребованных аэропортов для жителей Беларуси. Ниже — всё, что нужно знать перед вылетом.",
    dateISO: "2026-05-20",
    readingMin: 6,
    category: "Аэропорт",
    tags: ["WAW", "Варшава", "аэропорт", "Польша"],
    body: [
      { type: "h2", text: "Общая информация" },
      {
        type: "p",
        text: "WAW находится в 10 км к юго-западу от центра Варшавы. Расстояние от Минска — около 550–600 км, время в пути с трансфером — 7–9 часов с учётом границы. Аэропорт работает круглосуточно. Основные авиакомпании: LOT, Ryanair, Wizz Air, Lufthansa, Turkish Airlines.",
      },
      { type: "h2", text: "Терминалы: А и В" },
      {
        type: "p",
        text: "WAW имеет два пассажирских терминала, соединённых пешеходным переходом (5–7 минут): Терминал А — основной, международные и европейские рейсы; Терминал В — бюджетные перевозчики (Ryanair, Wizz Air). Перед поездкой проверьте на сайте авиакомпании, какой терминал ваш рейс.",
      },
      {
        type: "table",
        headers: ["Терминал", "Кто летает", "Регистрация (рекомендуется)"],
        rows: [
          ["Терминал А", "LOT, Lufthansa, Turkish, Emirates и др.", "За 2–3 часа до вылета"],
          ["Терминал В", "Ryanair, Wizz Air", "За 2 часа (онлайн-регистрация обязательна)"],
        ],
      },
      { type: "h2", text: "Зона встречи и трансфер" },
      {
        type: "p",
        text: "Зона прилёта и встречи находится на первом этаже обоих терминалов. Водители ComfortLine встречают с табличкой в зале прилёта. Парковка для подачи авто — P1 (Терминал А) и P2 (Терминал В), первые 15–20 минут бесплатно.",
      },
      { type: "h2", text: "Модлин (WMI) — альтернатива WAW" },
      {
        type: "p",
        text: "В 35 км севернее Варшавы находится аэропорт Варшава Модлин (WMI) — бюджетная альтернатива, которую активно использует Ryanair. Добраться туда из Минска дольше примерно на 30–40 минут. При бронировании трансфера важно уточнить: WAW или WMI.",
      },
      { type: "h2", text: "Советы перед вылетом" },
      {
        type: "ul",
        items: [
          "Онлайн-регистрация у Ryanair и Wizz Air обязательна — иначе сбор €50–55 за стойке.",
          "Приезжайте в аэропорт минимум за 2 часа (а для WAW → Терминал А — за 2,5).",
          "Табло с рейсами обновляется за 24 ч. Проверьте номер выхода (gate) онлайн накануне.",
          "Обмен валют в аэропорту невыгоден — лучше снять злотые заранее.",
          "Бесплатный Wi-Fi есть во всех зонах — работает стабильно.",
        ],
      },
      {
        type: "callout",
        text: "ComfortLine осуществляет трансферы к обоим аэропортам Варшавы — WAW и WMI. Водитель доставит от двери до зоны регистрации и при необходимости поможет с багажом.",
      },
    ],
    categoryEn: "Airport",
    introEn:
      "Warsaw Frederic Chopin Airport (WAW) is Poland's largest hub and one of the most popular airports for Belarusian travellers. Here is everything you need to know before your flight.",
    bodyEn: [
      { type: "h2", text: "General Information" },
      {
        type: "p",
        text: "WAW is located 10 km south-west of Warsaw city centre. Distance from Minsk — approximately 550–600 km; journey time by transfer is 7–9 hours including the border. The airport operates 24/7. Main airlines: LOT, Ryanair, Wizz Air, Lufthansa, Turkish Airlines.",
      },
      { type: "h2", text: "Terminals: A and B" },
      {
        type: "p",
        text: "WAW has two passenger terminals connected by a walkway (5–7 minutes): Terminal A — main terminal, international and European flights; Terminal B — budget carriers (Ryanair, Wizz Air). Before you travel, check your airline's website to confirm which terminal your flight uses.",
      },
      {
        type: "table",
        headers: ["Terminal", "Airlines", "Recommended check-in"],
        rows: [
          ["Terminal A", "LOT, Lufthansa, Turkish, Emirates etc.", "2–3 hours before departure"],
          ["Terminal B", "Ryanair, Wizz Air", "2 hours (online check-in mandatory)"],
        ],
      },
      { type: "h2", text: "Meet-and-Greet and Transfer" },
      {
        type: "p",
        text: "The arrivals and meet-and-greet zone is on the ground floor of both terminals. ComfortLine drivers meet passengers with a name board in the arrivals hall. Drop-off parking: P1 (Terminal A) and P2 (Terminal B); the first 15–20 minutes are free.",
      },
      { type: "h2", text: "Modlin (WMI) — An Alternative to WAW" },
      {
        type: "p",
        text: "Warsaw Modlin Airport (WMI) is 35 km north of Warsaw — a budget alternative used heavily by Ryanair. From Minsk it takes roughly 30–40 minutes longer. When booking a transfer, always confirm whether you mean WAW or WMI.",
      },
      { type: "h2", text: "Pre-Flight Tips" },
      {
        type: "ul",
        items: [
          "Online check-in is mandatory for Ryanair and Wizz Air — printing a boarding pass at the desk costs €50–55.",
          "Arrive at the airport at least 2 hours early (2.5 hours for WAW Terminal A).",
          "Flight boards update 24 h in advance. Check your gate online the evening before.",
          "Currency exchange at the airport is unfavourable — withdraw Polish złoty in advance.",
          "Free Wi-Fi is available throughout the airport and works reliably.",
        ],
      },
      {
        type: "callout",
        text: "ComfortLine transfers to both Warsaw airports — WAW and WMI. Your driver delivers you from door to check-in and assists with luggage.",
      },
    ],
    related: ["стоимость-трансфер-минск-варшава", "граница-беларусь-польша", "что-нельзя-ввозить-в-ес"],
    ctaRoute: { label: "Заказать трансфер Минск — Варшава (WAW)", labelEn: "Book Minsk–Warsaw (WAW) transfer", path: "/трансфер-минск-варшава-шопен" },
  },

  {
    slug: "граница-беларусь-польша",
    slugEn: "belarus-poland-border-crossing-guide",
    titleEn: "Belarus–Poland Border Crossing Guide 2026: Checkpoints, Documents & Wait Times",
    descriptionEn: "Practical guide to crossing the Belarus–Poland border in 2026: working checkpoints, required documents, typical wait times and practical tips.",
    ogSlug: "blog-granitsa-belarus-polsha",
    title: "Граница Беларусь–Польша в 2026: КПП, документы, очереди",
    description:
      "Гайд по пересечению границы Беларусь–Польша в 2026: рабочие КПП (Брест–Тересполь, Домачево, Брузги), документы, время ожидания, лайфхаки от водителей.",
    intro:
      "Граница Беларусь–Польша — второй по востребованности маршрут после литовского. Расстояние от Минска до Бреста — около 350 км, затем пересечение границы и дорога до Варшавы ещё 200 км. Рассказываем, как это устроено в 2026.",
    dateISO: "2026-05-10",
    disclaimerBanner: true,
    readingMin: 8,
    category: "Граница",
    tags: ["граница", "Польша", "Брест", "КПП", "Тересполь"],
    body: [
      { type: "h2", text: "Рабочие КПП в 2026" },
      {
        type: "p",
        text: "Для легковых автомобилей на белорусско-польской границе в 2026 году работают три основных пункта пропуска. Выбор КПП сильно влияет на время ожидания — учитывайте это при планировании поездки.",
      },
      {
        type: "table",
        headers: ["КПП (BY)", "КПП (PL)", "Маршрут", "Среднее время"],
        rows: [
          ["Брест (Тересполь)", "Тересполь", "М1 / Е30 → Варшава", "3–7 ч"],
          ["Домачево", "Словатыче", "Южный объезд", "1–3 ч"],
          ["Брузги", "Кузница Белостоцкая", "Гродно → Белосток", "2–5 ч"],
        ],
      },
      { type: "h2", text: "Брест–Тересполь: самый загруженный" },
      {
        type: "p",
        text: "Основной и самый известный переход. Находится прямо на трассе М1 (Берлинское шоссе). Здесь проходит основной поток легковых автомобилей, поэтому в пятницу–воскресенье и накануне праздников очереди могут достигать 6–10 часов. Рекомендуем ехать во вторник–четверг, рано утром.",
      },
      { type: "h2", text: "Домачево: тихая альтернатива" },
      {
        type: "p",
        text: "КПП Домачево находится в 43 км южнее Бреста. Маршрут длиннее на 60–80 км, но очереди — в 2–3 раза меньше. Отличный выбор, если попали в пятничный час пик. Дорога до Варшавы через Люблин добавляет около часа.",
      },
      { type: "h2", text: "Брузги (Гродно): для северного направления" },
      {
        type: "p",
        text: "Переход Брузги–Кузница идеально подходит для поездок из Гродно или тем, кто едет в Белосток, Гданьск или Трёхградье. Из Минска до Брузгов около 330 км. Очереди обычно умеренные, но в летний сезон могут вырастать.",
      },
      { type: "h2", text: "Документы для въезда в Польшу" },
      {
        type: "ul",
        items: [
          "Паспорт со сроком действия не менее 3 месяцев после предполагаемой даты выезда из ЕС.",
          "Шенгенская виза или действующий ВНЖ страны ЕС.",
          "Медицинская страховка (минимум 30 000 €, действующая во всех странах Шенгена).",
          "Подтверждение брони отеля или приглашение от принимающей стороны.",
          "Обратные билеты или подтверждение цели поездки.",
          "«Зелёная карта» — если едете на личном авто.",
        ],
      },
      { type: "h2", text: "Советы водителей ComfortLine" },
      {
        type: "ul",
        items: [
          "Планируйте поездку на вторник–четверг — очереди в 2–3 раза меньше, чем в пятницу.",
          "Держите все документы в одной папке — это реально ускоряет проверку.",
          "На Тересполе иногда спрашивают цель поездки устно — отвечайте чётко: туризм, бизнес, транзит.",
          "Мобильная связь A1/МТС работает до белорусской стороны, далее — польские операторы.",
          "Наличные злотые с собой — на польской стороне терминалы есть, но иногда «зависают».",
        ],
      },
      {
        type: "link",
        href: "https://mon.declarant.by/#/zone",
        label: "Электронная очередь в зонах ожидания — mon.declarant.by",
        description: "Лучший источник живой информации об очередях на границе в интернете: официальный сервис мониторинга регистрации транспорта в электронной очереди на белорусских КПП, включая Брест и Домачево, обновляется в реальном времени. Если сайт не открывается — попробуйте зайти через VPN.",
      },
      { type: "liveQueue" },
      {
        type: "callout",
        text: "Водители ComfortLine отслеживают ситуацию на обоих переходах онлайн. При необходимости — оперативно перестраиваем маршрут на Домачево, чтобы вы не теряли лишние часы.",
      },
      { type: "h2", id: "official-sources", text: "Официальные источники" },
      { type: "link", href: "https://www.granica.gov.pl/", label: "Служба охраны государственной границы Польши — granica.gov.pl", description: "Статус КПП, условия въезда, актуальная обстановка на границе" },
      { type: "link", href: "https://www.podatki.gov.pl/clo/clo-dla-podroznych/", label: "Таможня Польши — podatki.gov.pl", description: "Нормы беспошлинного ввоза для путешественников, запрещённые товары" },
      { type: "link", href: "https://gtk.gov.by", label: "Государственный таможенный комитет Беларуси — gtk.gov.by", description: "Официальный сайт ГТК: нормативная база, правила ввоза и вывоза товаров" },
      { type: "link", href: "https://mon.declarant.by/#/zone", label: "Электронная очередь на КПП — mon.declarant.by", description: "Актуальное количество автомобилей в электронной очереди на Бресте, Домачево и других КПП — обновляется в реальном времени." },
      { type: "info-notice", text: "Правила въезда, визовые требования и таможенные нормы могут изменяться без уведомления. Всегда проверяйте актуальную информацию на официальных сайтах перед поездкой." },
    ],
    categoryEn: "Border",
    introEn:
      "The Belarus–Poland border is the second busiest route after Lithuania. Minsk to Brest is around 350 km, then the border crossing and another 200 km to Warsaw. Here is how it works in 2026.",
    bodyEn: [
      { type: "h2", text: "Working Checkpoints in 2026" },
      {
        type: "p",
        text: "Three main checkpoints operate for private cars on the Belarus–Poland border in 2026. Your choice of crossing significantly affects waiting time — factor this into your travel planning.",
      },
      {
        type: "table",
        headers: ["Checkpoint (BY)", "Checkpoint (PL)", "Route", "Avg. wait time"],
        rows: [
          ["Brest (Terespol)", "Terespol", "M1 / E30 → Warsaw", "3–7 h"],
          ["Domachevo", "Sławatycze", "Southern bypass", "1–3 h"],
          ["Bruzgi", "Kuźnica Białostocka", "Grodno → Białystok", "2–5 h"],
        ],
      },
      { type: "h2", text: "Brest–Terespol: The Busiest Crossing" },
      {
        type: "p",
        text: "The main and best-known crossing, located directly on the M1 highway (the Berlin road). It handles the largest volume of private cars, so on Friday–Sunday and before public holidays queues can reach 6–10 hours. We recommend travelling Tuesday–Thursday, early in the morning.",
      },
      { type: "h2", text: "Domachevo: The Quiet Alternative" },
      {
        type: "p",
        text: "Domachevo is 43 km south of Brest. The route is 60–80 km longer, but queues are 2–3 times shorter. An excellent choice if you get caught in Friday rush hour. The route to Warsaw via Lublin adds about one hour.",
      },
      { type: "h2", text: "Bruzgi (Grodno): For the Northern Direction" },
      {
        type: "p",
        text: "The Bruzgi–Kuźnica crossing is ideal for travellers from Grodno, or for those heading to Białystok, Gdańsk or the Tri-City. Minsk to Bruzgi is about 330 km. Queues are usually moderate but can grow in summer.",
      },
      { type: "h2", text: "Documents for Entry into Poland" },
      {
        type: "ul",
        items: [
          "Passport valid for at least 3 months beyond your planned EU departure date.",
          "Schengen visa or a valid EU residence permit.",
          "Medical insurance (minimum €30,000, valid across all Schengen countries).",
          "Hotel booking confirmation or invitation from a host.",
          "Return tickets or confirmation of purpose of visit.",
          "Green Card — if driving your own vehicle.",
        ],
      },
      { type: "h2", text: "ComfortLine Driver Tips" },
      {
        type: "ul",
        items: [
          "Plan for Tuesday–Thursday — queues are 2–3 times shorter than on Fridays.",
          "Keep all documents in one folder — it genuinely speeds up the inspection.",
          "At Terespol, guards sometimes ask about the purpose of your visit verbally — answer clearly: tourism, business or transit.",
          "A1/MTS mobile signal works up to the Belarusian side; beyond that, Polish networks take over.",
          "Bring Polish złoty cash — card terminals exist on the Polish side but sometimes fail.",
        ],
      },
      {
        type: "link",
        href: "https://mon.declarant.by/#/zone",
        label: "Electronic queue at waiting zones — mon.declarant.by",
        description: "The best live queue information available online: the official Belarusian customs monitoring service for vehicle registration in the electronic border-crossing queue, including Brest and Domachevo, updated in real time. If the site doesn't load, try opening it with a VPN.",
      },
      { type: "liveQueue" },
      {
        type: "callout",
        text: "ComfortLine drivers monitor both crossings online. If needed, we reroute to Domachevo quickly so you don't lose unnecessary hours.",
      },
      { type: "h2", id: "official-sources", text: "Official Sources" },
      { type: "link", href: "https://www.granica.gov.pl/", label: "Polish Border Guard — granica.gov.pl", description: "Checkpoint status, entry conditions and current border situation" },
      { type: "link", href: "https://www.podatki.gov.pl/clo/clo-dla-podroznych/", label: "Polish Customs — podatki.gov.pl", description: "Duty-free allowances for travellers, prohibited goods" },
      { type: "link", href: "https://gtk.gov.by", label: "Belarusian State Customs Committee — gtk.gov.by", description: "Official customs regulations and import/export rules" },
      { type: "link", href: "https://mon.declarant.by/#/zone", label: "Live border queue — mon.declarant.by", description: "Current vehicle queue counts at Brest, Domachevo and other checkpoints, updated in real time." },
      { type: "info-notice", text: "Entry requirements and customs allowances may change without notice. Always check official sources before travelling." },
    ],
    related: ["стоимость-трансфер-минск-варшава", "что-нельзя-ввозить-в-ес", "аэропорт-варшавы-вав"],
    ctaRoute: { label: "Заказать трансфер Минск — Варшава", labelEn: "Book Minsk–Warsaw transfer", path: "/трансфер-минск-варшава-шопен" },
  },

  {
    slug: "аэропорт-риги-rix",
    slugEn: "riga-airport-guide-from-minsk-belarus",
    titleEn: "Riga Airport (RIX) Guide for Passengers from Minsk & Belarus",
    descriptionEn: "Complete guide to Riga Airport for travelers from Belarus: terminals, how to get there from Minsk, check-in tips and private transfer options.",
    ogSlug: "blog-airport-riga-rix",
    title: "Аэропорт Риги (RIX): гайд для пассажиров из Беларуси",
    description:
      "Всё об аэропорте Риги (RIX) для путешественников из Беларуси: терминал, авиакомпании, зона встречи, парковка, советы по трансферу Минск–Рига.",
    intro:
      "Международный аэропорт Риги (RIX) — третий по размеру хаб Балтии после Вильнюса и Таллина. Для жителей Беларуси он интересен рейсами airBaltic и другими направлениями, которых нет в Вильнюсе. Расстояние от Минска — около 470 км.",
    dateISO: "2026-04-28",
    readingMin: 5,
    category: "Аэропорт",
    tags: ["RIX", "Рига", "аэропорт", "Латвия"],
    body: [
      { type: "h2", text: "Почему Рига, а не Вильнюс?" },
      {
        type: "p",
        text: "Вильнюс ближе (175 км против 470 км), но Рига выигрывает по маршрутной сети: airBaltic летит из Риги в более чем 80 направлений. Рига лучше подходит для перелётов в скандинавские страны, Исландию, Канаду и некоторые азиатские направления, которых нет в VNO.",
      },
      { type: "h2", text: "Структура аэропорта" },
      {
        type: "p",
        text: "RIX — компактный аэропорт с одним терминалом и тремя пирсами (A, B, C). Пирс A — некоммерческие и региональные рейсы. Пирс B — Шенгенские рейсы. Пирс C — рейсы за пределы Шенгена. Навигация простая: указатели дублируются на латышском, английском и русском языках.",
      },
      {
        type: "table",
        headers: ["Авиакомпания", "Ключевые направления"],
        rows: [
          ["airBaltic", "Хельсинки, Амстердам, Лондон, Берлин, Дубай, Торонто"],
          ["Ryanair", "Бристоль, Дублин, Мадрид, Милан, Афины"],
          ["Wizz Air", "Вена, Берлин, Рим, Барселона"],
          ["Finnair", "Хельсинки (транзит по всему миру)"],
        ],
      },
      { type: "h2", text: "Зона прилёта и встречи" },
      {
        type: "p",
        text: "Зона встречи находится на первом этаже, выход из зоны прилёта — прямо в общий зал. Водители ComfortLine встречают с табличкой у выхода из таможенной зоны. Ориентир: кофейня-сеть Coffee & Chocolate у главного выхода.",
      },
      { type: "h2", text: "Советы перед вылетом" },
      {
        type: "ul",
        items: [
          "airBaltic требует онлайн-регистрацию — без неё сбор у стойки около €30.",
          "Ручная кладь: airBaltic разрешает только маленькую сумку бесплатно, за чемодан в салон — доплата.",
          "Бесплатный WiFi в аэропорту — подключается через SMS-верификацию (нужен латвийский или роуминговый номер).",
          "Магазины Duty Free — открываются за зоной паспортного контроля, цены на алкоголь заметно ниже рижских.",
          "Аэроэкспресс из центра Риги: автобус №22 ходит каждые 10–15 минут, 30 минут в пути.",
        ],
      },
      { type: "h2", text: "Трансфер Минск–Рига: что важно знать" },
      {
        type: "p",
        text: "Маршрут Минск–Рига проходит через границу Беларусь–Латвия (КПП Григоровщина / Патерниеки). Это менее загруженный переход, чем литовские — среднее время прохождения в будни 1,5–3 часа. Общее время в пути 7–9 часов. Рекомендуем выезжать с запасом 3–4 часа до вылета.",
      },
      {
        type: "callout",
        text: "ComfortLine выполняет трансферы в аэропорт Риги (RIX). Подача от двери, помощь с багажом, актуальная информация по очереди на границе — всё включено.",
      },
    ],
    categoryEn: "Airport",
    introEn:
      "Riga International Airport (RIX) is the third-largest hub in the Baltics after Vilnius and Tallinn. For Belarusian travellers it is attractive for airBaltic routes and destinations not available from Vilnius. Distance from Minsk — around 470 km.",
    bodyEn: [
      { type: "h2", text: "Why Riga Rather than Vilnius?" },
      {
        type: "p",
        text: "Vilnius is closer (175 km vs 470 km), but Riga wins on route network: airBaltic flies from Riga to more than 80 destinations. Riga is better for flights to Scandinavia, Iceland, Canada and certain Asian routes not available from VNO.",
      },
      { type: "h2", text: "Airport Layout" },
      {
        type: "p",
        text: "RIX is a compact single-terminal airport with three piers (A, B, C). Pier A — non-commercial and regional flights. Pier B — Schengen flights. Pier C — non-Schengen flights. Wayfinding is straightforward: signs are in Latvian, English and Russian.",
      },
      {
        type: "table",
        headers: ["Airline", "Key destinations"],
        rows: [
          ["airBaltic", "Helsinki, Amsterdam, London, Berlin, Dubai, Toronto"],
          ["Ryanair", "Bristol, Dublin, Madrid, Milan, Athens"],
          ["Wizz Air", "Vienna, Berlin, Rome, Barcelona"],
          ["Finnair", "Helsinki (global connections)"],
        ],
      },
      { type: "h2", text: "Arrivals and Meet-and-Greet" },
      {
        type: "p",
        text: "The meet-and-greet zone is on the ground floor; the arrivals exit leads directly into the main hall. ComfortLine drivers meet passengers with a name board at the customs exit. Landmark: the Coffee & Chocolate café near the main exit.",
      },
      { type: "h2", text: "Pre-Flight Tips" },
      {
        type: "ul",
        items: [
          "airBaltic requires online check-in — without it there is an approximately €30 desk fee.",
          "Carry-on: airBaltic allows only a small bag for free; a cabin bag incurs an extra charge.",
          "Free airport Wi-Fi connects via SMS verification (requires a Latvian or roaming number).",
          "Duty Free shops open after passport control — alcohol prices are noticeably lower than in Riga city.",
          "City bus No. 22 to Riga centre runs every 10–15 minutes; journey time 30 minutes.",
        ],
      },
      { type: "h2", text: "Minsk–Riga Transfer: Key Facts" },
      {
        type: "p",
        text: "The Minsk–Riga route passes through the Belarus–Latvia border (checkpoints Grigorovshchina / Patarnieki). This is a less congested crossing than the Lithuanian ones — average waiting time on weekdays is 1.5–3 hours. Total journey time is 7–9 hours. We recommend departing 3–4 hours before your flight.",
      },
      {
        type: "callout",
        text: "ComfortLine transfers to Riga Airport (RIX). Door-to-door pick-up, luggage assistance and live border queue information — all included.",
      },
    ],
    related: ["граница-беларусь-польша", "что-нельзя-ввозить-в-ес", "как-добраться-до-аэропорта-вильнюса"],
    ctaRoute: { label: "Заказать трансфер Минск — Рига (RIX)", labelEn: "Book Minsk–Riga (RIX) transfer", path: "/трансфер-минск-рига-аэропорт" },
  },

  {
    slug: "автобус-минск-варшава-модлин-вильнюс",
    slugEn: "minsk-warsaw-vilnius-bus-vs-private-transfer",
    titleEn: "Minsk to Warsaw & Vilnius Airport: Bus vs Private Transfer Comparison 2026",
    descriptionEn: "Comparing buses, minibuses and private transfers from Minsk to Warsaw (Chopin, Modlin) and Vilnius airports in 2026: prices, comfort and wait times.",
    ogSlug: "blog-avtobus-minsk-varshava-modlin-vilnius",
    title: "Автобус и маршрутка Минск — Варшава (Модлин, Шопен) и Вильнюс: всё о поездке в аэропорт в 2026",
    description:
      "Расписание и цены автобусов и маршруток Минск — Варшава (аэропорты Модлин WMI и Шопен WAW) и Минск — Вильнюс в 2026. Сравнение с частным трансфером: что выбрать для поездки на самолёт.",
    intro:
      "Большинство пассажиров, летящих через Варшаву или Вильнюс, первым делом ищут автобус или маршрутку — дёшево и привычно. Но для поездки именно в аэропорт у этого варианта есть несколько критических нюансов, которые стоит знать заранее, чтобы не опоздать на рейс.",
    dateISO: "2026-06-01",
    readingMin: 11,
    category: "Советы",
    tags: ["автобус", "маршрутка", "Минск Варшава", "Модлин", "Вильнюс", "аэропорт", "трансфер", "Шопен", "как добраться", "WMI", "WAW", "VNO"],
    body: [
      { type: "h2", text: "Автобусы и маршрутки Минск — Варшава: текущие варианты" },
      {
        type: "p",
        text: "Из Минска в Варшаву регулярно ходят рейсовые автобусы и частные маршрутки. Большинство маршрутов идут на варшавский автовокзал Zachodnia или в центр города — и это ключевой момент, если вы летите из аэропорта.",
      },
      {
        type: "table",
        headers: ["Перевозчик", "Тип", "Время в пути", "Цена от", "Багаж"],
        rows: [
          ["Ecolines", "Рейсовый автобус", "8–10 ч", "25–40 €", "1 чемодан включён"],
          ["Lux Express", "Рейсовый автобус", "8–10 ч", "25–45 €", "1 чемодан включён"],
          ["Частные маршрутки", "Микроавтобус", "7–9 ч", "20–35 €", "Ограничен, зависит от водителя"],
          ["ComfortLine (трансфер)", "Частный автомобиль", "6–8 ч", "По запросу", "Без ограничений"],
        ],
      },
      {
        type: "callout",
        text: "Автобусы Минск — Варшава прибывают на автовокзал Zachodnia в центре города. До аэропорта Шопен (WAW) оттуда 30–40 мин на городском автобусе или такси. До Модлина (WMI) — отдельный автобус Modlinbus, ещё 45–60 мин. Это критически важно при расчёте времени выезда.",
      },
      { type: "h2", text: "Минск — аэропорт Модлин (WMI): как добраться на автобусе" },
      {
        type: "p",
        text: "Аэропорт Варшава Модлин (WMI) находится в 35 км к северу от центра Варшавы. Прямых автобусов из Беларуси до Модлина нет — это важно понимать при планировании поездки.",
      },
      {
        type: "ul",
        items: [
          "Шаг 1: автобус или маршрутка Минск → Варшава (автовокзал Zachodnia или центр). Время: 7–10 часов.",
          "Шаг 2: переезд в Варшаве до станции Dworzec Centralny или Młociny на метро/такси. Время: 20–40 мин.",
          "Шаг 3: автобус Modlinbus до аэропорта WMI. Время: 45–60 мин, ходит каждые 30–60 мин.",
          "Итого в пути: 9–12 часов + 2 пересадки с чемоданами.",
        ],
      },
      {
        type: "p",
        text: "При этом Modlinbus работает не круглосуточно — ранние и поздние рейсы могут не совпасть с расписанием. Если ваш самолёт улетает в 6:00–8:00 утра или прилетает после 22:00, велик шанс, что автобус Modlinbus уже не ходит.",
      },
      { type: "h2", text: "Минск — аэропорт Варшавы Шопен (WAW): варианты на автобусе" },
      {
        type: "p",
        text: "Аэропорт Варшавы Шопен (WAW) расположен в 8 км от центра — добраться проще, чем до Модлина. От автовокзала Zachodnia до WAW курсирует городской автобус 175 и экспресс-автобус, время в пути 20–35 мин.",
      },
      {
        type: "ul",
        items: [
          "Автобус 175 (городской) от Zachodnia до WAW: ~30 мин, билет ~1,5 €.",
          "Такси от автовокзала до WAW: 15–20 мин, 15–25 €.",
          "Минимальный запас времени от выхода из автобуса до начала регистрации: 2,5–3 часа.",
          "Рейсовые автобусы часто задерживаются на границе — закладывайте буфер не менее 3–4 часов.",
        ],
      },
      { type: "h2", text: "Минск — аэропорт Вильнюса (VNO): автобус и маршрутка" },
      {
        type: "p",
        text: "Вильнюс ближе к Минску — около 170–180 км. Маршруток и рейсовых автобусов на этом направлении больше, конкуренция выше, цены ниже.",
      },
      {
        type: "table",
        headers: ["Вариант", "Время в пути", "Цена от", "До аэропорта VNO"],
        rows: [
          ["Ecolines (Минск → Вильнюс)", "3–4 ч", "10–20 €", "Автовокзал в центре, такси до VNO 15 мин / 10–12 €"],
          ["Lux Express (Минск → Вильнюс)", "3–4 ч", "12–22 €", "Автовокзал, такси или автобус №1 до VNO"],
          ["Частные маршрутки", "2,5–3,5 ч", "10–18 €", "Иногда довозят до аэропорта — уточняйте"],
          ["ComfortLine (трансфер)", "2,5–3 ч", "По запросу", "Прямо к терминалу вылета"],
        ],
      },
      {
        type: "p",
        text: "Аэропорт Вильнюса находится в 5 км от центра города. Городской автобус №1 довезёт от автовокзала за 20–25 мин. Такси — 10–15 €. Это самый реалистичный маршрут «на автобусе» из трёх направлений.",
      },
      { type: "h2", text: "Частный трансфер vs автобус: честное сравнение" },
      {
        type: "p",
        text: "Автобус и маршрутка — нормальный выбор для поездки в город. Для поездки в аэропорт на конкретный рейс картина другая:",
      },
      {
        type: "table",
        headers: ["Критерий", "Автобус / маршрутка", "Частный трансфер"],
        rows: [
          ["Откуда подача", "Фиксированная остановка", "От вашей двери"],
          ["Куда доставка", "Автовокзал в центре", "Прямо к терминалу"],
          ["Расписание", "Фиксированное, нельзя перенести", "Под ваш рейс"],
          ["Задержка на границе", "Ждут все пассажиры вместе", "Водитель контролирует ситуацию"],
          ["Чемоданы", "Ограничение по количеству и размеру", "Любой объём багажа"],
          ["Дети до 12 лет", "Без детского кресла", "Детское кресло по запросу"],
          ["Домашние животные", "Как правило, запрещены", "Разрешены"],
          ["Конфиденциальность", "Общий салон", "Только ваша группа"],
          ["Гарантия посадки на рейс", "Нет (задержки часты)", "Отслеживаем границу"],
          ["Цена за группу 3–4 человека", "30–80 € × кол-во мест", "По запросу"],
        ],
      },
      { type: "h2", text: "Когда автобус точно не подходит для поездки в аэропорт" },
      {
        type: "ul",
        items: [
          "Ранний вылет (до 8:00) или поздний прилёт (после 22:00) — автобусы не совпадают по расписанию, Modlinbus не ходит.",
          "Вы летите через Модлин (WMI) — 2 пересадки с чемоданами делают поездку очень рискованной.",
          "Едут 2 и более человека — суммарная цена автобусных билетов сопоставима с трансфером.",
          "Много багажа — чемоданы, лыжное снаряжение, детские коляски.",
          "С детьми до 12 лет — в автобусе нет детских кресел.",
          "Домашние животные — большинство перевозчиков не пропускают.",
          "Стыковочный рейс с ограниченным временем — задержка на границе закрывает вылет.",
          "Важная деловая поездка — опоздание на рейс означает срыв встреч.",
        ],
      },
      { type: "h2", text: "Что подготовить для поездки в аэропорт Варшавы или Вильнюса" },
      {
        type: "h3",
        text: "Документы",
      },
      {
        type: "ul",
        items: [
          "Загранпаспорт — срок действия не менее 3 месяцев после даты возвращения.",
          "Шенгенская виза или действующий ВНЖ страны ЕС.",
          "Посадочный талон — распечатанный или в приложении авиакомпании (скачайте офлайн-версию).",
          "Медицинская страховка на весь период поездки (минимум 30 000 €).",
          "Бронирование отеля или приглашение (могут спросить на границе).",
        ],
      },
      {
        type: "h3",
        text: "Тайминг: когда выезжать из Минска",
      },
      {
        type: "table",
        headers: ["Направление", "Время в пути", "Рекомендуемый запас", "Выезд при вылете в 12:00"],
        rows: [
          ["Минск → Модлин (WMI)", "9–12 ч (+ 2 пересадки)", "4 ч до вылета", "Накануне вечером"],
          ["Минск → Шопен (WAW)", "8–10 ч (+такси/автобус)", "3 ч до вылета", "01:00–02:00 ночи"],
          ["Минск → Вильнюс (VNO)", "3–4 ч (+ такси 15 мин)", "2,5 ч до вылета", "05:30–06:00"],
          ["Трансфер ComfortLine → WAW", "6–8 ч door-to-door", "2 ч до вылета", "02:00–04:00"],
          ["Трансфер ComfortLine → WMI", "6–8 ч door-to-door", "2 ч до вылета", "02:00–04:00"],
          ["Трансфер ComfortLine → VNO", "2,5–3 ч door-to-door", "2 ч до вылета", "07:00–07:30"],
        ],
      },
      {
        type: "h3",
        text: "Что взять в поездку",
      },
      {
        type: "ul",
        items: [
          "Наличные злотые (Польша) или евро/литы (Литва) — на такси, кофе, непредвиденные расходы.",
          "Польская/литовская SIM или роуминг — для навигации и связи после пересечения границы.",
          "Зарядка и пауэрбанк — дорога занимает 3–10 часов.",
          "Вода и еда в дорогу — особенно важно с детьми и при ранних выездах.",
          "Подушка и плед — для ночных поездок.",
          "Страховой полис в приложении или распечатанный.",
        ],
      },
      { type: "h2", text: "Частые вопросы о поездке в аэропорт Варшавы и Вильнюса" },
      {
        type: "h3",
        text: "Можно ли уехать на маршрутке и успеть на утренний рейс?",
      },
      {
        type: "p",
        text: "Зависит от аэропорта. На Вильнюс (VNO) — да, если вылет не раньше 10:00 и граница пройдёт быстро. На Варшаву Шопен (WAW) — рискованно при вылете раньше 13:00. На Модлин (WMI) — крайне рискованно при любом утреннем рейсе из-за 2 пересадок.",
      },
      {
        type: "h3",
        text: "Что будет, если автобус задержится на границе?",
      },
      {
        type: "p",
        text: "Автобус ждёт пока все пассажиры пройдут паспортный контроль — это может занять 1–4 часа. Пересесть на другой транспорт в середине очереди практически невозможно. Водитель частного трансфера отслеживает загруженность КПП и при необходимости перестраивается на другой пункт пропуска.",
      },
      {
        type: "h3",
        text: "Дешевле ли автобус, если едем вдвоём?",
      },
      {
        type: "p",
        text: "До Вильнюса — да, автобус выгоднее. До Варшавы вдвоём автобус стоит 50–90 €, плюс такси до аэропорта 15–25 € × 2 + риск задержки. Трансфер на двоих до WAW — цена по запросу, но без пересадок, от двери до терминала. При двух и более пассажирах разница часто оказывается меньше, чем кажется.",
      },
      {
        type: "h3",
        text: "Везут ли маршрутки прямо в аэропорт?",
      },
      {
        type: "p",
        text: "Некоторые частные маршрутки предлагают доставку до аэропорта Вильнюса — уточняйте при бронировании. До Варшавы такой опции практически нет: маршрутки идут в центр, дальше самостоятельно. Это стоит уточнять у конкретного перевозчика заранее.",
      },
      {
        type: "callout",
        text: "ComfortLine выполняет трансферы из любой точки Беларуси прямо к терминалу вылета — Модлин, Шопен или Вильнюс. Выезд в удобное вам время, детские кресла, помощь с багажом и актуальная информация по очереди на границе. Цена фиксирована — никаких сюрпризов.",
      },
    ],
    categoryEn: "Travel Tips",
    introEn:
      "Most passengers flying through Warsaw or Vilnius start by searching for a bus or minibus — cheap and familiar. But for a trip to the airport specifically, this option has several critical nuances worth knowing in advance to avoid missing your flight.",
    bodyEn: [
      { type: "h2", text: "Buses and Minibuses Minsk–Warsaw: Current Options" },
      {
        type: "p",
        text: "Scheduled buses and private minibuses run regularly from Minsk to Warsaw. Most routes terminate at Warsaw's Zachodnia bus station or the city centre — and this is a crucial point if you are flying from an airport.",
      },
      {
        type: "table",
        headers: ["Operator", "Type", "Journey time", "From", "Luggage"],
        rows: [
          ["Ecolines", "Scheduled bus", "8–10 h", "€25–40", "1 suitcase included"],
          ["Lux Express", "Scheduled bus", "8–10 h", "€25–45", "1 suitcase included"],
          ["Private minibuses", "Minibus", "7–9 h", "€20–35", "Limited, driver-dependent"],
          ["ComfortLine (transfer)", "Private car", "6–8 h", "On request", "No limits"],
        ],
      },
      {
        type: "callout",
        text: "Minsk–Warsaw buses arrive at Zachodnia bus station in the city centre. From there to Chopin Airport (WAW): 30–40 min by city bus or taxi. To Modlin (WMI): a separate Modlinbus, another 45–60 min. This is critical when calculating your departure time.",
      },
      { type: "h2", text: "Minsk to Modlin Airport (WMI): Getting There by Bus" },
      {
        type: "p",
        text: "Warsaw Modlin Airport (WMI) is 35 km north of Warsaw city centre. There are no direct buses from Belarus to Modlin — this is important to understand when planning your trip.",
      },
      {
        type: "ul",
        items: [
          "Step 1: bus or minibus Minsk → Warsaw (Zachodnia or city centre). Time: 7–10 hours.",
          "Step 2: travel within Warsaw to Dworzec Centralny or Młociny by metro/taxi. Time: 20–40 min.",
          "Step 3: Modlinbus to WMI airport. Time: 45–60 min; runs every 30–60 min.",
          "Total journey: 9–12 hours + 2 connections with luggage.",
        ],
      },
      {
        type: "p",
        text: "Modlinbus does not operate around the clock — early-morning and late-night flights may not align with the timetable. If your plane departs at 6:00–8:00 or lands after 22:00, Modlinbus may no longer be running.",
      },
      { type: "h2", text: "Minsk to Chopin Airport Warsaw (WAW): Bus Options" },
      {
        type: "p",
        text: "Warsaw Chopin Airport (WAW) is 8 km from the city centre — easier to reach than Modlin. City bus 175 and the express bus run from Zachodnia to WAW, journey time 20–35 min.",
      },
      {
        type: "ul",
        items: [
          "Bus 175 (city) from Zachodnia to WAW: ~30 min, ticket ~€1.50.",
          "Taxi from bus station to WAW: 15–20 min, €15–25.",
          "Minimum buffer from stepping off the bus to check-in opening: 2.5–3 hours.",
          "Scheduled buses often get delayed at the border — allow a buffer of at least 3–4 hours.",
        ],
      },
      { type: "h2", text: "Minsk to Vilnius Airport (VNO): Bus and Minibus" },
      {
        type: "p",
        text: "Vilnius is closer to Minsk — about 170–180 km. There are more minibuses and scheduled buses on this route, more competition and lower prices.",
      },
      {
        type: "table",
        headers: ["Option", "Journey time", "From", "To VNO airport"],
        rows: [
          ["Ecolines (Minsk → Vilnius)", "3–4 h", "€10–20", "City bus station; taxi to VNO 15 min / €10–12"],
          ["Lux Express (Minsk → Vilnius)", "3–4 h", "€12–22", "Bus station, taxi or bus No.1 to VNO"],
          ["Private minibuses", "2.5–3.5 h", "€10–18", "Some go to the airport — confirm when booking"],
          ["ComfortLine (transfer)", "2.5–3 h", "On request", "Directly to the departure terminal"],
        ],
      },
      {
        type: "p",
        text: "Vilnius Airport is 5 km from the city centre. City bus No. 1 from the bus station takes 20–25 min. Taxi — €10–15. This is the most realistic 'bus option' of the three directions.",
      },
      { type: "h2", text: "Private Transfer vs Bus: An Honest Comparison" },
      {
        type: "p",
        text: "A bus or minibus is a perfectly reasonable choice for travelling to a city. For travelling to a specific airport for a specific flight, the picture changes:",
      },
      {
        type: "table",
        headers: ["Criterion", "Bus / minibus", "Private transfer"],
        rows: [
          ["Pick-up point", "Fixed stop", "From your door"],
          ["Drop-off point", "City bus station", "Directly to the terminal"],
          ["Schedule", "Fixed, cannot be changed", "Matched to your flight"],
          ["Border delay", "All passengers wait together", "Driver monitors the situation"],
          ["Luggage", "Quantity and size restrictions", "Any amount of luggage"],
          ["Children under 12", "No child seats", "Child seat on request"],
          ["Pets", "Generally prohibited", "Allowed"],
          ["Privacy", "Shared cabin", "Your group only"],
          ["Guarantee of making the flight", "None (delays are frequent)", "We track the border"],
          ["Price for a group of 3–4", "€30–80 × per seat", "On request"],
        ],
      },
      { type: "h2", text: "When a Bus Is Definitely Not Suitable for Airport Travel" },
      {
        type: "ul",
        items: [
          "Early departure (before 08:00) or late arrival (after 22:00) — buses don't align with timetables, Modlinbus doesn't run.",
          "You are flying via Modlin (WMI) — 2 connections with luggage make the journey very risky.",
          "Two or more passengers — the combined cost of bus tickets is comparable to a transfer.",
          "Heavy luggage — suitcases, ski equipment, pushchairs.",
          "With children under 12 — buses have no child seats.",
          "Pets — most operators don't allow them.",
          "Connecting flight with limited time — a border delay cancels your flight.",
          "An important business trip — missing a flight means missing meetings.",
        ],
      },
      { type: "h2", text: "What to Prepare for Your Airport Journey" },
      { type: "h3", text: "Documents" },
      {
        type: "ul",
        items: [
          "International passport — valid for at least 3 months beyond your return date.",
          "Schengen visa or valid EU residence permit.",
          "Boarding pass — printed or in the airline app (download the offline version).",
          "Medical insurance for the full trip duration (minimum €30,000).",
          "Hotel booking or invitation (may be requested at the border).",
        ],
      },
      { type: "h3", text: "Timing: When to Leave Minsk" },
      {
        type: "table",
        headers: ["Route", "Journey time", "Recommended buffer", "Departure for a 12:00 flight"],
        rows: [
          ["Minsk → Modlin (WMI)", "9–12 h (+ 2 connections)", "4 h before departure", "Evening before"],
          ["Minsk → Chopin (WAW)", "8–10 h (+taxi/bus)", "3 h before departure", "01:00–02:00"],
          ["Minsk → Vilnius (VNO)", "3–4 h (+ taxi 15 min)", "2.5 h before departure", "05:30–06:00"],
          ["ComfortLine transfer → WAW", "6–8 h door-to-door", "2 h before departure", "02:00–04:00"],
          ["ComfortLine transfer → WMI", "6–8 h door-to-door", "2 h before departure", "02:00–04:00"],
          ["ComfortLine transfer → VNO", "2.5–3 h door-to-door", "2 h before departure", "07:00–07:30"],
        ],
      },
      { type: "h3", text: "What to Pack" },
      {
        type: "ul",
        items: [
          "Polish złoty (Poland) or euros (Lithuania) in cash — for a taxi, coffee and unexpected costs.",
          "Polish/Lithuanian SIM or roaming — for navigation and calls after crossing the border.",
          "Charger and power bank — the journey takes 3–10 hours.",
          "Water and food — especially important with children and for early-morning departures.",
          "Travel pillow and blanket — for night journeys.",
          "Insurance policy in the app or printed.",
        ],
      },
      { type: "h2", text: "Frequently Asked Questions" },
      { type: "h3", text: "Can I take a minibus and make an early-morning flight?" },
      {
        type: "p",
        text: "It depends on the airport. For Vilnius (VNO) — yes, if the flight is no earlier than 10:00 and the border is quick. For Warsaw Chopin (WAW) — risky for departures before 13:00. For Modlin (WMI) — extremely risky for any morning flight due to 2 connections.",
      },
      { type: "h3", text: "What happens if the bus gets delayed at the border?" },
      {
        type: "p",
        text: "The bus waits until every passenger has cleared passport control — this can take 1–4 hours. Switching to another vehicle in the middle of the queue is virtually impossible. A private transfer driver monitors checkpoint congestion and can reroute to a different crossing if necessary.",
      },
      { type: "h3", text: "Is a bus cheaper if there are two of us?" },
      {
        type: "p",
        text: "To Vilnius — yes, the bus is cheaper. To Warsaw for two, two bus tickets come to €50–90 plus taxi to the airport €15–25 each, plus the risk of delay. A transfer for two to WAW is available on request — no connections, door to terminal. For two or more passengers the price difference is often smaller than it appears.",
      },
      { type: "h3", text: "Do minibuses go directly to the airport?" },
      {
        type: "p",
        text: "Some private minibuses offer drop-off at Vilnius Airport — confirm when booking. For Warsaw, this option barely exists: minibuses go to the city centre, from where you continue independently. Always check with the specific operator in advance.",
      },
      {
        type: "callout",
        text: "ComfortLine transfers from any point in Belarus directly to the departure terminal — Modlin, Chopin or Vilnius. Departure at a time convenient for you, child seats, luggage assistance and live border queue information. Fixed price — no surprises.",
      },
    ],
    related: ["стоимость-трансфер-минск-варшава", "аэропорт-варшавы-вав", "как-добраться-до-аэропорта-вильнюса"],
    ctaRoute: { label: "Рассчитать стоимость трансфера в аэропорт", labelEn: "Get a transfer quote to the airport", path: "/трансфер-минск-варшава-модлин" },
  },
  {
    slug: "виза-свободный-въезд-в-беларусь-2026",
    slugEn: "visa-free-entry-belarus-2026",
    titleEn: "Visa-Free Entry to Belarus 2026: Complete Guide for European Citizens",
    descriptionEn: "Which European countries can enter Belarus without a visa in 2026, which border checkpoints to use, required documents, and private transfer options.",
    ogSlug: "blog-visa-free-belarus-2026",
    title: "Безвизовый въезд в Беларусь в 2026: полный гайд для граждан Европы",
    description:
      "Кто может въехать в Беларусь без визы в 2026 году, через какие КПП, какие документы нужны — и почему частный трансфер это самый удобный способ добраться. Официальные источники + советы от перевозчика.",
    intro:
      "Беларусь открыта для гостей из Европы: в 2026 году граждане десятков стран могут въехать без оформления визы. Замки Мир и Несвиж, Беловежская пуща, Брестская крепость, рестораны Минска — всё это доступно без визовых хлопот. Разбираем действующие режимы, нужные документы, пограничные переходы и лучший способ добраться.",
    dateISO: "2026-06-13",
    disclaimerBanner: true,
    readingMin: 12,
    category: "Въезд в Беларусь",
    tags: ["безвиз", "въезд в Беларусь", "документы", "Европа", "туризм"],
    body: [
      {
        type: "callout",
        text: "Актуальный официальный список стран и условий безвизового въезда публикует Министерство иностранных дел Республики Беларусь: mfa.gov.by/visa/freemove/general/ — проверяйте перед поездкой, правила периодически обновляются.",
      },
      { type: "h2", text: "Два основных безвизовых режима в 2026 году" },
      {
        type: "p",
        text: "Беларусь предлагает два основных формата безвизового въезда, различающихся по способу прибытия: воздушный и наземный. Помимо них существуют специальные региональные программы (Гродненская область, Августовский канал). Важно заранее определить, какой режим подходит именно вам.",
      },
      {
        type: "table",
        headers: ["Режим", "Длительность", "Въезд через", "Охват стран"],
        rows: [
          ["Аэропорты Беларуси", "до 30 суток", "Нац. аэропорт Минск, аэропорты Бреста, Витебска, Гомеля, Гродно, Могилёва (кроме рейсов из РФ)", "76 государств"],
          ["Наземная граница (авто и ж/д)", "до 30 суток; для граждан Польши, Литвы, Латвии и лиц со статусом негражданина Латвии — до 90 суток", "Все международные автодорожные и железнодорожные КПП", "35 европейских государств"],
        ],
      },
      { type: "h2", text: "Режим 1 — через аэропорты Беларуси: до 30 суток" },
      {
        type: "p",
        text: "Граждане 76 государств — включая все страны Евросоюза, Великобританию, США, Канаду, Австралию, Японию и многие другие — могут прилететь в Беларусь без визы и остаться до 30 суток. Въезд возможен через Национальный аэропорт Минск, а также аэропорты Бреста, Витебска, Гомеля, Гродно и Могилёва. Важное исключение: рейсы, прилетающие из Российской Федерации, под этот режим не подпадают.",
      },
      {
        type: "ul",
        items: [
          "Срок пребывания — не более 30 суток со дня въезда.",
          "Въезд — через Нац. аэропорт Минск (MSQ), аэропорты Бреста, Витебска, Гомеля, Гродно, Могилёва.",
          "Режим не распространяется на прилетающих рейсами из России.",
          "Выезд — через любой пограничный переход.",
          "Цель визита — туризм, деловые встречи, транзит, посещение родственников.",
          "При себе обязательно: медицинская страховка с покрытием в Беларуси.",
        ],
      },
      {
        type: "callout",
        text: "Если вы летите в Минск из Варшавы, Вильнюса, Риги, Берлина или другого европейского города — этот режим действует автоматически. После прилёта можно добраться до нужного города в Беларуси частным трансфером, а выехать — через любой наземный или воздушный пункт пропуска.",
      },
      { type: "h2", text: "Режим 2 — наземная и железнодорожная граница: до 30 суток" },
      {
        type: "p",
        text: "Граждане 35 европейских государств могут въезжать в Беларусь через все международные автодорожные и железнодорожные пункты пропуска без визы — на срок до 30 суток со дня въезда. Для граждан Польши, Литвы, Латвии, а также лиц, имеющих статус негражданина Латвии, срок увеличен до 90 суток.",
      },
      {
        type: "ul",
        items: [
          "Въезд — через любой международный автодорожный или железнодорожный КПП.",
          "Срок пребывания — до 30 суток для большинства стран.",
          "Для граждан Польши, Литвы, Латвии и лиц со статусом негражданина Латвии — до 90 суток.",
          "Охват: 35 европейских государств (полный список — на сайте МИД РБ).",
          "Медицинская страховка обязательна.",
        ],
      },
      {
        type: "callout",
        text: "Граждане Польши, Литвы и Латвии могут находиться в Беларуси до 90 суток без визы — въезд через любой международный автодорожный или железнодорожный КПП.",
      },
      { type: "h3", text: "Специальные региональные программы" },
      {
        type: "p",
        text: "Помимо основных двух режимов, МИД Беларуси ведёт отдельные программы: посещение Гродненской области (до 15 суток, только через КПП Брузги, Берестовица, Песчатка на границе с Польшей) и зоны Августовского канала (до 10 суток, через КПП Лесная). Эти программы ограничены определёнными регионами страны и подходят для узкотематических туристических маршрутов.",
      },
      { type: "h2", text: "Страны с правом безвизового въезда" },
      {
        type: "p",
        text: "Полный и актуальный перечень публикуется на сайте МИД РБ. В числе стран, граждане которых могут въехать без визы через аэропорты Беларуси (76 государств):",
      },
      {
        type: "ul",
        items: [
          "Все 27 стран Европейского союза — Польша, Германия, Франция, Италия, Испания, Нидерланды, Швеция, Австрия, Бельгия, Дания, Финляндия, Греция, Чехия, Венгрия, Румыния, Болгария и другие.",
          "Великобритания, Швейцария, Норвегия, Исландия, Лихтенштейн.",
          "США, Канада, Австралия, Новая Зеландия.",
          "Япония, Южная Корея, Сингапур.",
          "Бразилия, Аргентина, Мексика.",
          "Всего 76 государств — полный список на mfa.gov.by/visa/freemove/general/",
        ],
      },
      {
        type: "link",
        href: "https://mfa.gov.by/visa/freemove/general/",
        label: "Официальный список стран и актуальные условия — МИД Республики Беларусь",
        description: "Проверяйте перед поездкой: правила могут обновляться",
      },
      { type: "h2", text: "Какие документы нужны на границе" },
      {
        type: "p",
        text: "Пакет документов небольшой, но каждый из них обязателен. Пограничники Беларуси проверяют их внимательно — лучше подготовиться заранее.",
      },
      {
        type: "ol",
        items: [
          "Действующий загранпаспорт — срок действия не менее 90 дней на момент въезда.",
          "Медицинская страховка, действующая на территории Беларуси, на весь срок пребывания. Минимальная страховая сумма — эквивалент 10 000 долларов США. Многие европейские полисы EHIC не покрывают Беларусь — уточняйте у страховщика.",
          "Документы, подтверждающие цель поездки: бронь отеля, приглашение, программа деловой встречи, туристический маршрут.",
          "Наличие средств к существованию — ориентировочно от 25–50 EUR в сутки (размер не фиксирован законодательно, оценивается индивидуально).",
          "Для несовершеннолетних без обоих родителей — нотариально заверенное согласие на выезд от родителей или законных представителей.",
        ],
      },
      { type: "h3", text: "Медицинская страховка: на что обратить внимание" },
      {
        type: "p",
        text: "Это самое распространённое основание для отказа во въезде. Важно: европейская карта медицинского страхования (EHIC) действует только в странах ЕС/ЕЭЗ, в Беларуси она не принимается. Потребуется отдельный полис. Оформить его можно онлайн за несколько минут — стоимость для поездки на 5–7 дней в Беларусь составляет 5–15 EUR в зависимости от страховщика.",
      },
      { type: "h3", text: "Нужна ли регистрация по месту пребывания" },
      {
        type: "p",
        text: "При размещении в отеле регистрацию оформляет гостиница автоматически. При проживании у частных лиц — хозяин жилья обязан зарегистрировать гостя в течение 5 рабочих дней через местный орган внутренних дел или портал gosuslugi.by. Нарушение этого требования может повлечь штраф при выезде.",
      },
      { type: "h2", text: "Почему частный трансфер — это лучший вариант для въезда в Беларусь" },
      {
        type: "p",
        text: "Большинство безвизовых туристов прилетают в Минск через промежуточный европейский аэропорт — Варшаву, Вильнюс, Ригу или Каунас. Дальше возникает вопрос: как добраться до Беларуси комфортно и без стресса? Автобусы и маршрутки существуют, но у них есть серьёзные ограничения.",
      },
      {
        type: "table",
        headers: ["Критерий", "Автобус/маршрутка", "Частный трансфер ComfortLine"],
        rows: [
          ["Место отправления", "Автобусная станция", "Ваш отель, аэропорт или адрес"],
          ["Место прибытия", "Автовокзал в Минске", "Ваш отель или адрес в Беларуси"],
          ["Расписание", "Фиксированное", "Под ваш рейс или удобное время"],
          ["Поддержка на границе", "Нет", "Водитель помогает, знает процедуру"],
          ["Время в пути", "4–7 ч + ожидание пересадки", "Прямо от точки А до точки Б"],
          ["Комфорт", "Сидячие места, ограничен багаж", "Бизнес-авто, кондиционер, wi-fi"],
          ["Детские кресла", "Нет", "По запросу, бесплатно"],
          ["Гибкость маршрута", "Нет", "Остановки, объезды — по желанию"],
        ],
      },
      { type: "h3", text: "Граница: почему с нами проще" },
      {
        type: "p",
        text: "Пересечение белорусско-литовской или белорусско-польской границы может занять от 2 до 8 часов в зависимости от дня недели и времени суток. Наши водители проходят этот маршрут регулярно — они знают, в каком окне меньше очередь, когда лучше выехать и как подготовить документы так, чтобы таможня прошла быстрее. Это особенно важно для тех, кто впервые пересекает границу Беларуси.",
      },
      {
        type: "ul",
        items: [
          "Водитель заранее предупредит, какой пакет документов нужно держать под рукой.",
          "Актуальная информация об очерёдности на КПП — отслеживаем в режиме реального времени.",
          "При длительном ожидании — комфортный автомобиль, климат-контроль, возможность поспать.",
          "Детские кресла, помощь с багажом — входит в стандарт.",
          "Вас встретят в аэропорту с табличкой и проводят к автомобилю.",
        ],
      },
      { type: "h2", text: "Популярные маршруты из Европы в Беларусь" },
      { type: "h3", text: "Вильнюс / Аэропорт VNO → Минск" },
      {
        type: "p",
        text: "Самый востребованный маршрут. Многие европейцы летят до Вильнюса — прямые рейсы из большинства европейских городов — а затем добираются до Беларуси наземным транспортом. Расстояние Вильнюс–Минск около 175 км. Пограничный переход Каменный Лог / Котловка. Время в пути с учётом границы — 3,5–6 часов.",
      },
      { type: "h3", text: "Варшава / Аэропорт WAW и Модлин → Минск" },
      {
        type: "p",
        text: "Варшава — крупнейший хаб для рейсов из Западной Европы, Северной Америки и Азии. От Варшавы до Минска около 550 км — это полноценная дорожная поездка. Граница в районе Тересполь / Брест-Тересполь. Маршрут популярен у тех, кто летит через Варшаву и хочет продолжить путь в Беларусь без пересадок.",
      },
      { type: "h3", text: "Каунас / Аэропорт KUN → Минск" },
      {
        type: "p",
        text: "Аэропорт Каунаса — база Ryanair и других лоукостеров. Прямые рейсы в Каунас из десятков европейских городов по выгодным тарифам. Расстояние Каунас–Минск около 270 км. Маршрут проходит через тот же белорусско-литовский погранпереход, что и Вильнюс.",
      },
      { type: "h3", text: "Рига / Аэропорт RIX → Минск" },
      {
        type: "p",
        text: "Рига — удобная точка въезда для путешественников из скандинавских стран и Прибалтики. Расстояние Рига–Минск около 470 км. Граница проходит через Григоровщину или Патарниеки. Время в пути — 5,5–8 часов с учётом пограничного контроля.",
      },
      { type: "h2", text: "Что посмотреть в Беларуси: топ-10 направлений" },
      {
        type: "p",
        text: "Беларусь удивляет гостей сочетанием природы, истории и доступных цен. Вот что стоит включить в маршрут:",
      },
      {
        type: "ul",
        items: [
          "Мирский замок — объект Всемирного наследия ЮНЕСКО, один из красивейших замков Восточной Европы. 100 км от Минска.",
          "Несвижский дворцово-парковый комплекс — резиденция рода Радзивиллов, тоже в списке ЮНЕСКО. Рядом с Миром.",
          "Брестская крепость — мощный мемориальный комплекс, символ стойкости. 350 км от Минска.",
          "Беловежская пуща — древнейший первобытный лес Европы, резиденция Деда Мороза, зубры в дикой природе.",
          "Гродно — исторический город с польским и литовским влиянием, старинные костёлы, замки, уютные кафе.",
          "Минск — современная столица с широкими проспектами, сталинской архитектурой, развитой гастросценой и музеями.",
          "Дудутки — этнографический музей под открытым небом с мастерскими, конными прогулками и белорусской кухней.",
          "Хатынь — мемориальный комплекс в память о сожжённых деревнях Беларуси.",
          "Страусиная ферма в Большой Своротве — неожиданно популярный аттракцион для семей с детьми.",
          "Августовский канал — живописный водный путь вдоль польско-белорусской границы, идеален для прогулок и велопоходов.",
        ],
      },
      { type: "h2", text: "Практические советы перед поездкой" },
      {
        type: "table",
        headers: ["Вопрос", "Ответ"],
        rows: [
          ["Нужна ли белорусская валюта?", "Белорусский рубль (BYN). Карты Visa/Mastercard принимают большинство магазинов и ресторанов, но иметь наличные полезно."],
          ["Работают ли карты в Беларуси?", "Карты, выпущенные в странах ЕС, могут не приниматься после 2022 года — уточняйте у банка. МИР, Union Pay работают."],
          ["Мобильный интернет?", "Роуминг ЕС в Беларуси не действует. Рекомендуем купить белорусскую SIM-карту (A1, MTS, life:)) по прилёту — от 5 BYN."],
          ["Безопасность?", "Беларусь традиционно считается одной из самых безопасных стран региона по уровню уличной преступности."],
          ["Языковой барьер?", "В Минске молодое поколение неплохо говорит по-английски, особенно в сфере туризма. В регионах — сложнее. Водители ComfortLine общаются на английском."],
        ],
      },
      { type: "h2", text: "Часто задаваемые вопросы" },
      { type: "h3", text: "Можно ли въехать по внутреннему паспорту ЕС?" },
      {
        type: "p",
        text: "Нет. Для въезда в Беларусь требуется только загранпаспорт. Внутренние удостоверения личности (ID-карты), действующие внутри ЕС, в Беларуси не принимаются.",
      },
      { type: "h3", text: "Нужна ли виза при въезде через польскую или литовскую границу?" },
      {
        type: "p",
        text: "Для граждан 35 европейских государств — нет: въезд через любой международный автодорожный или железнодорожный КПП возможен без визы на срок до 30 суток. Для граждан Польши, Литвы и Латвии срок увеличен до 90 суток. Граждане стран за пределами этого списка 35 государств для наземного въезда по-прежнему нуждаются в визе, однако могут воспользоваться аэропортовым режимом (76 государств, въезд через аэропорты Беларуси).",
      },
      { type: "h3", text: "Что будет, если превысить 30-дневный лимит?" },
      {
        type: "p",
        text: "Нарушение сроков пребывания влечёт административную ответственность — штраф и возможный запрет на въезд. Выезжайте строго до истечения разрешённого срока.",
      },
      { type: "h3", text: "Можно ли въехать и сразу выехать, чтобы обнулить дни?" },
      {
        type: "p",
        text: "Формально правила не запрещают повторный въезд после выезда. Однако пограничники могут усмотреть злоупотребление режимом и отказать во въезде. Для длительного пребывания рекомендуем оформить обычную визу.",
      },
      { type: "h3", text: "Можно ли работать в Беларуси по безвизовому режиму?" },
      {
        type: "p",
        text: "Нет. Безвизовый режим предполагает туристические и деловые поездки без трудоустройства. Для работы нужно соответствующее разрешение и виза.",
      },
      {
        type: "callout",
        text: "ComfortLine выполняет трансферы из Вильнюса, Каунаса, Варшавы, Риги и других европейских городов прямо до вашего адреса в Беларуси. Один звонок — и комфортный автомобиль с русскоязычным водителем заберёт вас у терминала прилёта. Детские кресла, помощь с документами на границе, актуальная информация об очередях — всё включено.",
      },
      { type: "h2", id: "official-sources", text: "Официальные источники" },
      { type: "link", href: "https://mfa.gov.by/visa/freemove/general/", label: "Безвизовый въезд — Министерство иностранных дел Республики Беларусь — mfa.gov.by", description: "Официальный актуальный список стран и условия безвизового въезда в Беларусь" },
      { type: "link", href: "https://gpk.gov.by/", label: "Государственный пограничный комитет Республики Беларусь — gpk.gov.by", description: "Официальная информация о пограничных переходах, условиях въезда и пребывания" },
      { type: "link", href: "https://gtk.gov.by", label: "Государственный таможенный комитет Беларуси — gtk.gov.by", description: "Таможенные правила, нормы ввоза и вывоза товаров" },
      { type: "info-notice", text: "Правила безвизового въезда, сроки пребывания и перечень стран могут изменяться. Перед поездкой проверяйте актуальную информацию на официальном сайте МИД Беларуси." },
    ],
    categoryEn: "Entering Belarus",
    introEn:
      "Belarus is open to European visitors: in 2026, citizens of dozens of countries can enter without a visa. Mir and Nesvizh Castles, Białowieża Forest, Brest Fortress, Minsk restaurants — all of it without any visa paperwork. Here we cover the current entry regimes, required documents, border crossings and the most comfortable way to get there.",
    bodyEn: [
      {
        type: "callout",
        text: "The official list of countries and visa-free entry conditions is published by the Ministry of Foreign Affairs of the Republic of Belarus: mfa.gov.by/visa/freemove/general/ — check before your trip, rules are updated periodically.",
      },
      { type: "h2", text: "Two Main Visa-Free Entry Regimes in 2026" },
      {
        type: "p",
        text: "Belarus offers two main visa-free entry formats differing by arrival method: by air and by land. There are also special regional programmes (Grodno region, Augustów Canal). It is important to determine which regime applies to you before you travel.",
      },
      {
        type: "table",
        headers: ["Regime", "Duration", "Entry via", "Countries covered"],
        rows: [
          [
            "Belarusian airports",
            "up to 30 days",
            "Minsk National Airport, airports of Brest, Vitebsk, Gomel, Grodno, Mogilev (except flights from Russia)",
            "76 states",
          ],
          [
            "Land border (road & rail)",
            "up to 30 days; citizens of Poland, Lithuania, Latvia and stateless persons of Latvia — up to 90 days",
            "All international road and railway border crossings",
            "35 European states",
          ],
        ],
      },
      { type: "h2", text: "Regime 1 — Belarusian Airports: Up to 30 Days" },
      {
        type: "p",
        text: "Citizens of 76 states — including all EU countries, the United Kingdom, USA, Canada, Australia, Japan and many others — can fly to Belarus without a visa and stay for up to 30 days. Entry is through Minsk National Airport as well as the airports of Brest, Vitebsk, Gomel, Grodno and Mogilev. Important exception: flights arriving from the Russian Federation do not fall under this regime.",
      },
      {
        type: "ul",
        items: [
          "Duration — no more than 30 days from the date of entry.",
          "Entry — through Minsk National Airport (MSQ), airports of Brest, Vitebsk, Gomel, Grodno, Mogilev.",
          "The regime does not apply to passengers arriving on flights from Russia.",
          "Exit — through any border crossing.",
          "Purpose — tourism, business meetings, transit, visiting relatives.",
          "Required: medical insurance valid in Belarus.",
        ],
      },
      {
        type: "callout",
        text: "If you are flying to Minsk from Warsaw, Vilnius, Riga, Berlin or any other European city — this regime applies automatically. After landing, a private transfer can take you anywhere in Belarus, and you can exit through any land or air checkpoint.",
      },
      { type: "h2", text: "Regime 2 — Land and Railway Border: Up to 30 Days" },
      {
        type: "p",
        text: "Citizens of 35 European states can enter Belarus through any international road or railway border crossing without a visa, for up to 30 days from the date of entry. Citizens of Poland, Lithuania, Latvia and stateless persons of Latvia are granted a longer stay of up to 90 days.",
      },
      {
        type: "ul",
        items: [
          "Entry — through any international road or railway border crossing.",
          "Duration — up to 30 days for most countries.",
          "For citizens of Poland, Lithuania, Latvia and stateless persons of Latvia — up to 90 days.",
          "Coverage: 35 European states (full list on the MFA website).",
          "Medical insurance is mandatory.",
        ],
      },
      {
        type: "callout",
        text: "Citizens of Poland, Lithuania and Latvia can stay in Belarus for up to 90 days without a visa — entry through any international road or railway border crossing.",
      },
      { type: "h3", text: "Special Regional Programmes" },
      {
        type: "p",
        text: "Beyond the two main regimes, the Belarusian MFA runs separate programmes: a visit to the Grodno region (up to 15 days, only through checkpoints Bruzgi, Berestovitsa, Peschatka on the Polish border) and the Augustów Canal zone (up to 10 days, through checkpoint Lesnaya). These programmes are restricted to specific areas and suit narrow themed itineraries.",
      },
      { type: "h2", text: "Countries with Visa-Free Entry Rights" },
      {
        type: "p",
        text: "The full and current list is published on the MFA website. Countries whose citizens can enter visa-free through Belarusian airports (76 states) include:",
      },
      {
        type: "ul",
        items: [
          "All 27 EU member states — Poland, Germany, France, Italy, Spain, Netherlands, Sweden, Austria, Belgium, Denmark, Finland, Greece, Czech Republic, Hungary, Romania, Bulgaria and others.",
          "United Kingdom, Switzerland, Norway, Iceland, Liechtenstein.",
          "USA, Canada, Australia, New Zealand.",
          "Japan, South Korea, Singapore.",
          "Brazil, Argentina, Mexico.",
          "76 states in total — full list at mfa.gov.by/visa/freemove/general/",
        ],
      },
      {
        type: "link",
        href: "https://mfa.gov.by/visa/freemove/general/",
        label: "Official list of countries and current conditions — Ministry of Foreign Affairs of Belarus",
        description: "Check before your trip: rules may be updated",
      },
      { type: "h2", text: "Documents Required at the Border" },
      {
        type: "p",
        text: "The document pack is short but every item is mandatory. Belarusian border guards check carefully — it is best to prepare in advance.",
      },
      {
        type: "ol",
        items: [
          "Valid international passport — at least 90 days of validity remaining at the time of entry.",
          "Medical insurance valid in Belarus for the entire duration of stay. Minimum coverage — equivalent to USD 10,000. Many European EHIC cards do not cover Belarus — check with your insurer.",
          "Documents confirming purpose of visit: hotel booking, invitation letter, business meeting agenda, tourist itinerary.",
          "Proof of sufficient funds — approximately EUR 25–50 per day (not fixed by law, assessed individually).",
          "For minors travelling without both parents — notarised parental consent.",
        ],
      },
      { type: "h3", text: "Medical Insurance: What to Check" },
      {
        type: "p",
        text: "This is the most common reason for entry refusal. Important: the European Health Insurance Card (EHIC) is valid only in EU/EEA countries and is not accepted in Belarus. A separate policy is required. You can get one online in minutes — a 5–7 day policy for Belarus typically costs EUR 5–15 depending on the insurer.",
      },
      { type: "h3", text: "Is Registration Required?" },
      {
        type: "p",
        text: "Hotels register guests automatically. If staying with a private individual, the host must register the guest within 5 working days through the local internal affairs office or via gosuslugi.by. Failure to comply may result in a fine upon departure.",
      },
      { type: "h2", text: "Why a Private Transfer Is the Best Way to Enter Belarus" },
      {
        type: "p",
        text: "Most visa-free tourists fly to Minsk via a European hub — Warsaw, Vilnius, Riga or Kaunas. Then comes the question: how to reach Belarus comfortably and without stress? Buses and shared minivans exist, but come with serious limitations.",
      },
      {
        type: "table",
        headers: ["Criteria", "Bus / minivan", "Private transfer ComfortLine"],
        rows: [
          ["Pick-up point", "Bus station", "Your hotel, airport or address"],
          ["Drop-off point", "Bus terminal in Minsk", "Your hotel or any address in Belarus"],
          ["Schedule", "Fixed timetable", "Matched to your flight or preferred time"],
          ["Border support", "None", "Driver assists, knows the procedure"],
          ["Journey time", "4–7 h + transfer wait", "Direct from A to B"],
          ["Comfort", "Seats, limited luggage", "Business car, A/C, Wi-Fi"],
          ["Child seats", "Not available", "On request, free of charge"],
          ["Route flexibility", "None", "Stops, detours — at your request"],
        ],
      },
      { type: "h3", text: "The Border: Why It Is Easier with Us" },
      {
        type: "p",
        text: "Crossing the Belarus–Lithuania or Belarus–Poland border can take anywhere from 2 to 8 hours depending on the day and time. Our drivers do this route regularly — they know which lane moves faster, when to set off, and how to prepare documents to speed up customs. This matters especially for first-time border crossers.",
      },
      {
        type: "ul",
        items: [
          "Your driver will tell you in advance which documents to have ready.",
          "Live queue information at border crossings — tracked in real time.",
          "During long waits — a comfortable car with climate control, a chance to sleep.",
          "Child seats, luggage assistance — included as standard.",
          "Meet-and-greet at the arrivals terminal with a name board.",
        ],
      },
      { type: "h2", text: "Popular Routes from Europe to Belarus" },
      { type: "h3", text: "Vilnius / VNO Airport → Minsk" },
      {
        type: "p",
        text: "The most popular route. Many Europeans fly to Vilnius — direct flights from most European cities — then travel on to Belarus by road. Vilnius–Minsk is around 175 km. Border crossing at Kamenny Log / Kotlovka. Journey time including the border: 3.5–6 hours.",
      },
      { type: "h3", text: "Warsaw / WAW and Modlin Airports → Minsk" },
      {
        type: "p",
        text: "Warsaw is the major hub for flights from Western Europe, North America and Asia. Warsaw to Minsk is about 550 km — a full road trip. Border crossing near Terespol / Brest. Popular for travellers connecting through Warsaw who want to continue to Belarus without additional transit.",
      },
      { type: "h3", text: "Kaunas / KUN Airport → Minsk" },
      {
        type: "p",
        text: "Kaunas Airport is a Ryanair and low-cost carrier base with direct flights from dozens of European cities at competitive fares. Kaunas–Minsk is around 270 km. The route passes through the same Belarus–Lithuania crossing as Vilnius.",
      },
      { type: "h3", text: "Riga / RIX Airport → Minsk" },
      {
        type: "p",
        text: "Riga is a convenient entry point for travellers from Scandinavia and the Baltic states. Riga–Minsk is around 470 km. The border crossing is at Grigorovshchina or Patarnieki. Journey time including border control: 5.5–8 hours.",
      },
      { type: "h2", text: "What to See in Belarus: Top 10 Destinations" },
      {
        type: "p",
        text: "Belarus surprises visitors with its combination of nature, history and affordable prices. Here is what to include on your itinerary:",
      },
      {
        type: "ul",
        items: [
          "Mir Castle — a UNESCO World Heritage Site, one of the finest castles in Eastern Europe. 100 km from Minsk.",
          "Nesvizh Palace and Park Complex — the Radziwiłł family residence, also UNESCO-listed. Close to Mir.",
          "Brest Fortress — a powerful memorial complex, a symbol of resilience. 350 km from Minsk.",
          "Białowieża Forest — the oldest primeval forest in Europe, home of wild European bison and Belarus's Father Frost residence.",
          "Grodno — a historic city with Polish and Lithuanian heritage, old churches, castles and cosy cafés.",
          "Minsk — a modern capital with wide boulevards, Stalinist architecture, a vibrant food scene and museums.",
          "Dudutki — an open-air ethnographic museum with craft workshops, horse riding and traditional Belarusian cuisine.",
          "Khatyn Memorial — a moving complex commemorating the villages destroyed during World War II.",
          "Ostrich Farm in Bolshaya Svorotva — a surprisingly popular attraction for families with children.",
          "Augustów Canal — a scenic waterway along the Polish–Belarusian border, ideal for walking and cycling.",
        ],
      },
      { type: "h2", text: "Practical Tips Before Your Trip" },
      {
        type: "table",
        headers: ["Question", "Answer"],
        rows: [
          ["Do I need Belarusian currency?", "Belarusian ruble (BYN). Cards are accepted at most shops and restaurants, but cash is useful."],
          ["Do cards work in Belarus?", "Cards issued in EU countries may not be accepted since 2022 — check with your bank. Mir and UnionPay work."],
          ["Mobile data?", "EU roaming does not apply in Belarus. We recommend buying a local SIM (A1, MTS, life:)) on arrival — from BYN 5."],
          ["Safety?", "Belarus is traditionally considered one of the safest countries in the region in terms of street crime."],
          ["Language barrier?", "In Minsk the younger generation speaks reasonable English, especially in tourism. In rural areas it is harder. ComfortLine drivers communicate in English."],
        ],
      },
      { type: "h2", text: "Frequently Asked Questions" },
      { type: "h3", text: "Can I enter on an EU national ID card?" },
      {
        type: "p",
        text: "No. Entry to Belarus requires an international passport. National identity cards (ID cards) valid within the EU are not accepted in Belarus.",
      },
      { type: "h3", text: "Is a visa needed when entering through the Polish or Lithuanian border?" },
      {
        type: "p",
        text: "For citizens of 35 European states — no: entry through any international road or railway border crossing is possible without a visa for up to 30 days. For citizens of Poland, Lithuania and Latvia the limit is 90 days. Citizens of countries outside that list still need a visa for land entry, but may use the airport regime (76 states, entry through Belarusian airports).",
      },
      { type: "h3", text: "What happens if I overstay the 30-day limit?" },
      {
        type: "p",
        text: "Overstaying is an administrative offence — a fine and a potential entry ban. Leave strictly before your permitted period expires.",
      },
      { type: "h3", text: "Can I exit and re-enter immediately to reset the days?" },
      {
        type: "p",
        text: "The rules do not formally prohibit re-entry after exit. However, border guards may treat it as abuse of the regime and refuse entry. For a longer stay we recommend obtaining a regular visa.",
      },
      { type: "h3", text: "Can I work in Belarus on the visa-free regime?" },
      {
        type: "p",
        text: "No. The visa-free regime covers tourist and business visits only, not employment. Work requires the appropriate permit and visa.",
      },
      {
        type: "callout",
        text: "ComfortLine operates transfers from Vilnius, Kaunas, Warsaw, Riga and other European cities directly to your address in Belarus. One call — and a comfortable car with an English-speaking driver will meet you at the arrivals terminal. Child seats, border document assistance, live queue information — all included.",
      },
      { type: "h2", id: "official-sources", text: "Official Sources" },
      { type: "link", href: "https://mfa.gov.by/visa/freemove/general/", label: "Visa-free entry — Ministry of Foreign Affairs of Belarus — mfa.gov.by", description: "Official up-to-date list of eligible countries and visa-free entry conditions" },
      { type: "link", href: "https://gpk.gov.by/", label: "State Border Committee of Belarus — gpk.gov.by", description: "Official information on border crossings, entry and stay conditions" },
      { type: "link", href: "https://gtk.gov.by", label: "Belarusian State Customs Committee — gtk.gov.by", description: "Customs regulations and import/export rules" },
      { type: "info-notice", text: "Visa-free entry rules, permitted stay durations and eligible country lists may change. Check the official Belarusian MFA website before travelling." },
    ],
    related: ["граница-беларусь-литва", "аэропорт-варшавы-вав", "как-добраться-до-аэропорта-вильнюса"],
    ctaRoute: { label: "Забронировать трансфер из Европы в Беларусь", labelEn: "Book a transfer from Europe to Belarus", path: "/трансфер-минск-вильнюс-аэропорт" },
  },
  {
    slug: "вывоз-60-евро-в-беларусь-из-литвы-латвии",
    slugEn: "eu-60-euro-cash-limit-belarus-lithuania-latvia",
    titleEn: "Why You Can't Take More Than €60 in Cash From Lithuania or Latvia to Belarus (2026)",
    descriptionEn: "The EU sanctions rule that limits cash euro banknotes crossing from Lithuania or Latvia into Belarus to €60 per person — legal basis, how checks work in practice, and what happens if you carry more.",
    ogSlug: "blog-60-evro-litva-latvia-belarus",
    title: "Почему из Литвы и Латвии в Беларусь нельзя вывезти больше 60 евро наличными (2026)",
    description:
      "Разбираем санкционное правило ЕС, которое ограничивает вывоз наличных евро из Литвы и Латвии в Беларусь суммой 60 евро на человека: откуда оно взялось, как проверяют на границе и что делать, если у вас больше.",
    intro:
      "Если вы едете из Литвы или Латвии в Беларусь и везёте с собой наличные евро — важно знать: с 2022 года действует санкционное правило Евросоюза, которое фактически ограничивает сумму наличных евро при выезде в Беларусь суммой 60 € на человека. Разбираем, откуда это взялось, как это проверяют на границе и как не попасть в неприятную ситуацию.",
    dateISO: "2026-06-28",
    disclaimerBanner: true,
    readingMin: 7,
    category: "Граница",
    tags: ["наличные", "евро", "Литва", "Латвия", "санкции", "граница", "60 евро"],
    body: [
      { type: "h2", text: "Откуда взялось ограничение «не больше 60 евро»" },
      {
        type: "p",
        text:
          "В марте 2022 года Совет ЕС ввёл запрет на продажу, поставку, передачу или экспорт банкнот, номинированных в валюте любого государства-члена ЕС (включая евро), в адрес Беларуси, правительства и Национального банка Беларуси или для использования в Беларуси. Это часть общего санкционного пакета, изначально направленного на евро, а затем расширенного на все валюты стран ЕС.",
      },
      {
        type: "p",
        text:
          "У этого запрета есть исключение: он не касается передачи банкнот, необходимых для личных нужд физических лиц, которые едут в Беларусь, или членов их семьи, сопровождающих их в поездке. Именно в рамках этого «личного» исключения таможенные и пограничные службы Литвы и Латвии на практике установили порог — 60 евро наличными на одного человека. Суммы выше этого порога считаются выходящими за пределы «личных нужд» и подпадают под запрет.",
      },
      {
        type: "link",
        href: "https://eur-lex.europa.eu/eli/reg/2006/765/oj/eng",
        label: "Регламент Совета (ЕС) № 765/2006 — официальный текст на EUR-Lex",
        description: "Базовый санкционный регламент ЕС в отношении Беларуси, включающий запрет на вывоз банкнот стран ЕС (в редакции 2022–2026 гг.)",
      },
      { type: "h2", text: "Как правило действует на литовской и латвийской границе" },
      {
        type: "table",
        headers: ["Страна выезда", "Лимит наличных евро", "Другие валюты"],
        rows: [
          ["Литва → Беларусь", "до 60 € на человека", "без ограничения суммы (до 10 000 € в декларацию)"],
          ["Латвия → Беларусь", "до 60 € на человека", "без ограничения суммы (до 10 000 € в декларацию)"],
          ["Беларусь → ЕС (въезд)", "запрета на ввоз евро нет", "—"],
        ],
      },
      {
        type: "p",
        text:
          "Важно понимать: ограничение действует только в одном направлении — при вывозе наличных евро (и других валют ЕС) ИЗ Литвы и Латвии В Беларусь. Обратный ввоз евро из Беларуси в страны ЕС не запрещён. Проверки проводятся выборочно — сотрудник таможни или пограничной службы может попросить показать содержимое кошелька при выезде из ЕС в сторону Беларуси, особенно на автобусных и легковых КПП.",
      },
      { type: "h2", text: "Что происходит, если у вас нашли больше 60 евро" },
      {
        type: "ul",
        items: [
          "Деньги, как правило, не изымают на месте — пассажира просто не выпускают с суммой сверх лимита и просят вернуться в ЕС, чтобы обменять избыток на другую валюту (доллары, злотые и т.д.) или оставить деньги в ЕС.",
          "Если сумма значительная, деньги могут быть изъяты до решения суда — тогда вопрос возврата решается в судебном порядке.",
          "За нарушение предусмотрена административная ответственность по законодательству страны выезда.",
          "Строгость проверки зависит от конкретного пункта пропуска и смены сотрудников — где-то проверяют почти всегда, где-то выборочно.",
        ],
      },
      { type: "h2", text: "Как не попасть в неприятную ситуацию" },
      {
        type: "ul",
        items: [
          "Перед поездкой посчитайте наличные евро в кошельке и во всех отделениях сумки — лимит считается суммарно на человека.",
          "Если нужно взять с собой больше, переведите избыток в другую валюту (доллары США, польские злотые) — эти валюты не входят в запрет по банкнотам стран ЕС.",
          "Для сумм свыше 10 000 € в эквиваленте (в любой валюте) обязательно заполните декларацию и сохраните подтверждение происхождения средств.",
          "Уточните у водителя или туроператора актуальную практику проверки на конкретном КПП — она периодически меняется.",
        ],
      },
      {
        type: "link",
        href: "https://mon.declarant.by/#/zone",
        label: "Электронная очередь в зонах ожидания — mon.declarant.by",
        description: "Лучший источник живой информации об очередях на границе в интернете: официальный сервис мониторинга регистрации транспорта в системе электронной очереди на белорусских КПП, обновляется в реальном времени. Полезно спланировать, в какое время меньше проверок. Если сайт не открывается — попробуйте зайти через VPN.",
      },
      { type: "liveQueue" },
      { type: "h2", text: "А сколько товаров можно ввезти в Беларусь без пошлины" },
      {
        type: "p",
        text:
          "Это отдельный вопрос, не связанный с санкциями ЕС, а регулируемый белорусским таможенным законодательством. Норма для въезда в Беларусь наземным транспортом — до 500 евро и 25 кг товаров на человека (по состоянию на 2026 год). При превышении лимита нужно декларировать товар и оплатить пошлину.",
      },
      {
        type: "table",
        headers: ["Способ въезда", "Беспошлинный лимит", "Лимит по весу"],
        rows: [
          ["Наземный транспорт", "500 €", "25 кг"],
          ["Авиаперелёт", "10 000 €", "50 кг"],
          ["Международные посылки", "200 €", "31 кг"],
        ],
      },
      { type: "h2", text: "Часто задаваемые вопросы" },
      { type: "h3", text: "Ограничение касается только евро?" },
      {
        type: "p",
        text: "Изначально запрет касался только евро, но впоследствии был расширен на банкноты любой официальной валюты стран ЕС (злотые, чешские кроны, шведские кроны и т.д.). Доллары США и валюты стран, не входящих в ЕС, под этот запрет не подпадают.",
      },
      { type: "h3", text: "Если я въезжаю в ЕС из Беларуси с евро — тоже действует лимит?" },
      {
        type: "p",
        text: "Нет. Ограничение действует только на вывоз банкнот ИЗ стран ЕС В Беларусь. Ввоз наличных евро (или других валют) из Беларуси в Литву, Латвию и другие страны ЕС этим правилом не ограничен — действуют только общие правила декларирования сумм свыше 10 000 евро.",
      },
      { type: "h3", text: "60 евро — это на машину или на человека?" },
      {
        type: "p",
        text: "Лимит считается на одного человека. Если в машине едет несколько пассажиров, у каждого может быть при себе до 60 евро наличными — но суммы нельзя формально «складывать» и провозить как деньги одного пассажира.",
      },
      {
        type: "callout",
        text:
          "Водители ComfortLine ежедневно работают на маршрутах Минск–Литва и Минск–Латвия и в курсе актуальной практики проверок на каждом конкретном КПП. Перед поездкой мы всегда напоминаем пассажирам о лимите по наличным и других нюансах, чтобы дорога прошла без неприятных сюрпризов.",
      },
      { type: "h2", id: "official-sources", text: "Официальные источники" },
      { type: "link", href: "https://eur-lex.europa.eu/eli/reg/2006/765/oj/eng", label: "Регламент Совета ЕС № 765/2006 — EUR-Lex", description: "Базовый санкционный регламент Совета ЕС в отношении Беларуси, включающий запрет на вывоз банкнот (в редакции 2022–2026 гг.)" },
      { type: "link", href: "https://www.lrmuitine.lt/web/guest/fiziniams-asmenims", label: "Таможня Литовской Республики — lrmuitine.lt", description: "Официальные нормы вывоза наличных и правила для физических лиц" },
      { type: "link", href: "https://www.vid.gov.lv/lv/muita-privatpersonam", label: "Служба государственных доходов Латвии (VID) — vid.gov.lv", description: "Официальные таможенные правила для физических лиц в Латвии, включая нормы по наличным" },
      { type: "link", href: "https://finance.ec.europa.eu/eu-and-world/sanctions-restrictive-measures_en", label: "Санкционные меры ЕС — Европейская комиссия", description: "Официальная база санкционных ограничений ЕС, включая ограничения в отношении Беларуси" },
      { type: "info-notice", text: "Санкционные правила и пороги применения могут изменяться решением Совета ЕС. Актуальную редакцию регламента проверяйте на EUR-Lex перед поездкой." },
    ],
    categoryEn: "Border",
    introEn:
      "If you're travelling from Lithuania or Latvia to Belarus with cash euros, there's an EU sanctions rule you should know about. Since 2022, an EU regulation has effectively capped the amount of cash euro banknotes you can bring into Belarus at €60 per person. Here's where the rule comes from, how it's enforced at the border, and how to avoid trouble.",
    bodyEn: [
      { type: "h2", text: "Where the '€60 limit' comes from" },
      {
        type: "p",
        text:
          "In March 2022 the Council of the EU banned the sale, supply, transfer or export of banknotes denominated in any EU member state's currency (including the euro) to Belarus, its government, its central bank, or for use in Belarus. This is part of the broader EU sanctions package, originally targeting the euro and later widened to cover all EU member-state currencies.",
      },
      {
        type: "p",
        text:
          "The ban carries one exception: it does not apply to banknotes needed for the personal use of natural persons travelling to Belarus, or their accompanying family members. In practice, Lithuanian and Latvian customs and border services have set the working threshold for that 'personal use' exception at €60 in cash per person. Amounts above that are treated as exceeding personal needs and fall under the export ban.",
      },
      {
        type: "link",
        href: "https://eur-lex.europa.eu/eli/reg/2006/765/oj/eng",
        label: "Council Regulation (EC) No 765/2006 — official text on EUR-Lex",
        description: "The core EU sanctions regulation concerning Belarus, including the ban on exporting EU member-state banknotes (as amended 2022–2026)",
      },
      { type: "h2", text: "How the rule is enforced at the Lithuanian and Latvian border" },
      {
        type: "table",
        headers: ["Direction", "Cash euro limit", "Other currencies"],
        rows: [
          ["Lithuania → Belarus", "up to €60 per person", "no set cap (declare above €10,000)"],
          ["Latvia → Belarus", "up to €60 per person", "no set cap (declare above €10,000)"],
          ["Belarus → EU (entry)", "no import ban on euros", "—"],
        ],
      },
      {
        type: "p",
        text:
          "The key detail: the restriction only applies in one direction — exporting cash euros (and other EU currencies) FROM Lithuania and Latvia TO Belarus. Bringing euros back into the EU from Belarus is not restricted. Checks are done on a spot basis — a customs or border officer may ask you to show the cash in your wallet when exiting the EU towards Belarus, especially at bus and car checkpoints.",
      },
      { type: "h2", text: "What happens if you're found with more than €60" },
      {
        type: "ul",
        items: [
          "The cash is usually not confiscated on the spot — you're simply not allowed to proceed with the excess and asked to return into the EU to exchange it into another currency (USD, PLN, etc.) or leave it behind.",
          "For larger amounts, the cash can be seized pending a court decision, with the return of funds decided judicially.",
          "Violations carry administrative liability under the exiting country's law.",
          "Enforcement strictness varies by checkpoint and shift — some checkpoints check almost every traveller, others only spot-check.",
        ],
      },
      { type: "h2", text: "How to avoid a problem" },
      {
        type: "ul",
        items: [
          "Before travelling, count all the cash euros in your wallet and every pocket of your bag — the limit is a per-person total, not just what's visible.",
          "If you need to carry more, convert the excess into another currency (US dollars, Polish złoty) — these are not covered by the EU banknote export ban.",
          "For amounts above €10,000 equivalent (in any currency), file a declaration and keep proof of the funds' origin.",
          "Ask your driver or tour operator about current enforcement practice at the specific checkpoint — it changes periodically.",
        ],
      },
      {
        type: "link",
        href: "https://mon.declarant.by/#/zone",
        label: "Electronic queue at waiting zones — mon.declarant.by",
        description: "The best live queue information available online: the official Belarusian customs monitoring service for vehicle registration in the electronic border-crossing queue, updated in real time. Useful for timing your trip around fewer checks. If the site doesn't load, try opening it with a VPN.",
      },
      { type: "liveQueue" },
      { type: "h2", text: "How much can you bring into Belarus duty-free" },
      {
        type: "p",
        text:
          "This is a separate question governed by Belarusian customs law rather than EU sanctions. The allowance for entering Belarus by land transport is up to €500 in value and up to 25 kg of goods per person (as of 2026). Exceeding the limit requires declaring the goods and paying duty.",
      },
      {
        type: "table",
        headers: ["Mode of entry", "Duty-free limit", "Weight limit"],
        rows: [
          ["Land transport", "€500", "25 kg"],
          ["Air travel", "€10,000", "50 kg"],
          ["International parcels", "€200", "31 kg"],
        ],
      },
      { type: "h2", text: "Frequently Asked Questions" },
      { type: "h3", text: "Does the restriction only apply to euros?" },
      {
        type: "p",
        text: "Originally it applied only to the euro, but the ban was later extended to banknotes of any official EU member-state currency (Polish złoty, Czech koruna, Swedish krona, etc.). US dollars and non-EU currencies are not covered.",
      },
      { type: "h3", text: "Does the limit apply when entering the EU from Belarus with euros?" },
      {
        type: "p",
        text: "No. The restriction only applies to exporting banknotes FROM EU countries TO Belarus. Bringing cash euros (or other currencies) from Belarus into Lithuania, Latvia or other EU countries is not restricted by this rule — only the standard declaration requirement above €10,000 applies.",
      },
      { type: "h3", text: "Is the €60 limit per car or per person?" },
      {
        type: "p",
        text: "The limit applies per person. If several passengers travel in the same car, each may individually carry up to €60 in cash — but amounts cannot formally be pooled and carried as one passenger's money.",
      },
      {
        type: "callout",
        text:
          "ComfortLine drivers run the Minsk–Lithuania and Minsk–Latvia routes daily and stay current on enforcement practice at each specific checkpoint. Before every trip we remind passengers about the cash limit and other border nuances, so the journey goes smoothly.",
      },
      { type: "h2", id: "official-sources", text: "Official Sources" },
      { type: "link", href: "https://eur-lex.europa.eu/eli/reg/2006/765/oj/eng", label: "Council Regulation (EC) No 765/2006 — EUR-Lex", description: "The core EU sanctions regulation on Belarus including the banknote export ban (as amended 2022–2026)" },
      { type: "link", href: "https://www.lrmuitine.lt/web/guest/fiziniams-asmenims", label: "Lithuanian Customs — lrmuitine.lt", description: "Official cash export allowances and customs rules for individuals" },
      { type: "link", href: "https://www.vid.gov.lv/lv/muita-privatpersonam", label: "Latvian State Revenue Service (VID) — vid.gov.lv", description: "Official customs rules for individuals in Latvia, including cash allowances" },
      { type: "link", href: "https://finance.ec.europa.eu/eu-and-world/sanctions-restrictive-measures_en", label: "EU Sanctions — European Commission", description: "Official EU sanctions database including restrictive measures concerning Belarus" },
      { type: "info-notice", text: "Sanctions rules and enforcement thresholds may be amended by the EU Council. Check the current regulation on EUR-Lex before travelling." },
    ],
    related: ["граница-беларусь-литва", "какой-кпп-выбрать", "виза-свободный-въезд-в-беларусь-2026"],
    ctaRoute: { label: "Забронировать трансфер в Литву или Латвию", labelEn: "Book a transfer to Lithuania or Latvia", path: "/трансфер-в-литву" },
  },
  {
    slug: "советские-мозаики-минска",
    slugEn: "soviet-mosaics-minsk-guide",
    titleEn: "Soviet Mosaics of Minsk: A Walking Guide to the City's Hidden Monumental Art",
    descriptionEn: "Where to find Minsk's best Soviet-era mosaics: the Vostok-1 towers ('Golden Gates'), the Florentine mosaic at Oktyabrskaya metro, and the Dom Kino frieze — with photos and directions.",
    ogSlug: "blog-sovetskie-mozaiki-minska",
    title: "Советские мозаики Минска: гид по монументальному искусству города",
    description:
      "Где искать лучшие советские мозаики Минска: башни микрорайона Восток-1 («Золотые ворота»), флорентийская мозаика на «Октябрьской» и фриз Дома кино — с фото и маршрутом.",
    intro:
      "Минск — один из самых недооценённых городов Европы для любителей советского монументального искусства. На фасадах жилых башен, в переходах метро и на кинотеатрах до сих пор сохранились огромные мозаичные панно 1960–1980-х годов — эпические сцены труда, космоса и культуры, выложенные смальтой и мрамором. Собрали маршрут по трём главным точкам, которые стоит увидеть своими глазами.",
    dateISO: "2026-07-05",
    readingMin: 8,
    category: "Минск",
    tags: ["Минск", "мозаика", "архитектура", "советское искусство", "экскурсия"],
    body: [
      { type: "h2", text: "Восток-1: «Золотые ворота» с мозаичными башнями" },
      {
        type: "p",
        text:
          "Главная точка маршрута — микрорайон Восток-1 у одноимённой станции метро. Две высотные жилые башни здесь называют «Золотыми воротами Минска»: их торцевые фасады, выходящие на проспект Независимости, полностью покрыты мозаикой на тему освоения космоса, науки, труда и искусства. Панно создавались в 1970-е годы группой белорусских художников-монументалистов и остаются одними из крупнейших мозаичных композиций в стране.",
      },
      {
        type: "img",
        src: "/mosaic-vostok-panorama.jpg",
        alt: "Жилая башня микрорайона Восток-1 в Минске с мозаикой на фасаде",
        caption: "Башня Восток-1 на проспекте Независимости — мозаика видна с проезжей части и из окон метро.",
      },
      {
        type: "p",
        text:
          "Каждая башня разбита на несколько крупных регистров: в верхней части — символика космоса и науки, ниже — фигуры рабочих, учёных и деятелей культуры в стилизованных арках. Композиция читается снизу вверх, как единое повествование о советском проекте будущего.",
      },
      {
        type: "img",
        src: "/mosaic-vostok-science.jpg",
        alt: "Крупный план мозаики «Город науки» на башне Восток-1 в Минске",
        caption: "Фрагмент «Город науки» — фигуры в золотой смальте на фоне символа СССР.",
      },
      {
        type: "img",
        src: "/mosaic-vostok-culture.jpg",
        alt: "Мозаика «Город культуры» на второй башне микрорайона Восток-1",
        caption: "Соседняя башня посвящена теме культуры и искусства — та же система арок и цветных лент.",
      },
      {
        type: "callout",
        text: "Лучшее время для фото — раннее утро или ближе к вечеру: солнце светит вдоль проспекта и подсвечивает смальту сбоку, из-за чего мозаика «загорается».",
      },
      { type: "h2", text: "Станция метро «Октябрьская»: флорентийская мозаика Кузнецова" },
      {
        type: "p",
        text:
          "В переходе станции метро «Октябрьская» сохранилась масштабная флорентийская мозаика (техника набора из природного камня и мрамора без смальты) работы художника Андрея Кузнецова — «Этапы большого пути». Композиция рассказывает историю индустриализации и достижений советской эпохи через фигуры рабочих, инженеров и символику труда.",
      },
      {
        type: "img",
        src: "/mosaic-oktyabrskaya-metro.jpg",
        alt: "Флорентийская мозаика в переходе станции метро Октябрьская в Минске",
        caption: "Мозаика «Этапы большого пути» над лестницей в переходе станции «Октябрьская».",
      },
      {
        type: "p",
        text:
          "В отличие от ярких мозаик Восток-1, здесь преобладает приглушённая палитра натурального камня — охра, тёмно-коричневый, серый мрамор. Это одна из немногих флорентийских мозаик такого масштаба, сохранившихся в интерьере действующего общественного пространства в Беларуси.",
      },
      { type: "h2", text: "Дом кино: фриз с партизанской темой" },
      {
        type: "p",
        text:
          "Здание бывшего Дома кино на улице Толбухина — ещё один пример советского монументального искусства, интегрированного в фасад общественного здания. Протяжённый декоративный фриз в верхней части здания посвящён партизанской и военной теме — узнаваемый мотив для белорусской монументальной живописи 1970-х годов, где память о войне соседствует с образами мирного труда и кино как искусства.",
      },
      {
        type: "img",
        src: "/mosaic-domkino-frieze.jpg",
        alt: "Мозаичный фриз с партизанской темой на здании бывшего Дома кино в Минске",
        caption: "Фриз на фасаде бывшего Дома кино — стилизованные лица и символика партизанского движения.",
      },
      {
        type: "p",
        text:
          "Здание неоднократно меняло назначение (сейчас в нём располагается Дворец детей и молодёжи), но фасадный декор сохранён. Стоит заглянуть сюда, если вы уже смотрите башни Восток-1 — это в 10–15 минутах на машине.",
      },
      {
        type: "callout",
        text:
          "Маршрут по всем трём точкам занимает около 2–3 часов с учётом переездов на машине и остановок для фото. Многие туристы объединяют его с посещением проспекта Независимости — крупнейшего цельного ансамбля сталинской архитектуры в Европе.",
      },
      { type: "h2", text: "Как спланировать маршрут" },
      {
        type: "ol",
        items: [
          "Начните с башен Восток-1 (метро «Восток») — это самая эффектная и фотогеничная точка.",
          "Доедьте до станции метро «Октябрьская» и спуститесь в переход к мозаике Кузнецова.",
          "Завершите маршрут у здания бывшего Дома кино на Толбухина, чтобы увидеть фриз.",
        ],
      },
      {
        type: "p",
        text:
          "Если вы прилетаете в Минск транзитом или у вас несколько свободных часов между рейсами, водитель ComfortLine может провести вас по этому маршруту на комфортном автомобиле с остановками у каждой точки — без необходимости разбираться в общественном транспорте.",
      },
    ],
    categoryEn: "Minsk",
    introEn:
      "Minsk is one of Europe's most underrated cities for fans of Soviet monumental art. Huge mosaic panels from the 1960s–1980s — epic scenes of labour, space and culture rendered in smalt and marble — still cover residential towers, metro passages and cinema façades across the city. Here is a route to the four most rewarding spots.",
    bodyEn: [
      { type: "h2", text: "Vostok-1: the 'Golden Gates' mosaic towers" },
      {
        type: "p",
        text:
          "The route's centrepiece is the Vostok-1 neighbourhood, next to the metro station of the same name. Locals call its two high-rise residential towers the 'Golden Gates of Minsk': their end walls, facing Independence Avenue, are completely covered in mosaics on the themes of space exploration, science, labour and art. The panels were created in the 1970s by a group of Belarusian monumental artists and remain among the largest mosaic compositions in the country.",
      },
      {
        type: "img",
        src: "/mosaic-vostok-panorama.jpg",
        alt: "Vostok-1 residential tower in Minsk with a large mosaic on its facade",
        caption: "A Vostok-1 tower on Independence Avenue — the mosaic is visible from the street and from the metro exit.",
      },
      {
        type: "p",
        text:
          "Each tower is divided into large registers: cosmic and scientific symbolism at the top, then figures of workers, scientists and cultural figures set within stylised arches below. The composition reads bottom-to-top as a single narrative about the Soviet vision of the future.",
      },
      {
        type: "img",
        src: "/mosaic-vostok-science.jpg",
        alt: "Close-up of the 'City of Science' mosaic on the Vostok-1 tower in Minsk",
        caption: "A fragment of 'City of Science' — figures in gold smalt against a Soviet emblem.",
      },
      {
        type: "img",
        src: "/mosaic-vostok-culture.jpg",
        alt: "'City of Culture' mosaic on the second Vostok-1 tower",
        caption: "The neighbouring tower is dedicated to culture and the arts, using the same arch-and-ribbon system.",
      },
      {
        type: "callout",
        text: "The best light for photos is early morning or early evening, when the sun rakes along the avenue and lights the smalt from the side, making the mosaic 'glow'.",
      },
      { type: "h2", text: "Oktyabrskaya metro station: Kuznetsov's Florentine mosaic" },
      {
        type: "p",
        text:
          "The underground passage at Oktyabrskaya metro station holds a large Florentine mosaic (a technique using inlaid natural stone and marble rather than smalt) by artist Andrey Kuznetsov, titled 'Stages of the Great Journey'. The composition tells the story of industrialisation and Soviet-era achievement through figures of workers, engineers and labour symbolism.",
      },
      {
        type: "img",
        src: "/mosaic-oktyabrskaya-metro.jpg",
        alt: "Florentine mosaic in the underpass at Oktyabrskaya metro station in Minsk",
        caption: "'Stages of the Great Journey' above the stairway in the Oktyabrskaya station passage.",
      },
      {
        type: "p",
        text:
          "Unlike the bright colours of Vostok-1, this piece is dominated by a muted natural-stone palette — ochre, dark brown, grey marble. It's one of the few Florentine mosaics of this scale still preserved inside a working public space in Belarus.",
      },
      { type: "h2", text: "Dom Kino: the partisan-themed frieze" },
      {
        type: "p",
        text:
          "The former Dom Kino (House of Cinema) building on Talbukhina Street is another example of Soviet monumental art built into a public façade. A long decorative frieze along the top of the building is dedicated to the partisan and wartime theme — a recurring motif in Belarusian monumental painting of the 1970s, where memory of the war sits alongside images of peaceful labour and cinema as an art form.",
      },
      {
        type: "img",
        src: "/mosaic-domkino-frieze.jpg",
        alt: "Mosaic frieze with a partisan theme on the former Dom Kino building in Minsk",
        caption: "The frieze on the former Dom Kino façade — stylised faces and partisan-movement symbolism.",
      },
      {
        type: "p",
        text:
          "The building has changed function more than once (it now houses a children's and youth centre), but the façade decoration has been preserved. Worth a short stop if you're already visiting the Vostok-1 towers — it's a 10–15 minute drive away.",
      },
      {
        type: "callout",
        text:
          "The full three-stop route takes about 2–3 hours including driving time and photo stops. Many visitors combine it with a walk down Independence Avenue, the largest intact ensemble of Stalinist architecture in Europe.",
      },
      { type: "h2", text: "How to plan the route" },
      {
        type: "ol",
        items: [
          "Start at the Vostok-1 towers (Vostok metro station) — the most striking and photogenic stop.",
          "Head to Oktyabrskaya metro station and go down into the passage to see the Kuznetsov mosaic.",
          "Finish at the former Dom Kino building on Talbukhina Street to see the frieze.",
        ],
      },
      {
        type: "p",
        text:
          "If you're passing through Minsk between flights or have a few free hours, a ComfortLine driver can take you along this route in a comfortable car with stops at each site — no need to figure out public transport.",
      },
    ],
    related: ["как-добраться-до-аэропорта-вильнюса", "аэропорт-варшавы-вав"],
    ctaRoute: { label: "Заказать трансфер и экскурсию по Минску", labelEn: "Book a Minsk transfer and city tour", path: "/трансфер-по-минску" },
  },
];

export function findArticle(slug: string): Article | undefined {
  const decoded = decodeURIComponent(slug);
  return ARTICLES.find((a) => a.slug === decoded || a.slugEn === decoded);
}
