import { View, Text } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'


export default function HelpScreen() {
  return (
    <ScreenWrapper>
    <View style={tw `flex-1 justify-center items-center`}>
      <Text>HelpScreen</Text>
       
    </View>
    </ScreenWrapper>
  )
}