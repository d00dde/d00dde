import React, { Component } from 'react';
import './pages.css';
import './articles-page.css';
import {Collapsible, CollapsibleItem} from 'react-materialize';
import Server from '../../firebase-server';


export default () => {
	//console.log(document.getElementsByTagName('VIDEO')[0].children[0].src);
	const clickHandler = () => {
		Server.getArticles().then((responce) => {
			console.log(responce.data());
		}).catch((error) => {
			console.log(error.message);
		});
	}
	return (
		<div className='articles-page'>
			<Collapsible accordion={false}>
				<CollapsibleItem header='Java Script' key='1'>
					<Collapsible accordion={false}>	
						<CollapsibleItem header='React' key='1'>
							<ul className='articles-list'>
								<li>Component</li>
								<li>Router</li>
							</ul>
						</CollapsibleItem>
						<CollapsibleItem header='ES6' key='1'>
							<ul className='articles-list'>
								<li>Destructurisation</li>
								<li>Arrow functions</li>
							</ul>
						</CollapsibleItem>
					</Collapsible>
				</CollapsibleItem>
			</Collapsible>
			<button onClick={clickHandler}>Get</button>		
		</div>
	);
}