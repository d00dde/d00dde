import React from 'react';
import './fab.css';
import { Button, Icon } from 'react-materialize';

export default ({ data:{ contacts, colors } }) => {
	const contactList = contacts.map(({ color, link, icon}) => {
		return <a key={color} href={link}><Button floating className={color}><i className={icon}></i></Button></a>
	});
	return(
	  <Button
	    floating
	    fab={{direction: 'top'}}
	    className={`fab ${colors.mainColor}`}
	    icon={<Icon>arrow_upward</Icon>}
	    large
	  >
	    {contactList}
	  </Button>
    
	);
}