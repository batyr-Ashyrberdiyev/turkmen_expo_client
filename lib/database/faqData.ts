interface FAQItem {
  title?: string;
  text: string;
  list?: string;
  list2?: string;
  list3?: string;
  list4?: string;
  text2?: string;
  text3?: string;
  text4?: string;
  text5?: string;
}

interface ExhibitionFAQ {
  title: string;
  members?: boolean;
  visitors?: boolean;
  wifi?: boolean;
  faqAll: FAQItem[];
}

export const faqData: ExhibitionFAQ[] = [
  {
    title: "Посещение выставки, ориентирование на комплексе, общая информация",
    faqAll: [
      {
        title: "Как посетить выставку?",
        text: "Добраться до Центрального выставочного комплекса «ЭКСПОЦЕНТР» на метро очень просто: выход от станции «Выставочная» находится рядом с Западным входом на территорию выставочного комплекса. Доехать до «ЭКСПОЦЕНТРА» можно и на электропоезде МЦК – до остановки «Деловой центр». В этом случае при выходе с МЦК нужно пересесть на станцию метро «Международная» и проехать до «Выставочной» либо прогуляться до «ЭКСПОЦЕНТРА» по территории делового центра «Москва-Сити». Прогулка займет несколько минут, расстояние от станции «Деловой центр» МЦК до «ЭКСПОЦЕНТРА» – всего 500 метров.Предварительно вам необходимо пройти регистрацию на сайте выставки, после чего вы получите электронный билет на почту. С этим билетом вы сможете посетить выставку.",
      },
      {
        title: "Время работы выставки",
        text: "Выставки работают, как правило, с 10.00 до 18.00, в последний день работы выставки – до 16.00. Уточнить время работы каждой конкретной выставки можно в календаре мероприятий.",
      },
      {
        title: "Можно ли посетить выставку с детьми?",
        text: "Посещение с детьми возможно в зависимости от возрастных ограничений выставки. Если ребенок будет младше указанного возраста, его НЕ ПУСТЯТ на выставку. Просим заранее ознакомиться с возрастными ограничениями на сайте выставки, которую планируете посетить.",
      },
      {
        title: "Есть ли парковка для посетителей?",
        text: "К сожалению, парковки для посетителей на территории выставочного комплекса нет. Можно воспользоваться городской парковкой или платной парковкой в ТРЦ «Афимолл Сити».",
      },
      {
        title: "Где находится гардероб?",
        text: "Гардероб есть в каждом павильоне (в павильоне №7 – только для участников). С расположением гардеробов вы можете ознакомиться на сайте «ЭКСПОЦЕНТРА» в разделе «Территория комплекса».",
      },
      {
        title: "Где находится камера хранения?",
        text: "Камера хранения расположена на первом уровне, после зоны регистрации Западного входа выставочного комплекса – в павильоне №8 (зал 5). Время работы камеры хранения с 10.00 до 18.00, в последний день работы выставки – до 16.00.",
      },
      {
        title: "Где поставить печать на командировочный лист?",
        text: "В бюро пропусков на Западном или Южном входах, тел. +7 (499) 795-28-50.",
      },
      {
        title: "Потерял/нашел вещи, к кому обратиться?",
        text: "В случае утери или обнаружения бесхозных вещей следует обратиться к администратору павильона или в Отдел безопасности по тел. +7 (499) 795-25-24 (дежурный).",
      },
      {
        title: "Как арендовать переговорную? Я посетитель.",
        text: "Арендовать переговорную могут только участники выставки.",
      },
      {
        title: "Где можно перекусить?",
        text: "С расположением кафе можете ознакомиться здесь.",
      },
      {
        title:
          "Где и как получить билеты для коллективных посещений ЦВК «ЭКСПОЦЕНТР» (группы учащихся, студенты)?",
        text: "Обратитесь в Дирекцию выставки. Контактная информация указана на сайте каждой выставки.",
      },
    ],
    visitors: true,
  },
  {
    title: "Обеспечение безопасности и нахождение автотранспорта на комплексе",
    faqAll: [
      {
        title: "Нужен ли отдельный пропуск на водителя, завозящего экспонаты?",
        text: "Нет, достаточно пропуска на автомобиль. На других сотрудников необходимо получить пропуск на период монтажа и демонтажа или удостоверение участника. Далее – пройти на выставочный комплекс через Западный вход.",
      },
      {
        title:
          "Разрешена ли стоянка личного автотранспорта на территории ЦВК «ЭКСПОЦЕНТР» в ночное время при наличии пропуска?",
        text: "Нет, ночная стоянка запрещена.",
      },
      {
        title:
          "Могу ли я оставить свой автомобиль в период монтажа/работы/демонтажа выставки на территории ЦВК «ЭКСПОЦЕНТР» в дневное время?",
        text: "Обратитесь в офис Сервис-бюро или к организатору выставки для приобретения пропуска на парковку. Стоянка разрешена с 8.00 до 20.00",
      },
    ],
    members: true,
  },
  {
    title: "Оформление «Удостоверений участника выставки»",
    faqAll: [
      {
        title:
          "Какое количество «Удостоверений участника выставки» включено в стоимость участия?",
        text: "Квота по количеству удостоверений, положенных экспоненту составляет*:",
        list: "при площади стенда до 90 кв. м включительно – одно удостоверение на 3 кв. м площади;",
        list2:
          "при площади стенда свыше 90 кв. м – 30 удостоверений плюс по одному Удостоверению на каждые 6 кв. м площади, превышающей 90 кв. м.",
        text2: `Квота по количеству удостоверений, положенных экспоненту составляет*:
      при площади стенда до 90 кв. м включительно – одно удостоверение на 3 кв. м площади;
      при площади стенда свыше 90 кв. м – 30 удостоверений плюс по одному Удостоверению на каждые 6 кв. м площади, превышающей 90 кв. м.
      Дополнительные «Удостоверения участника выставки» можно приобрести в Сервис-бюро или у организатора выставки.
      *Только для выставок, организатором которых является АО «ЭКСПОЦЕНТР».
      `,
        text3:
          "Дополнительные «Удостоверения участника выставки» можно приобрести в Сервис-бюро или у организатора выставки.",
        text4:
          "*Только для выставок, организатором которых является АО «ЭКСПОЦЕНТР».",
      },
      {
        title:
          "Если «Удостоверение участника выставки» потеряно, можно ли получить новое?",
        text: "Да, обратитесь в Сервис-бюро. Новое удостоверение выдается взамен утерянного на ту же фамилию при предъявлении документа, удостоверяющего личность.",
      },
      {
        title:
          "Можно ли заменить «Удостоверение участника выставки», если в фамилии сделана ошибка или произошла замена сотрудника на стенде?",
        text: "Да, новое удостоверение участника выдается в обмен на старое в Сервис-бюро.",
      },
      {
        title:
          "Действует ли «Удостоверение участника выставки» для прохода на территорию ЦВК «ЭКСПОЦЕНТР» в период монтажа или демонтажа?",
        text: "«Удостоверения участника выставки» дают право многократного прохода на территорию ЦВК «ЭКСПОЦЕНТР» как в период работы выставки, так и в период монтажа/демонтажа (с 8.00 до 20.00).",
      },
      {
        title:
          "Как я могу получить «Удостоверения участника выставки», включенные в стоимость участия?*",
        text: "Вариант 1",
        text2:
          "«Удостоверения участника выставки» можно оформить и самостоятельно распечатать (сохранить на смартфон) через личный кабинет.",
        text3: "Вариант 2",
        text4:
          "Для оформления «Удостоверения участника выставки» необходимо до начала монтажа выставки отправить на электронный адрес pass@expocentr.ru заполненную форму D.02 в формате word (без печатей и подписей). Получить «Удостоверения участника выставки» можно в Сервис-бюро, при себе необходимо иметь:",
        list: "доверенность по форме D.01;",
        list2:
          "письмо на получение «Удостоверений участника выставки» по форме D.02. Письмо должно быть оформлено на бланке компании, заверено печатью организации и подписью руководителя. В письме нужно указать Ф.И.О. сотрудников, которые будут работать на стенде в период проведения выставки.",
        text5: "*Для выставок, организатором которых является АО «ЭКСПОЦЕНТР».",
      },
    ],
    members: true,
  },
  {
    title: "Оформление пропусков на монтаж/демонтаж",
    faqAll: [
      {
        title:
          "Как можно получить пропуска для сотрудников монтажных и строительных организаций?",
        text: "Для получения пропусков на монтаж/демонтаж в Сервис-бюро при себе необходимо иметь:",
        list: "доверенность по форме D.01;",
        list2:
          "письмо на получение «Пропусков на монтаж/демонтаж» по форме D.04 в двух экземплярах. Письмо должно быть оформлено на бланке компании, заверено печатью организации и подписью руководителя. В письме нужно указать Ф.И.О. сотрудников, паспортные данные, дату и место рождения, место постоянной и временной регистрации. Письмо необходимо завизировать в организации, оказывающей услуги в области пожарной безопасности, ООО «Экспоконста» и Дирекции выставки (см. схему комплекса). Для гостевых выставок виза дирекции не нужна.",
      },
      {
        title:
          "Как я могу получить пропуска для сотрудников своей компании, занятых при оформлении стенда в период монтажа/демонтажа?",
        text: "Для ускорения оформления пропусков вы можете до начала монтажа выставки заполнить и отправить на электронный адрес pass@expocentr.ru Заявку на получение пропусков для сотрудников, которые будут работать намонтаже/демонтаже выставки.",
        text2:
          "Для получения пропусков на монтаж/демонтаж в Сервис-бюро при себе необходимо иметь:",
        list: "доверенность по форме D.01;",
        list2:
          "письмо на получение «Пропусков на монтаж/демонтаж» по форме D.04A в двух экземплярах. Письмо должно быть оформлено набланке компании, заверено печатью организации и подписью руководителя. В письме нужно указать Ф.И.О. сотрудников, которые будут работать на стенде в период проведения монтажа/демонтажа.",
      },
    ],
    members: true,
  },
  {
    title: "Оформление документов и услуг",
    faqAll: [
      {
        title: "Как заказать номер в гостинице?",
        text: "У официальных партнеров-туроператоров ЦВК «ЭКСПОЦЕНТР».",
      },
      {
        title: "Где можно воспользоваться компьютером, интернетом?",
        text: "В Сервис-бюро.",
      },
      {
        title: "Где можно сделать копии документов?",
        text: "В Сервис-бюро.",
      },
      {
        title:
          "Где и как можно заказать размещение рекламы на территории ЦВК«ЭКСПОЦЕНТР»?",
        text: "Обратитесь в Сервис-бюро по тел. +7 (499) 795-25-97, 795-37-14.",
      },
      {
        title:
          "Как и где можно арендовать аудио-, видеопрезентационную технику?",
        text: "Обратитесь к компаниям, аккредитованным в ЦВК «ЭКСПОЦЕНТР». Со списком компаний можно ознакомиться здесь.",
      },
      {
        title: "Как организовать переговоры?",
        text: "Напишите нам.",
      },
    ],
    members: true,
  },
  {
    title: "Оформление закрывающих документов",
    faqAll: [
      {
        title: "Как и где получить закрывающие документы по выставке?",
        text: "Получить свой экземпляр или передать подписанные документы (договор, акты сдачи-приемки оказанных услуг и выставочных площадей и пр. в двух экземплярах) можно во время монтажа или в период работы выставки в Сервис-бюро, павильон №4:",
        list: "стойка Технической дирекции – по аренде выставочной площади;",
        list2: "комната 2 – по сервисным услугам;",
        list3: "комната 3Б – по рекламным услугам.",
      },
      {
        title: "Как обменяться закрывающими документами после выставки?",
        text: "Отправить Почтой России или курьером, адрес для корреспонденции: 123100, г. Москва, Краснопресненская набережная, д. 14, АО «ЭКСПОЦЕНТР», Отдел сопровождения выставочно-конгрессной деятельности.",
      },
      {
        title: "Как получить скан-копию закрывающих документов по выставке?",
        text: "Необходимо направить запрос, приложив скан-копию акта сдачи-приемки выставочной площади или оказанных услуг, заверенного подписью и печатью организации, на e-mail:",
        list: "td@expocentr.ru (аренда выставочной площади);",
        list2: "usluga@expocentr.ru (сервисные услуги);",
        list3: "expo-adv@expocentr.ru (рекламные услуги);",
        list4: "katalog@expocentr.ru (каталог и путеводитель).",
      },
      {
        title: "Как получить диплом об участии в выставке?",
        text: "В период работы выставки диплом можно получить за стойкой Технической дирекции в Сервис-бюро (павильон №4) вместе с комплектом закрывающих документов. Электронную копию диплома можно получить после выставки по запросу в Дирекцию выставки.",
      },
    ],
    members: true,
  },
  {
    title: "«Экспоцентр» – за выставки без контрафакта»",
    faqAll: [
      {
        title:
          "Мы слышали про то, что у вас можно получить различные справки и свидетельства. Как их получить, и зачем они нужны?",
        text: "На всех собственных выставках «Экспоцентра» экспонентам предоставляется возможность получения следующих документов:",
        list: "свидетельства о демонстрации на выставке экспоната – может быть использовано для испрашивания так называемой «льготы по новизне» – возможность раскрытия информации о сути объекта патентования автором или правообладателем до даты приоритета. При установлении «льготы по новизне» раскрытие информации не является обстоятельством, препятствующим признанию патентоспособности объекта патентования;",
        list2:
          "свидетельства о демонстрации товарного знака – подобное свидетельство подразумевает демонстрацию товара с использованием обозначения, которое в дальнейшем экспонент планирует зарегистрировать в качестве товарного знака, и может быть использовано в целях испрашивания «выставочного приоритета». Установление «выставочного приоритета» позволяет признать дату приоритета товарного знака не с даты подачи заявки, а с даты открытого показа экспоната на выставке. Также подобные свидетельства используются с целью подтверждения факта демонстрации товаров с использованием определенного обозначения конкретным лицом в целях разрешения потенциальных вопросов относительно введения потребителя в заблуждение, которые могут возникнуть в процессе регистрации товарного знака;",
        list3:
          "справки о демонстрации экспоната с использованием уже зарегистрированного товарного знака – данный документ направлен на доказывание факта должного использования товарного знака на территории России путем демонстрации товара на выставке, в случае подачи заявления о досрочном прекращении правовой охраны товарного знака в связи с его неиспользованием.",
        text2:
          "Для получения указанных документов экспонент должен обратиться в первый день выставки в дирекцию данной выставки с заявлением о выдаче такого свидетельства или справки. К заявлению необходимо приложить описание экспоната / товарного знака или копию свидетельства о регистрации товарного знака, а также фотографии стенда, на котором происходит демонстрация экспонатов.",
        text3:
          "Все вышеуказанные документы предоставляются на безвозмездной основе.",
      },
      {
        title:
          "Мы представляем на выставке новый продукт, который еще не представлен на российском рынке, и, возможно, не скоро на нем появится. Можем ли мы получить какое-либо подтверждение такой демонстрации?",
        text: "Да, все зависит от того, с какой целью вам необходимо данное подтверждение. Если речь идет об использовании зарегистрированного товарного знака путем экспонирования товара на выставке, то мы готовы предоставить вам справку о демонстрации экспоната с использованием уже зарегистрированного товарного знака. Если же вам необходимо подтверждение демонстрации как таковой или в целях последующего получения охранного документа, мы предоставим вам свидетельство о демонстрации на выставке экспоната или товарного знака (в зависимости от ваших целей).",
      },
      {
        title:
          "Наша компания хотела бы представить на выставке новую технологию (разработку), на которую у нас еще нет патента. Мы опасаемся, что конкуренты могут скопировать наше решение.",
        text: "Самым правильным советом в данном случае является рекомендация подавать заявку на патентование указанной разработки до того, как она будет где-либо демонстрироваться. Однако, если по каким-то причинам это невозможно, «ЭКСПОЦЕНТР» может оказать экспоненту содействие путем выдачи справки о демонстрации этой разработки на выставке. Подобная справка может в дальнейшем помочь экспоненту в установлении так называемой «льготы по новизне», т.е. подтверждении того факта, что раскрытие сущности разработки производилось непосредственно автором или потенциальным патентообладателем разработки или с согласия последних. Но даже при наличии документального подтверждения правомерного раскрытия информации о существе разработки заявка на объект патентования должна быть подана в течение 6 месяцев со дня такого раскрытия для изобретений и полезных моделей, в течение 12 месяцев – для промышленных образцов.",
        text2:
          "Также обращаем ваше внимание, что получение вышеуказанного свидетельства способно только помочь в получении охранного документа, но, к сожалению, не может защитить от копирования инновационной разработки потенциальными конкурентами.",
        text3:
          "Однако, в случае если потенциальные конкуренты попытаются запатентовать указанную разработку (при условии подачи заявки на патентование позднее даты раскрытия вами существа разработки), подобное свидетельство позволит вам поднять вопрос о несоответствии такого патента условию патентоспособности «новизна».",
      },
      {
        title:
          "Чем нам может помочь получение свидетельства о демонстрации экспоната / товарного знака на выставке?",
        text: "Свидетельства о демонстрации могут оказаться полезными в процессе получения охранных документов в отношении объектов патентного права и товарных знаков. Справки о демонстрации товара, на котором использован зарегистрированный товарный знак, могут послужить одним из доказательств должного использования товарного знака на территории РФ, а следовательно, способствуют защите существующего исключительного права.",
      },
      {
        title:
          "Правда ли, что, если мы получим свидетельство о демонстрации на выставке экспоната, мы без проблем получим патент на демонстрируемое техническое решение? ",
        text: "«ЭКСПОЦЕНТР» готов помочь своим экспонентам в преодолении возможных трудностей, с которыми экспоненты могут столкнуться в процессе получения охранных документов на различные объекты интеллектуальной собственности. Экспоненты могут обратиться к сотрудникам, ведущим проект «ЭКСПОЦЕНТР» – за выставки без контрафакта», за консультацией по вопросам получения охранных документов на различные объекты интеллектуальной собственности и воспользоваться механизмом предоставления свидетельств о демонстрации на выставке экспоната.",
        text2:
          "Однако «ЭКСПОЦЕНТР» не может влиять на решения относительно предоставления охранных документов, принимаемые федеральным органом исполнительной власти по интеллектуальной собственности.",
      },
      {
        title:
          "Мы участвовали в одной из Ваших выставок, которая прошла три месяца назад, и хотим получить свидетельство о демонстрации экспоната на этой выставке. Как мы можем это сделать?",
        text: "В соответствии с пунктом 17 Общих условий участия в выставках на ЦВК «Экспоцентр» в отношении выдачи свидетельств и справок о демонстрации существует правило о том, что заявление о выдаче указанных документов должно быть подано в первый день работы выставки. Если указанное заявление подается в более поздний срок, свидетельства и справки о демонстрации не выдаются. Исключений из указанного правила не существует.",
        text2:
          "Соблюдение указанного правила имеет принципиальное значение. Во-первых, сотрудники «Экспоцентра» должны иметь возможность проверки наличия заявленного экспоната или товарного знака непосредственно с первого дня работы выставки, а во-вторых, выдаваемые свидетельство или справка подтверждают факт демонстрации в течение работы всей выставки, т.е. непосредственно со дня ее начала, которым и является первый день работы выставочного мероприятия.",
      },
      {
        title:
          "Мы увидели, что на одном из стендов демонстрируется продукция, очень похожая на нашу. Как мы можем пресечь такую демонстрацию?",
        text: "В принудительном порядке подобную демонстрацию можно пресечь только на основании решения суда. Если же похожая продукция была обнаружена вами впервые, существует несколько возможных способов решения данной проблемы. Во-первых, вы можете направить претензию компании, демонстрирующей такую продукцию. В условиях выставки вы можете обратиться непосредственно к представителям компании, находящимся на выставочном стенде. Если вы полагаете, что подобные меры не повлекут за собой добровольного прекращения нарушения вашего исключительного права, вы можете обратиться к нотариусу с целью фиксации факта нарушения ваших прав. В таком случае нотариус составит протокол осмотра доказательства, который впоследствии может быть использован в качестве доказательства нарушения исключительного права. Вы также можете обратиться в органы полиции с заявлением о нарушении исключительного права. В случае принятия вашего заявления к рассмотрению сотрудники полиции могут произвести изъятие спорной продукции. Указанные полномочия предоставлены сотрудникам полиции на основании положений статьи 13 Федерального закона «О полиции», а также на основании главы 27 Кодекса об административных правонарушениях.",
      },
      {
        title:
          "Мы увидели на соседнем стенде контрафактную продукцию и обратились в дирекцию выставки с требованием удалить данную продукцию с выставки, однако нам ответили отказом. Правомерен ли такой ответ дирекции?",
        text: "В соответствии с действующим законодательством Российской Федерации любая продукция или товары могут быть признаны контрафактными только на основании решения суда. Таким образом, представители дирекции не могут требовать от кого-либо из экспонентов удаления со стенда демонстрируемой продукции лишь на основании заявления правообладателя о возможности того, что такая продукция является контрафактной.",
        text2:
          "Однако, в случае наличия вступившего в законную силу решения суда, запрещающего конкретному экспоненту любыми способами вводить в гражданский оборот указанную продукцию, сотрудники дирекции вправе обратиться к такому экспоненту с требованием убрать контрафактную продукцию со стенда.",
      },
      {
        title:
          "У нас есть судебное решение, запрещающее нашим конкурентам любым способом вводить в гражданский оборот продукцию, на которой использован наш товарный знак / в которой использован наш патент. Однако мы видим, что они демонстрируют данную продукцию.",
        text: "В соответствии с пунктом 17 Общих условий участия в выставках на ЦВК «ЭКСПОЦЕНТР», в случае если экспонент демонстрирует на выставке экспонатуру с использованием объектов интеллектуальной собственности, введение в гражданский оборот которых запрещено такому экспоненту на основании решения суда, «ЭКСПОЦЕНТР» может потребовать прекратить демонстрацию таких экспонатов, а в случае отказа – досрочно расторгнуть договор с таким экспонентом.",
        text2:
          "Таким образом, если вы обнаружили, что экспонент, которому на основании вступившего в законную силу решения суда запрещено использование объекта интеллектуальной собственности, правообладателем которого вы являетесь, демонстрирует на выставке экспонат с использованием такого объекта, вы можете обратиться в дирекцию выставки с сообщением о факте такой демонстрации.",
        text3:
          "Вам необходимо представить безусловные доказательства факта нарушения ваших исключительных прав посредством демонстрации экспоната одним из участников выставки. Например, факт демонстрации спорного продукта третьим лицом может подтверждаться, в частности, протоколом осмотра, составленным нотариусом.",
      },
      {
        title:
          "Мы хотим зафиксировать нарушение наших исключительных прав на стенде нашего конкурента, может ли «Экспоцентр» дать нам такое подтверждение?",
        text: "Нет, сотрудники «ЭКСПОЦЕНТРА» не могут зафиксировать факт демонстрации какого-либо экспоната на выставке. В случае если вам необходимо зафиксировать факт демонстрации какой-либо продукции, вы можете обратиться к нотариусу, который проведет нотариальный осмотр доказательств, а также составит протокол, который впоследствии может рассматриваться в качестве доказательства в судебных и административных органах.",
        text2:
          "Кроме того, вы можете обратиться в органы полиции, которые также могут провести осмотр доказательств, а в случае выявления факта административного нарушения провести изъятие или арест предметов, являющихся орудиями совершения противоправного деяния.",
        text3:
          "В случае если вам необходимо просто получить подтверждение относительно участия какого-либо лица в конкретной выставке, вы можете получить данную информацию в официальном каталоге выставки, который содержит перечень всех участников выставочного мероприятия, а также указание мест расположения их стендов, или в интернет-каталоге и путеводителе на сайте выставки.",
      },
    ],
    members: true,
  },
  {
    title: "Доступ к Wi-Fi",
    faqAll: [
      {
        text: "Только в коворкинг зоне.",
      },
    ],
    members: true,
    visitors: true,
    wifi: true,
  },
];
