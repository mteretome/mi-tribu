import React, {useState,useRef} from 'react';
import {View,TouchableOpacity,Dimensions} from 'react-native';
import colors from '../../assets/theme/colors';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import styles from './styles'
import Icon from 'react-native-vector-icons/Feather';
import Blob from '../../assets/images/svg/congrats.svg';
import {Bold,Regular,ExtraBold} from '../common/Text';
import DatePicker from 'react-native-datepicker';
import InputSpinner from "react-native-input-spinner";
import Swiper from 'react-native-swiper';


const DuedateComponent= ({toggleOverlay}) => {
  const { height, width } = Dimensions.get('window');
  const swiper = useRef(null);
  const swipe =(n) =>{
    if (swiper) swiper.current.scrollBy(n || 1)
    };
  const [date, setDate] = useState(new Date());
  const [cycle, setCycle] = useState(1);
  const getDate =(n) =>{
      var day = new Date().getDate();
      var month = new Date().getMonth();
      var year = new Date().getFullYear();
      if(n==1){
        return new Date(year + 1, month, day);
      }
      else{
        return new Date(year - 1, month, day);
      }
  };
  const getDueDate = () => {
    var days =  280 + (28 - cycle);
    setDate(date.getDate() + days);
  };
    

  const BeforeCalc= () => {
      return (  
          <View>
             <View style={styles.heading}>
              <Bold style={{color: colors.tribu_green, fontSize:24,}}>
              Calculadora de fecha de parto</Bold>
             
          </View>
            <View style={{marginHorizontal:20}}>
             <Regular style={styles.lightText}>¿Cuándo fue el primer día de tu último período?</Regular>
              <DatePicker
              date={date}
              onDateChange={setDate}
              maxDate={getDate(1)}
              minDate={getDate(0)}
              mode="date"
              showIcon={false}
              style={styles.textinput}
              customStyles={{dateInput:{borderWidth: 0,},
                            dateText:{fontFamily:'Montserrat-Light',
                                      color:colors.grey_light,
                                      fontSize:16},
                            dateTouchBody:{marginVertical:3,}}}
              />
              <Regular style={styles.lightText}>Duracion habitual de tu ciclo:</Regular>
             <InputSpinner
              max={28}
              min={1}
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
              onPress={() => {swipe(1);getDueDate()}}
            
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
              {date.toString()}</ExtraBold>        
            </View>
            </View>
            <CustomButton onPress={toggleOverlay}
             title="Continuar" gradient={true}/>
            <Regular 
            style={{fontSize:16, textAlign:'center',color: colors.tribu_green,marginTop:10}}
            >*Recuerda que lo anterior es una estimación. 
            Siempre podrás actualizar tu fecha de parto en</Regular> 
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