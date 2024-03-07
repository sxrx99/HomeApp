import React from 'react';
import tw from 'twrnc';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/constants.js';





const Card = ({ locationName, degrees, weather, H, L }) => {
  return (
    <View style={tw `pt-2 px-4 pb-2 m-auto mt-9 w-329px h-106px relative border-[0.3px]`} borderRadius={20}>
      <View style={tw `flex-1`}>
        <View style={tw `flex-row justify-between`}>
          <View>
            <Text style={tw `text-22px`}>My location</Text>
            <Text style={tw ` ${colors.cardDetails} text-15px`}>{locationName}</Text>
          </View>
          <Text style={tw ` ${colors.cardDetails} text-48px `}>{degrees}</Text>
        </View>

        <View style={tw `absolute bottom-0 w-full flex-row justify-between`} >
          <View style={tw `flex-row `}>
            <Ionicons name="cloudy-night" />
            <Text style={tw`text-13px`}>{weather}</Text>
          </View>
          <View style={tw `flex-row text-13px`}>
            <Text style={tw` ${colors.cardDetails}  mr-2 text-13px`}>H:{H}°</Text>
            <Text style={tw` text-13px`}>L:{L}°</Text>
          </View>
        </View>
      </View>
    </View>
  );
};



export default Card;
