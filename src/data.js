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
			  __html: 'Выполнение <a target="_blank" href="https://github.com/d00dde/React-map/blob/master/Documents/task.pdf" rel="noopener noreferrer"> тестового задания </a>' +
			  '. Состоит из трёх основных компонентов: поля добавления маркера, списка маркеров и карты.'
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
			  __html: 'Приложение позволяет выбрать город, в котором есть отделения Новой почты, после чего отображает список отделений. При этом есть возможность выбрать только грузовые отделения. После выбора отделения появляется подробная информация о его работе, и, при помощи Google Map API, отображается его местоположение на карте.'
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
			  __html: '',
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
			  __html: 'Приложение реализует функционал TODO-листа (добавление, удаление и редактирование задач) для каждого из пользователей в системе. ' +
				  'Приложение поддерживает регистрацию нового пользователя с уникальным именем. Также поддерживается функционал учётных записей с ' +
				  'административными привелегиями: такой пользователь может видеть список всех зарегестрированных пользователей, их задачи, и изменять их. ' +
					'В приложении реализовано переключение между английским и русским языком интерфейса. Сервер в данном приложении реализован в отдельном' + 
					'<a target="_blank" href="https://github.com/d00dde/Todo-with-server/blob/master/src/server/server.js/" rel="noopener noreferrer"> js-файле </a>'+
			    'который эмулирует авторизацию пользователей, создание и завершение активной сессии, проверку разрешений запросов на те или иные действия,' +
				  'и эмулирует соответствующие ответы.',
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
				__html: 'Приложение содержит минимальный функционал интернет-магазина: страница со списком товаров, страница товара и корзина. Взаимодействие между компонентами организованно при помощи redux.',
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
			__html: 'Приложение содержит три страницы (персонажи, планеты, корабли), на каждой странице отображается список соответствующих элементов. При выборе элемента отображается подробная информация о нём. Кроме этого, приложение содержит компонент который с определённым интервалом показывает случайную планету. Для получения данных используется сервис' +
			'<a target="_blank" href="https://swapi.co/" rel="noopener noreferrer"> SWAPI - The Star Wars API </a>.',
		after: '.'
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
		description: {
			__html: ''
		},
		srcLink: 'https://github.com/d00dde/React-todo',
		buildLinc: 'https://d00dde.github.io/React-todo',
		technologies: [
			'базовые технологии React(компоненты, состояние, установка состояния, события, делегирование обработки событий, рендеринг массивов элементов, управление рендером);',
			'подключение стилей и изображений через import;',
			'контролируемые поля ввода.'
		]
  	}
	];
	
const summary = {
	rus: {
		personal: {
			personImgSrc: host + '/img/photo.jpeg',
			name: 'Андрей Лопатко',
			position: 'React developer | Frontend developer | JS developer',
			contacts: [
				{title: 'address', icon: 'fas fa-map-marker-alt', value: 'Украина, Кривой рог'},
				{title: 'phone', icon: 'fas fa-phone-alt', value: '+38 (097) 207-45-57'},
				{title: 'email', icon: 'far fa-envelope', value: 'd48564@gmail.com'},
				{title: 'website', icon: 'fas fa-globe-americas', value: 'https://d00dde.github.io/d00dde'},
				{title: 'github', icon: 'fab fa-github', value: 'https://github.com/d00dde'},
				{title: 'linkedin', icon: 'fab fa-linkedin', value: 'https://www.linkedin.com/in/andrei-lopatko-674b62184'},
			],
		},
		about: {
			icon: 'fas fa-user-tie',
			title: 'Обо мне',
			info: 'Занимаюсь разработкой приложений и сайтов с использованием React и смежных технологий (Router, Redux, Thunk, Firebase). Знаком с такими языками программирования как С++ и Java. Интересуюсь computer science в целом, понимаю алгоритмы и паттерны проектирования.'
		},
		skills: {
			icon: 'far fa-check-square',
			title: 'Умения и навыки',
			values: ['React', 'Java Script (ES6+)', 'OOP', 'HTML', 'CSS', 'Redux', 'Thunk', 'Jest', 'Enzyme', 'REST API', 'Google Maps API', 'Firebase', 'Git', 'Github', 'Webpack']
		},
		education :{
			icon: 'fas fa-university',
			title: 'Образование',
			values: [
				{time:'2001 - 2006', description: 'Криворожский Национальный университет (инженер-технолог)'},
				{time:'2007 - 2009', description: 'Криворожский Национальный университет (экономика предприятий)'},
				{time:'сентябрь 2019', description: 'Онлайн курс "Udemy: Юрий Бура React + Redux - Профессиональная Разработка"'},
				{time:'октябрь 2019', description: 'Онлайн курс "Webformyself:  React с нуля до профи"'},
				{time:'октябрь 2019', description: 'Онлайн курс "Дмитрий Лаврик:  React. Интенсивный курс для программистов"'},
				{time:'декабрь 2019', description: 'Онлайн курс "Microsoft: Introduction to React JS"'},
				{time:'декабрь 2019', description: 'Онлайн курс "CS50\'s: Web programming with Python and Java Script."'}
			]
		},
		experience: {
			icon: 'fas fa-briefcase',
			title: 'Опыт работы',
			values:[
				{__html: 'Разработка личного сайта.(использованы технологии React, Router, Firebase, Github pages)'},
				{__html: 'Выполнение <a target="_blank" href="https://github.com/d00dde/React-map/blob/master/Documents/task.pdf" rel="noopener noreferrer"> тестового задания.</a>(использованы технологии React, Google maps API)'},
				{__html: 'Создание приложения, отображающего список отделений "Новой почты" в выбранном городе, и показывающем подробную информацию о выбранном отделении и его местоположение на карте.(использованы технологии React, google maps API, API Новой почты, Redux)'},
				{__html: 'Создание TODO-листа, реализующего кроме базовой функциональности регистрацию и авторизацию на сервере, разделение прав пользователей, смену языка приложения.(использованы технологии React, REST API)'}
			],
			footnote: '* Ссылки на работы и исходный код можно найти здесь: https://d00dde.github.io/d00dde в разделе "Портфолио"'
		},
		additional: {
			icon: 'fas fa-plus',
			title: 'Дополнительно',
			values:[
				'Английский: pre-intermediate'
			]
		}
	},
	eng: {
		personal: {
			personImgSrc: host + '/img/photo.jpeg',
			name: 'Andrey Lopatko',
			position: 'React developer | Frontend developer | JS developer',
			contacts: [
				{title: 'address', icon: 'fas fa-map-marker-alt', value: 'Ukraine, Kryvyi Rig'},
				{title: 'phone', icon: 'fas fa-phone-alt', value: '+38 (097) 207-45-57'},
				{title: 'email', icon: 'far fa-envelope', value: 'd48564@gmail.com'},
				{title: 'website', icon: 'fas fa-globe-americas', value: 'https://d00dde.github.io/d00dde'},
				{title: 'github', icon: 'fab fa-github', value: 'https://github.com/d00dde'},
				{title: 'linkedin', icon: 'fab fa-linkedin', value: 'https://www.linkedin.com/in/andrei-lopatko-674b62184'},
			],
		},
		about: {
			icon: 'fas fa-user-tie',
			title: 'About me',
			info: 'I am developing of applications and sites using React and related technologies (Router, Redux, Thunk, Firebase). I know such programming languages ​​as C ++ and Java. I am interested in computer science in general, I understand the algorithms and design patterns.'
		},
		skills: {
			icon: 'far fa-check-square',
			title: 'Skills',
			values: ['React', 'Java Script (ES6+)', 'OOP', 'HTML', 'CSS', 'Redux', 'Thunk', 'Jest', 'Enzyme', 'REST API', 'Google Maps API', 'Firebase', 'Git', 'Github', 'Webpack']
		},
		education :{
			icon: 'fas fa-university',
			title: 'Education',
			values: [
				{time:'2001 - 2006', description: 'Kryvyi Rig Technical University (Master of technology)'},
				{time:'2008 - 2011', description: 'Kryvyi Rig Technical University (Master`s degree, business economist)'},
				{time:'August 2019', description: 'Online course "Udemy: Yuri Bura React + Redux - professional development"'},
				{time:'September 2019', description: 'Online course "Webformyself:  React from scratch to professional"'},
				{time:'October 2019', description: 'Online course "Dmitry Lavrik:  React. Intensive course from professional"'},
				{time:'December 2019', description: 'Online course "Microsoft: Introduction to React JS"'},
				{time:'December 2019', description: 'Online course "CS50\'s: Web programming with Python and Java Script."'}
			]
		},
		experience: {
			icon: 'fas fa-briefcase',
			title: 'Experience',
			values:[
				{__html: 'Personal website development.(used technologies React, Router, Firebase, Github pages)'},
				{__html: '<a target="_blank" href="https://github.com/d00dde/React-map/blob/master/Documents/task.pdf" rel="noopener noreferrer"> Test task </a> for JS developer position. (used technologies React, Google maps API)'},
				{__html: 'Development the application, wich displays a list of "Новая почта" branches in a selected city. If you select a branch, it displays detailed information and location on the map.(used technologies React, google maps API, API "Новой почты", Redux)'},
				{__html: 'Creating a TODO-list that implements, in addition to the basic functionality, registration and authorization on the server, separation of user rights, change of application language.(used technologies React, REST API)'}
			],
			footnote: '* Links to all works and source code can be found here: https://d00dde.github.io/d00dde in the "Portfolio" section.'
		},
		additional: {
			icon: 'fas fa-plus',
			title: 'Additional',
			values:[
				'English: pre-intermediate'
			]
		}
	},
	download: {
		rus: {
			msg: 'скачать в формате PDF',
			path: host + '/res/summary_rus.pdf'
		},
		eng: {
			msg: 'download as PDF',
			path:  host + '/res/summary_eng.pdf'
		}
	}
};

export {
  colors,
  contacts,
	host,
	portfolio,
	summary
}