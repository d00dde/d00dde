import React from 'react';
import './pages.css';
import { resume } from '../../data'


export default () => {
  
  function mapDataToJSX (data, className = '') {
    return (
    <div className="summary-container">
      <div className="personal">
        <div className="photo"><img src="photo.jpeg" alt="photo" /></div>
        <div className="personal-data">
          <h2 className="name">Андрей Лопатко</h2>
          <h3 className="position">React developer | Frontend developer | JS developer</h3>
          <div className="contacts">
            <div className="address"><div className='icon'><i className="fas fa-map-marker-alt"></i></div><span>Украина, Кривой рог.</span></div>
            <div className="phone"><div className='icon'><i className="fas fa-phone-alt"></i></div><span>+38 (097) 207-45-57</span></div>
            <div className="email"><div className='icon'><i className="far fa-envelope"></i></div><span>d48564@gmail.com</span></div>
            <div className="website"><div className='icon'><i className="fas fa-globe-americas"></i></div><span>https://d00dde.github.io/d00dde</span></div>
            <div className="github"><div className='icon'><i className="fab fa-github"></i></div><span>https://github.com/d00dde</span></div>
            <div className="linkedin"><div className='icon'><i className="fab fa-linkedin"></i></div><span>https://www.linkedin.com/in/andrei-lopatko-674b62184</span></div>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="left-col">
          <h3 className="about"><i className="fas fa-user-tie"></i>Обо мне</h3>
            <div className="info">Занимаюсь разработкой приложений и сайтов с использованием React и смежных технологий (Router, Redux, Thunk, Firebase). Знаком с такими языками программирования как С++ и Java. Интересуюсь computer science в целом, понимаю алгоритмы и паттерны проектирования.</div>
        </div>
        <div className="right-col">
        <div className="skills">
          <h3 className="title"><i className="far fa-check-square"></i>Умения и навыки</h3>
          <ul>
            <li>React</li>
            <li>Java Script (ES6+)</li>
            <li>OOP</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Redux</li>
            <li>Thunk</li>
            <li>Jest</li>
            <li>Enzyme</li>
            <li>REST API</li>
            <li>Google Maps API</li>
            <li>Firebase</li>
            <li>Git</li>
            <li>Github</li>
            <li>Webpack</li>
          </ul>
        </div>
        <div className="education">
          <h3 className="title"><i className="fas fa-university"></i>Образование</h3>
          <ul>
            <li>
              <span className='time'>2001 - 2006</span>
              <span className='descr'>Криворожский Национальный университет (инженер-технолог)</span>
            </li>
            <li>
              <span className='time'>2007 - 2009</span>
              <span className='descr'>Криворожский Национальный университет (экономика предприятий)</span>
            </li>
            <li>
              <span className='time'>сентябрь 2019</span>
              <span className='descr'>Онлайн курс "Udemy: Юрий Бура React + Redux - Профессиональная Разработка"</span>
            </li>
            <li>
              <span className='time'>октябрь 2019</span>
              <span className='descr'>Онлайн курс "Webformyself:  React с нуля до профи"</span>
            </li>
            <li>
              <span className='time'>октябрь 2019</span>
              <span className='descr'>Онлайн курс "Дмитрий Лаврик:  React. Интенсивный курс для программистов"</span>
            </li>
            <li>
              <span className='time'>декабрь 2019</span>
              <span className='descr'>Онлайн курс "Microsoft: Introduction to React JS"</span>
            </li>
            <li>
              <span className='time'>декабрь 2019</span>
              <span className='descr'>Онлайн курс "CS50\'s: Web programming with Python and Java Script."</span>
            </li>
          </ul>
        </div>
        <div className="experience">
          <h3 className="title"><i className="fas fa-briefcase"></i>Опыт работы</h3>
          <ul>
            <li>Разработка личного сайта.(использованы технологии React, Router, Firebase, Github pages)</li>
            <li>Выполнение <a target="_blank" href="https://github.com/d00dde/React-map/blob/master/Documents/task.pdf" rel="noopener noreferrer"> тестового задания.</a>(использованы технологии React, Google maps API)</li>
            <li>Создание приложения, отображающего список отделений "Новой почты" в выбранном городе, и показывающем подробную информацию о выбранном отделении и его местоположение на карте.(использованы технологии React, google maps API, API Новой почты, Redux)</li>
            <li>Создание TODO-листа, реализующего кроме базовой функциональности регистрацию и авторизацию на сервере, разделение прав пользователей, смену языка приложения.(использованы технологии React, REST API)</li>
            <div className='hint'>* Ссылки на работы и исходный код можно найти здесь: https://d00dde.github.io/d00dde в разделе "Портфолио"</div>
          </ul>
        </div>
        <div className="additional">
          <h3 className="title"><i className="fas fa-plus"></i>Дополнительно</h3>
          <ul>
            <li>
              Английский: pre-intermediate
            </li>
          </ul>
        </div>    
        </div>
      </div>
    </div>
    )}
  
    return (
		<div className='resume-page'>
			<div className='resume-container'>
        {mapDataToJSX (resume.personal, 'personal')}
			</div>	
		</div>
	);
}