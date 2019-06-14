import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar 
} from 'react-native';

export default class App extends React.Component {
    render() {
      return (
        <View style={styles.container}>
        <Text>Login</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  }
});
