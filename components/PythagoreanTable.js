import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

function getInitialAnswers(difficulty) {
    const numPrefilled = {
      easy: 25,
      medium: 12,
      hard: 7,
    };
    let count = numPrefilled[difficulty.toLowerCase()];
  
    console.log('Difficulty:', difficulty);
    console.log('Number of prefilled cells:', count);
  
    // Create the answers array
    const answers = Array.from({ length: 10 }, () => Array(10).fill(''));
  
    // Fill the cells in a random order
    while (count > 0) {
      const rowIndex = Math.floor(Math.random() * 10);
      const colIndex = Math.floor(Math.random() * 10);
      if (answers[rowIndex][colIndex] === '') {
        const value = String((rowIndex + 1) * (colIndex + 1));
        console.log(`Setting value at (${rowIndex}, ${colIndex}): ${value}`);
        answers[rowIndex][colIndex] = value;
        count--;
      }
    }
  
    console.log('Answers:', answers);
  
    return answers;
  }


export default function PythagoreanTable( { difficulty, setScore }) {
    const [answers, setAnswers] = useState(getInitialAnswers(difficulty));
    const [message, setMessage] = useState('');

    useEffect(() => {
        setAnswers(prevAnswers => getInitialAnswers(difficulty));
    }, [difficulty]);

    const handleInputChange = (text, row, col) => {
    const newAnswers = [...answers];
    newAnswers[row][col] = text;
    // we check if the answer is correct and if it is we add 1 to the score
    const expectedAnswer = (row + 1) * (col + 1);
    
    if (parseInt(text, 10) !== expectedAnswer) {
        const errorMessage = `Incorrect answer at row ${row + 1}, column ${col + 1}. Expected: ${expectedAnswer}, got: ${text}`;
        console.log(errorMessage);
        setMessage(errorMessage);
    }
    setAnswers(newAnswers);
};
    return (
        <View>
            {message && (<Text>{message}</Text>)}
            <View style={styles.rowHorisontalLabels}>
                {Array.from({ length: 11 }, (_, i) => (
                    <Text key={i} style={styles.label}>{i}</Text> // Horizontal labels
                ))}
            </View>
            <View style={styles.table}>
                {answers.map((row, rowIndex) => (
                    <View key={rowIndex} style={styles.row}>
                        <Text style={styles.label}>{rowIndex + 1}</Text>
                        {row.map((cell, colIndex) => (
                            <TextInput
                            key={colIndex}
                            style={styles.cell}
                            onChangeText={text => handleInputChange(text, rowIndex, colIndex)}
                            value={cell}
                            keyboardType="number-pad" // Insert this line
                            maxLength={2} // And this line
                          />
                        ))}
                    </View>
                ))}
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    table: {
        justifyContent: 'center',
        alignItems: 'center',
        // Add your table styles here
    },
    row: {
        flexDirection: 'row',
        // Add your row styles here
    },
    cell: {
        width: 30,
        height: 30,
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 3,
        // Add your cell styles here
    },
    label: {
        width: 30,
        height: 30,
        textAlign: 'center',
        // Add your label styles here
    },
    rowHorisontalLabels: {
        flexDirection: 'row',
      // Add your row styles here
    },
    verticalLabel: {
        paddingTop : 50,
        position: 'absolute',
        // Add your label styles here
    },
});