import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosInstance from "../../config/axiosInterceptor";
import {SOCIAL_FAILED, SOCIAL_SUCCESS, SOCIAL_LOADING } from "../../constants/actions";



export default (week)=> (dispatch)  => {
        dispatch({
            type: SOCIAL_LOADING
        });
        const params = { week: week };
    axiosInstance.get("/social",  {params} ).then((res) => { // what is the correct path?
       
       
        var social = "social_"+week;
        
        
        AsyncStorage.setItem(social,JSON.stringify(res.data.Social));
        console.log("*************WEEK*********",week)
        console.log("social data retrieved- data:>>",res.data)

        dispatch({
            type: SOCIAL_SUCCESS,
            payload: res.data,
        });
        
    }).catch((err)=>{
        console.log('err',err);
        dispatch({
            type: SOCIAL_FAILED,
            payload:  err.response ?                                             
            err.response.data : {error:'Something went wrong. Try again'},
        });

    });

}
