import { MapPin, ShieldCheck, Landmark } from "lucide-react";
import { RouteLandingPage, RoutePageData } from "./route-landing-page";

const data: RoutePageData = {
  ru: {
    badge: "Индивидуальный трансфер в Вильнюс",

    title: "Индивидуальный трансфер Минск — Вильнюс",

    subtitle:
      "Прямой трансфер-такси из Минска в Вильнюс от двери до двери. Машина только для вас, удобное время выезда, фиксированная стоимость после подтверждения и доставка к отелю, дому, офису или другому адресу в городе.",

    stats: [
      { label: "Расстояние", value: "Около 180 км" },
      { label: "Дорога без границы", value: "Около 3 ч" },
      { label: "Формат поездки", value: "От двери до двери" },
      { label: "Стоимость", value: "Фиксируется заранее" },
    ],

    photosTitle: "Вильнюс — место назначения",

    photos: [
      {
        src: "/img/vilnius/old-town-aerial.png",
        caption: "Старый город Вильнюса",
      },
      {
        src: "/img/vilnius/cathedral-square.png",
        caption: "Кафедральная площадь Вильнюса",
      },
      {
        src: "/img/vilnius/gate-of-dawn.png",
        caption: "Ворота Зари в Вильнюсе",
      },
    ],

    howTitle: "Как проходит трансфер Минск — Вильнюс",

    steps: [
      {
        icon: MapPin,
        title: "Подача машины в Минске",
        desc:
          "Водитель заберёт вас по указанному адресу в Минске в согласованное время. Не нужно самостоятельно добираться до вокзала или места сбора.",
      },
      {
        icon: ShieldCheck,
        title: "Пересечение границы",
        desc:
          "Перед выездом проверяем действующие ограничения и обстановку на пассажирских пунктах пропуска. Конкретный маршрут выбирается с учётом официального статуса КПП и очередей.",
      },
      {
        icon: Landmark,
        title: "Доставка по адресу в Вильнюсе",
        desc:
          "Довезём до отеля, квартиры, офиса, клиники, вокзала или другого адреса в Вильнюсе. Дополнительные остановки согласуются заранее.",
      },
    ],

    infoTitle: "Информация о маршруте",

    infoRows: [
      {
        label: "Направление",
        value: "Минск → граница Беларусь–Литва → Вильнюс",
      },
      {
        label: "Расстояние",
        value: "Около 180 км в зависимости от адресов подачи и прибытия",
      },
      {
        label: "Время в дороге",
        value: "Около 3 часов без учёта прохождения границы",
      },
      {
        label: "Пограничный переход",
        value:
          "Выбирается перед поездкой с учётом действующего статуса пассажирских КПП",
      },
      {
        label: "Адрес прибытия",
        value:
          "Отель, квартира, офис, вокзал или любой согласованный адрес в Вильнюсе",
      },
      {
        label: "Обратный маршрут",
        value: "Вильнюс → Минск также доступен по предварительному заказу",
      },
    ],

    includedTitle: "Что входит в трансфер",

    included: [
      "Подача автомобиля по адресу в Минске",
      "Индивидуальная машина без посторонних пассажиров",
      "Прямой маршрут без пересадок",
      "Помощь с багажом",
      "Питьевая вода в автомобиле",
      "Ожидание во время прохождения границы",
      "Детское кресло или бустер по запросу",
      "Фиксированная стоимость после подтверждения",
    ],

    whyTitle: "Почему выбирают ComfortLine",

    whyItems: [
      "Поездка в удобное для вас время",
      "Доставка от двери до двери",
      "Опытные водители международных маршрутов",
      "Комфортные седаны, кроссоверы и минивэны",
      "Подходит для семей, деловых поездок и большого багажа",
      "Можно заказать обратный трансфер Вильнюс — Минск",
      "Работаем по предварительному заказу круглосуточно",
      "Поддержка менеджера до начала поездки",
    ],

    faqTitle: "Частые вопросы о трансфере Минск — Вильнюс",

    faq: [
      {
        q: "Сколько стоит трансфер Минск — Вильнюс?",
        a:
          "Стоимость рассчитывается за автомобиль и зависит от даты поездки, адресов подачи и прибытия, выбранного класса машины, количества пассажиров и дополнительных пожеланий. После согласования менеджер подтверждает фиксированную сумму до начала поездки.",
      },
      {
        q: "Сколько времени занимает поездка из Минска в Вильнюс?",
        a:
          "Расстояние составляет около 180 км. Дорога без учёта границы обычно занимает около трёх часов. Итоговое время зависит от очереди и продолжительности пограничного контроля, поэтому точное время прибытия заранее гарантировать невозможно.",
      },
      {
        q: "Откуда водитель забирает пассажиров?",
        a:
          "Водитель может забрать вас от дома, гостиницы, офиса, вокзала или другого согласованного адреса в Минске. В Вильнюсе доставка также выполняется непосредственно по указанному адресу.",
      },
      {
        q: "Какой пограничный переход используется?",
        a:
          "Пункт пропуска выбирается перед поездкой с учётом его действующего официального статуса, ограничений для пассажирского транспорта и текущей дорожной обстановки. Перед выездом рекомендуем дополнительно проверять официальную информацию.",
      },
      {
        q: "Можно ли заказать обратный трансфер Вильнюс — Минск?",
        a:
          "Да. Обратную поездку из Вильнюса в Минск можно оформить одновременно с основным трансфером или отдельным заказом. Водитель заберёт вас по указанному адресу в Вильнюсе.",
      },
      {
        q: "Можно ли ехать с ребёнком или большим багажом?",
        a:
          "Да. При оформлении заказа укажите возраст ребёнка, количество чемоданов и другое крупное имущество. Менеджер подберёт подходящий автомобиль и при необходимости добавит детское кресло или бустер.",
      },
      {
        q: "Чем эта страница отличается от трансфера в аэропорт Вильнюса?",
        a:
          "Эта услуга предназначена для поездки к любому адресу в городе Вильнюсе. Для пассажиров, которым нужна доставка непосредственно к терминалу VNO с расчётом времени под рейс, предусмотрена отдельная страница трансфера Минск — аэропорт Вильнюса.",
      },
    ],

    ctaTitle: "Заказать трансфер Минск — Вильнюс",

    ctaDesc:
      "Укажите дату, время, адрес подачи, количество пассажиров и багажа. Менеджер рассчитает стоимость и подтвердит автомобиль.",

    ctaBtn: "Рассчитать стоимость",

    prefilledFrom: "Минск",
    prefilledTo: "Вильнюс",

    backBtn: "← Все трансферы в Литву",
  },

  en: {
    badge: "Private Transfer to Vilnius",

    title: "Private Transfer from Minsk to Vilnius",

    subtitle:
      "Private door-to-door taxi transfer from Minsk to Vilnius. Travel in a dedicated vehicle at your preferred departure time, with a price confirmed before the journey and drop-off at your hotel, home, office or another city address.",

    stats: [
      { label: "Distance", value: "About 180 km" },
      { label: "Driving time", value: "About 3 hrs" },
      { label: "Service", value: "Door to door" },
      { label: "Price", value: "Confirmed in advance" },
    ],

    photosTitle: "Your destination — Vilnius",

    photos: [
      {
        src: "/img/vilnius/old-town-aerial.png",
        caption: "Vilnius Old Town",
      },
      {
        src: "/img/vilnius/cathedral-square.png",
        caption: "Cathedral Square in Vilnius",
      },
      {
        src: "/img/vilnius/gate-of-dawn.png",
        caption: "The Gate of Dawn in Vilnius",
      },
    ],

    howTitle: "How the Minsk to Vilnius transfer works",

    steps: [
      {
        icon: MapPin,
        title: "Pickup in Minsk",
        desc:
          "Your driver collects you from your home, hotel, office or another agreed address in Minsk at the confirmed time.",
      },
      {
        icon: ShieldCheck,
        title: "Border crossing",
        desc:
          "Before departure, current passenger-crossing restrictions and official checkpoint status are checked. The route is selected according to the conditions available on the day.",
      },
      {
        icon: Landmark,
        title: "Drop-off in Vilnius",
        desc:
          "We take you directly to your hotel, apartment, office, clinic, railway station or another agreed address in Vilnius.",
      },
    ],

    infoTitle: "Route information",

    infoRows: [
      {
        label: "Direction",
        value: "Minsk → Belarus–Lithuania border → Vilnius",
      },
      {
        label: "Distance",
        value: "About 180 km depending on the pickup and drop-off addresses",
      },
      {
        label: "Driving time",
        value: "About 3 hours excluding border formalities",
      },
      {
        label: "Border checkpoint",
        value:
          "Selected before departure according to the official status of passenger checkpoints",
      },
      {
        label: "Vilnius drop-off",
        value:
          "Hotel, apartment, office, railway station or another agreed city address",
      },
      {
        label: "Return journey",
        value: "Vilnius to Minsk transfers are also available",
      },
    ],

    includedTitle: "What is included",

    included: [
      "Pickup from your address in Minsk",
      "A private vehicle with no shared passengers",
      "Direct journey without transfers",
      "Assistance with luggage",
      "Bottled water in the vehicle",
      "Vehicle waiting during border formalities",
      "Child seat or booster on request",
      "Price confirmed before departure",
    ],

    whyTitle: "Why travel with ComfortLine",

    whyItems: [
      "Departure at a time agreed with you",
      "Door-to-door transportation",
      "Drivers experienced on international routes",
      "Comfort sedans, SUVs and minivans",
      "Suitable for families, business travel and heavy luggage",
      "Return Vilnius to Minsk transfer available",
      "Advance bookings accepted around the clock",
      "Manager support before departure",
    ],

    faqTitle: "Minsk to Vilnius transfer FAQ",

    faq: [
      {
        q: "How much is a private transfer from Minsk to Vilnius?",
        a:
          "The price is calculated per vehicle and depends on the travel date, pickup and drop-off addresses, vehicle class, number of passengers and any additional requirements. Your manager confirms the final fixed amount before departure.",
      },
      {
        q: "How long does the journey from Minsk to Vilnius take?",
        a:
          "The distance is approximately 180 km, and the drive normally takes about three hours excluding border formalities. Total travel time depends on border queues and passport or customs controls.",
      },
      {
        q: "Where can the driver collect me?",
        a:
          "Pickup is available from your home, hotel, office, railway station or another agreed address in Minsk. In Vilnius, you are also dropped off directly at your requested address.",
      },
      {
        q: "Which border checkpoint will be used?",
        a:
          "The checkpoint is selected before departure according to its current official status, passenger-vehicle restrictions and road conditions. Travellers should also verify official border information before departure.",
      },
      {
        q: "Can I book a return transfer from Vilnius to Minsk?",
        a:
          "Yes. The Vilnius to Minsk journey can be booked together with the outbound transfer or as a separate reservation. Pickup is available from any agreed address in Vilnius.",
      },
      {
        q: "Can I travel with children or large luggage?",
        a:
          "Yes. Please provide the child's age, number of suitcases and information about any oversized items when booking. We will select a suitable vehicle and arrange a child seat or booster where required.",
      },
      {
        q: "How is this different from the Vilnius Airport transfer?",
        a:
          "This service is intended for travel to any address in Vilnius city. Passengers travelling specifically to the VNO terminal for a scheduled flight should use the separate Minsk to Vilnius Airport transfer page.",
      },
    ],

    ctaTitle: "Book a Minsk to Vilnius transfer",

    ctaDesc:
      "Provide your date, preferred departure time, pickup address, number of passengers and luggage. Our manager will calculate the price and confirm the vehicle.",

    ctaBtn: "Request a quote",

    prefilledFrom: "Minsk",
    prefilledTo: "Vilnius",

    backBtn: "← All Lithuania transfers",
  },

  seo: {
    titleRu:
      "Трансфер Минск — Вильнюс: цена, такси 24/7 | ComfortLine",

    titleEn:
      "Minsk to Vilnius Private Transfer | ComfortLine",

    descRu:
      "Индивидуальный трансфер Минск — Вильнюс от двери до двери. Фиксированная стоимость после подтверждения, комфортные авто, детские кресла и обратный маршрут.",

    descEn:
      "Private door-to-door transfer from Minsk to Vilnius. Price confirmed before departure, comfortable vehicles, child seats and return journeys available.",

    pathRu: "/трансфер-минск-вильнюс",
    pathEn: "/minsk-vilnius-transfer",

    breadcrumbRu: "Трансфер Минск — Вильнюс",
    breadcrumbEn: "Minsk to Vilnius transfer",

    fromName: "Минск",
    toName: "Вильнюс",

    priceCurrency: "EUR",

    keywordsRu:
      "трансфер минск вильнюс, такси минск вильнюс, индивидуальный трансфер минск вильнюс, трансфер из минска в вильнюс, заказать такси минск вильнюс, минск вильнюс трансфер цена, трансфер вильнюс минск",

    keywordsEn:
      "minsk vilnius transfer, minsk to vilnius taxi, private transfer minsk vilnius, door to door minsk vilnius, vilnius to minsk transfer",
  },
};

export default function MinskVilniusTransferPage() {
  return <RouteLandingPage data={data} />;
}