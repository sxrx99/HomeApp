import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator() ;


export default function AppNavigation() {
  return (

    <Tab.Navigator>
        <Tab.Screen options={{ headerShown: false }}  name="Home" component={HomeScreen} />
        <Tab.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
     </Tab.Navigator>
  );
}