import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity } from 'react-native';
import Header from './components/header';
import Weather from './components/weather';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Weather/>
      <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Город по-английски"
            placeholderTextColor="blue"
            autoCapitalize="none"
          />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={this.onPress}>
            <Text style={styles.submitButtonText}>Узнать погоду</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  input: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    minWidth: 215,
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'blue',
  },
  inputContainer: {
    paddingTop: 20,
    flex: 1,
    justifyContent: 'flex-start'
  },
  submitButton: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    minWidth: 215,
    backgroundColor: 'blue',
  },
  submitButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
});