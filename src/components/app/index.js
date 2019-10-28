import React from 'react';
import './app.css';
import { mainColor, sectionColor } from '../../data';

import Navbar from '../navbar';
import Footer from '../footer';
import Fab from '../fab'
import {HomePage, AboutPage, PortfolioPage} from '../pages';
import { Route, Switch } from 'react-router-dom';


export default () => {

  return (
  	<div className='container app'>
      <Navbar bgColor={mainColor}/>
      <Switch>
        <Route path='/' render={()=> <HomePage bgColor={sectionColor}/>} exact/>
        {/*<Route path='/about' component={AboutPage} />*/}
        <Route path='/portfolio' render={()=> <PortfolioPage bgColor={sectionColor}/>} />
        <HomePage bgColor={sectionColor}/>
      </Switch>
      <Footer bgColor={mainColor}/>
      <Fab bgColor={mainColor}/>
    </div>
  );
}