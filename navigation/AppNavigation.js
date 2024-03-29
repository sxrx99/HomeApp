import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import AddDeviceScreen from '../screens/AddDeviceScreen';
import HelpScreen from '../screens/HelpScreen';
import SmartSwitchScreen from '../screens/SmartSwitchScreen';
import tw from 'twrnc';
import { colors } from '../theme/constants';
import HomeIcon from '../assets/svgs/homeIcon';
import Smartswitch from '../assets/svgs/smartswitch';
import Help from '../assets/svgs/help';
import AddDevice from '../assets/svgs/addDevice';
const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
   
    <Tab.Navigator 
    tabBarOptions={{
      activeTintColor: '#58E3B0',     // Color of the active tab
      inactiveTintColor: '#84908F',   // Color of inactive tabs
      labelStyle: { fontWeight: 'bold' } // Style of the tab labels 
    }}
  >


         <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ 
          headerShown:false ,
          tabBarIcon: ({ color, size }) => (
            <HomeIcon />
            
          ),
          tabBarLabelStyle: { color: colors.navigation },
        }}
      />
<Tab.Screen

        name="Add device"
        component={AddDeviceScreen}
        options={{ 
          headerShown:false ,
          tabBarIcon: ({ color, size }) => (
            <AddDevice/>
            
          ),
        
        }}
      />

     <Tab.Screen
        name="Smart switch"
        component={SmartSwitchScreen}
        options={{
          headerShown:false,
          tabBarIcon: () => (
            <Smartswitch/>
          ),
         
        }}
      />



<Tab.Screen
  name="Help"
  component={HelpScreen}
  options={{
    headerShown: false,
    tabBarIcon: ({ color, size }) => (
      <Help/>
    ),
     // Set text color
  }}
/>

      
    </Tab.Navigator>

   
    
  );
}
