import axiosInstance from "../../config/axiosInterceptor";
import { CLEAR_AUTH_STATE,CLEAR_MODE,ONBOARD_COMPLETE,REGISTER_FAIL, REGISTER_LOADING, REGISTER_SUCCESS } from "../../constants/actions";
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

export const onboardComplete =()=> dispatch=> {
    dispatch({
        type: ONBOARD_COMPLETE,
    });
};


export default ({
    first_name,
    last_name,
    email,
    phone,
    password,
    due_date})=> (dispatch) => (onSuccess) => {
        dispatch({
            type: REGISTER_LOADING,
        });
    axiosInstance.post("/register",{
        first_name,
        last_name,
        email,
        phone,
        password,
        due_date,
    }).then((res) => {
        AsyncStorage.setItem("user",JSON.stringify(res.data.user));
        AsyncStorage.setItem("week_dates",JSON.stringify(res.data.week_dates));
        AsyncStorage.setItem("day",JSON.stringify(res.data.day));
        AsyncStorage.setItem("current_week",JSON.stringify(res.data.current_week));


        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data,
        });
       console.log("success register - data:>>",res.data)
       onSuccess(res.data);
    }).catch((err)=>{
        console.log('err', err.response.data);
        dispatch({
            type: REGISTER_FAIL,
            payload: {'status_code': err.response.status, 'error' : err.response.data},
        });
    });

};
