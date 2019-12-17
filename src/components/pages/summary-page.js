import React, { useState } from 'react';
import './summary-page.css';
import Summary from '../modules/summary';
import { summary } from '../../data';


export default () => {
  const [language, setLanguage] = useState(false);
  return (
    
    <div className='summary-page'>
      <div className='controls'>
        <a href="/img/photo.jpeg" download>{language ? summary.download.rus.msg : summary.download.eng.msg}</a>
        <div className="switch">
          <label>
            Eng
            <input type="checkbox" onChange={(e)=> {setLanguage(e.target.checked)}}/>
            <span className="lever"></span>
            Rus
          </label>
        </div>
      </div>
      <Summary language={language ? 'rus' : 'eng'} />
    </div>
	);
}