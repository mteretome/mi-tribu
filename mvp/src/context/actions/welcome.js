import axiosInstance from "../../config/axiosInterceptor";
import { CLEAR_AUTH_STATE,CLEAR_MODE,DASH_CLEAR,WELCOME_SUCCESS } from "../../constants/actions";
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
//import { extendMoment } from 'moment-range';





export const clearAuthState =()=> dispatch=> {
    dispatch({
        type: CLEAR_AUTH_STATE,
    });
};

export const clearMode =()=> dispatch=> {
    dispatch({
        type: CLEAR_MODE,
    });
};

export const dashboardClear =()=> dispatch=> {
    dispatch({
        type: DASH_CLEAR,
    });
};

export const welcome =({name, due_date})=> (dispatch)=> (onSucces)=> {
    //calculate week date if successful

    const today = new Date();
    const period_date = moment(due_date).add(-280, 'day').format('YYYY-MM-DD');
    var difference = new Date(today).getTime() - new Date(period_date).getTime();  
    var difference_in_days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const current_week = Math.floor(difference_in_days/7);
    const day = difference_in_days%7;

    const week_dates = {};

    var week = 42;
    var offset = 14;
    while(week > 4){
        week_dates[week] = moment(due_date).add(offset, 'day').format('YYYY-MM-DD');
        // console.log(week_dates[week])
        offset = offset -7;
        week = week -1;
    }
    
    // console.log("The last period is -->", period_date);
    // console.log("The current week is  -->", current_week);
    // console.log("The day in the current week is -->", day);

    //success
    //else fail
    dispatch({
        type: WELCOME_SUCCESS,
    });
    AsyncStorage.setItem("user",name);
    AsyncStorage.setItem("due_date",due_date);

    AsyncStorage.setItem("week_dates",JSON.stringify(week_dates));
    AsyncStorage.setItem("day",JSON.stringify(day));
    AsyncStorage.setItem("current_week",JSON.stringify(current_week));
    onSucces({name,due_date,week_dates,day,current_week});

  
};


