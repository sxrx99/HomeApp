import React from 'react';
import { View, Text } from 'react-native';

const Card = ({ locationName, degrees, otherInfo }) => {
  return (
    <View>
      <Text>Location: {locationName}</Text>
      <Text>Degrees: {degrees}</Text>
      <Text>Other Info: {otherInfo}</Text>
    </View>
  );
};

export default Card;
