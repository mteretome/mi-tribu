import React, { useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import AsyncStorage from '@react-native-async-storage/async-storage';

import { WEEK_NUMBERS } from '../constants/routeNames';
import PregnancyComponent from '../components/dashboard/Pregnancy';





const PregDashNav = () => {
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
   console.log(week);
 }, []);

	return (

    <Tab.Navigator tabBar={() => null} initialRouteName={week}  backBehavior='none' screenOptions={{
     lazy:true,
     lazyPreloadDistance:2,
    }}>
  
    <Tab.Screen name={"5"} component={PregnancyComponent} initialParams={{ week: 5}}/>
    <Tab.Screen name={"6"} component={PregnancyComponent} initialParams={{ week: 6}}/>
     <Tab.Screen name={"7"} component={PregnancyComponent} initialParams={{ week: 7}}/>
    <Tab.Screen name={"8"} component={PregnancyComponent} initialParams={{ week: 8}}/>
    <Tab.Screen name={"9"} component={PregnancyComponent} initialParams={{ week: 9}}/>
    <Tab.Screen name={"10"} component={PregnancyComponent} initialParams={{ week: 10}}/>
    <Tab.Screen name={"11"} component={PregnancyComponent} initialParams={{ week: 11}}/>
    <Tab.Screen name={"12"} component={PregnancyComponent} initialParams={{ week: 12}}/>
    <Tab.Screen name={"13"} component={PregnancyComponent} initialParams={{ week: 13}}/>
    <Tab.Screen name={"14"} component={PregnancyComponent} initialParams={{ week: 14}}/>
    <Tab.Screen name={"15"} component={PregnancyComponent} initialParams={{ week: 15}}/>
    <Tab.Screen name={"16"} component={PregnancyComponent} initialParams={{ week: 16}}/>
    <Tab.Screen name={"17"} component={PregnancyComponent} initialParams={{ week: 17}}/>
    <Tab.Screen name={"18"} component={PregnancyComponent} initialParams={{ week: 18}}/>
    <Tab.Screen name={"19"} component={PregnancyComponent} initialParams={{ week: 19}}/>
    <Tab.Screen name={"20"} component={PregnancyComponent} initialParams={{ week: 20}}/>
    <Tab.Screen name={"21"} component={PregnancyComponent} initialParams={{ week: 21}}/>
    <Tab.Screen name={"22"} component={PregnancyComponent} initialParams={{ week: 22}}/>
    <Tab.Screen name={"23"} component={PregnancyComponent} initialParams={{ week: 23}}/>
    <Tab.Screen name={"24"} component={PregnancyComponent} initialParams={{ week: 24}}/>
    <Tab.Screen name={"25"} component={PregnancyComponent} initialParams={{ week: 25}}/>
    <Tab.Screen name={"26"} component={PregnancyComponent} initialParams={{ week: 26}}/>
    <Tab.Screen name={"27"} component={PregnancyComponent} initialParams={{ week: 27}}/>
    <Tab.Screen name={"28"} component={PregnancyComponent} initialParams={{ week: 28}}/>
    <Tab.Screen name={"29"} component={PregnancyComponent} initialParams={{ week: 29}}/>
    <Tab.Screen name={"30"} component={PregnancyComponent} initialParams={{ week: 30}}/>
    <Tab.Screen name={"31"} component={PregnancyComponent} initialParams={{ week: 31}}/>
    <Tab.Screen name={"32"} component={PregnancyComponent} initialParams={{ week: 32}}/>
    <Tab.Screen name={"33"} component={PregnancyComponent} initialParams={{ week: 33}}/>
    <Tab.Screen name={"34"} component={PregnancyComponent} initialParams={{ week: 34}}/>
    <Tab.Screen name={"35"} component={PregnancyComponent} initialParams={{ week: 35}}/>
    <Tab.Screen name={"36"} component={PregnancyComponent} initialParams={{ week: 36}}/>
    <Tab.Screen name={"37"} component={PregnancyComponent} initialParams={{ week: 37}}/>
    <Tab.Screen name={"38"} component={PregnancyComponent} initialParams={{ week: 38}}/>
    <Tab.Screen name={"39"} component={PregnancyComponent} initialParams={{ week: 39}}/>
    <Tab.Screen name={"40"} component={PregnancyComponent} initialParams={{ week: 40}}/>
    <Tab.Screen name={"41"} component={PregnancyComponent} initialParams={{ week: 41}}/>




	</Tab.Navigator>
  );
};




export default PregDashNav;