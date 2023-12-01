import React from 'react';
import { View, Text, Button } from 'react-native';

import styles from '../styles';

export default function EndScreen({ route, navigation }) {
  const { score } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your score: {score}</Text>
      <Button
        title="Play Again"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
