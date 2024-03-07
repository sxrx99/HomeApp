import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import AddDeviceScreen from '../screens/AddDeviceScreen';
import HelpScreen from '../screens/HelpScreen';
import SmartSwitchScreen from '../screens/SmartSwitchScreen';
import tw from 'twrnc';
import { colors } from '../theme';
const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <Tab.Navigator tabBarOptions={{
        activeTintColor: 'green',     // Color of the active tab
        inactiveTintColor: colors.navigation,  // Color of inactive tabs
        style: tw`bg-white`,         // Background color of the tab bar
        labelStyle: tw`font-bold`,   // Style of the tab labels 
        height:62,
       }}>



<Tab.Screen  name="Home" component={HomeScreen} options={{
  headerShown:false,
  
}} />

      <Tab.Screen
        name="Add device"
        component={AddDeviceScreen}
        options={{ 
          headerShown:false ,
        
        
        }}
      />

     <Tab.Screen
        name="Smart switch"
        component={SmartSwitchScreen}
        options={{
          headerShown:false,
         
        }}
      />



<Tab.Screen
  name="Help"
  component={HelpScreen}
  options={{
    headerShown: false,
   
     // Set text color
  }}
/>

      
    </Tab.Navigator>
  );
}
