import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';


import PythagoreanTable from '../components/PythagoreanTable';
import Timer from '../components/Timer';
import Score from '../components/Score';
import styles from '../styles';

export default function GameScreen({ route, navigation }) {
  const { difficulty } = route.params;
  const [score, setScore] = useState(0);
  
  console.log('Difficulty before passing to PythagoreanTable:', difficulty);

  useEffect(() => {
    // TODO: Implement game logic here
  }, [difficulty]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SmartyKid</Text>
      <Timer difficulty={difficulty} />
      <PythagoreanTable difficulty={difficulty} setScore={setScore} />
      <Score score={score} />
    </View>
  );
}
