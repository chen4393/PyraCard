/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Picker,
  Image
} from 'react-native';

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {language: 'java'};
  } 

  render() {
    return (
      <View style={styles.container}>
        
        <Picker
          style={styles.instructions}
          selectedValue={this.state.language}
          onValueChange={lang => this.setState({language: lang})}
          mode="dropdown">
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="C++" value="cpp" />
          <Picker.Item label="C#" value="cs" />
          <Picker.Item label="Python" value="py" />
        </Picker>
        <Text style={styles.welcome}>{this.state.language}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFE0',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
  },
});
