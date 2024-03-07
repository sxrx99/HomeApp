import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import ScreenWrapper from '../components/ScreenWrapper';
import { colors } from '../theme/constants.js';
import Card from '../components/Card.js';
import SettingImg from '../assets/svgs/settings.js';
import { loadFonts } from '../theme/constants.js';


export default function HomeScreen() {
  const fontsLoaded = loadFonts();

  if (!fontsLoaded) {
   return undefined;
  }
  
  return (
    <ScreenWrapper style={tw `flex-1 flex-col`}>
      <View style={tw `flex-row justify-between items-center mx-5 mt-5`}>
        <Text style={{fontFamily:'Inter-Bold', fontSize:50}}>Home</Text>
        <TouchableOpacity style={tw `${colors.heading} flex justify-center items-center relative bg-black w-40px h-40px border-none bg-gray-200 rounded-full`}>
         <SettingImg/>
        </TouchableOpacity>
      </View>
      <Card/>
      <Flat/>

    </ScreenWrapper> 
  );
}
