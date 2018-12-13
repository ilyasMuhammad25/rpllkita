

import React, { Component } from 'react';
import {stackNavigator} from 'react-navigation';
import login from './komponen/login';

const RootStack= stackNavigator(
  {
    login: {Screen:login}
  },
  {
    initialRoutename:'login',
  }
);
class  App extends Component{
  render(){
    return(<RootStack/>);
  }
}

export default App;

