import React from 'react';
import tw from 'twrnc';
import { View } from 'react-native';

import AppNavigation from './navigation/AppNavigation';
import {NavigationContainer} from '@react-navigation/native'



export default function App() {
  return (

    <NavigationContainer>
      <AppNavigation />  
    </NavigationContainer>
  )
   
}



