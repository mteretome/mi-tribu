import React, { useState } from 'react';
import LinearContainer from '../../components/common/LinearContainer';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import colors from '../../assets/theme/colors';
import { SETTINGS } from '../../constants/routeNames';
// import { Avatar } from 'react-native-elements';
import SocialNav from '../../components/dashboard/SocialNav';
import { Bold } from '../../components/common/Text';






const Social = () => {
  
    return (
      <>
        <View style={{paddingVertical:10,paddingHorizontal:15,backgroundColor:colors.tribu_green,flexDirection:'row',justifyContent:'center'}}>
          <View style={{alignItems:'center',alignSelf:'center',flex:1}}>
          <Bold style={{color:colors.white,fontSize:20,}}>Social </Bold>
          </View>
          
          </View>
          <SocialNav/>
          </>
    );
  };


export default Social;


