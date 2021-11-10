import axiosInstance from "../../config/axiosInterceptor";
import { CLEAR_AUTH_STATE,CLEAR_MODE,DASH_CLEAR,WELCOME_SUCCESS } from "../../constants/actions";
import AsyncStorage from '@react-native-async-storage/async-storage';
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
    const week_dates = {"5":"dummy dates", "6":"dummy"};
    const day = 7;
    const current_week = 8;
    
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
