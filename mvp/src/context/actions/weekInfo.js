import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosInstance from "../../config/axiosInterceptor";
import {WEEK_FAILED, WEEK_LOADING, WEEK_SUCCESS } from "../../constants/actions";



export default (week)=> (dispatch)  => {
        dispatch({
            type: WEEK_LOADING
        });
        const params = { week:week};
        console.log("request sent  DASHBOARD ", params);

    axiosInstance.get("/dashboard",  {params} ).then((res) => {
       console.log("request success DASHBOARD ", week);
        var bebe = "bebe_"+week;
        var cuerpo = "cuerpo_"+week;
        var sintomas = "sintomas_"+week;

        var fruit = "fruit_"+week;
        var unit = "unit_"+week;
        var weight = "weight_"+week;
        var length = "length_"+week;
   
 
        AsyncStorage.setItem(bebe,JSON.stringify(res.data.Dashboard.bebe));
        AsyncStorage.setItem(cuerpo,JSON.stringify(res.data.Dashboard.cuerpo));
        AsyncStorage.setItem(sintomas,JSON.stringify(res.data.Dashboard.sintomas));

        AsyncStorage.setItem(fruit,JSON.stringify(res.data.BabyStats[4]));
        AsyncStorage.setItem(unit,JSON.stringify(res.data.BabyStats[3]));
        AsyncStorage.setItem(length,JSON.stringify(res.data.BabyStats[1]));
        AsyncStorage.setItem(weight,JSON.stringify(res.data.BabyStats[2]));

        // console.log("week info retrieved- data:>>",res.data)

        dispatch({
            type: WEEK_SUCCESS,
            payload: res.data,
        });
        
    }).catch((err)=>{
        console.log("request fail DASHBOARD ", week);

        console.log('err',err);

        dispatch({
            type: WEEK_FAILED,
            payload:  err.response ?                                             
            err.response.data : {error:'Something went wrong. Try again'},
        });

    });

}
