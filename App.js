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
import DatePicker from 'react-native-datepicker';

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      language: 'date',
      date: '10-12-2017'
    };
  } 

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Pyrahealth Calculator
        </Text>
        <Text style={styles.instructions}>Please choose your date of birth:</Text>
        <DatePicker
          style={styles.datepicker}
          date={this.state.date}
          mode="date"
          placeholder="select date"
          format="MM-DD-YYYY"
          minDate="01-01-1940"
          maxDate="11-01-2017"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
          }}
          onDateChange={(date) => {this.setState({date: date})}}
        />
        <Text style={styles.instructions}>Date of birth: {this.state.date}</Text>
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
    fontSize: 30,
    textAlign: 'center',
    margin: 20,
    color: '#00FF00',
  },
  instructions: {
    fontSize: 20,
    textAlign: 'center',
    color: '#333333',
    margin: 10,
  },
  datepicker: {
    width: '90%',
    justifyContent: 'center',
    backgroundColor: '#00FFFF',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
});
