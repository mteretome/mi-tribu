import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosInstance from "../../config/axiosInterceptor";
import { LOGIN_FAIL, LOGIN_LOADING, LOGIN_SUCCESS } from "../../constants/actions";



export default ({
    email,
    password,})=> (dispatch)  => (onSuccess) => {
        dispatch({
            type: LOGIN_LOADING
        });
    axiosInstance.post("/login",{
        email,
        password,
    }).then((res) => {
        AsyncStorage.setItem("user",JSON.stringify(res.data.user));
        AsyncStorage.setItem("current_week",JSON.stringify(res.data.current_week));
        AsyncStorage.setItem("week_dates",JSON.stringify(res.data.week_dates));
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        });
        console.log("success login - data:>>",res.data)
        onSuccess(res.data);
    }).catch((err)=>{
        console.log('err',err);
        dispatch({
            type: LOGIN_FAIL,
            payload: err.Error ? 
            err.Error : {error:'Something went wrong. Try again'},
        });

    });

}
