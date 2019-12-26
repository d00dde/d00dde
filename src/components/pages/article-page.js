import React from 'react';
import withFetch from '../hoc/withFetch';
import { Link } from 'react-router-dom';

import './pages.css';
import './article-page.css';

const ArticlePage = (props) => {
	const { title, content, timestamp } = props.data;
	console.log(props);
	return (
		<div className={`article-page page section ${props.colors.sectionColor}`}>
			<div className='service'>
				<Link to='/articles'>&#x2190; Назад</Link>
				<div className='create-time'>дата публикации: {new Date(timestamp.seconds*1000).toLocaleDateString()}</div>
			</div>
			<h2 className='title'>{title}</h2>
			<hr />
			{content.map((paragraph) => {
				return <p key={paragraph}>{paragraph}</p>
			})}
		</div>
	)
}

export default withFetch(ArticlePage)('getArticle', true);