import React from 'react';
import withFetch from '../hoc/withFetch';

import {Navbar, Footer, Fab} from '../UI';
import {HomePage, PortfolioPage, SummaryPage, ArticlePage, ArticlesPage } from '../pages';
import { Route, Switch } from 'react-router-dom';

 const App = (props) => {
  const { host, colors, contacts, portfolio, summary } = props.data;
  return (
    <div className='container app'>
      <Navbar data={{colors}}/>
      <Switch>
        <Route path='/' render={()=> <HomePage data={{host, colors}}/>} exact/>
        <Route path='/summary' render={()=> <SummaryPage data={{summary, colors}}/>} />
        <Route path='/portfolio' render={()=> <PortfolioPage data={{host, portfolio, colors}}/>} />
        <Route path='/articles' render={()=> <ArticlesPage colors={colors}/>}/>        
        <Route path='/article/:id' render={({ match })=> <ArticlePage colors={colors} match={match}/>} />
      </Switch>
      <Footer data={{colors, contacts}}/>
      <Fab data={{colors, contacts}}/>
    </div>
  );
}

export default withFetch(App)('getMainData');