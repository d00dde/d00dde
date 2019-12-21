import React from 'react';
import './app.css';

import {HomePage, PortfolioPage, SummaryPage, ArticlesPage } from '../pages';
import { Route, Switch } from 'react-router-dom';
import Server from '../../server'

export default () => {
  const server = new Server();
  server.getData().then((data) => {
    console.log(data.data());
  }).catch((error) => {
    console.log(error);
  });
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