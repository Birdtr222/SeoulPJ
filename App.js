import React, { Component } from 'react';

import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './pages/StackNavigator.js'

import Mainpage from './pages/Mainpage.js'
import Detailpage from './pages/Detailpage.js'
import Mappage from './pages/Mappage.js'
import Searchpage from './pages/Searchpage.js';

export default class App extends Component{
  render(){
  // return (<Mappage/>);
  // return (<Loading/>);
  return (<Mainpage/>)
  //  return (<Searchpage/>);
  // return (<Category/>);
  // return (<Detailpage/>);
  // return (<Mappage/>)
  // return (<JBMappage/>)
  // <NavigationContainer>
  //   <StackNavigator/>
  // </NavigationContainer>;
  }
}