import React,{useState} from 'react'
import {
    Switch,View,SafeAreaView,StyleSheet,Text
} from 'react-native'
import tw from  'twrnc'


const ToggleSwitch = () => {
    const [switchValue,setSwitchValue] = useState(false);

    const toggleSwitch = (value)  => {
        setSwitchValue(value);
    }

    return (
            <View style={tw `flex-row absolute bottom-0px`}>
                <Text style={Style.text}>
                {switchValue ? 'ON' : 'OFF'}     
                </Text>
            
            <Switch 
            style ={{}}
            onValueChange = {toggleSwitch}
            value ={switchValue}
            />
            </View>
        
    )
}

 const Style = StyleSheet.create ({
    container : {
        flex : 1,
        justifyContent:'center',
        alignItems : 'center',
    },
    text : {
    fontSize:16,
    fontWeight:'bold'
    }
});


export default ToggleSwitch;