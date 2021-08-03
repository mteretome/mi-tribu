import React, {useRef} from 'react';
import {View,TouchableOpacity} from 'react-native';
import colors from '../../assets/theme/colors';
import NoScrollContainer from '../common/NoScrollContainer';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import styles from './styles'
import { WELCOME} from '../../constants/routeNames';
import { useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons';
import QuestionWrapper from '../wrappers/QuestionWrapper';
import {Bold,Light,Regular} from '../common/Text';


const OnboardingComponent= () => {
  const navigate= useNavigation();
  const swiper = useRef(null);

	return (
    
			<NoScrollContainer>
            <View style={styles.heading}>
        			<Bold style={styles.title}>¡Bienvenida a bordo!</Bold>
              <Light style={styles.subsixteen}>
              Contesta estas preguntas para conocerte mejor y personalizar tu viaje.
              </Light>
            
            

      		  </View>
         <Swiper 
         ref={swiper}
         showsButtons={false} loop={false}
         scrollEnabled={false}
         paginationStyle={{top:-270,}}
         dot={
            <View
              style={{
                backgroundColor: colors.grey_lightest,
                width: 8,
                height: 3,
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: colors.tribu_green,
                width: 12,
                height: 5,

              }}
            />
          }
         >

          <View style={styles.onboardSlides}>
            <QuestionWrapper swiper={swiper}  >
            <Regular style={styles.question}> 
            ¿Cuál es tu relación con el bebé? </Regular>

            </QuestionWrapper>
          </View>

          <View style={styles.onboardSlides} >
            <QuestionWrapper swiper={swiper} notFirst={true}>
              <Regular style={styles.question}>
              ¿Te atiendes principalmente en el sector público o privado?</Regular>
            </QuestionWrapper>
          </View>

           <View style={styles.onboardSlides} >
            <QuestionWrapper swiper={swiper} notFirst={true}>
              <Regular style={styles.question}>
              ¿Cuándo es tu cumpleaños?</Regular>
            </QuestionWrapper>
          </View>

           <View style={styles.onboardSlides} >
            <QuestionWrapper swiper={swiper} notFirst={true}>
              <Regular style={styles.question}>
              ¿Dónde vives?</Regular>
            </QuestionWrapper>
          </View>

           <View style={styles.onboardSlides} >
            <QuestionWrapper swiper={swiper} notFirst={true}>
              <Regular  style={styles.question}>
              Laboralmente, actualmente estás... </Regular>
            </QuestionWrapper>
          </View>

          <View style={styles.onboardSlides} >
            <QuestionWrapper swiper={swiper} notFirst={true} final={true}>
              <Regular  style={styles.question}>
              ¿Qué número de hijo o hija es el que estás esperando? </Regular>
            </QuestionWrapper>
          </View>

         </Swiper>

    
        
      
      </NoScrollContainer>
		
	);
};



export default OnboardingComponent;

