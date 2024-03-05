import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import ScreenWrapper from '../components/ScreenWrapper';
import { colors } from '../theme/constants';

export default function LoginScreen() {
  return (
    <ScreenWrapper>
    <View style={tw `flex justify-center text-center`}>
    <Text style={ tw`${colors.heading}`}>i love batta</Text>
    </View>
    </ScreenWrapper>
  )
}