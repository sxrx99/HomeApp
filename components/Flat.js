import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import ToggleCard from './ToggleCard';

export default function Flat() {
  const [rooms, setRooms] = useState([
    { name: 'Garage door',devices:'1', key: '1' }
  ]);

  return (
    <FlatList
      data={rooms}
      renderItem={({ item }) => (
        <ToggleCard name={item.name} devices={item.devices}/>
      )}
    />
  );
}
