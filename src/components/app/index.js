import React from 'react';
import './app.css';

import {HomePage, PortfolioPage, SummaryPage, ArticlesPage } from '../pages';
import { Route, Switch } from 'react-router-dom';

export default () => {
  return (
    <Switch>
      <Route path='/' render={()=> <HomePage />} exact/>
      <Route path='/summary' render={()=> <SummaryPage />} />
      <Route path='/articles' render={()=> <ArticlesPage />} />
      <Route path='/portfolio' render={()=> <PortfolioPage />} />
      <HomePage />
    </Switch>
  );
}