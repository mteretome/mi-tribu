import React, { useState, useCallback} from 'react';
import {Overlay } from 'react-native-elements';
import {View,TouchableOpacity} from 'react-native';
import colors from '../../assets/theme/colors';
import WhiteContainer from '../common/WhiteContainer';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import Link from '../common/Link';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import {LOGIN,CONGRATS} from '../../constants/routeNames';
import DuedateComponent from './Duedate';
import Icon from 'react-native-vector-icons/AntDesign';
import {Bold,Light} from '../common/Text';
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import DateTimePickerModal from "react-native-modal-datetime-picker";



const SignupComponent= () => {
  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => {setVisible(!visible);setText(false);};
  const navigate= useNavigation();
  const [date, setDate] = useState(new Date());
  const capitalize = require('lodash.capitalize');
  const textDate = capitalize(format(date,'MMMM d, yyyy', {locale: es}))

  const [show, setShow] = useState(false);
  const [text,setText] = useState(true);
  const showDatePicker = () => {
    setShow(!show);
  };
  const onChange = (value) => {
    setShow(false);
    setText(false);
    setDate(value); 
    
  };
  const getDate =(n) =>{
      var day = new Date().getDate();
      var month = new Date().getMonth();
      var year = new Date().getFullYear();
      if(n==1){
        return new Date();
      }
      else if(n==2){
        return new Date(year + 1, month, day);
      }
      else{
        return new Date(year, month-10, day-9);
      }
  };

   const parentSetter = useCallback(val => {
    setDate(val);
  }, [setDate]);

	return (
   
			<WhiteContainer>
        <View style={styles.heading}>
    			<Bold style={styles.title}> Aprende. Conecta. Reutiliza.</Bold>
          <Light style={styles.subtitle}>¡Bienvenida a tu tribu!</Light>
  		  </View>

      <View >
        <View style={[{flexDirection:'row', flex:1, alignItems: 'stretch'}]}>
          <Input placeholder="Nombre*   "/>
          <Input style={[{paddingEnd:'37%', marginLeft:10,}]} placeholder="Apellido*"/>
        </View>
        <Input  placeholder="Email*"/>
        <Input  placeholder="Celular*"/>
        <Input  placeholder="Crea tu contraseña*" secureTextEntry={true}/>
        
        <TouchableOpacity onPress={showDatePicker}>
              {text ?  <Input editable={false} placeholder="Fecha de Parto Estimada*"> 
              </Input>
              : 
              <Input editable={false}>
              {format(date,'dd/MM/yyyy')}</Input> }
              </TouchableOpacity>
               <DateTimePickerModal
                isVisible={show}
                date={date}
                onCancel={showDatePicker}
                onConfirm={onChange}
                maximumDate={getDate(1)}
                minimumDate={getDate(0)}
                mode="date"
                display="spinner"
              />


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
        <CustomButton title="Crear mi cuenta" 
        onPress={() => {
            navigate.navigate(CONGRATS, {dueDate: textDate});
          }} gradient={true}/>
      </View>

        <View style={styles.footer}>
          <Light style={styles.lightText}>¿Ya tienes cuenta? </Light>
          <Link onPress={() => {
            navigate.navigate(LOGIN)
          }}>Inicia Sesión</Link>
        </View>
     </WhiteContainer>
   
	);
};



export default SignupComponent;

