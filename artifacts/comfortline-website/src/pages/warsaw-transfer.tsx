import { MapPin, ShieldCheck, Building2 } from "lucide-react";
import {
  RouteLandingPage,
  type RoutePageData,
} from "./route-landing-page";

const data: RoutePageData = {
  ru: {
    badge: "Индивидуальный трансфер в Варшаву",

    title: "Индивидуальный трансфер-такси Минск — Варшава",

    subtitle:
      "Индивидуальный трансфер из Минска в Варшаву от двери до двери. Отдельный автомобиль без попутчиков, согласованное время выезда, фиксированная стоимость после подтверждения и доставка к гостинице, квартире, офису, вокзалу или другому адресу в Варшаве.",

    stats: [
      {
        label: "Расстояние",
        value: "Около 550–600 км",
      },
      {
        label: "Формат поездки",
        value: "От двери до двери",
      },
      {
        label: "Пассажиры",
        value: "Только ваша группа",
      },
      {
        label: "Стоимость",
        value: "Фиксируется заранее",
      },
    ],

    photosTitle: "Варшава — место назначения",

    // Пока не добавляйте сюда фотографии аэропортов WAW/WMI.
    // Для городской страницы позже используйте только локальные фото Варшавы.
    photos: [
      {
        src: "/img/warsaw/warsaw-old-town.webp",
        caption: "Старый город и Замковая площадь Варшавы",
      },
      {
        src: "/img/warsaw/warsaw-royal-castle.webp",
        caption: "Королевский замок в Варшаве",
      },
      {
        src: "/img/warsaw/warsaw-city-centre.webp",
        caption: "Современный центр Варшавы",
      },
    ],

    howTitle: "Как проходит трансфер Минск — Варшава",

    steps: [
      {
        icon: MapPin,
        title: "Подача автомобиля в Минске",
        desc:
          "Водитель заберёт вас от дома, гостиницы, офиса, вокзала или другого согласованного адреса в Минске. Не требуется добираться до общего места отправления.",
      },
      {
        icon: ShieldCheck,
        title: "Поездка через границу",
        desc:
          "Перед поездкой проверяется действующий статус пассажирских пунктов пропуска и возможные ограничения. Продолжительность прохождения границы заранее гарантировать невозможно.",
      },
      {
        icon: Building2,
        title: "Доставка по адресу в Варшаве",
        desc:
          "Довезём до центра Варшавы, гостиницы, квартиры, офиса, клиники, вокзала или другого адреса. Дополнительные остановки согласовываются при бронировании.",
      },
    ],

    infoTitle: "Информация о маршруте Минск — Варшава",

    infoRows: [
      {
        label: "Направление",
        value: "Минск → граница Беларусь–Польша → Варшава",
      },
      {
        label: "Расстояние",
        value:
          "Около 550–600 км в зависимости от адресов подачи и прибытия",
      },
      {
        label: "Время поездки",
        value:
          "Зависит от дорожной обстановки, маршрута и продолжительности пограничного контроля",
      },
      {
        label: "Пограничный переход",
        value:
          "Выбирается с учётом официального статуса пассажирских пунктов пропуска",
      },
      {
        label: "Подача в Минске",
        value: "Дом, гостиница, офис, вокзал или другой согласованный адрес",
      },
      {
        label: "Прибытие в Варшаве",
        value:
          "Центр города, отель, квартира, офис, вокзал или другой адрес",
      },
      {
        label: "Обратная поездка",
        value:
          "Индивидуальный трансфер Варшава — Минск доступен по предварительному заказу",
      },
    ],

    includedTitle: "Что входит в стоимость трансфера",

    included: [
      "Подача автомобиля по согласованному адресу в Минске",
      "Индивидуальный автомобиль без посторонних пассажиров",
      "Прямая поездка без пересадок",
      "Помощь водителя с багажом",
      "Ожидание автомобиля во время пограничного контроля",
      "Питьевая вода в салоне",
      "Детское кресло или бустер по предварительному запросу",
      "Фиксированная стоимость после подтверждения заказа",
    ],

    whyTitle: "Почему выбирают ComfortLine",

    whyItems: [
      "Работаем в сфере индивидуальных трансферов с 2015 года",
      "Автомобиль предоставляется только вашей группе",
      "Подача от двери в согласованное время",
      "Комфортные седаны, кроссоверы, минивэны и микроавтобусы",
      "Подходит для семей, деловых поездок и большого багажа",
      "Можно заказать обратный трансфер Варшава — Минск",
      "Менеджер подтверждает детали поездки до выезда",
      "Дополнительные остановки можно согласовать заранее",
    ],

    faqTitle:
      "Частые вопросы об индивидуальном трансфере Минск — Варшава",

    faq: [
      {
        q: "Сколько стоит индивидуальный трансфер Минск — Варшава?",
        a:
          "Стоимость рассчитывается за автомобиль, а не за одного пассажира. Она зависит от даты и времени поездки, адресов подачи и прибытия, класса автомобиля, количества пассажиров, багажа и дополнительных остановок. После согласования менеджер подтверждает фиксированную сумму до выезда.",
      },
      {
        q: "Чем трансфер отличается от обычного такси или автобуса?",
        a:
          "Индивидуальный трансфер бронируется заранее на конкретную дату и маршрут. Машина предоставляется только вам и вашей группе, без подсадки посторонних пассажиров. Водитель забирает вас по адресу в Минске и доставляет непосредственно по адресу в Варшаве.",
      },
      {
        q: "Сколько времени занимает поездка из Минска в Варшаву?",
        a:
          "Расстояние составляет приблизительно 550–600 км. Итоговое время зависит от выбранного маршрута, движения на дорогах, очереди и продолжительности пограничного контроля. Поэтому точное время прибытия заранее гарантировать невозможно.",
      },
      {
        q: "Откуда водитель забирает пассажиров в Минске?",
        a:
          "Подача возможна от дома, гостиницы, офиса, железнодорожного вокзала или другого согласованного адреса. В Варшаве водитель также доставляет пассажиров непосредственно к указанному адресу.",
      },
      {
        q: "Какой пограничный переход используется?",
        a:
          "Маршрут определяется перед поездкой с учётом официального статуса пассажирских пунктов пропуска и действующих ограничений. Пассажирам также рекомендуется самостоятельно проверить официальные правила пересечения границы перед выездом.",
      },
      {
        q: "Можно ли заказать трансфер Варшава — Минск?",
        a:
          "Да. Обратную поездку можно оформить одновременно с трансфером из Минска либо отдельным заказом. Водитель заберёт пассажиров от согласованного адреса в Варшаве.",
      },
      {
        q: "Можно ли ехать с ребёнком?",
        a:
          "Да. При оформлении заявки сообщите возраст и вес ребёнка. Менеджер подтвердит наличие подходящего детского кресла или бустера для выбранного автомобиля.",
      },
      {
        q: "Можно ли перевозить большой багаж или домашнее животное?",
        a:
          "Да, но это необходимо указать заранее. Сообщите количество чемоданов, размеры крупного багажа и информацию о животном, чтобы менеджер подобрал подходящий автомобиль.",
      },
      {
        q: "Можно ли доехать до аэропорта Шопена или Модлина?",
        a:
          "Да, но для поездок к конкретному рейсу предусмотрены отдельные страницы: трансфер Минск — аэропорт Варшавы Шопен WAW и трансфер Минск — аэропорт Варшавы Модлин WMI. Эта страница предназначена прежде всего для поездки к адресу в городе Варшава.",
      },
    ],

    ctaTitle: "Заказать индивидуальный трансфер Минск — Варшава",

    ctaDesc:
      "Укажите дату, время, адрес подачи, адрес прибытия, количество пассажиров и багажа. Менеджер рассчитает стоимость и подтвердит автомобиль.",

    ctaBtn: "Рассчитать стоимость",

    prefilledFrom: "Минск",
    prefilledTo: "Варшава",

    backBtn: "← Все трансферы в Польшу",
  },

  en: {
    badge: "Private Transfer to Warsaw",

    title: "Private Taxi Transfer from Minsk to Warsaw",

    subtitle:
      "Private door-to-door transfer from Minsk to Warsaw. Travel in a dedicated vehicle with no shared passengers, at an agreed departure time, with a price confirmed before the journey and direct drop-off at your hotel, apartment, office, station or another Warsaw address.",

    stats: [
      {
        label: "Distance",
        value: "About 550–600 km",
      },
      {
        label: "Service",
        value: "Door to door",
      },
      {
        label: "Passengers",
        value: "Your group only",
      },
      {
        label: "Price",
        value: "Confirmed in advance",
      },
    ],

    photosTitle: "Your destination — Warsaw",

    photos: [
      {
        src: "/img/warsaw/warsaw-old-town.webp",
        caption: "Warsaw Old Town and Castle Square",
      },
      {
        src: "/img/warsaw/warsaw-royal-castle.webp",
        caption: "Royal Castle in Warsaw",
      },
      {
        src: "/img/warsaw/warsaw-city-centre.webp",
        caption: "Warsaw city centre skyline",
      },
    ],

    howTitle: "How the Minsk to Warsaw transfer works",

    steps: [
      {
        icon: MapPin,
        title: "Pickup in Minsk",
        desc:
          "Your driver collects you from your home, hotel, office, railway station or another agreed address in Minsk.",
      },
      {
        icon: ShieldCheck,
        title: "Cross-border journey",
        desc:
          "The current official status of passenger border checkpoints and applicable restrictions is checked before departure. Border processing time cannot be guaranteed.",
      },
      {
        icon: Building2,
        title: "Drop-off in Warsaw",
        desc:
          "We take you directly to Warsaw city centre, a hotel, apartment, office, clinic, station or another agreed address.",
      },
    ],

    infoTitle: "Minsk to Warsaw route information",

    infoRows: [
      {
        label: "Direction",
        value: "Minsk → Belarus–Poland border → Warsaw",
      },
      {
        label: "Distance",
        value:
          "Approximately 550–600 km depending on pickup and drop-off addresses",
      },
      {
        label: "Journey time",
        value:
          "Depends on the route, road conditions and duration of border formalities",
      },
      {
        label: "Border checkpoint",
        value:
          "Selected according to the official status of passenger checkpoints",
      },
      {
        label: "Pickup in Minsk",
        value: "Home, hotel, office, railway station or another agreed address",
      },
      {
        label: "Drop-off in Warsaw",
        value:
          "City centre, hotel, apartment, office, station or another address",
      },
      {
        label: "Return transfer",
        value: "Warsaw to Minsk journeys are available by advance booking",
      },
    ],

    includedTitle: "What is included",

    included: [
      "Pickup from an agreed address in Minsk",
      "Private vehicle with no shared passengers",
      "Direct journey without transfers",
      "Driver assistance with luggage",
      "Vehicle waiting during border formalities",
      "Bottled water in the vehicle",
      "Child seat or booster by advance request",
      "Price confirmed before departure",
    ],

    whyTitle: "Why choose ComfortLine",

    whyItems: [
      "Providing private transfer services since 2015",
      "Vehicle dedicated exclusively to your group",
      "Door-to-door pickup at an agreed time",
      "Comfort sedans, SUVs, minivans and minibuses",
      "Suitable for families, business travel and heavy luggage",
      "Return Warsaw to Minsk transfer available",
      "Journey details confirmed before departure",
      "Additional stops can be arranged in advance",
    ],

    faqTitle: "Minsk to Warsaw private transfer FAQ",

    faq: [
      {
        q: "How much is a private transfer from Minsk to Warsaw?",
        a:
          "The price is calculated per vehicle rather than per passenger. It depends on the date and time, pickup and drop-off addresses, vehicle class, number of passengers, luggage and additional stops. The final amount is confirmed before departure.",
      },
      {
        q: "How is a private transfer different from a taxi or bus?",
        a:
          "The transfer is booked in advance for a specific date and route. The vehicle is dedicated exclusively to your group, with no shared passengers. Pickup and drop-off are provided directly at your agreed addresses.",
      },
      {
        q: "How long does the Minsk to Warsaw journey take?",
        a:
          "The distance is approximately 550–600 km. Total journey time depends on the route, road conditions, border queues and duration of passport and customs controls, so an exact arrival time cannot be guaranteed.",
      },
      {
        q: "Where can the driver collect me in Minsk?",
        a:
          "Pickup is available from your home, hotel, office, railway station or another agreed address. In Warsaw, the driver also takes you directly to your requested address.",
      },
      {
        q: "Which border checkpoint is used?",
        a:
          "The route is selected before departure according to the current official status of passenger checkpoints and applicable restrictions. Travellers should also verify official border requirements before travelling.",
      },
      {
        q: "Can I book a return transfer from Warsaw to Minsk?",
        a:
          "Yes. The return journey can be booked together with the outbound transfer or as a separate reservation, with pickup from an agreed address in Warsaw.",
      },
      {
        q: "Can I travel with children?",
        a:
          "Yes. Provide the child's age and weight when booking so that a suitable child seat or booster can be confirmed.",
      },
      {
        q: "Can I travel with large luggage or a pet?",
        a:
          "Yes, but please provide the details in advance. The number of suitcases, oversized items and pet requirements help us select an appropriate vehicle.",
      },
      {
        q: "Can you take me to Warsaw Chopin or Modlin Airport?",
        a:
          "Yes, but airport journeys have separate pages for Warsaw Chopin Airport WAW and Warsaw Modlin Airport WMI. This page is primarily intended for transfers to addresses within Warsaw city.",
      },
    ],

    ctaTitle: "Book a private Minsk to Warsaw transfer",

    ctaDesc:
      "Provide the date, preferred departure time, pickup and drop-off addresses, number of passengers and luggage. Our manager will calculate the price and confirm the vehicle.",

    ctaBtn: "Request a quote",

    prefilledFrom: "Minsk",
    prefilledTo: "Warsaw",

    backBtn: "← All Poland transfers",
  },

  seo: {
    titleRu:
      "Трансфер Минск — Варшава: индивидуальное такси | ComfortLine",

    titleEn:
      "Private Minsk to Warsaw Transfer & Taxi | ComfortLine",

    descRu:
      "Индивидуальный трансфер-такси Минск — Варшава от двери до двери. Машина без попутчиков, фиксированная цена, детские кресла и обратный маршрут.",

    descEn:
      "Private door-to-door transfer from Minsk to Warsaw. Dedicated vehicle, price confirmed in advance, child seats and return journeys available.",

    pathRu: "/трансфер-варшава",
    pathEn: "/warsaw-transfer",

    breadcrumbRu: "Индивидуальный трансфер Минск — Варшава",
    breadcrumbEn: "Private Minsk to Warsaw transfer",

    fromName: "Минск",
    toName: "Варшава",

    keywordsRu:
      "трансфер минск варшава, индивидуальный трансфер минск варшава, такси минск варшава, минск варшава индивидуальный трансфер такси, трансфер из минска в варшаву, заказать такси минск варшава, трансфер варшава минск",

    keywordsEn:
      "minsk warsaw transfer, minsk to warsaw taxi, private transfer minsk warsaw, door to door minsk warsaw, warsaw to minsk transfer",
  },
};

export default function WarsawTransferPage() {
  return <RouteLandingPage data={data} />;
}