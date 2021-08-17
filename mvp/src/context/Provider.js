import React, {createContext, useReducer} from 'react';
import auth from './reducers/auth';


const GlobalContext = createContext();

const GlobalProvider=({children})=>{

    const [authState,authDispatch] = useReducer(auth,authState)
    return <GlobalContext.Provider 
    value={{authState,authDispatch,}}
    >{children}</GlobalContext.Provider>
};

export default GlobalProvider;
// wrap app.js in this