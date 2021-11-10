import React, { useCallback, useContext, useState } from 'react';
import colors from '../../assets/theme/colors';
import Input from '../common/Input';

import CustomButton from '../common/CustomButton';
import Link from '../common/Link';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import {SIGNUP} from '../../constants/routeNames'; 
import {Bold,Light} from '../common/Text';
import { clearAuthState } from '../../context/actions/welcome';
import { GlobalContext } from '../../context/Provider';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import {Overlay } from 'react-native-elements';
import {View,TouchableOpacity} from 'react-native';
import {CONGRATS} from '../../constants/routeNames';
import DuedateComponent from './Duedate';
import Icon from 'react-native-vector-icons/AntDesign';
import { format } from 'date-fns'



const LoginComponent= ({
  onSubmit,
  onFormChange,
  errors,
  loading}) => {
  const navigate= useNavigation();
  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => {setVisible(!visible);setText(false);};
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [text,setText] = useState(true);
  const showDatePicker = () => {
    setShow(!show);
  };
  const onChange = (value) => {
    setShow(false);
    setText(false);
    setDate(value); 
    onFormChange({name:"due_date",value: format(value,'yyyy-MM-dd')});  
  };
  
  const getDate =(n) =>{
      var day = new Date().getDate();
      var month = new Date().getMonth();
      var year = new Date().getFullYear();
      if(n==1){
        return new Date();
      }
      else if(n==2){
        return new Date(year, month+9, day);
      }
      else{
        return new Date(year, month, day);
      }
  };

   const parentSetter = useCallback(val => {
    setDate(val);
    onFormChange({name:"due_date",value: format(val,'yyyy-MM-dd')});


  }, [setDate]);

  
	return (

<View >
		
        <View style={styles.heading}>
    			<Bold style={styles.title}>¡Bienvenida!</Bold>
          <Light style={styles.subtitle}>Necesitamos tu informacion para proceder.</Light>
  		  </View>

      <View style={styles.inputContainer}>
        <Input placeholder="Nombre*"
        onChangeText={(value)=>{onFormChange({name:"name",value})}}
        error={errors.name}/>
         
         <TouchableOpacity onPress={showDatePicker}>
              {text ?  
              <Input editable={false} 
              placeholder="Fecha de Parto Estimada*"
              error={errors.due_date}> 
              </Input>
              : 
              <Input editable={false} 
              error={errors.due_date}>
              {format(date,'dd/MM/yyyy')}</Input> }
              </TouchableOpacity>
               <DateTimePickerModal
                isVisible={show}
                date={date}
                onCancel={showDatePicker}
                onConfirm={onChange}
                maximumDate={getDate(2)}
                minimumDate={getDate(0)}
                mode="date"
                display="spinner"
              />

        {/*  footer   */}
        <View style={styles.footer}>
        <Icon name="infocirlceo" size={15} color={colors.grey_dark} style={{marginTop:3}}/>
          <Light style={styles.lightText}>  ¿No conoces tu fecha de parto? </Light>
          
          <Link  onPress={toggleOverlay} >Calcúlala</Link>
            <Overlay  
              overlayStyle={styles.overlay} 
              animationType="fade" 
              isVisible={visible} 
              backdropStyle={styles.backdrop}>
             <DuedateComponent toggleOverlay={toggleOverlay} parentSet={parentSetter}/>
            </Overlay>
        </View>
        
        <CustomButton 
        loading={loading}
        onPress={() => {
            onSubmit();
          }}
        title="Comenzar" gradient={true}/>
      </View>

        <View style={styles.footer}>
         
         
      </View>
	
    </View>
	);
};



export default LoginComponent;

