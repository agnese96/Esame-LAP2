import React, { Component } from 'react';
import { Font } from 'expo';

import { createStackNavigator } from 'react-navigation';

//import screens
//import AddPlace from './screens/AddPlace';
import Home from './screens/Home';
import Details from './screens/Details';

export default class App extends Component {
  render() {
    return <Home />;
  }
}

const RootNavigator = createStackNavigator(
  {
    /*AddPlace: {
    screen: AddPlace,
  },*/
    Home: {
      screen: Home,
    },
    Details: {
      screen: Details,
    }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);
