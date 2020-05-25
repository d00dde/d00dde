import React from 'react';
import { Link } from 'react-router-dom';
import withFetch from '../hoc/withFetch';

import {Collapsible, CollapsibleItem} from 'react-materialize';
import './pages.css';
import './articles-page.css';

  const ArticlesPage = (props) => {
  const dataThunk = (data) => {
		const result =[];
		for (const category in data) {
			const cat = {}
			cat.title = category;
			cat.subcategories = [];
    	for(const subcategory in data[category]) {
    		const sub = {};
    		sub.title = subcategory;
    		sub.articles = [];
    		for(const article in data[category][subcategory]){
    			const art = {...data[category][subcategory][article]}
    			art.title = article;
    			sub.articles.push(art);
    		}
    		cat.subcategories.push(sub);
    	}
    	result.push(cat);
    }
    return result;
	}

	const articlesList = dataThunk(props.data).map((category) => { 
  	return (<CollapsibleItem header={category.title} key={category.title}>
  						<Collapsible accordion={false}>	
  						{category.subcategories.map((subcategory) => {
  							return (<CollapsibleItem header={subcategory.title} key={subcategory.title}>
  												<ul>
  												{subcategory.articles.map((article) => {
  													return(<li key={article.title} className='article'>
  																	<Link 
                                      to={`/article/${article.path}`}
                                    >
                                    {article.title}</Link>
                                    <span>дата публикации: {new Date(article.timestamp.seconds*1000).toLocaleDateString()}</span>
  																 </li>)
  												})}
  												</ul>
  											</CollapsibleItem>)
  						})}
  						</Collapsible>
  					</CollapsibleItem>)
    });
	return (
		<div className={`articles-page page section ${props.colors.sectionColor}`}>
			<Collapsible accordion={false}>
				{articlesList}
			</Collapsible>
		</div>
		);
}

export default withFetch(ArticlesPage)('getArticles');