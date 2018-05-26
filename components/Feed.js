import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class Feed extends React.Component {

  render() {

    const username = this.props.navigation.getParam( 'username', 'No username provided' )

    return (
      <View style={styles.container}>
        <Text>Hello from feed page!</Text>
        <Text>
          { username }
        </Text>
      </View>
    );
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
