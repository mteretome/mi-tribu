import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosInstance from "../../config/axiosInterceptor";
import {SOCIAL_FAILED, SOCIAL_SUCCESS, SOCIAL_LOADING } from "../../constants/actions";



export default (week)=> (dispatch)  => {
        dispatch({
            type: SOCIAL_LOADING
        });
        const params = { week: week };
    axiosInstance.get("/social",  {params} ).then((res) => { 
       
        console.log("social data retrieved- data:>>",res.data);
       
        var tips = [res.data.Social.tip1,res.data.Social.tip2,res.data.Social.tip3,res.data.Social.tip4];
        var faqs = [res.data.Social["q&a1"],res.data.Social["q&a2"],res.data.Social["q&a3"],res.data.Social["q&a4"]];
        var survey = res.data.Social.encuesta;
        var surveyTitle = "survey_"+week;
        var faqTitle = "q&a_"+week;
        var tipTitle = "tip_"+week;
        
        console.log("tips ",tips);
        console.log("faqs ",faqs);
        console.log("survey ",survey);


        AsyncStorage.setItem(surveyTitle,JSON.stringify(survey));
        AsyncStorage.setItem(faqTitle,JSON.stringify(faqs));
        AsyncStorage.setItem(tipTitle,JSON.stringify(tips));



        // console.log("*************WEEK*********",week)
        // console.log("social data retrieved- data:>>",res.data)

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
