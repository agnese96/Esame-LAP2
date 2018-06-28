import { MaterialIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import React, { Component } from 'react';

import PersonalFavorites from '../tabs/PersonalFavorites';
import PublicFavorites from '../tabs/PublicFavorites';

export default class Home extends Component {
  render() {
    return <MaterialTabNavigator />;
  }
}

const MaterialTabNavigator = createMaterialBottomTabNavigator(
  {
    PersonalFavorites: { screen: PersonalFavorites },
    PublicFavorites: { screen: PublicFavorites },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'PersonalFavorites':
            iconName = 'favorite-border';
            break;
          case 'PublicFavorites':
            iconName = 'public';
            break;
        }
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <MaterialIcons name={iconName} size={25} color={tintColor} />;
      },
    }),
    initialRouteName: 'PersonalFavorites',
    barStyle: { backgroundColor: '#3F51B5' },
    tabBarOptions: {
      activeTintColor: '#3F51B5',
      inactiveTintColor: 'gray',
    },
  }
);
