import React from 'react';
import { View, Text, StyleSheet,input } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Welcome to my application</Text>
     
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 40,
    backgroundColor: 'blue',
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  }
});
