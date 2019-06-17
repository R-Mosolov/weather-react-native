import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Weather(props) {
  return (
    <View>
        {props.temp &&
        <View style={styles.details}>
            <Text>Город: {props.name}</Text>
            <Text>Страна: {props.country}</Text>
            <Text>Температура: {Math.round(props.temp - 273.15)}°C</Text>
            <Text>{props.error}</Text>
        </View>
        }
        <Text style={styles.error}>{props.error}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  details: {
    color: 'grey',
    fontSize: 18,
  },
  error: {
    color: 'grey',
    fontSize: 18,
  },
});