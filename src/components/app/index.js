import React from 'react';
import './app.css';
import { mainColor, sectionColor } from '../../data';

import Navbar from '../navbar';
import Footer from '../footer';
import Fab from '../fab'
import {HomePage, AboutPage, PortfolioPage} from '../pages';
import { Route } from 'react-router-dom';


export default () => {

  return (
  	<div className='container app'>
      <Navbar bgColor={mainColor}/>
      <Route path='/' render={()=> <HomePage bgColor={sectionColor}/>} exact/>
      <Route path='/about' component={AboutPage} />
      <Route path='/portfolio' render={()=> <PortfolioPage bgColor={sectionColor}/>} />
      <Footer bgColor={mainColor}/>
      <Fab bgColor={mainColor}/>
    </div>
  );
}