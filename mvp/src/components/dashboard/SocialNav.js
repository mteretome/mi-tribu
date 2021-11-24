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
  

  
  const [route, setRoute] = React.useState("5S");
  const [week, setWeek] = React.useState(null);
  const getUser = async () => {
        
    const weeksRaw = await AsyncStorage.getItem('week_dates');
    const current = await AsyncStorage.getItem("current_week");
   
    
    
    if(weeksRaw){
      setWeek(getCurrent(JSON.parse(weeksRaw)));
      if(current<week){
        const diff = week-current;
        const current = current+diff;
        setWeek(current); 
        AsyncStorage.setItem("current_week",JSON.stringify(week));
        setRoute(JSON.stringify(week)+"S");
      }
     

    }

};

 useEffect(() => {
   getUser();
 }, []);
	return (

    <Tab.Navigator tabBar={() => null} initialRouteName={route} backBehavior='none' screenOptions={{
     lazy:true,
     lazyPreloadDistance:2,
     swipeEnabled:false
    }}>
  
    <Tab.Screen name={"5S"} component={SocialComponent} initialParams={{ week: 5}}/>
    <Tab.Screen name={"6S"} component={SocialComponent} initialParams={{ week: 6}}/>
     <Tab.Screen name={"7S"} component={SocialComponent} initialParams={{ week: 7}}/>
    <Tab.Screen name={"8S"} component={SocialComponent} initialParams={{ week: 8}}/>
    <Tab.Screen name={"9S"} component={SocialComponent} initialParams={{ week: 9}}/>
    <Tab.Screen name={"10S"} component={SocialComponent} initialParams={{ week: 10}}/>
    <Tab.Screen name={"11S"} component={SocialComponent} initialParams={{ week: 11}}/>
    <Tab.Screen name={"12S"} component={SocialComponent} initialParams={{ week: 12}}/>
    <Tab.Screen name={"13S"} component={SocialComponent} initialParams={{ week: 13}}/>
    <Tab.Screen name={"14S"} component={SocialComponent} initialParams={{ week: 14}}/>
    <Tab.Screen name={"15S"} component={SocialComponent} initialParams={{ week: 15}}/>
    <Tab.Screen name={"16S"} component={SocialComponent} initialParams={{ week: 16}}/>
    <Tab.Screen name={"17S"} component={SocialComponent} initialParams={{ week: 17}}/>
    <Tab.Screen name={"18S"} component={SocialComponent} initialParams={{ week: 18}}/>
    <Tab.Screen name={"19S"} component={SocialComponent} initialParams={{ week: 19}}/>
    <Tab.Screen name={"20S"} component={SocialComponent} initialParams={{ week: 20}}/>
    <Tab.Screen name={"21S"} component={SocialComponent} initialParams={{ week: 21}}/>
    <Tab.Screen name={"22S"} component={SocialComponent} initialParams={{ week: 22}}/>
    <Tab.Screen name={"23S"} component={SocialComponent} initialParams={{ week: 23}}/>
    <Tab.Screen name={"24S"} component={SocialComponent} initialParams={{ week: 24}}/>
    <Tab.Screen name={"25S"} component={SocialComponent} initialParams={{ week: 25}}/>
    <Tab.Screen name={"26S"} component={SocialComponent} initialParams={{ week: 26}}/>
    <Tab.Screen name={"27S"} component={SocialComponent} initialParams={{ week: 27}}/>
    <Tab.Screen name={"28S"} component={SocialComponent} initialParams={{ week: 28}}/>
    <Tab.Screen name={"29S"} component={SocialComponent} initialParams={{ week: 29}}/>
    <Tab.Screen name={"30S"} component={SocialComponent} initialParams={{ week: 30}}/>
    <Tab.Screen name={"31S"} component={SocialComponent} initialParams={{ week: 31}}/>
    <Tab.Screen name={"32S"} component={SocialComponent} initialParams={{ week: 32}}/>
    <Tab.Screen name={"33S"} component={SocialComponent} initialParams={{ week: 33}}/>
    <Tab.Screen name={"34S"} component={SocialComponent} initialParams={{ week: 34}}/>
    <Tab.Screen name={"35S"} component={SocialComponent} initialParams={{ week: 35}}/>
    <Tab.Screen name={"36S"} component={SocialComponent} initialParams={{ week: 36}}/>
    <Tab.Screen name={"37S"} component={SocialComponent} initialParams={{ week: 37}}/>
    <Tab.Screen name={"38S"} component={SocialComponent} initialParams={{ week: 38}}/>
    <Tab.Screen name={"39S"} component={SocialComponent} initialParams={{ week: 39}}/>
    <Tab.Screen name={"40S"} component={SocialComponent} initialParams={{ week: 40}}/>
    <Tab.Screen name={"41S"} component={SocialComponent} initialParams={{ week: 41}}/>




	</Tab.Navigator>
  );
};




export default SocialNav;