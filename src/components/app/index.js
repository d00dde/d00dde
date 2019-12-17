import React from 'react';
import './app.css';

import {HomePage, PortfolioPage, SummaryPage, ArticlesPage, Summary } from '../pages';
import { Route, Switch } from 'react-router-dom';

export default () => {
  return (
    <Switch>
      <Route path='/d00dde/' render={()=> <HomePage />} exact/>
      <Route path='/d00dde/summary' render={()=> <SummaryPage />} />
      <Route path='/d00dde/articles' render={()=> <ArticlesPage />} />
      <Route path='/d00dde/portfolio' render={()=> <PortfolioPage />} />
      <Route path='/d00dde/sumrus' render={()=> <Summary language='rus'/>} />
      <Route path='/d00dde/sumeng' render={()=> <Summary language='eng'/>} />
      <HomePage />
    </Switch>
  );
}