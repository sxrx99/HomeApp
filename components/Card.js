import React from 'react';
import tw from 'twrnc';
import { View, Text } from 'react-native';


import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/constants.js';






const Card = ({ locationName, degrees, weather, H, L }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState(null);
  
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      let addressResponse = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      if (addressResponse.length > 0) {
        setAddress(addressResponse[0]);
      }

    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  }  else if (address) {
    text = `${address.region}, ${address.country}`;
  }
  
  const fontsLoaded = loadFonts();
  if (!fontsLoaded) {
   return undefined;
  }

  

  return (
    <LinearGradient
     colors={[colors.grdgreen,colors.grdgrey]}
     start={{ x: 0, y: 0}} // Start from the left edge
     end={{ x: 1, y: 1 }}   // End at the right edge
     style={tw `flex flex-row flex-grow justify-between px-5 py-3 border rounded-7 m-5 mt-7  h-32 border-0`} 
     >
      
      
      <View style={tw `flex-column justify-between`}>
        <View>
          <Text style={{fontFamily: 'Inter-Bold' ,fontSize:25,color:'#fff'}}>My Location</Text>
          <Text style={{fontFamily: 'Inter-light' ,color:colors.grey}}>{text}</Text>
        </View>
        <Text style={{fontFamily: 'Inter-light' ,color:colors.grey}}>{weather}</Text>
      </View>
      <View style={tw `h-full`}>
      <Text style={{fontFamily: 'Inter-Regular',color:'#fff',fontSize:50,paddingTop:15}}>{degrees}°</Text>
      </View>
     
 
    </LinearGradient>
    
      

  );
};



export default Card;
