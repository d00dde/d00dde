import React, { Component } from 'react';
import './app.css';

import {Navbar, Footer, Fab} from '../UI';
import {HomePage, PortfolioPage, SummaryPage, ArticlesPage } from '../pages';
import Loader from '../modules/loader';
import ErrorScreen from '../modules/errorScreen';
import { Route, Switch } from 'react-router-dom';
import Server from '../../firebase-server';
export default class extends Component {
  state = {
    loading: true,
    error: false,
    errorMsg: '',
    data: {}
  }
  constructor () {
    super();
    Server.getMainData().then((data) => {
      this.setState({
          loading: false,
          error: false,
          errorMsg: '',
          data: data.data()
        });
    }).catch((error) => {
      console.log(error);
      this.setState({
        loading: false,
        error: true,
        errorMsg: error.message,
        data: {}
      });
    });
  }
  render () {  
    if(this.state.loading)   
      return (<Loader />);
    if(this.state.error)
      return (<ErrorScreen message={this.state.errorMsg}/>);
    const { host, colors, contacts, portfolio, summary } = this.state.data;
    return (
      <div className='container app'>
        <Navbar data={{colors}}/>
        <Switch>
          <Route path='/' render={()=> <HomePage data={{host, colors}}/>} exact/>
          <Route path='/summary' render={()=> <SummaryPage data={{summary, colors}}/>} />
          <Route path='/articles' render={()=> <ArticlesPage />} />
          <Route path='/portfolio' render={()=> <PortfolioPage data={{host, portfolio, colors}}/>} />
          <HomePage />
        </Switch>
        <Footer data={{colors, contacts}}/>
        <Fab data={{colors, contacts}}/>
      </div>
        
    );
  }
}