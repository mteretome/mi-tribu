import { CLEAR_AUTH_STATE, DASH_CLEAR,CLEAR_MODE, WELCOME_FAIL, WELCOME_LOADING, WELCOME_SUCCESS, WEEK_FAILED, WEEK_LOADING, WEEK_SUCCESS } from "../../constants/actions";

const auth = (state,{type,payload}) =>{
    switch(type) {
        case WELCOME_FAIL:
            return{
                ...state,
                loading:false,
                error: {'error':'Porfavor trata otra vez!'}
            };
        case WELCOME_LOADING:
            return{
                ...state,
                loading:true,
            };

        case WELCOME_SUCCESS:
            return{
                ...state,
                loading:false,
                isLoggedIn: false,
            };  
            case DASH_CLEAR:
                return{
                    ...state,
                    loading:false,
                    isLoggedIn: true,
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
        default:
            return state;

        
    }
};
export default auth;
