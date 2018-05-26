import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from './components/Home'
import Profile from './components/Profile'
import Feed from './components/Feed'

import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator( {
  Home: Home,
  Profile: Profile,
  Feed: Feed,
} )

export default class App extends React.Component {
  render() {
    return <RootStack/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
