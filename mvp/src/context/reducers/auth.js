import { CLEAR_AUTH_STATE, CLEAR_MODE, LOGIN_FAIL, LOGIN_LOADING, LOGIN_SUCCESS, ONBOARD_COMPLETE, REGISTER_FAIL, REGISTER_LOADING, REGISTER_SUCCESS, WEEK_FAILED, WEEK_LOADING, WEEK_SUCCESS, SOCIAL_FAILED, SOCIAL_LOADING, SOCIAL_SUCCESS } from "../../constants/actions";

const auth = (state,{type,payload}) =>{
    switch(type) {
        case ONBOARD_COMPLETE:
            return{
                ...state,
                onboarding:true,
            };
        case LOGIN_LOADING:
            return{
                ...state,
                loading:true,
            };
        case REGISTER_LOADING:
            return{
                ...state,
                loading:true,
            };
        case LOGIN_SUCCESS:
            return{
                ...state,
                loading:false,
                data:payload,
                isLoggedIn: true,
            };  
        case REGISTER_SUCCESS:
            return{
                ...state,
                loading:false,
                data:payload,
                isLoggedIn: false,
            };  
        case REGISTER_FAIL:
            return{
                ...state,
                loading:false,
                error:payload,
            };
        case LOGIN_FAIL:
                return{
                    ...state,
                    loading:false,
                    error:payload,
                };
        case CLEAR_AUTH_STATE:
            return {
                ...state,
                loading:false,
                error:null,
            }
        case CLEAR_MODE:
            return{
                ...state,
                developerMode:false,
            }
            case WEEK_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    error: null,
                };  
            case WEEK_FAILED:
                return{
                    ...state,
                    loading:false,
                    error: payload,
                };
                case WEEK_LOADING:
                    return{
                        ...state,
                        loading:true,
                    };
                case SOCIAL_SUCCESS:
                    return{
                        ...state,
                        loading:false,
                        error: null,
                    };  
                case SOCIAL_FAILED:
                    return{
                        ...state,
                        loading:false,
                        error: payload,
                    };
                case SOCIAL_LOADING:
                    return{
                        ...state,
                        loading:true,
                    };
        default:
            return state;

        
    }
};
export default auth;
