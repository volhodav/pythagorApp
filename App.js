import React, { useState, useEffect } from 'react';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useCallback } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import * as SplashScreen from 'expo-splash-screen';

import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import EndScreen from './screens/EndScreen';

import styles from './styles';

export default function App() {
  const [fontsLoaded] = useFonts({
    'comic-sans-ms-4': require('./assets/fonts/comic-sans-ms-4.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          'comic-sans-ms-4': require('./assets/fonts/comic-sans-ms-4.ttf'),
        });
      } catch (error) {
        console.error('Error loading fonts:', error);
      }
    };

    loadFonts();
    onLayoutRootView();
  }, [onLayoutRootView]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
        <Stack.Screen name="End" component={EndScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();