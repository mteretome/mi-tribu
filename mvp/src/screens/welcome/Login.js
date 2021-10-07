import React,{useContext, useRef, useState} from 'react';
import Swiper from 'react-native-swiper';
import { ActivityIndicator } from "react-native";
import LoginComponent from '../../components/welcome/Login';
import NewComponent from '../../components/welcome/New';
import ForgotComponent from '../../components/welcome/Forgot';
import RecoverComponent from '../../components/welcome/Recover';
import NoScrollContainer from '../../components/common/NoScrollContainer';

import { TouchableOpacity } from 'react-native'; //revise
import Icon from 'react-native-vector-icons/Ionicons'; //revisse
import colors from '../../assets/theme/colors'; //revise

import { GlobalContext } from '../../context/Provider';
import LoginWrapper from '../../components/wrappers/LoginWrapper';
import { useFocusEffect, useNavigation } from '@react-navigation/core';
import login from '../../context/actions/login';
import { clearAuthState } from '../../context/actions/register';

const LogInPage = () => {

	const [index,setIndex] = useState(0); //why did i delete this?

	const swiper = useRef(null);
	const swipe =(n) =>{
    if (swiper) swiper.current.scrollBy(n || 1) };

	const navigate = useNavigation();
	const[form, setForm] = useState({});
	const[errors,setErrors] = useState({});

	const {
		authDispatch,
		authState: {error,loading,data},
	  } = useContext(GlobalContext); 

	  useFocusEffect(
		React.useCallback(()=>{
	
		  return () =>{
		  if(data || error ){
			clearAuthState()(authDispatch);
		  }
		};
		},[data,error]),
	  );
	
	const onChange = ({name,value}) =>{
	  setForm({...form,[name]:value});
	  if (name==="email"){
		setForm({...form,[name]:value.trim()});
	  };
 
	  if (value!==''){
 
	   setErrors((prev)=>{
		 return {...prev,[name]:null};
		 });

	  } else {
	   setErrors((prev)=>{
		 return {...prev,[name]:"Porfavor contestar completamente."};
	   });
	  }
 
	};
	
 
	const onSubmit = () => {
	  //validations
	  if (!form.email) {
		setErrors((prev)=>{
		  return {...prev,email:"Correo electrónico no puede estar vació."};
		}); 
	   }
	 if (!form.password) {
	   setErrors((prev)=>{
		 return {...prev,password:"Contraseña no puede estar vació."}; 
	 });}   

	 if(
		form.password && form.email 
		&&Object.values(errors).every((item)=>!item))
		{
		  console.log('successsful validation');
		  console.log("form:>>",form);
		  login(form)(authDispatch)((response)=>{
			navigate.navigate('Dashboard',{data: response});
		  });

		  
   
		  
		};
	};
	
	return (
	<LoginWrapper>
			<NoScrollContainer>

			{index>0 &&
			<TouchableOpacity style={{alignSelf:"flex-start", position:'absolute',top:40,left:30}} 
          	onPress={() => {swipe(-1);}}>
          	<Icon name="arrow-back" size={25} color={colors.grey_lightest} />
        	</TouchableOpacity> } 
			{/* ^^^ this was also deleted */}
			 
			<Swiper 
	         ref={swiper}
	         showsButtons={false} loop={true}
	         scrollEnabled={false}
	         showsPagination={false}
	         loadMinimal={true}
	         loadMinimalLoader={<ActivityIndicator size="large" color="#359D9E"/>}
			 onIndexChanged={(index) => {setIndex(index);}}					
	         >

	         <LoginComponent swipe={swipe}
			 onSubmit={onSubmit} 
    		onFormChange={onChange}
    		form={form}
    		errors={errors}
    		error={error}
   			loading={loading}/>
	         <ForgotComponent  swipe={swipe}/>
	         <RecoverComponent swipe={swipe}/>
	         <NewComponent swipe={swipe}/>


	        </Swiper>
	        </NoScrollContainer>
		
	</LoginWrapper>
	);
};


export default LogInPage;