// Данные для генератора таверн

const tavernData = {
  // Прилагательные для названий
  prefixes: [
    // Состояния и настроения
    "Пьяный",
    "Сонный",
    "Весёлый",
    "Угрюмый",
    "Буйный",
    "Тихий",
    "Шумный",
    "Задумчивый",
    "Хмельной",
    "Бодрый",
    "Сытый",
    "Голодный",
    "Довольный",
    "Ворчливый",
    "Смеющийся",
    "Поющий",
    "Танцующий",
    "Дремлющий",
    "Храпящий",
    "Гуляющий",
    "Пляшущий",
    "Скачущий",
    "Ревущий",
    "Рычащий",
    "Свистящий",
    "Кричащий",
    "Шепчущий",
    "Бормочущий",
    "Вопящий",
    "Молчащий",

    // Характеристики
    "Мудрый",
    "Хитрый",
    "Лукавый",
    "Честный",
    "Верный",
    "Добрый",
    "Злой",
    "Коварный",
    "Благородный",
    "Подлый",
    "Щедрый",
    "Скупой",
    "Богатый",
    "Бедный",
    "Удачливый",
    "Невезучий",
    "Счастливый",
    "Несчастный",
    "Везучий",
    "Невезучий",
    "Проклятый",
    "Благословенный",
    "Священный",
    "Грешный",
    "Праведный",
    "Нечестивый",
    "Светлый",
    "Тёмный",
    "Сумрачный",
    "Яркий",

    // Физические характеристики
    "Толстый",
    "Тощий",
    "Высокий",
    "Низкий",
    "Кривой",
    "Прямой",
    "Косой",
    "Хромой",
    "Слепой",
    "Глухой",
    "Горбатый",
    "Кудрявый",
    "Лысый",
    "Бородатый",
    "Усатый",
    "Волосатый",
    "Лохматый",
    "Гладкий",
    "Морщинистый",
    "Пятнистый",

    // Цвета
    "Золотой",
    "Серебряный",
    "Медный",
    "Бронзовый",
    "Железный",
    "Стальной",
    "Оловянный",
    "Ржавый",
    "Красный",
    "Синий",
    "Зелёный",
    "Жёлтый",
    "Чёрный",
    "Белый",
    "Серый",
    "Пурпурный",
    "Алый",
    "Лазурный",
    "Багряный",
    "Янтарный",

    // Материалы
    "Деревянный",
    "Каменный",
    "Кирпичный",
    "Соломенный",
    "Глиняный",
    "Хрустальный",
    "Костяной",
    "Кожаный",
    "Шёлковый",
    "Бархатный",

    // Время и возраст
    "Старый",
    "Древний",
    "Вечный",
    "Новый",
    "Молодой",
    "Утренний",
    "Вечерний",
    "Ночной",
    "Полуденный",
    "Полуночный",

    // Погода и природа
    "Морозный",
    "Ледяной",
    "Огненный",
    "Пламенный",
    "Ветреный",
    "Дождливый",
    "Туманный",
    "Солнечный",
    "Лунный",
    "Звёздный",

    // Магические
    "Волшебный",
    "Чародейский",
    "Магический",
    "Мистический",
    "Таинственный",
    "Загадочный",
    "Зачарованный",
    "Проклятый",
    "Благословенный",
    "Заколдованный",
  ],

  // Существительные для названий
  nouns: [
    // Фэнтезийные расы
    "Дракон",
    "Гном",
    "Эльф",
    "Гоблин",
    "Орк",
    "Тролль",
    "Огр",
    "Хоббит",
    "Полурослик",
    "Дварф",
    "Кентавр",
    "Минотавр",
    "Сатир",
    "Фавн",
    "Нимфа",
    "Дриада",
    "Сильф",
    "Ундина",
    "Джинн",
    "Ифрит",

    // Мифические существа
    "Единорог",
    "Грифон",
    "Феникс",
    "Василиск",
    "Мантикора",
    "Пегас",
    "Химера",
    "Гидра",
    "Кракен",
    "Левиафан",
    "Дракончик",
    "Виверна",
    "Кокатрикс",
    "Гаргулья",
    "Саламандра",
    "Сфинкс",
    "Гарпия",
    "Сирена",
    "Циклоп",
    "Титан",

    // Животные
    "Медведь",
    "Волк",
    "Лис",
    "Кабан",
    "Олень",
    "Сокол",
    "Ворон",
    "Филин",
    "Ястреб",
    "Орёл",
    "Лев",
    "Тигр",
    "Пантера",
    "Барс",
    "Рысь",
    "Конь",
    "Бык",
    "Баран",
    "Козёл",
    "Вепрь",

    // Классы персонажей
    "Воин",
    "Маг",
    "Чародей",
    "Волшебник",
    "Жрец",
    "Клирик",
    "Паладин",
    "Следопыт",
    "Друид",
    "Бард",
    "Разбойник",
    "Вор",
    "Убийца",
    "Монах",
    "Варвар",
    "Колдун",
    "Алхимик",
    "Некромант",
    "Шаман",
    "Мистик",

    // Оружие и доспехи
    "Меч",
    "Топор",
    "Молот",
    "Кинжал",
    "Копьё",
    "Лук",
    "Арбалет",
    "Щит",
    "Шлем",
    "Доспех",
    "Клинок",
    "Кольчуга",
    "Латы",
    "Наручи",
    "Поножи",
    "Забрало",
    "Кираса",
    "Рапира",
    "Алебарда",
    "Булава",

    // Магические предметы
    "Посох",
    "Жезл",
    "Амулет",
    "Кольцо",
    "Корона",
    "Диадема",
    "Скипетр",
    "Кристалл",
    "Руна",
    "Талисман",
    "Свиток",
    "Гримуар",
    "Фолиант",
    "Сфера",
    "Призма",
    "Зеркало",
    "Чаша",
    "Котёл",
    "Фиал",
    "Реликвия",

    // Природные объекты
    "Дуб",
    "Ясень",
    "Клён",
    "Вяз",
    "Сосна",
    "Камень",
    "Утёс",
    "Гора",
    "Река",
    "Озеро",
    "Водопад",
    "Родник",
    "Ручей",
    "Пещера",
    "Грот",
    "Роща",
    "Сад",
    "Луг",
    "Холм",
    "Долина",

    // Небесные тела
    "Луна",
    "Солнце",
    "Звезда",
    "Комета",
    "Созвездие",
    "Метеор",
    "Планета",
    "Небосвод",
    "Зарница",
    "Млечный Путь",

    // Погодные явления
    "Гром",
    "Молния",
    "Буря",
    "Шторм",
    "Ураган",
    "Метель",
    "Вьюга",
    "Туман",
    "Радуга",
    "Заря",

    // Время суток и сезоны
    "Рассвет",
    "Закат",
    "Полдень",
    "Полночь",
    "Сумерки",
    "Весна",
    "Лето",
    "Осень",
    "Зима",
    "Год",

    // Эмоции и состояния
    "Смех",
    "Плач",
    "Крик",
    "Шёпот",
    "Песня",
    "Танец",
    "Сон",
    "Мечта",
    "Страх",
    "Отвага",

    // Абстрактные понятия
    "Судьба",
    "Удача",
    "Рок",
    "Честь",
    "Слава",
    "Доблесть",
    "Мудрость",
    "Сила",
    "Магия",
    "Тайна",
  ],

  // Описания зданий
  buildingDescriptions: [
    // Маленькие таверны
    {
      size: "small",
      description:
        "Небольшое уютное здание с соломенной крышей и белёными стенами. Из трубы вьётся дымок, а в окнах мерцает тёплый свет.",
      features: [
        "Маленький палисадник с цветами",
        "Скрипучее крыльцо",
        "Резные наличники",
      ],
      condition: "хорошее",
    },
    {
      size: "small",
      description:
        "Приземистый домик с покосившейся крышей и кривыми стенами. Несмотря на неказистый вид, внутри удивительно уютно.",
      features: ["Старая вывеска", "Плющ на стенах", "Кованый фонарь"],
      condition: "ветхое",
    },

    // Средние таверны
    {
      size: "medium",
      description:
        "Двухэтажное здание из красного кирпича с высокими окнами и широким крыльцом. Над входом висит искусно выкованная вывеска.",
      features: ["Большие окна", "Кованая ограда", "Деревянные ставни"],
      condition: "отличное",
    },
    {
      size: "medium",
      description:
        "Фахверковый дом с остроконечной крышей и множеством слуховых окон. Стены украшены затейливой резьбой.",
      features: ["Резные балки", "Витражные окна", "Флюгер на крыше"],
      condition: "хорошее",
    },

    // Большие таверны
    {
      size: "large",
      description:
        "Внушительное трёхэтажное здание из серого камня с несколькими пристройками и большим внутренним двором.",
      features: ["Арочные окна", "Каменные горгульи", "Широкие ворота"],
      condition: "отличное",
    },
    {
      size: "large",
      description:
        "Бывший дворянский особняк, превращённый в таверну. Сохранились элементы роскошного убранства и парк вокруг здания.",
      features: ["Мраморные колонны", "Фонтан", "Статуи"],
      condition: "хорошее",
    },
  ],

  // Особенности интерьера
  interiorFeatures: [
    // Общие залы
    {
      type: "common_room",
      description:
        "Просторный зал с высоким потолком, поддерживаемым массивными деревянными балками. В центре располагается большой камин.",
      atmosphere: "уютная",
      features: ["Удобные кресла", "Медные светильники", "Шкуры на полу"],
    },
    {
      type: "common_room",
      description:
        "Длинный зал с множеством столов и скамей. Вдоль стен развешаны охотничьи трофеи и старинное оружие.",
      atmosphere: "оживлённая",
      features: ["Длинные столы", "Охотничьи трофеи", "Факелы на стенах"],
    },

    // Барные стойки
    {
      type: "bar",
      description:
        "Массивная барная стойка из полированного дуба, за которой выстроились ряды бутылок и бочек.",
      features: ["Медные краны", "Коллекция кружек", "Зеркало за стойкой"],
    },
    {
      type: "bar",
      description:
        "Изогнутая стойка из тёмного дерева с инкрустацией. Над ней висит внушительная коллекция различных бокалов.",
      features: ["Резные узоры", "Хрустальные бокалы", "Латунные подсвечники"],
    },

    // Особые помещения
    {
      type: "special_room",
      description:
        "Отдельная комната для важных гостей с богатой обстановкой и отдельным камином.",
      features: ["Бархатные шторы", "Мягкие кресла", "Картины на стенах"],
    },
    {
      type: "special_room",
      description:
        "Уединённый альков с витражными окнами и мягкими диванами, отделённый от общего зала резной ширмой.",
      features: ["Витражи", "Мягкие диваны", "Резная ширма"],
    },
  ],

  // Описания посетителей
  patronDescriptions: [
    // Воины и наёмники
    {
      type: "warrior",
      description:
        "Крепко сложенный мужчина в потёртой кожаной броне. На поясе висит внушительный меч.",
      behavior: "Молча потягивает эль, внимательно наблюдая за залом",
      story: "Ищет работу как наёмник",
    },
    {
      type: "warrior",
      description:
        "Женщина-воительница с длинными рыжими волосами и шрамом через щеку. Её доспехи украшены необычными рунами.",
      behavior: "Чистит своё оружие за столом",
      story: "Выслеживает опасного преступника",
    },

    // Маги и чародеи
    {
      type: "mage",
      description:
        "Седой старик в синей мантии, расшитой серебряными звёздами. Перед ним лежит древняя книга.",
      behavior: "Делает заметки в пергаменте",
      story: "Исследует местные магические аномалии",
    },
    {
      type: "mage",
      description:
        "Молодая волшебница в изумрудном плаще. Её посох тихо светится в темноте.",
      behavior: "Изучает странный кристалл",
      story: "Собирает редкие магические компоненты",
    },

    // Торговцы и ремесленники
    {
      type: "merchant",
      description:
        "Полный мужчина в богатой одежде, увешанный золотыми цепями.",
      behavior: "Громко торгуется с другими посетителями",
      story: "Ищет редкие товары",
    },
    {
      type: "merchant",
      description: "Худощавый ювелир с увеличительным стеклом на шнурке.",
      behavior: "Осматривает драгоценные камни",
      story: "Скупает необычные самоцветы",
    },
  ],

  // Слухи и сплетни
  rumors: [
    // Городские слухи
    {
      type: "urban",
      rumor:
        "В городе появился таинственный вор, который крадёт только магические предметы.",
      truth:
        "Это молодой дракон в человеческом обличье, собирающий сокровища для своей коллекции.",
      hooks: ["Награда за поимку", "Следы ведут к богатому району"],
    },
    {
      type: "urban",
      rumor: "Из городской библиотеки пропала древняя книга заклинаний.",
      truth: "Книга сама телепортировалась, почувствовав опасность.",
      hooks: ["Странные магические явления", "Говорящие крысы видели вора"],
    },

    // Сельские слухи
    {
      type: "rural",
      rumor:
        "В ближайшем лесу видели огромного белого оленя с золотыми рогами.",
      truth: "Это дух леса, ищущий достойного защитника для своих владений.",
      hooks: ["Следы ведут к древнему кургану", "Друиды предлагают награду"],
    },
    {
      type: "rural",
      rumor:
        "Местные фермеры жалуются на пропажу скота, но следов хищников нет.",
      truth: "Молодой дракон устроил логово в заброшенной шахте.",
      hooks: ["Странные следы", "Обгоревшие деревья"],
    },
  ],

  // Особые блюда
  specialMeals: [
    // Супы и похлёбки
    {
      type: "soup",
      name: "Похлёбка охотника",
      description:
        "Густой суп из дичи с лесными грибами и корнеплодами. Приправлен горными травами.",
      price: "2 мм",
      effect: "Согревает и придаёт сил",
    },
    {
      type: "soup",
      name: "Рыбацкая уха",
      description:
        "Наваристая уха из трёх видов рыбы с душистыми травами и перцем.",
      price: "3 мм",
      effect: "Улучшает зрение в темноте",
    },

    // Мясные блюда
    {
      type: "meat",
      name: "Жаркое трактирщика",
      description:
        "Нежная телятина, томлённая в тёмном эле с овощами и пряными травами.",
      price: "5 мм",
      effect: "Восстанавливает силы",
    },
    {
      type: "meat",
      name: "Кабанье рагу",
      description:
        "Дикий кабан, тушенный с корнеплодами и лесными ягодами в красном вине.",
      price: "4 мм",
      effect: "Придаёт выносливость",
    },
  ],

  // Напитки
  drinks: [
    // Эли и пиво
    {
      type: "ale",
      name: "Гномий тёмный эль",
      description:
        "Густой тёмный эль с нотками карамели и дыма. Варится по древнему рецепту гномов.",
      price: "2 мм",
      effect: "Придаёт сил",
    },
    {
      type: "ale",
      name: "Эльфийский светлый эль",
      description:
        "Лёгкий светлый эль с цветочным ароматом и медовым послевкусием.",
      price: "3 мм",
      effect: "Обостряет чувства",
    },

    // Вина
    {
      type: "wine",
      name: "Красное драконье",
      description:
        "Крепкое красное вино с пряным ароматом и огненным послевкусием.",
      price: "5 мм",
      effect: "Согревает изнутри",
    },
    {
      type: "wine",
      name: "Лунное серебро",
      description:
        "Светлое эльфийское вино с мерцающим отливом и вкусом лесных ягод.",
      price: "6 мм",
      effect: "Улучшает ночное зрение",
    },
  ],

  // Особые услуги
  specialServices: [
    // Размещение
    {
      type: "lodging",
      name: "Люкс авантюриста",
      description:
        "Просторная комната с отдельной ванной и защитными рунами на дверях.",
      price: "20 мм в сутки",
      features: ["Сейф", "Личный слуга", "Горячая вода"],
    },
    {
      type: "lodging",
      name: "Комната мага",
      description:
        "Комната с магической защитой и столом для алхимических экспериментов.",
      price: "15 мм в сутки",
      features: ["Защита от огня", "Алхимический стол", "Книжные полки"],
    },

    // Дополнительные услуги
    {
      type: "service",
      name: "Хранение ценностей",
      description: "Сейф с магической защитой для хранения ценных предметов.",
      price: "5 мм в сутки",
      features: ["Магическая защита", "Страховка", "Конфиденциальность"],
    },
    {
      type: "service",
      name: "Уход за оружием",
      description: "Профессиональная чистка и заточка оружия.",
      price: "3 мм за предмет",
      features: ["Полировка", "Заточка", "Мелкий ремонт"],
    },
  ],
};

module.exports = tavernData;
