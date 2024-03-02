import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import tw from 'twrnc'; 
import AppNavigation from './navigation/AppNavigation';
import {NavigationContainer} from '@react-navigation/native'


export default function App() {
  return (
    <NavigationContainer>
    <AppNavigation/>
    </NavigationContainer>
  )
   
}



