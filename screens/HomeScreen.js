import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import ScreenWrapper from '../components/ScreenWrapper';
import { colors } from '../theme';
import Card from '../components/Card.js';
<<<<<<< Updated upstream
=======
import SettingImg from '../assets/svgs/settings.js';
import { loadFonts } from '../theme/constants.js';
import Flat from '../components/Flat.js';
>>>>>>> Stashed changes

export default function HomeScreen() {
  return (
    <ScreenWrapper style={tw `flex-1`}>
      <View style={tw `flex-row justify-between items-center mx-30px mt-5`}>
        <Text style={tw `${colors.heading} text-45px`}>Home</Text>
        <TouchableOpacity style={tw `${colors.heading} flex justify-center items-center relative bg-black w-40px h-40px border-none bg-gray-200 rounded-full`}>
          <Image source={require('../assets/Vector.png')}  style={tw `w-20px h-20px absolute`}/>
        </TouchableOpacity>
      </View>
      <Card locationName="Montreal" degrees="-10" weather="Partly Cloudy" H="2" L="12"/>
      <Flat/>
    </ScreenWrapper> 
  );
}
