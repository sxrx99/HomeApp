import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import tw from 'twrnc';
import ToggleSwitch from './ToggleSwitch';
import { loadFonts } from '../theme/constants';
import { colors } from '../theme/constants';

const ToggleCard = ({ name, devices }) => {
  const styles = StyleSheet.create({
    roundedBorder: {
      borderRadius: 22,
    },
  });

  const renderDeviceText = () => {
    return devices === '1' ? 'device' : 'devices';
  };

  return (
    <View style={[tw`w-155px h-164px border p-3 flex-col justify-between`, styles.roundedBorder]}>
      <View>
        <Text style={[tw` text-16px`, { fontFamily: 'Inter-Bold',color:colors.maingrey }]}>{name}</Text>
        <Text style={[tw`pl-1 pt-2 text-16px`, { fontFamily: 'Inter-Regular' , color:colors.maingrey }]}>
          {devices}
          {renderDeviceText()}
        </Text>
      </View>

      <View>
        <ToggleSwitch />
      </View>
    </View>
  );
};

export default ToggleCard;
