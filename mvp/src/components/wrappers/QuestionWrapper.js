import React, {useRef} from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
import colors from '../../assets/theme/colors';
import CustomButton from '../common/CustomButton';
import styles from './styles'
import { WELCOME} from '../../constants/routeNames';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';


const QuestionWrapper= ({children,final,notFirst,swiper}) => {
  const navigate= useNavigation();
  const swipe =(n) =>{
    if (swiper) swiper.current.scrollBy(n || 1)
  };
	return (
  

          <View>
          {notFirst ?
              <TouchableOpacity style={{alignSelf:"flex-start"}} 
              onPress={() => {swipe(-1)}}>
              <Icon name="arrow-back" size={25} color={colors.grey_lightest} />
            </TouchableOpacity> 
            :
            <View style={{marginTop:25}}></View>
          }
          <View style={{marginVertical:30}}>
          {children}
          </View>
          {final ?
           <CustomButton title="Terminar" gradient={true}
            onPress={() => {
            navigate.navigate(WELCOME)
            }}
            />
            :
          <CustomButton title="Siguiente Pregunta" gradient={true}
            onPress={() => swipe(1) }
            />
         
          }
          
           </View>
         
            
		
	);
};



export default QuestionWrapper;

