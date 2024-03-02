import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import ScreenWrapper from '../components/ScreenWrapper';
import { colors } from '../theme';
import Card from '../components/Card.js';

export default function HomeScreen() {
  return (
    <ScreenWrapper style={tw `flex-1`}>
      <View style={tw `flex-row justify-between items-center mx-30px`}>
        <Text style={tw `${colors.heading} text-45px`}>Home</Text>
        <TouchableOpacity style={tw `${colors.heading} flex justify-center items-center relative bg-black w-40px h-40px border-none bg-gray-200 rounded-full`}>
          <Image source={require('../assets/Vector.png')}  style={tw `w-20px h-20px absolute`}/>
        </TouchableOpacity>
      </View>

      <Card locationName="Your Location Name" degrees="25°C" otherInfo="Other information here"/>
    </ScreenWrapper> 
  );
}
