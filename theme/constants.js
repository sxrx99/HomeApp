import {useFonts} from 'expo-font'

export const colors = {
    navigation : '#727B7A' , //hadi tae hadok li mlta7t f bottom tab
    mainbg :'#F2F0F2',  //hadi l bg tae klch gae l'app basically

    maingreen : '#58E3B0',
    maingrey : ' #84908Fi ',
    grdgreen: '#4AC296',
    grdgrey: '#C0C4C4',
    grey: ' #EBEBF599 ',
    greybtn:' #606766',
    //##C9CED7  didn't find where it's used 

}




export const loadFonts = () => {
  const [fontsLoaded] = useFonts({
    'Roboto' : require('../assets/fonts/Roboto-Medium.ttf'),
    'Inter-light' :  require('../assets/fonts/Inter-ExtraLight.ttf'),
    'Inter-thin' :  require('../assets/fonts/Inter-Thin.ttf'),
    'Inter-Regular' :  require('../assets/fonts/Inter-Regular.ttf'),
    'Inter-Bold' :  require('../assets/fonts/Inter-SemiBold.ttf'),
  });

  return fontsLoaded;
};

export const apiKey = 'cece9adfa8ee480b832130219240703';