import React from 'react';
import './navbar.css';

import { NavLink, Link } from 'react-router-dom';
import { Navbar, Icon } from 'react-materialize';


export default (props) => {
	const classes = ['main-nav'];
	classes.push(props.bgColor);
	return (	
	<Navbar brand={<Link to='/' exact><i className="fab fa-react logo"></i></Link>}
						alignLinks="right"
						menuIcon={<Icon>dehaze</Icon>}
						className={classes.join(' ')}>
			<NavLink to='/' exact>Главная</NavLink>
			<NavLink to='/resume'>Резюме</NavLink>
			<NavLink to='/portfolio'>Портфолио</NavLink>
			<NavLink to='/articles'>Статьи</NavLink>
		</Navbar>
		);
}