import React, { useEffect } from 'react';
import { ActivityIndicator, View} from 'react-native';
import colors from '../../assets/theme/colors';
import { Bold } from '../../components/common/Text';


import { WEEK_NUMBERS } from '../../constants/routeNames';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SocialComponent from '../../components/dashboard/Social';






const SpecificSocial = ({week}) => {
  console.log("specific week : ", week)
    return (
      <>
      
            <View style={{paddingVertical:10,paddingHorizontal:15,backgroundColor:colors.tribu_green,flexDirection:'row',justifyContent:'center'}}>
            <View style={{alignItems:'center',alignSelf:'center',flex:1}}>
            <Bold style={{color:colors.white,fontSize:20,}}>Social </Bold>
            </View>
            
            </View>
            <SocialComponent weekParam={week}/>
   

       
          </>
    );
  };


export default SpecificSocial;


