import React from 'react';
import './fab.css';
import { Button, Icon } from 'react-materialize';

export default ({ contacts }) => {
	const contactList = contacts.map(({ color, link, icon}) => {
		return <a key={color} href={link}><Button floating className={color}><i className={icon}></i></Button></a>
	});
	return(
	  <Button
	    floating
	    fab={{direction: 'top'}}
	    className={`fab ${props.bgColor}`}
	    icon={<Icon>arrow_upward</Icon>}
	    large
	  >
	    {contactList}
	  </Button>
    
	);
}