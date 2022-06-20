const priceDefaultSet = [
  { label: 'Средний чек', value: 2500 },
  { label: 'Банкетное меню', value: 4000, fromSlug: true },
  { label: 'Аренда/час', value: 3000, fromSlug: true },
]

// id: 5,
//       title: 'тестовый',
//       address: [Object],
//       workingHours: 'время работы',
//       phoneNumbers: '+7 (901) 231-2312',
//       onlineDisplay: 'Y',
//       categories: [],
//       placeTypes: [],
//       features: [],
//       services: [],
//       equipments: [],
//       cuisines: [],
//       parking: null,
//       parkingSpace: null,
//       interiorStyle: [],
//       halls: [],
//       placeDescription: null,
//       averageCheckPerGuest: 1231,
//       banquetMenuPerGuest: 100,
//       buffetMenuPerGuest: 123,
//       rentPerHour: 123,
//       rentPerWeekDaysAndHolidays: 'тест цауа 222',
//       deposit: '11111',
//       includedInDeposit: 'еда, вода',
//       ownAlcohol: 'N',
//       serviceMaintenance: '15%',
//       corkageFee: '300р за стакан',
//       additionalExpenses: 'стул с собой',
//       additionalInformation: 'какой то текст',
//       media: [],
//       roomFund: [Object],
//       stepsCompleted: 'THREE',
//       placeStatus: 'MODERATION'

export const mockPlaces = [
  {
    id: 1,
    title: 'Банкетный зал лофт Форест Холл',
    gallery: [
      {
        preview: '/img/place-1.jpg',
      },
      {
        preview: '/img/place-2.jpg',
      },
      {
        preview: '/img/place-1.jpg',
      },
    ],
    rating: 5,
    reviewCount: 23,
    content: `
      <p class="p-body"><span class="c-light">Станция метро:</span> Сокольники (5 минут пешком)</p>
      <p class="p-body"><span class="c-light">Вместимость (чел.):</span>35/100/150</p>
      <p class="p-body"><span class="c-light">Услуги:</span> Wi-Fi, Бизнес-ланч, Выездная регистрация, Банкеты, Анимация, Тимбилдинг, Конференции, Презентации, Номерной...</p>
      <p class="p-body"><span class="c-light">Особенности:</span> Летняя веранда, Парковая зона, удобный подъезд</p>
    `,
    prices: priceDefaultSet,
  },
  {
    id: 2,
    title: 'Банкетный зал лофт Форест Холл',
    gallery: [
      {
        preview: '/img/place-2.jpg',
      },
      {
        preview: '/img/place-1.jpg',
      },
      {
        preview: '/img/place-1.jpg',
      },
    ],
    rating: 5,
    reviewCount: 23,
    content: `
      <p class="p-body"><span class="c-light">Станция метро:</span> Сокольники (5 минут пешком)</p>
      <p class="p-body"><span class="c-light">Вместимость (чел.):</span>35/100/150</p>
    `,
    prices: priceDefaultSet,
  },
  {
    id: 3,
    title: 'Банкетный зал лофт Форест Холл',
    gallery: [
      {
        preview: '/img/place-3.jpg',
      },
      {
        preview: '/img/place-1.jpg',
      },
      {
        preview: '/img/place-1.jpg',
      },
    ],
    rating: 5,
    reviewCount: 23,
    content: `
      <p class="p-body"><span class="c-light">Станция метро:</span> Сокольники (5 минут пешком)</p>
      <p class="p-body"><span class="c-light">Вместимость (чел.):</span>35/100/150</p>
    `,
    prices: priceDefaultSet,
  },
  {
    id: 4,
    title: 'Банкетный зал лофт Форест Холл',
    gallery: [
      {
        preview: '/img/place-1.jpg',
      },
      {
        preview: '/img/place-1.jpg',
      },
      {
        preview: '/img/place-1.jpg',
      },
    ],
    rating: 5,
    reviewCount: 23,
    content: `
      <p class="p-body"><span class="c-light">Станция метро:</span> Сокольники (5 минут пешком)</p>
      <p class="p-body"><span class="c-light">Вместимость (чел.):</span>35/100/150</p>
    `,
  },
  {
    id: 5,
    title: 'Банкетный зал лофт Форест Холл',
    gallery: [
      {
        preview: '/img/place-1.jpg',
      },
      {
        preview: '/img/place-1.jpg',
      },
      {
        preview: '/img/place-1.jpg',
      },
    ],
    rating: 5,
    reviewCount: 23,
    content: `
      <p class="p-body"><span class="c-light">Станция метро:</span> Сокольники (5 минут пешком)</p>
      <p class="p-body"><span class="c-light">Вместимость (чел.):</span>35/100/150</p>
    `,
    prices: priceDefaultSet,
  },
  {
    id: 6,
    title: 'Банкетный зал лофт Форест Холл',
    gallery: [
      {
        preview: '/img/place-1.jpg',
      },
      {
        preview: '/img/place-1.jpg',
      },
      {
        preview: '/img/place-1.jpg',
      },
    ],
    rating: 5,
    reviewCount: 23,
    content: `
      <p class="p-body"><span class="c-light">Станция метро:</span> Сокольники (5 минут пешком)</p>
      <p class="p-body"><span class="c-light">Вместимость (чел.):</span>35/100/150</p>
    `,
    prices: priceDefaultSet,
  },
  {
    id: 7,
    title: 'Банкетный зал лофт Форест Холл',
    gallery: [
      {
        preview: '/img/place-1.jpg',
      },
      {
        preview: '/img/place-1.jpg',
      },
      {
        preview: '/img/place-1.jpg',
      },
    ],
    rating: 5,
    reviewCount: 23,
    content: `
      <p class="p-body"><span class="c-light">Станция метро:</span> Сокольники (5 минут пешком)</p>
      <p class="p-body"><span class="c-light">Вместимость (чел.):</span>35/100/150</p>
    `,
    prices: priceDefaultSet,
  },
]
