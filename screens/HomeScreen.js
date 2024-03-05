import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import ScreenWrapper from '../components/ScreenWrapper';
import { colors } from '../theme/constants.js';
import Card from '../components/Card.js';
import SettingImg from '../assets/setting.svg';
import Svg , {Path} from 'react-native-svg'; 


export default function HomeScreen() {
  return (
    <ScreenWrapper style={tw `flex-1`}>
      <View style={tw `flex-row justify-between items-center mx-30px mt-5`}>
        <Text style={tw `${colors.heading} text-45px`}>Home</Text>
        <TouchableOpacity style={tw `${colors.heading} flex justify-center items-center relative bg-black w-40px h-40px border-none bg-gray-200 rounded-full`}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="none"
         >
        <Path
          fill="#101010"
          d="M12.012 9.155a2.6 2.6 0 0 0-1.854.768 2.61 2.61 0 0 0-.769 1.854c0 .701.274 1.357.769 1.854a2.61 2.61 0 0 0 1.854.769c.7 0 1.357-.274 1.854-.769a2.61 2.61 0 0 0 .768-1.854c0-.7-.274-1.357-.768-1.854a2.6 2.6 0 0 0-1.854-.768Zm9.663 5.52-1.533-1.31a8.417 8.417 0 0 0 0-2.706l1.533-1.31a.75.75 0 0 0 .218-.825l-.021-.06a10.372 10.372 0 0 0-1.866-3.228l-.042-.05a.753.753 0 0 0-.823-.222l-1.903.677a8.183 8.183 0 0 0-2.334-1.347l-.368-1.99a.75.75 0 0 0-.605-.602l-.063-.012a10.562 10.562 0 0 0-3.722 0l-.063.012a.751.751 0 0 0-.605.602l-.37 2A8.284 8.284 0 0 0 6.79 5.645l-1.917-.682a.75.75 0 0 0-.823.223l-.042.049a10.452 10.452 0 0 0-1.866 3.227l-.02.061a.753.753 0 0 0 .217.825l1.552 1.324a8.24 8.24 0 0 0 0 2.672L2.344 14.67a.75.75 0 0 0-.218.825l.02.062a10.398 10.398 0 0 0 1.867 3.227l.042.049a.753.753 0 0 0 .822.223l1.918-.682a8.113 8.113 0 0 0 2.318 1.343l.37 1.999a.751.751 0 0 0 .604.602l.064.012c1.23.221 2.49.221 3.722 0l.063-.012a.752.752 0 0 0 .605-.602l.368-1.99a8.24 8.24 0 0 0 2.334-1.348l1.903.678a.751.751 0 0 0 .823-.223l.042-.05a10.45 10.45 0 0 0 1.866-3.226l.02-.061a.757.757 0 0 0-.222-.82Zm-9.663 1.223a4.12 4.12 0 1 1 0-8.24 4.12 4.12 0 0 1 0 8.24Z"
        />
       </Svg>
        </TouchableOpacity>
      </View>

      <Card locationName="Montreal" degrees="-10" weather="Partly Cloudy" H="2" L="12"/>
    </ScreenWrapper> 
  );
}
