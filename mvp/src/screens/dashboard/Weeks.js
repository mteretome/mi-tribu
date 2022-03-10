import AsyncStorage from '@react-native-async-storage/async-storage';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { capitalize } from 'lodash';
import React, { useEffect, useState } from 'react';
import WeekList from '../../components/dashboard/WeekList';
import { WEEK_NUMBERS } from '../../constants/routeNames';




const Weeks = () => {
  const [weeks,setWeeks] = useState(null);
  const getList = async () => {
    var dates = await AsyncStorage.getItem("week_dates");
    var current = await AsyncStorage.getItem("current_week");
    const WEEKS = [];
    if(dates&&current){
        dates = JSON.parse(dates);
        var i = 0, len = WEEK_NUMBERS.length;
        var currentBool= false;
        current = JSON.parse(current);
        var green = false;
          while (i < len) {
            
            var index = WEEK_NUMBERS[i];
            if(current<=JSON.parse(index)){
              green=true;
            }
            if (current==JSON.parse(index)){
              currentBool=true;
            }
          
            var date1 = new Date(dates[index]);
            var day2 = format(date1, 'd', { locale: es });
            var string1 = date1.getDate() + " de " + capitalize(format(date1, 'MMM.', { locale: es }))
            var date2 = new Date(date1.getYear(), date1.getMonth(),date1.getDate()+7);
            var string2 = capitalize(format(date2, 'd', { locale: es }))  + " de " + capitalize(format(date2, 'MMM.', { locale: es }))
            WEEKS.push({
              id: index,
              dates:  string1 + " - " + string2,
              active: green,
              current: currentBool,
            });
            i++;
            
          }
    }
    // setWeeks(WEEKS.reverse());
    setWeeks(WEEKS);


};
  useEffect(() => {
    getList();
  }, []);


    return (
      <WeekList weeks={weeks}/>

    );
  };


export default Weeks;


