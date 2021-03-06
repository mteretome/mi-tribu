import React, {useState,useRef,useEffect} from 'react';
import {View,TouchableOpacity,Dimensions} from 'react-native';
import colors from '../../assets/theme/colors';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import styles from './styles'
import Icon from 'react-native-vector-icons/Feather';
import Blob from '../../assets/images/svg/congrats.svg';
import {Bold,Regular,ExtraBold} from '../common/Text';
import InputSpinner from "react-native-input-spinner";
import Swiper from 'react-native-swiper';
import { format, addDays } from 'date-fns'
import { es } from 'date-fns/locale'
import DateTimePickerModal from "react-native-modal-datetime-picker";




const DuedateComponent= ({toggleOverlay,duedate, parentSet}) => {
  const capitalize = require('lodash.capitalize');
  const { height, width } = Dimensions.get('window');
  const swiper = useRef(null);
  const swipe =(n) =>{
    if (swiper) swiper.current.scrollBy(n || 1)
    };
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());
  const [cycle, setCycle] = useState(28);

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
  
  const getDueDate = () => {
    var days =  280 + (28 - cycle);
    setDate(addDays(date,days));

  };
  const showDatePicker = () => {
    setShow(!show);
  };
  const onChange = (value) => {
    setShow(false);
    setDate(value);
    
  };
  
  useEffect(() => {
    parentSet(date);
  }, [parentSet, date]);

  const BeforeCalc= () => {
      return (  
          <View>
             <View style={styles.heading}>
              <Bold style={{color: colors.tribu_green, fontSize:24,}}>
              Calculadora de fecha de parto</Bold>
             
          </View>
            <View style={{marginHorizontal:20}}>
             <Regular style={styles.lightText}>??Cu??ndo fue el primer d??a de tu ??ltimo per??odo?</Regular>
              <TouchableOpacity onPress={showDatePicker}>
              <Input editable={false} style={{textAlign:'center'}}>
              {format(date,'dd/MM/yyyy')}</Input>
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
              
              
              <Regular style={styles.lightText}>Duracion habitual de tu ciclo:</Regular>
             <InputSpinner
              max={40}
              min={20}
              textColor={colors.grey_light}
              fontFamily='Montserrat-Light'
              color={colors.white}
              background={colors.white}
              buttonPressTextColor={colors.tribu_blue}
              buttonTextStyle={{color: colors.grey_light }}
              buttonStyle={{borderRadius:10}}
              continuity ={true}
              value={cycle}
              buttonTextColor={colors.tribu_green}
              rounded={true}
              onChange={(num) => {
              setCycle(num);
              }}
              
              />
              <CustomButton style={{marginTop:10}} 
              onPress={() => {swipe(1);getDueDate();}}
            
              title="Calcular" gradient={true}/>
            </View>
          </View>
      );
  };

 const AfterCalc= () => {
      return (  
          <View>
           <View style={styles.heading}>
             <View style={{marginVertical:20, alignItems:'center'}}>
              <Blob style={{position:'absolute', bottom:-60}}/>
              <Bold style={{marginBottom:20,color: colors.tribu_green, fontSize:24}}>
              Tu fecha estimada de parto* es</Bold>
              <ExtraBold style={{marginBottom:20,color: colors.tribu_green, fontSize:36}}>
              {capitalize(format(date,'MMMM d, yyyy', {locale: es}))}</ExtraBold>        
            </View>
            </View>
            <CustomButton onPress={toggleOverlay}
             title="Continuar" gradient={true}/>
            <Regular 
            style={{fontSize:16, textAlign:'center',color: colors.tribu_green,marginTop:10}}
            >*Recuerda que lo anterior es una estimaci??n. 
            Siempre podr??s actualizar tu fecha de parto en</Regular> 
            <Bold style={{fontSize:16, textAlign:'center',color: colors.tribu_green,marginBottom:10}}>
            configuraciones.</Bold>
          </View>
      );
  };


	return (
 
			<View style={{
            flexShrink:1, 
            height:height*0.5,
            width:width*0.85
          }}>
      <TouchableOpacity onPress={toggleOverlay}>
        <Icon
        name="x" size={40} 
        color={colors.grey_light} 
        style={{alignSelf:"flex-end"}}
        />
        </TouchableOpacity>
      
          <Swiper 
           ref={swiper}
           showsButtons={false} loop={true}
           scrollEnabled={false}
           showsPagination={false}
           >
          <BeforeCalc/>
          <AfterCalc/>
           </Swiper>
       

      </View>

		
	);
};






export default DuedateComponent;