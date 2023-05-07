import React, { Component } from 'react';
import Mainpage from './pages/Mainpage';
import Loading from './pages/Loading.js';
import MainTest from './pages/MainTest.js';
import Searchpage from './pages/Searchpage.js';
import Category from './pages/Category';
// import Mappage from './pages/Map'

export default class App extends Component{
  render(){
  // ruturn (<Map/>);
  // return (<Loading/>);
   return (<Mainpage/>);
  // return (<MainTest/>)
  // return (<Searchpage/>);
  // return (<Category/>);
  }
}