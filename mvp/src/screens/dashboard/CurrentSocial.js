import React, { useEffect } from 'react';
import { ActivityIndicator, View} from 'react-native';
import colors from '../../assets/theme/colors';
import { Bold } from '../../components/common/Text';


import { WEEK_NUMBERS } from '../../constants/routeNames';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SocialComponent from '../../components/dashboard/Social';






const CurrentSocial = () => {
  const [week, setWeek] = React.useState(null);

  const getCurrent =(weeks) =>{
    var today = new Date();
    var i = 0, len = WEEK_NUMBERS.length;
    var current  = WEEK_NUMBERS[0];
      while (i < len) {
        var day = new Date(weeks[WEEK_NUMBERS[i]]);
        var temp =  new Date(weeks[current]);
        if (Math.abs(today - temp) >  Math.abs(today - day)){
          current = WEEK_NUMBERS[i];
        }
        i++;
      }
      return current;
  
  };

  const getUser = async () => {
        
    const weeksRaw = await AsyncStorage.getItem('week_dates');
    const current = await AsyncStorage.getItem("current_week"); 
    
    if(current){
      setWeek(current);
    
    }
    if(weeksRaw){
      var currentWeek = getCurrent(JSON.parse(weeksRaw));
      if(currentWeek>JSON.parse(current)){
        setWeek(currentWeek);
        AsyncStorage.setItem("current_week", JSON.stringify(currentWeek))
      }
    }
      

};

 useEffect(() => {
   getUser();
 }, []);
  
    return (
      <>
       { week ? 
      (
        <>
            <View style={{paddingVertical:10,paddingHorizontal:15,backgroundColor:colors.tribu_green,flexDirection:'row',justifyContent:'center'}}>
            <View style={{alignItems:'center',alignSelf:'center',flex:1}}>
            <Bold style={{color:colors.white,fontSize:20,}}>Social </Bold>
            </View>
            
            </View>
            <SocialComponent weekParam={week}/>
        </>
   ) : ( 
        <>
          <View style={{paddingVertical:10,paddingHorizontal:15,backgroundColor:colors.tribu_green,flexDirection:'row',justifyContent:'center'}}>
            <View style={{alignItems:'center',alignSelf:'center',flex:1}}>
            <Bold style={{color:colors.white,fontSize:20,}}>Social </Bold>
            </View>
            
            </View>
          <ActivityIndicator  size="large" color={colors.tribu_blue}/>

        </>
    

    )
   }

       
          </>
    );
  };


export default CurrentSocial;

