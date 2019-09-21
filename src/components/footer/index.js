import React from 'react';
import './footer.css';
import { contacts } from '../../data';

import { Footer } from 'react-materialize';

export default (props) => {
	const contactList = contacts.map((contact) => {
		return <li><i className={contact.icon}></i> {contact.title}: <a target='_blank' rel='noopener noreferrer' href={contact.link}>{contact.value}</a></li>
	});
	return(
		<Footer
		  copyrights="&copy; Все права защищены правовыми правилами о защите прав."
			moreLinks={<a/>}
		  links={<ul>
			  Контакты:
			  {contactList}
		  		</ul> }
		  className={props.bgColor + ' footer'}
		>
		</Footer>
	)
}