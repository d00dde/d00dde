import React from 'react';
import './navbar.css';

import { NavLink, Link } from 'react-router-dom';
import { Navbar, Icon } from 'react-materialize';


export default ({ data:{ colors } }) => {
	const classes = ['main-nav'];
	classes.push(colors.mainColor);
	return (	
	<Navbar brand={<Link to='/' exact='true'><i className="fab fa-react logo"></i></Link>}
						alignLinks="right"
						menuIcon={<Icon>dehaze</Icon>}
						className={classes.join(' ')}>
			<NavLink to='/' exact>Главная</NavLink>
			<NavLink to='/summary'>Резюме</NavLink>
			<NavLink to='/portfolio'>Портфолио</NavLink>
			<NavLink to='/articles'>Блог</NavLink>
		</Navbar>
		);
}