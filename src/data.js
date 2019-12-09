const host = 'https://d00dde.github.io/d00dde';
const colors = {
	mainColor: 'light-blue lighten-1',
	sectionColor: 'blue-grey lighten-5', 
	featuresColor: '#fff9c4'
};

const contacts = [
	{icon: 'fab fa-viber', title: 'Viber', value: '+380972074557', link: 'viber://chat?number=+380972074557', color: 'deep-purple'},
	{icon: 'fas fa-phone-alt', title: 'Телефон', value: '+380972074557',link: 'tel:+380972074557', color: 'green accent-3'},
	{icon: 'far fa-envelope', title: 'E-mail', value: 'd48564@gmail.com', link: 'mailto: d48564@gmail.com', color: 'red darken-3'},
	{icon: 'fab fa-telegram-plane', title: 'Телеграмм', value: '@D00dde', link: 'tg://resolve?domain=@D00dde1', color: 'blue darken-2'},
	{icon: 'fab fa-linkedin-in', title: 'LinkedIn', value: 'profile', link: 'https://www.linkedin.com/in/andrei-lopatko-674b62184', color: 'light-blue darken-3'},
	{icon: 'fab fa-github', title: 'Github', value: 'https://github.com/d00dde/', link: 'https://github.com/d00dde/', color: 'black'}
  ];

const portfolio = [
	  {
		  header: 'Приложение, использующее в работе Google Maps API.',
		  title: 'Приложение отображает маркеры на карте и позволяет их редактировать.',
		  description: {
			  before: 'Выполнение',
			  after: '. Состоит из трёх основных компонентов: поля добавления маркера, списка маркеров и карты.'
		  },
		  link: {
			  href : 'https://github.com/d00dde/React-map/blob/master/Documents/task.pdf',
			  title: ' тестового задания '
		  },
		  srcLink: 'https://github.com/d00dde/React-map',
		  buildLinc: 'https://d00dde.github.io/React-map',
		  technologies: [
			  'базовые технологии React;',
			  'контролируемые поля ввода;',
			  'методы жизненного цикла компонентов;',
			  'использование google map API;',
			  'трансформация данных API.'
		  ]
	  },
	  {
		  header: 'Приложение с использованием API Новой почты и Google Map API.',
		  title: 'Используя API Новой почты позволяет получить подробную информацию о отделениях.',
		  description: {
			  before: 'Приложение позволяет выбрать город, в котором есть отделения Новой почты, после чего отображает список отделений. При этом есть возможность выбрать только грузовые отделения. После выбора отделения появляется подробная информация о его работе, и, при помощи Google Map API, отображается его местоположение на карте.',
			  after: ''
		  },
		  srcLink: 'https://github.com/d00dde/React-new-post',
		  buildLinc: 'https://d00dde.github.io/React-new-post',
		  technologies: [
			  'базовые технологии React;',
			  'контролируемые поля ввода;',
			  'методы жизненного цикла компонентов;',
			  'использование google map API;',
			  'использование API Новой почты;',
			  'трансформация данных API;',
			  'методы обработки ошибок в приложении;',
			  'error boundary;',
			  'роутинг страниц в React (react-router-dom);',
			  'передача контекста в приложении;',
			  'default props;',
			  'контроль передаваемых свойств (props types);',
			  'higher order components (hoc);',
			  'Redux.'

		  ]
	  },
	  {
		  header: 'Этот сайт.',
		  title: 'Этот сайт тоже реализован с использованием React.',
		  description: {
			  before: '',
			  after: ''
		  },
		  srcLink: 'https://github.com/d00dde/d00dde',
		  buildLinc: 'https://d00dde.github.io/d00dde',
		  technologies: [
			  'базовые технологии React;',
			  'библиотека react materialize;',
			  'роутинг страниц в React (react-router-dom).'
		  ]
	  },
	  {
		  header: 'Реализация TODO-листа, работающего с сервером.',
		  title: 'Приложение реализует функционал TODO-листа, который поддерживает авторизацию пользователей и работу с удалнным сервером.',
		  description: {
			  before: 'Приложение реализует функционал TODO-листа (добавление, удаление и редактирование задач) для каждого из пользователей в системе. ' +
				  'Приложение поддерживает регистрацию нового пользователя с уникальным именем. Также поддерживается функционал учётных записей с ' +
				  'административными привелегиями: такой пользователь может видеть список всех зарегестрированных пользователей, их задачи, и изменять их. ' +
				  'В приложении реализовано переключение между английским и русским языком интерфейса. Сервер в данном приложении реализован в отдельном',
			  after: 'который эмулирует авторизацию пользователей, создание и завершение активной сессии, проверку разрешений запросов на те или иные действия,' +
				  'и эмулирует соответствующие ответы.',
		  },
		  link: {
			  href: 'https://github.com/d00dde/Todo-with-server/blob/master/src/server/server.js/',
			  title: ' js-файле '
		  },
		  srcLink: 'https://github.com/d00dde/Todo-with-server',
		  buildLinc: 'https://d00dde.github.io/Todo-with-server',
		  technologies: [
			  'базовые технологии React;',
			  'библиотека react materialize;',
			  'контролируемые поля ввода;',
			  'методы жизненного цикла компонентов;',
			  'создание и подключение лоадеров;',
			  'трансформация данных API;',
			  'методы обработки ошибок в приложении;',
			  'default props;',
			  'контроль передаваемых свойств (props types);',
			  'higher order components (hoc).'
		  ]
	  },
	  {
		  header: 'Приложение, реализующее взаимодействие React и Redux.',
		  title: 'Реализация функционала интернет-магазина при помощи React.',
		  description: {
			  before: 'Приложение содержит минимальный функционал интернет-магазина: страница со списком товаров, страница товара и корзина. Взаимодействие между компонентами организованно при помощи redux.',
			  after: ''
		  },
		  srcLink: 'https://github.com/d00dde/react-store',
		  buildLinc: 'https://d00dde.github.io/react-store',
		  technologies: [
			  'базовые технологии React;',
			  'контролируемые поля ввода;',
			  'методы жизненного цикла компонентов;',
			  'методы React.Children;',
			  'создание и подключение лоадеров;',
			  'трансформация данных API;',
			  'методы обработки ошибок в приложении;',
			  'error boundary;',
			  'роутинг страниц в React (react-router-dom);',
			  'передача контекста в приложении;',
			  'default props;',
			  'контроль передаваемых свойств (props types);',
			  'higher order components (hoc);',
			  'Redux (connect, BindActionCreators, store enhancers, middleware, Thunk).'
		  ]
	  },
	  {
	  header: 'Учебное приложение для изучения работы React-приложения с сервером.',
	  title: 'Приложение показывает описание персонажей, планет и кораблей из вселенной Star Wars.',
	  description: {
	  	before: 'Приложение содержит три страницы (персонажи, планеты, корабли), на каждой странице отображается список соответствующих элементов. При выборе элемента отображается подробная информация о нём. Кроме этого, приложение содержит компонент который с определённым интервалом показывает случайную планету. Для получения данных используется сервис',
		after: '.'
	  },
		link: {
			href : 'https://swapi.co/',
			title: ' SWAPI - The Star Wars API '
		},
		srcLink: 'https://github.com/d00dde/React-star-wars',
		buildLinc: 'https://d00dde.github.io/React-star-wars',
		  technologies: [
			  'базовые технологии React;',
			  'контролируемые поля ввода;',
			  'методы жизненного цикла компонентов;',
			  'методы React.Children;',
			  'трансформация данных API;',
			  'создание и подключение лоадеров;',
			  'методы обработки ошибок в приложении;',
			  'error boundary;',
			  'роутинг страниц в React (react-router-dom);',
			  'передача контекста в приложении;',
			  'default props;',
			  'контроль передаваемых свойств (props types);',
			  'higher order components (hoc).'
		  ]
	  },
	  {
		header: 'Реализация TODO-листа на React',
		title: 'Простое приложение, поддерживающее добавление, удаление задач, а также выделение задач как важных.',
		description: [],
		srcLink: 'https://github.com/d00dde/React-todo',
		buildLinc: 'https://d00dde.github.io/React-todo',
		technologies: [
			'базовые технологии React(компоненты, состояние, установка состояния, события, делегирование обработки событий, рендеринг массивов элементов, управление рендером);',
			'подключение стилей и изображений через import;',
			'контролируемые поля ввода.'
		]
  	}
  ];

const resume = {
	personal: {
		header: 'Персональные данные',
		fields: [
			{title: 'Имя: ', value: 'Андрей', link: false},
      {title: 'Фамилия: ', value: 'Лопатко', link: false},
      {title: 'Страна: ', value: 'Украина', link: false},
      {title: 'Город: ', value: 'Кривой Рог', link: false},
			{title: 'Телефон: ', value: '+38(097) 207-45-57', link: false},
			{title: 'Email: ', value: 'd48564@gmail.com', link: false},
			{title: 'Github: ', value: 'https://github.com/d00dde', link: true, href: 'https://github.com/d00dde'},
			{title: 'Linkedin: ', value: 'https://www.linkedin.com/in/andrei-lopatko-674b62184', link: true, href: 'https://www.linkedin.com/in/andrei-lopatko-674b62184'},
		]
	},
	summary: {
		header: 'Основная информация.',
		info: 'Frontend разработка на React и Java Scrit, HTML, CSS, базовое владение С++ и Java.'
  },
  skills: {
    header: 'Умения и навыки.',
    fields: [
      'React',
      'Java Script (ES6+)',
      'HTML',
      'CSS',
      'Redux',
      'Thunk',
      'Jest',
      'Enzyme',
      'REST API',
      'Google Maps API',
      'Firebase',
      'Git',
      'Github',
      'Webpack',
    ]
  },
  education: {
    header: 'Образование.',
    fields: [
      'Криворожский Национальный университет (инженер-технолог) 2001 - 2006 гг. ',
      'Криворожский Национальный университет (экономика предприятий) 2007 - 2009 гг.',
      'Онлайн-курс "Udemy: Юрий Бура React + Redux - Профессиональная Разработка" сентябрь 2019 г.',
      'Онлайн-курс "Webformyself:  React с нуля до профи" октябрь 2019 г.',
      'Онлайн-курс "Дмитрий Лаврик:  React. Интенсивный курс для программистов" октябрь 2019 г.',
    ]
  },
  experience: {
    header: 'Опыт работы.',
    fields: [
      //2:38
    ]
  }
}



export {
  colors,
  contacts,
	host,
	portfolio,
	resume
}