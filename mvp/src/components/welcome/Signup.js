import React, { useState, useCallback, useContext} from 'react';
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
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { clearAuthState } from '../../context/actions/register';
import { GlobalContext } from '../../context/Provider';



const SignupComponent= ({
  onSubmit,
  onFormChange,
  form,
  errors,
  error,
  loading}) => {
  // vars for due date calculator overlay
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

  const navigate = useNavigation();
  const {authDispatch} = useContext(GlobalContext); 

	return (
   
			<WhiteContainer>
        <View style={styles.heading}>
    			<Bold style={styles.title}> Aprende. Conecta. Reutiliza.</Bold>
          <Light style={styles.subtitle}>¡Bienvenida a tu tribu!</Light>
  		  </View>

      <View >

        <View style={[{flexDirection:'row',justifyContent: 'space-between'}]}>
          <Input style={{marginEnd:'12%'}}
          placeholder="Nombre*   "
          onChangeText={(value)=>{onFormChange({name:"first_name",value})}}
          error={errors.first_name|| error?.error.first_name?.[0]}/>
          <Input style={{marginEnd:'20%'}} 
          placeholder="Apellido*  "
          onChangeText={(value)=>{onFormChange({name:"last_name",value})}}
          error={errors.last_name|| error?.error.last_name?.[0]}/>
        </View>

        <Input  placeholder="Email*"
        onChangeText={(value)=>{onFormChange({name:"email",value})}}
        error={errors.email|| error?.error.email?.[0]}/>
        <Input  placeholder="Celular*"
        onChangeText={(value)=>{onFormChange({name:"phone",value})}}
        error={errors.phone|| error?.error.phone?.[0]}/>
        <Input  placeholder="Crea tu contraseña*" secureTextEntry={true}
        onChangeText={(value)=>{onFormChange({name:"password",value})}}
        error={errors.password|| error?.error.password?.[0]}/>
        
        <TouchableOpacity onPress={showDatePicker}>
              {text ?  
              <Input editable={false} 
              placeholder="Fecha de Parto Estimada*"
              error={errors.due_date|| error?.error.due_date?.[0]}> 
              </Input>
              : 
              <Input editable={false} 
              error={errors.due_date|| error?.error.due_date?.[0]}>
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
      {error?.status_code>400 &&<Light style={{color:colors.tribu_pink,fontSize:12}}>*Error interno: por favor intenta de nuevo.*</Light>} 
      {error?.status_code<400 &&<Light style={{color:colors.tribu_pink,fontSize:12}}>*Error interno: por favor intenta de nuevo.*</Light>} 

        <CustomButton 
        loading={loading}
        title="Crear mi cuenta" 
        onPress={() => {
            onSubmit();
          }} gradient={true}/>
      </View>

        <View style={styles.footer}>
          <Light style={styles.lightText}>¿Ya tienes cuenta? </Light>
          <Link onPress={() => {
            clearAuthState()(authDispatch);
            navigate.navigate(LOGIN);
          }}>Inicia Sesión</Link>
        </View>
     </WhiteContainer>
   
	);
};



export default SignupComponent;

