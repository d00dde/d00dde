import React from 'react';
import './pages.css';
import { Parallax } from 'react-materialize';
import Features from '../features';

export default (props) => {
	return (
		<div className='home-page'>
				<div className={`section ${props.bgColor}`}>
					<div className="row container">
						<h2 className="header">
							Разработка приложений на React.
						</h2>
						<p className="grey-text text-darken-3 lighten-3">
							React - это популярная Java script библиотека, разработанная программистами из Facebook.
							С помощью неё создаются удобные и быстрые UI - пользовательские интерфейсы. На сегодняшний
							день React считается одним из самых перспективных направлений во frontend-разработке.
							Одной из отличительных особенностей React является возможность использовать JSX, язык
							программирования с близким к HTML синтаксисом, который компилируется в JavaScript.
							Разработчики могут добиваться высокой производительности приложений с помощью Virtual DOM.
							React позволяет создавать изоморфные приложения, которые помогут избавиться от
							неприятной ситуации, когда пользователь с нетерпением ожидает, когда же наконец завершится
							загрузка данных и на экране его компьютера наконец появится что-то помимо анимации загрузки.
							Созданные компоненты могут быть с легкостью изменены и использованы заново в новых проектах.
							Высокий процент переиспользования кода повышает покрываемость тестами, что, в свою очередь,
							приводит к более высокому уровню контроля качества.
						</p>
					</div>
				</div>
			<h3>Преимущества React.</h3>
			<Features />
			<Parallax image={<img src='img/parallax1.jpg' alt='first parallax'/>} />
				<div className={`section ${props.bgColor}`}>
					<div className="row container">
						<h2 className="header">
							Parallax
						</h2>
						<p className="grey-text text-darken-3 lighten-3">
							Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.
						</p>
					</div>
				</div>
			<Parallax image={<img src='img/parallax2.jpg' alt='second parallax' />} />
				<div className={`section ${props.bgColor}`}>
					<div className="row container">
						<h2 className="header">
							Parallax
						</h2>
						<p className="grey-text text-darken-3 lighten-3">
							Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.
						</p>
					</div>
				</div>
		</div>
	);
}