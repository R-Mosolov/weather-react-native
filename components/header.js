import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
    <Image
        style={styles.image}
        source={{uri: 'https://cdn-images-1.medium.com/max/2400/0*b4zRSa1_lQTrXS3V'}}/>
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
    justifyContent: 'flex-start',
  },
  image: {
    width: 768,
    height: 200,
  },
  header: {
    paddingTop: 15,
    fontSize: 24,
  },
  description: {
    paddingTop: 15,
    fontSize: 18,
    textAlign: 'center',
  },
});