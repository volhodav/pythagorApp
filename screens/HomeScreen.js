import React from "react";
import { View } from "react-native";
import { TouchableOpacity, Text } from "react-native";

import styles from "../styles";

export default function HomeScreen({ navigation }) {

    const onPress = (difficulty) => {
        navigation.navigate('Game', { difficulty });
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => onPress('Easy')}>
                <Text style={styles.title}>Easy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => onPress('Medium')}>
                <Text style={styles.title}>Medium</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => onPress('Hard')}>
                <Text style={styles.title}>Hard</Text>
            </TouchableOpacity>
        </View>
    );
}