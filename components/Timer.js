import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import styles from '../styles';

export default function Timer({ difficulty }) {
  const difficultyTimes = { Easy: 300, Medium: 200, Hard: 100 };
  const [time, setTime] = useState(difficultyTimes[difficulty]);

  useEffect(() => {
    setTime(difficultyTimes[difficulty]);
    const timer = setInterval(() => {
      setTime(prevTime => prevTime > 0 ? prevTime - 1 : 0);
    }, 1000);

    return () => clearInterval(timer);
  }, [difficulty]);

  return <Text style={styles.timer}>{time}</Text>;
}