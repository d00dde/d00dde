import React from 'react';
import './app.css';

import {HomePage, PortfolioPage, SummaryPage, ArticlesPage, Summary } from '../pages';
import { Route, Switch } from 'react-router-dom';

export default () => {
  return (
    <Switch>
      <Route path='/' render={()=> <HomePage />} exact/>
      <Route path='/summary' render={()=> <SummaryPage />} />
      <Route path='/articles' render={()=> <ArticlesPage />} />
      <Route path='/portfolio' render={()=> <PortfolioPage />} />
      <Route path='/sumrus' render={()=> <Summary language='rus'/>} />
      <Route path='/sumeng' render={()=> <Summary language='eng'/>} />
      <HomePage />
    </Switch>
  );
}