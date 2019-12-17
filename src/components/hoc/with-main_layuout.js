import React from 'react';
import Navbar from '../navbar';
import Footer from '../footer';
import Fab from '../fab';
import { colors } from '../../data';


export default (Page) => {
  return (props) => {
    return (
      <div className='container app'>
        <Navbar bgColor={colors.mainColor}/>
        <Page props={props} colors={colors}/>
        <Footer bgColor={colors.mainColor}/>
        <Fab bgColor={colors.mainColor}/>
      </div>
    );
  }
}
