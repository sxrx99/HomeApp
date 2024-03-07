import React, { useState } from 'react';
import { Switch, View, Text } from 'react-native';
import tw from 'twrnc';

const ToggleSwitch = () => {
  const [switchValue, setSwitchValue] = useState(false);

  const toggleSwitch = (value) => {
    setSwitchValue(value);
  };

  return (
    <View style={tw`flex-row justify-between items-center`}>
      <Text style={{ color: 'rgba(60, 60, 67, 0.18)' }}>
        {switchValue ? 'ON' : 'OFF'}
      </Text>
      <Switch
        onValueChange={toggleSwitch}
        value={switchValue}
      />
    </View>
  );
};

export default ToggleSwitch;
