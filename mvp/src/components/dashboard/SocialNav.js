import React, { useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import AsyncStorage from '@react-native-async-storage/async-storage';

import SocialComponent from './Social';
import { WEEK_NUMBERS } from '../../constants/routeNames';






const SocialNav = () => {
	const Tab = createMaterialTopTabNavigator();
  const getCurrent =(week) =>{
    var today = new Date();
    var i = 0, len = WEEK_NUMBERS.length;
    var current  = WEEK_NUMBERS[0];
      while (i < len) {
        var day = new Date(week[WEEK_NUMBERS[i]]);
        var temp =  new Date(week[current]);
        if (Math.abs(today - temp) >  Math.abs(today - day)){
          current = WEEK_NUMBERS[i];
        }
        i++;
      }
      return JSON.stringify(current);
  
  };
  

  
  const [name, setName] = React.useState(null);
  const [week, setWeek] = React.useState(null);
  const getUser = async () => {
        
    const userString = await AsyncStorage.getItem('user');
    const weeksRaw = await AsyncStorage.getItem('week_dates');
    const current = await AsyncStorage.getItem("current_week");
   
    
    
    if(userString){
        setName(JSON.parse(userString).first_name);
    }
    if(weeksRaw){
      setWeek(getCurrent(JSON.parse(weeksRaw)));
      if(current<week){
        const diff = week-current;
        const current = current+diff;
        setWeek(current); 
        AsyncStorage.setItem("current_week",JSON.stringify(week));
      }
     

    }

};

 useEffect(() => {
   getUser();
 }, []);

	return (

    <Tab.Navigator tabBar={() => null} initialRouteName={week}  screenOptions={{
     lazy:true,
     lazyPreloadDistance:2,
    }}>
  
    <Tab.Screen name={"5"} component={SocialComponent} initialParams={{ week: 5}}/>
    <Tab.Screen name={"6"} component={SocialComponent} initialParams={{ week: 6}}/>
     <Tab.Screen name={"7"} component={SocialComponent} initialParams={{ week: 7}}/>
    <Tab.Screen name={"8"} component={SocialComponent} initialParams={{ week: 8}}/>
    <Tab.Screen name={"9"} component={SocialComponent} initialParams={{ week: 9}}/>
    <Tab.Screen name={"10"} component={SocialComponent} initialParams={{ week: 10}}/>
    <Tab.Screen name={"11"} component={SocialComponent} initialParams={{ week: 11}}/>
    <Tab.Screen name={"12"} component={SocialComponent} initialParams={{ week: 12}}/>
    <Tab.Screen name={"13"} component={SocialComponent} initialParams={{ week: 13}}/>
    <Tab.Screen name={"14"} component={SocialComponent} initialParams={{ week: 14}}/>
    <Tab.Screen name={"15"} component={SocialComponent} initialParams={{ week: 15}}/>
    <Tab.Screen name={"16"} component={SocialComponent} initialParams={{ week: 16}}/>
    <Tab.Screen name={"17"} component={SocialComponent} initialParams={{ week: 17}}/>
    <Tab.Screen name={"18"} component={SocialComponent} initialParams={{ week: 18}}/>
    <Tab.Screen name={"19"} component={SocialComponent} initialParams={{ week: 19}}/>
    <Tab.Screen name={"20"} component={SocialComponent} initialParams={{ week: 20}}/>
    <Tab.Screen name={"21"} component={SocialComponent} initialParams={{ week: 21}}/>
    <Tab.Screen name={"22"} component={SocialComponent} initialParams={{ week: 22}}/>
    <Tab.Screen name={"23"} component={SocialComponent} initialParams={{ week: 23}}/>
    <Tab.Screen name={"24"} component={SocialComponent} initialParams={{ week: 24}}/>
    <Tab.Screen name={"25"} component={SocialComponent} initialParams={{ week: 25}}/>
    <Tab.Screen name={"26"} component={SocialComponent} initialParams={{ week: 26}}/>
    <Tab.Screen name={"27"} component={SocialComponent} initialParams={{ week: 27}}/>
    <Tab.Screen name={"28"} component={SocialComponent} initialParams={{ week: 28}}/>
    <Tab.Screen name={"29"} component={SocialComponent} initialParams={{ week: 29}}/>
    <Tab.Screen name={"30"} component={SocialComponent} initialParams={{ week: 30}}/>
    <Tab.Screen name={"31"} component={SocialComponent} initialParams={{ week: 31}}/>
    <Tab.Screen name={"32"} component={SocialComponent} initialParams={{ week: 32}}/>
    <Tab.Screen name={"33"} component={SocialComponent} initialParams={{ week: 33}}/>
    <Tab.Screen name={"34"} component={SocialComponent} initialParams={{ week: 34}}/>
    <Tab.Screen name={"35"} component={SocialComponent} initialParams={{ week: 35}}/>
    <Tab.Screen name={"36"} component={SocialComponent} initialParams={{ week: 36}}/>
    <Tab.Screen name={"37"} component={SocialComponent} initialParams={{ week: 37}}/>
    <Tab.Screen name={"38"} component={SocialComponent} initialParams={{ week: 38}}/>
    <Tab.Screen name={"39"} component={SocialComponent} initialParams={{ week: 39}}/>
    <Tab.Screen name={"40"} component={SocialComponent} initialParams={{ week: 40}}/>
    <Tab.Screen name={"41"} component={SocialComponent} initialParams={{ week: 41}}/>




	</Tab.Navigator>
  );
};




export default SocialNav;