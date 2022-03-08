import React,{useContext, useRef, useState} from 'react';
import LoginComponent from '../../components/welcome/Login';
import WhiteContainer from '../../components/common/WhiteContainer';



import SignupWrapper from '../../components/wrappers/SignupWrapper';
import { clearAuthState, welcome } from '../../context/actions/welcome';
import { GlobalContext } from '../../context/Provider';
import { CONGRATS } from '../../constants/routeNames';
import { useNavigation } from '@react-navigation/core';

const LogInPage = () => {
	const navigate= useNavigation();
	const[form, setForm] = useState({});
	const[errors,setErrors] = useState({});

	const {
		authDispatch,
		authState: {error,loading,data},
	  } = useContext(GlobalContext); 

	
	const onChange = ({name,value}) =>{
	  setForm({...form,[name]:value});
	  if (name==="name"){
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
	  if (!form.name) {
		setErrors((prev)=>{
		  return {...prev,name:"Nombre no puede estar vació."};
		}); 
	   }
	 if (!form.due_date) {
	   setErrors((prev)=>{
		 return {...prev,due_date:"Fecha de parto no puede estar vació."}; 
	 });}   

	 if(
		form.due_date && form.name 
		&&Object.values(errors).every((item)=>!item))
		{
		  clearAuthState()(authDispatch);
		//   console.log('successsful validation');
		//   console.log("form:>>",form.name);
		  welcome(form)(authDispatch)((response) => {
			navigate.navigate(CONGRATS, {data: response});
		  });
		};
	};


	return (
	<SignupWrapper>
			<WhiteContainer>
	         <LoginComponent 
			 onSubmit={onSubmit} 
    		onFormChange={onChange}
    		form={form}
    		errors={errors}
   			loading={loading}
			   />
	    

	      
	        </WhiteContainer>
		
	</SignupWrapper>
	);
};


export default LogInPage;