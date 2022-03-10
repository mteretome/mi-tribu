import React, { useEffect } from 'react';
import { ActivityIndicator, View} from 'react-native';
import colors from '../../assets/theme/colors';
import { Bold } from '../../components/common/Text';


import { WEEK_NUMBERS } from '../../constants/routeNames';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import SocialComponent from '../../components/dashboard/Social';
import PregnancyComponent from '../../components/dashboard/Pregnancy';






const CurrentPregnancy = () => {
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
      setWeek(JSON.parse(current));
    
    }
    if(weeksRaw){
      var currentWeek = getCurrent(JSON.parse(weeksRaw));
      if(currentWeek>JSON.parse(current)){
        setWeek(JSON.parse(current));
        AsyncStorage.setItem("current_week", JSON.stringify(currentWeek))
      }
    }
      

};

 useEffect(() => {
   getUser();
   console.log("TYPE OF: ", typeof week)


 }, []);
  
    return (
      <>
       { week ? 
      (
        <>
            <PregnancyComponent weekParam={week}/>
        </>
   ) : ( 
        <>
          
          <ActivityIndicator  size="large" color={colors.tribu_blue}/>

        </>
    

    )
   }

       
          </>
    );
  };


export default CurrentPregnancy;


