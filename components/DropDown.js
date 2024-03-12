import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { loadFonts } from '../theme/constants.js';

const DropdownComponent = () => {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const fontsLoaded = loadFonts(); // Assuming loadFonts correctly loads fonts
  if (!fontsLoaded) {
    return null; // Return null while fonts are loading
  }

  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={selectedValue}
        items={[
          { label: 'Item 1', value: 'item1' },
          { label: 'Item 2', value: 'item2' },
          { label: 'Item 3', value: 'item3' },
        ]}
        setOpen={setOpen}
        setValue={setSelectedValue}
        
        style={{
          borderRadius: 15,
          borderWidth: 0,
          shadowColor: '#000',
          shadowOpacity: 0.5,
          shadowRadius: 5,
          elevation: 2, // for Android
          fontFamily: 'Inter-Bold', // Apply Inter-Bold font family
        }}
        
        labelStyle={{
          color: 'red', // Apply text color for the label
        }}
        itemStyle={{
          color: 'red', // Apply text color for items
          justifyContent: 'flex-start',
          paddingLeft: 23,
          fontFamily: 'Inter-Bold', // Apply Inter-Bold font family
        }}
        dropDownStyle={{ backgroundColor: '#fafafa' }}
        placeholder='choose device'
        
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DropdownComponent;
