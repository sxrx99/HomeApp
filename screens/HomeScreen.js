import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import ScreenWrapper from '../components/ScreenWrapper';
import { colors } from '../theme';

export default function HomeScreen() {
  return (
    <ScreenWrapper style={tw `flex-1`}>
    <View style={tw ` h-54px flex-row justify-between items-center mx-30px`}>
      <Text style={ tw`${colors.heading}  text-45px  `}>Home</Text>
      <TouchableOpacity style={ tw`${colors.heading}  bg-white border-none bg-gray-200 rounded-full`} >
        <Text>settings</Text>
      </TouchableOpacity>
    </View>
    </ScreenWrapper>
  )
}