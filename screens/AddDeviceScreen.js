import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import ScreenWrapper from '../components/ScreenWrapper';
<<<<<<< Updated upstream
import { colors } from '../theme';
=======
import { colors } from '../theme/constants';
import DropdownComponent from '../components/DropDown';
>>>>>>> Stashed changes

export default function LoginScreen() {
  return (
    <ScreenWrapper>
      
    <View style={tw `flex justify-center`}>
      <DropdownComponent/>
    </View>

    </ScreenWrapper>
  )
}

