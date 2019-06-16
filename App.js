import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Погода на сегодня</Text>
      <Text style={styles.description}>Узнайте погоду за 1 минуту в интересующем Вас городе!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 35,
    },
  description: {
    fontSize: 35,
  },
});
