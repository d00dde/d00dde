import React from 'react';
import './pages.css';
import { resume } from '../../data'


export default () => {
  
  function mapDataToJSX (data, className = '') {
    return (
      <div className={className}>
        <h4>{data.header}</h4>
          <ul>
            {data.fields.map(({ title, value, link, href }) => (
              <li key={title}>
                <strong>{title}</strong>
                { link 
                ? <a href={href} rel='noopener noreferrer' target="_blank">{value}</a> 
                : <span>{value}</span>}
              </li>
            ))}
          </ul>
      </div>
    )}
  
    return (
		<div className='resume-page'>
			<div className='resume-container'>
        {mapDataToJSX (resume.personal, 'personal')}
			</div>	
		</div>
	);
}