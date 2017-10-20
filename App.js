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
  ScrollView ,
  Picker,
  Button,
  Alert,
  View
} from 'react-native';
import DatePicker from 'react-native-datepicker';

var today = new Date();

function formatDate(date) {
  var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1) + '';
  var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate() + '';
  var year = date.getFullYear() + '';
  return month + '-' + day + '-' + year;
}

function sumAllDigits(numbers) {
  var looplimit = 10; // limit number of times through loop
  var sumX = 0;
  var numbersAsText = numbers;
  
  /* repeat the addition until reduced to a single digit */
  while ( (numbersAsText.length > 1) && (looplimit > 0) ) {
    looplimit--;  // subtract 1 from loop countdown
    /* add the values of all the digits in the number */
    sumX = 0;
    for( i = 1; i <= numbersAsText.length; i++ ) {
      numbersAsNumbers = numbersAsText.charAt(i-1) - 0; // 0 forces numeric type
      sumX += numbersAsNumbers - 0;
    }

    numbersAsText = sumX + "";
  } // while
  
  return numbersAsText;
}

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    let myDay = today.getDate();
    let myMonth = today.getMonth() + 1;
    let myYear = today.getFullYear();
    let myDayAdd = sumAllDigits(myDay + '');
    let myMonthAdd = sumAllDigits(myMonth + '');
    let myYearAdd = sumAllDigits(myYear + '');
    let myAddition = sumAllDigits(myDayAdd + myMonthAdd + myYearAdd);
    this.state = {
      dateStr: formatDate(today),
      day: myDay,
      month: myMonth,
      year: myYear,
      dayAdd: myDayAdd,
      monthAdd: myMonthAdd,
      yearAdd: myYearAdd,
      Addition: myAddition,
      missingNumber: ''
    };
  }

  getNumbers() {
    // body...
    let day = this.state.day + '';
    let month = this.state.month + '';
    let year = this.state.year + '';
    let dayAdd = this.state.dayAdd + '';
    let monthAdd = this.state.monthAdd + '';
    let yearAdd = this.state.yearAdd + '';
    let Addition = this.state.Addition + '';
    return day + month + year + dayAdd + monthAdd + yearAdd + Addition;
  }

  getMissingNumbers(s) {
    var set = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var res = '';
    for (let i = 0; i < set.length; i++) {
      if (s.indexOf(set[i], 0) == -1) {
        res += set[i];
      }
    }
    return res;
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.welcome}>
          Pyrahealth Calculator
        </Text>
        <Text style={styles.desciptions}>Find your Birthdate missing number on Pyracard:</Text>
        <Text style={styles.instructions}>Please choose your birthday with the datepicker bar:</Text>
        <DatePicker
          style={styles.datepicker}
          date={this.state.dateStr}
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
          onDateChange={
            (dateString) => {
              let myDay = parseInt(dateString.substring(3, 5), 10);
              let myMonth = parseInt(dateString.substring(0, 2), 10);
              let myYear = parseInt(dateString.substring(6, 10), 10);
              let myDayAdd = sumAllDigits(myDay + '');
              let myMonthAdd = sumAllDigits(myMonth + '');
              let myYearAdd = sumAllDigits(myYear + '');
              let myAddition = sumAllDigits(myDayAdd + myMonthAdd + myYearAdd);
              this.setState({
                dateStr: dateString,
                day: myDay,
                month: myMonth,
                year: myYear,
                dayAdd: myDayAdd,
                monthAdd: myMonthAdd,
                yearAdd: myYearAdd,
                Addition: myAddition
              })
            }
          }
        />
        <Text style={styles.instructions}>Date of birth: {this.state.dateStr}</Text>
        <Text style={styles.instructions}>Day Add: {this.state.dayAdd}</Text>
        <Text style={styles.instructions}>Month Add: {this.state.monthAdd}</Text>
        <Text style={styles.instructions}>Year Add: {this.state.yearAdd}</Text>
        <Text style={styles.instructions}>Addition of Date, Month, Year: {this.state.Addition}</Text>
        <Text style={styles.instructions}>Numbers present in your date of birth: {this.getNumbers()}</Text>
        <Text style={styles.instructions}>Missing numbers are: {this.getMissingNumbers(this.getNumbers())}</Text>

        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={aboutDialog}
            title="This looks great!"
          />
          <Button
            onPress={aboutDialog}
            title="OK!"
            color="#841584"
          />
        </View>
      </ScrollView>
    );
  }
}

function aboutDialog() {
  Alert.alert("This mentioned diagram is a special magic square.\n"
            + "It has been formulated after an intense research for creating an unique blend of ancient wisdom and modern science.\n" 
            + "It is the commitment to material and spiritual prosperity of today's man that has led to designing this simple and logical yet effective technique.\n"
            + "It is after vigorous experimenting and verification that this secret of creating fortune is being revealed to you. ")
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
  desciptions: {
    fontSize: 15,
    textAlign: 'center',
    color: '#FF0000',
    margin: 5,
  },
  instructions: {
    fontSize: 20,
    textAlign: 'center',
    color: '#333333',
    margin: 5,
  },
  datepicker: {
    width: '90%',
    justifyContent: 'center',
    backgroundColor: '#00FFFF',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
