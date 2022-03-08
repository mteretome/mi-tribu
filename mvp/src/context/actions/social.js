import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosInstance from "../../config/axiosInterceptor";
import {SOCIAL_FAILED, SOCIAL_SUCCESS, SOCIAL_LOADING } from "../../constants/actions";



export default (week)=> (dispatch)  => {
        dispatch({
            type: SOCIAL_LOADING
        });
        const params = { week: week};
        console.log("request sent  SOCIAL ", params);

        axiosInstance.get("/social",  {params} ).then((res) => { 
        console.log("request  success SOCIAL", week)
       
        // console.log("social data retrieved- data:>>",res.data);
       

        var surveyTitle = "survey_"+week;
        AsyncStorage.setItem(surveyTitle,res.data.Social.encuesta);

        var q1 = "q1_"+week;
        AsyncStorage.setItem(q1,res.data.Social["q1"]);

        var a1 = "a1_"+week;
        AsyncStorage.setItem(a1,res.data.Social["a1"]);

        var q2 = "q2_"+week;
        AsyncStorage.setItem(q2,res.data.Social["q2"]);

        var a2 = "a2_"+week;
        AsyncStorage.setItem(a2,res.data.Social["a2"]);

        var q3 = "q3_"+week;
        AsyncStorage.setItem(q3,res.data.Social["q3"]);

        var a3 = "a3_"+week;
        AsyncStorage.setItem(a3,res.data.Social["a3"]);

        var q4 = "q4_"+week;
        AsyncStorage.setItem(q4,res.data.Social["q4"]);

        var a4 = "a4_"+week;
        AsyncStorage.setItem(a4,res.data.Social["a4"]);

        var t1 = "tip1_"+week;
        AsyncStorage.setItem(t1,res.data.Social.tip1);

        var t2 = "tip2_"+week;
        AsyncStorage.setItem(t2,res.data.Social.tip2);

        var t3 = "tip3_"+week;
        AsyncStorage.setItem(t3,res.data.Social.tip3);
        
        var t4 = "tip4_"+week;
        AsyncStorage.setItem(t4,res.data.Social.tip4);

        var iconsT = "tipIcons_"+week;
        AsyncStorage.setItem(iconsT,JSON.stringify(res.data.Social.tip_icons));

        var iconsQ = "questionIcons_"+week;
        AsyncStorage.setItem(iconsQ,JSON.stringify(res.data.Social.question_icons));
       

        dispatch({
            type: SOCIAL_SUCCESS,
            payload: res.data,
        });
        
    }).catch((err)=>{
        console.log("request fail SOCIAL", week)

        console.log('err',err);
        dispatch({
            type: SOCIAL_FAILED,
            payload:  err.response ?                                             
            err.response.data : {error:'Something went wrong. Try again'},
        });

    });

}
