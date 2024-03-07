import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import ScreenWrapper from '../components/ScreenWrapper';

import { colors } from '../theme/constants';
import DropdownComponent from '../components/DropDown';


export default function LoginScreen() {
  return (
    <ScreenWrapper>
      
    <View style={tw `flex justify-center`}>
      <DropdownComponent/>
    </View>

    </ScreenWrapper>
  )
}

