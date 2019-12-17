import React from 'react';
import './navbar.css';

import { NavLink, Link } from 'react-router-dom';
import { Navbar, Icon } from 'react-materialize';


export default (props) => {
	const classes = ['main-nav'];
	classes.push(props.bgColor);
	return (	
	<Navbar brand={<Link to='/' exact='true'><i className="fab fa-react logo"></i></Link>}
						alignLinks="right"
						menuIcon={<Icon>dehaze</Icon>}
						className={classes.join(' ')}>
			<NavLink to='/d00dde' exact>Главная</NavLink>
			<NavLink to='/d00dde/summary'>Резюме</NavLink>
			<NavLink to='/d00dde/portfolio'>Портфолио</NavLink>
			<NavLink to='/d00dde/articles'>Статьи</NavLink>
		</Navbar>
		);
}