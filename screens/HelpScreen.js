import { View, Text } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import Flat from '../components/Flat'

export default function HelpScreen() {
  return (
    <ScreenWrapper>
    <View>
      <Text>HelpScreen</Text>
       <Flat/>
    </View>
    </ScreenWrapper>
  )
}