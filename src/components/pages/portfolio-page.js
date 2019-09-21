import React from 'react';
import './pages.css';
import {Collapsible, CollapsibleItem, Parallax } from 'react-materialize';


export default (props) => {
	return (
		<div className='portfolio-page'>
			<div className={`section ${props.bgColor}`}>
				<div className="row container">
					<h2 className="header">
						Мои работы с использованием React.
					</h2>
				</div>
			</div>
			<Parallax image={<img src='https://d00dde.github.io/d00dde/img/parallax3.jpg' alt='first parallax' />} />
			<Collapsible accordion={false}>
				<CollapsibleItem header="1. Реализация TODO-листа на React." >
					<h5>Простое приложение, поддерживающее добавление, удаление задач, а также выделение задач как важных.</h5>
					<p>Здесь вы можете найти <a target='_blank' href='https://d00dde.github.io/React-todo' rel='noopener noreferrer'>готовое приложение</a> и
						<a target='_blank' href='https://github.com/d00dde/React-todo' rel='noopener noreferrer'> исходный код </a>.</p>
					<p>Для решения использованы технологии:</p>
					<ul className='tech-list'>
						<li>базовые технологии React(компоненты, состояние, установка состояния, события, делегирование обработки событий, рендеринг массивов элементов, управление рендером);</li>
						<li>подключение стилей и изображений через import;</li>
						<li>контролируемые поля ввода.</li>
					</ul>
				</CollapsibleItem>
				<CollapsibleItem header="2. Учебное приложение для изучения работы React-приложения с сервером." >
					<h5>Приложение показывает описание персонажей, планет и кораблей из вселенной Star Wars.</h5>
					<p>Приложение содержит три страницы (персонажи, планеты, корабли), на каждой странице отображается список
						соответствующих элементов. При выборе элемента отображается подробная информация о нём.
						Кроме этого, приложение содержит компонент который с определённым интервалом показывает
						случайную планету. Для получения данных используется сервис
						<a target='_blank' href='https://swapi.co/' rel='noopener noreferrer'> SWAPI - The Star Wars API </a>.</p>
					<p>Здесь вы можете найти <a target='_blank' href='https://d00dde.github.io/React-star-wars' rel='noopener noreferrer'>готовое приложение</a> и
						<a target='_blank' href='https://github.com/d00dde/React-star-wars' rel='noopener noreferrer'> исходный код </a>.</p>
					<p>Для решения использованы технологии:</p>
					<ul className='tech-list'>
						<li>базовые технологии React;</li>
						<li>контролируемые поля ввода;</li>
						<li>методы жизненного цикла компонентов;</li>
						<li>методы React.Children;</li>
						<li>трансформация данных API;</li>
						<li>создание и подключение лоадеров;</li>
						<li>методы обработки ошибок в приложении;</li>
						<li>error boundary;</li>
						<li>роутинг страниц в React (react-router-dom);</li>
						<li>передача контекста в приложении;</li>
						<li>default props;</li>
						<li>контроль передаваемых свойств (props types);</li>
						<li>higher order components (hoc).</li>
					</ul>
				</CollapsibleItem>
				<CollapsibleItem header="3. Приложение, использующее в работе Google Maps API." >
					<h5>Приложение отображает маркеры на карте и позволяет их редактировать.</h5>
					<p>Выполнение<a target='_blank' href='https://github.com/d00dde/React-map/blob/master/Documents/task.pdf' rel='noopener noreferrer'> тестового задания </a>. Состоит из трёх основных компонентов: поля добавления маркера, списка маркеров и карты.</p>
					<p>Здесь вы можете найти <a target='_blank' href='https://d00dde.github.io/React-map' rel='noopener noreferrer'>готовое приложение</a> и
						<a target='_blank' href='https://github.com/d00dde/React-map' rel='noopener noreferrer'> исходный код </a>.</p>
					<p>Для решения использованы технологии:</p>
					<ul className='tech-list'>
						<li>базовые технологии React;</li>
						<li>контролируемые поля ввода;</li>
						<li>методы жизненного цикла компонентов;</li>
						<li>использование google map API;</li>
						<li>трансформация данных API.</li>
					</ul>
				</CollapsibleItem>
				<CollapsibleItem header="4. Приложение, реализующее взаимодействие React и Redux." >
					<h5>Реализация функционала интернет-магазина при помощи React.</h5>
					<p>Приложение содержит минимальный функционал интернет-магазина: страница со списком товаров,
						страница товара и корзина. Взаимодействие между компонентами организованно при
						помощи redux.</p>
					<p>Здесь вы можете найти <a target='_blank' href='https://d00dde.github.io/react-store' rel='noopener noreferrer'>готовое приложение</a> и
						<a target='_blank' href='https://github.com/d00dde/react-store' rel='noopener noreferrer'> исходный код </a>.</p>
					<p>Для решения использованы технологии:</p>
					<ul className='tech-list'>
						<li>базовые технологии React;</li>
						<li>контролируемые поля ввода;</li>
						<li>методы React.Children;</li>
						<li>создание и подключение лоадеров;</li>
						<li>трансформация данных API;</li>
						<li>методы обработки ошибок в приложении;</li>
						<li>error boundary;</li>
						<li>роутинг страниц в React (react-router-dom);</li>
						<li>передача контекста в приложении;</li>
						<li>default props;</li>
						<li>контроль передаваемых свойств (props types);</li>
						<li>higher order components (hoc);</li>
						<li>Redux (connect, BindActionCreators, store enhancers, middleware, Thunk).</li>
					</ul>
				</CollapsibleItem>
				<CollapsibleItem header="5. Приложение с использованием API Новой почты и Google Map API." >
					<h5>Используя API Новой почты позволяет получить подробную информацию о отделениях.</h5>
					<p>Приложение позволяет выбрать город, в котором есть отделения Новой почты, после чего
						отображает список отделений. При этом есть возможность выбрать только грузовые
					отделения. После выбора отделения появляется подробная информация о его работе, и, при
					помощи Google Map API, отображается его местоположение на карте. </p>
					<p>Здесь вы можете найти <a target='_blank' href='https://d00dde.github.io/React-new-post' rel='noopener noreferrer'>готовое приложение</a> и
						<a target='_blank' href='https://github.com/d00dde/React-new-post' rel='noopener noreferrer'> исходный код </a>.</p>
					<p>Для решения использованы технологии:</p>
					<ul className='tech-list'>
						<li>базовые технологии React;</li>
						<li>контролируемые поля ввода;</li>
						<li>создание и подключение лоадеров;</li>
						<li>трансформация данных API;</li>
						<li>методы обработки ошибок в приложении;</li>
						<li>error boundary;</li>
						<li>роутинг страниц в React (react-router-dom);</li>
						<li>передача контекста в приложении;</li>
						<li>default props;</li>
						<li>контроль передаваемых свойств (props types);</li>
						<li>higher order components (hoc);</li>
						<li>Redux.</li>
					</ul>
				</CollapsibleItem>
				<CollapsibleItem header="6. Этот сайт." >
					<h5>Этот сайт тоже реализован с использованием React.</h5>
					<p>Здесь вы можете найти<a target='_blank' href='https://github.com/d00dde/d00dde' rel='noopener noreferrer'> исходный код </a>.</p>
					<p>Для решения использованы технологии:</p>
					<ul className='tech-list'>
						<li>базовые технологии React;</li>
						<li>библиотека react materialize;</li>
						<li>роутинг страниц в React (react-router-dom);</li>
					</ul>
				</CollapsibleItem>
			</Collapsible>

		</div>
	);
}