import React from 'react';
import './fab.css';
import { contacts } from '../../data';

import { Button, Icon } from 'react-materialize';

export default (props) => {
	const contactList = contacts.map((contact) => {
		return <a href={contact.link}><Button floating className={contact.color}><i className={contact.icon}></i></Button></a>
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