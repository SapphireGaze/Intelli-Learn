import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ConnectScreen() {
  return (
    <View style={styles.container}>
      <Text>Connect Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F6FA',
  }
});