import React, { useState } from 'react';
import './summary-page.css';
import Summary from '../modules/summary';


export default ({ data }) => {
  const [language, setLanguage] = useState(false);
  const langSetting = language ? data.summary.download.rus : data.summary.download.eng;
  return (
    <div className='summary-page'>
      <div className='controls'>
        <div className="download-btn"><a href={langSetting.path} download>{langSetting.msg}</a></div>
        <div className="switch">
          <label>
            Eng
            <input type="checkbox" onChange={(e)=> {setLanguage(e.target.checked)}}/>
            <span className="lever"></span>
            Rus
          </label>
        </div>
      </div>
      <Summary language={language ? 'rus' : 'eng'} data={data}/>
    </div>
	);
}