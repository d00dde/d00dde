import React from 'react';
import './pages.css';
import {Collapsible, CollapsibleItem, Parallax } from 'react-materialize';
import { host, portfolio } from '../../data';


export default (props) => {
	const projects = portfolio.map((project, idx) => {
		return(
			<CollapsibleItem header={`${idx + 1}. ${project.header}`} key={project.header}>
				<h5>{project.title}</h5>
				{<p dangerouslySetInnerHTML={project.description}></p>}
				<p>Здесь вы можете найти <a target='_blank' href={project.buildLinc} rel='noopener noreferrer'>готовое приложение</a> и
					<a target='_blank' href={project.srcLink} rel='noopener noreferrer'> исходный код </a>.</p>
				<p>Для решения использованы технологии:</p>
				<ul className='tech-list'>
					{project.technologies.map((title) => <li key={title}>{title}</li>)}
				</ul>
			</CollapsibleItem>
		);
	});
	return (
		<div className='portfolio-page'>
			<div className={`section ${props.colors.sectionColor}`}>
				<h2 className="header">
					Мои работы React.
				</h2>
			</div>
			<Parallax image={<img src={host + '/img/parallax3.jpg'} alt='first parallax' />} />
			<Collapsible accordion={false}>
				{projects}
			</Collapsible>
		</div>
	);
}