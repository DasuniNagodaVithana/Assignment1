/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';




function App(): JSX.Element {
  

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello React</Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA', // Background color
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Roboto', // Custom font
    color: '#5A7FD6', // Text color
    fontSize: 20, // Font size
  },
})



export default App;
