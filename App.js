import React, { Component } from 'react';
import Loading from './pages/Loading.js';
import Mainpage from './pages/Mainpage.js';
import MainHubo from './pages/MainHubo.js';
import Searchpage from './pages/Searchpage.js';
import Category from './pages/Category.js';
import Detailpage from './pages/Detailpage.js'
// import Mappage from './pages/Map'

export default class App extends Component{
  render(){
  // ruturn (<Map/>);
  // return (<Loading/>);
  // return (<MainHubo/>);
  return (<Mainpage/>)
  // return (<Searchpage/>);
  // return (<Category/>);
  // return (<Detailpage/>);
  }
}