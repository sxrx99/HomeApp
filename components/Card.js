import React from 'react';
import tw from 'twrnc';
import { View, Text } from 'react-native';

const Card = ({ locationName, degrees, weather, H, L }) => {
  return (
    <View style={tw `p-2 border m-auto mt-4 w-329px h-106px relative`} borderRadius={20}>
      <View style={tw `flex-1`}>
        <View style={tw `flex-row justify-between`}>
          <View>
            <Text>My location</Text>
            <Text>{locationName}</Text>
          </View>
          <Text>{degrees}°C</Text>
        </View>

        <View style={tw `absolute bottom-0 w-full flex-row justify-between`} >
          <View style={tw `flex-row`}>
            <Text style={tw`mr-2`}>i</Text>
            <Text>{weather}</Text>
          </View>
          <View style={tw `flex-row`}>
            <Text style={tw`mr-2`}>H:{H}°</Text>
            <Text>L:{L}°</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;
