import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import tw from 'twrnc';
import ToggleSwitch from './ToggleSwitch';


const ToggleCard = ({ name,devices }) => {

    const styles = StyleSheet.create({
        roundedBorder: {
            borderRadius: 22,
        },
    });

    const renderDeviceText = () => {
        if (devices === '1'){
            return 'device';
        }else{
            return 'devices';
        }
    };

    return (
        <View style={[tw`w-155px h-164px border p-3 relative`, styles.roundedBorder]}>
            <Text style={tw `text-16px font-bold`}>{name}</Text>
            <Text style={tw `pl-1 pt-2 text-16px`}>{devices}{renderDeviceText()}</Text>
            <ToggleSwitch/>
        </View>
        
       
    );
};


export default ToggleCard;
