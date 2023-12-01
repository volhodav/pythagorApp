import React from 'react';
import { Text } from 'react-native';
import styles from '../styles';

export default function Score({ score }) {
  return <Text style={styles.score}>Score: {score}</Text>;
}
