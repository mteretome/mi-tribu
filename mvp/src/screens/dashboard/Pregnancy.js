import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useEffect } from 'react';
import WeekSwiper from '../../components/dashboard/WeekSwiper';
import { WEEK_NUMBERS } from '../../constants/routeNames';
import weekInfo from '../../context/actions/weekInfo';
import { GlobalContext } from '../../context/Provider';

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
    return JSON.parse(current);

};

const Pregnacy = () => {
  const {
    authDispatch,
    } = useContext(GlobalContext); 

  
  const [userName, setUserName] = React.useState(null);
  const [week, setWeek] = React.useState(null);
  const getUser = async () => {
        
    const userString = await AsyncStorage.getItem('user');
    const weeksRaw = await AsyncStorage.getItem('week_dates');
   
    
    if(userString){
        setUserName(JSON.parse(userString).first_name);
    }
    if(weeksRaw){
      setWeek(getCurrent(JSON.parse(weeksRaw)));
      AsyncStorage.setItem("current_week",JSON.stringify(week));
      console.log("week", week);
    }

};
useEffect(() => {
  getUser();
  weekInfo(week)(authDispatch);
}, []);

  

    return (
      <WeekSwiper name={userName} week={week}/>

    );
  };


export default Pregnacy;


