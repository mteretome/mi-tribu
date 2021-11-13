import React, { useState } from 'react';
import LinearContainer from '../../components/common/LinearContainer';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import colors from '../../assets/theme/colors';
import { SETTINGS } from '../../constants/routeNames';
import { Avatar } from 'react-native-elements';
import SocialNav from '../../components/dashboard/SocialNav';
import { Bold } from '../../components/common/Text';






const Social = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  
    return (
      <>
        <View style={{paddingVertical:25,paddingHorizontal:20,backgroundColor:colors.tribu_green,flexDirection:'row',justifyContent:'space-between'}}>
          <Bold style={{color:colors.white,fontSize:24,left:150}}>Social </Bold>
          <TouchableOpacity onPress={() => {navigate.navigate(SETTINGS)}}>
          <Avatar  rounded  
            // source={require('../../assets/images/pink/lady2.png')}
            icon={{name: 'user', type: 'font-awesome'}}
            size="small"   onPress={() => console.log("Works!")}  activeOpacity={0.7}
            containerStyle={{borderColor:colors.white,borderWidth:2,}}
            overlayContainerStyle={{backgroundColor: colors.tribu_pink}}/>
          </TouchableOpacity>
          
          </View>
          <SocialNav/>
          </>
    );
  };


export default Social;


