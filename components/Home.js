import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello from home!</Text>

        <Button 
          title="Go To Profile"
          onPress={
            () => this.props.navigation.navigate( 'Profile' )
          }
        />

        <Button 
          title="Go To Feed"
          onPress={
            () => this.props.navigation.navigate( 'Feed', {
              username: 'Bill'
            } )
          }
        />

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
