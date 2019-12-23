import React, { useState } from 'react';
import './summary-page.css';
import Summary from '../modules/summary';


export default (props) => {
  const [language, setLanguage] = useState(false);
  const langSetting = language ? props.data.summary.download.rus : props.data.summary.download.eng;
  return (
    <div className='summary-page'>
      <div className='controls'>
        <a href={langSetting.path} download>{langSetting.msg}</a>
        <div className="switch">
          <label>
            Eng
            <input type="checkbox" onChange={(e)=> {setLanguage(e.target.checked)}}/>
            <span className="lever"></span>
            Rus
          </label>
        </div>
      </div>
      <Summary language={language ? 'rus' : 'eng'} data={props.data}/>
    </div>
	);
}