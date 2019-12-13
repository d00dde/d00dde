import React from 'react';
import './app.css';
import { colors } from '../../data';

import Navbar from '../navbar';
import Footer from '../footer';
import Fab from '../fab'
import {HomePage, PortfolioPage, SummaryPage, ArticlesPage } from '../pages';
import { Route, Switch } from 'react-router-dom';


export default () => {

  return (
  	<div className='container app'>
      <Navbar bgColor={colors.mainColor}/>
      <Switch>
        <Route path='/' render={()=> <HomePage colors={colors}/>} exact/>
        <Route path='/resume' render={()=> <SummaryPage colors={colors}/>} />
        <Route path='/articles' render={()=> <ArticlesPage colors={colors}/>} />
        <Route path='/portfolio' render={()=> <PortfolioPage colors={colors}/>} />
        <HomePage colors={colors}/>
      </Switch>
      <Footer bgColor={colors.mainColor}/>
      <Fab bgColor={colors.mainColor}/>
    </div>
  );
}