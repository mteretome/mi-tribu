import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosInstance from "../../config/axiosInterceptor";
import {WEEK_FAILED, WEEK_LOADING, WEEK_SUCCESS } from "../../constants/actions";



export default (week)=> (dispatch)  => {
        dispatch({
            type: WEEK_LOADING
        });
        const params = { week: week };
    axiosInstance.get("/dashboard",  {params} ).then((res) => {
       
       
        var dashboard = "dashboard_"+week;
        var baby = "babystats_"+week;
 
        AsyncStorage.setItem(dashboard,JSON.stringify(res.data.Dashboard));
        AsyncStorage.setItem(baby,JSON.stringify(res.data.BabyStats));
        console.log("week info retrieved- data:>>",res.data)

        dispatch({
            type: WEEK_SUCCESS,
            payload: res.data,
        });
        
    }).catch((err)=>{
        console.log('err',err);
        dispatch({
            type: WEEK_FAILED,
            payload:  err.response ?                                             
            err.response.data : {error:'Something went wrong. Try again'},
        });

    });

}
