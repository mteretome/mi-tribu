import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import SignupComponent from '../../components/welcome/Signup';
import SignupWrapper from '../../components/wrappers/SignupWrapper';
import { CONGRATS } from '../../constants/routeNames';
import register, {clearAuthState} from '../../context/actions/register';
import {GlobalContext} from '../../context/Provider';

const SignupPage = () => {
  const navigate = useNavigation();

  //backend
  const {
    authDispatch,
    authState: {error,loading,data},
  } = useContext(GlobalContext); //error returned here are server errors

  
 

   //form validation
   const[form, setForm] = useState({});
   const[errors,setErrors] = useState({});
   
   const onChange = ({name,value}) =>{
     setForm({...form,[name]:value});

     if (value!==''){ 

       if (name==='password'){
         if(value.length<4){
            setErrors((prev)=>{
            return {...prev,[name]:"Contraseña muy corta."};
          });
         } else {
          setErrors((prev)=>{
            return {...prev,[name]:null};
          });

         }
       } else {
      setErrors((prev)=>{
        return {...prev,[name]:null};
        });
      }

      if (name==='due_date'){
        var today = new Date();
        if(value < today){
           setErrors((prev)=>{
           return {...prev,[name]:"Fecha de parto no puede estar en el pasado."};
         });
        } else {
         setErrors((prev)=>{
           return {...prev,[name]:null};
         });

        }
      } else {
     setErrors((prev)=>{
       return {...prev,[name]:null};
       });
     }


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
      if (!form.phone) {
        setErrors((prev)=>{
          return {...prev,phone:"Celular no puede estar vació."};
      });
    }
    if (!form.first_name) {
      setErrors((prev)=>{
        return {...prev,first_name:"Nombre no puede estar vació."};
      }); }
    if (!form.last_name) {
      setErrors((prev)=>{
        return {...prev,last_name:"Apellido no puede estar vació."};
      }); }
    if (!form.password) {
      setErrors((prev)=>{
        return {...prev,password:"Contraseña no puede estar vació."};
    });}
    if (!form.due_date) {
      setErrors((prev)=>{
        return {...prev,due_date:"Fecha de Parto Estimada no puede estar vació."};
    });}
 
     if(
     Object.values(form).length===6
     &&Object.values(errors).every((item)=>!item)
     //&&Object.values(error).every((item)=>!item)
     ){clearAuthState()(authDispatch);
       register(form)(authDispatch)((response)=>{
         navigate.navigate(CONGRATS,{data: response});
       });
       
      
      };
   };

  return (
    <SignupWrapper>
    <SignupComponent 
    onSubmit={onSubmit} 
    onFormChange={onChange}
    form={form}
    errors={errors}
    error={error}
    loading={loading}
    /> 
    </SignupWrapper>
  );
};

export default SignupPage;