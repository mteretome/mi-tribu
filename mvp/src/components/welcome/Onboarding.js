import React, {useRef} from 'react';
import {View} from 'react-native';
import colors from '../../assets/theme/colors';
import NoScrollContainer from '../common/NoScrollContainer';
import styles from './styles'
import Swiper from 'react-native-swiper';
import QuestionWrapper from '../wrappers/QuestionWrapper';
import {Bold,Light,Regular} from '../common/Text';
import { ProgressBar } from 'react-native-paper';


const OnboardingComponent= () => {
  const swiper = useRef(null);

	return (
    
			<NoScrollContainer>
            <View style={styles.heading}>
        			<Bold style={styles.title}>¡Bienvenida a bordo!</Bold>
              <Light style={styles.subsixteen}>
              Contesta estas preguntas para conocerte mejor y personalizar tu viaje.
              </Light>
            
            
              <ProgressBar progress={0.15} color={colors.tribu_green}
           style={{backgroundColor: colors.grey_lightest}} />
      		  </View>
         <Swiper 
         ref={swiper}
         showsButtons={false} loop={false}
         scrollEnabled={false}
         showsPagination={false}
        
         >

          <View style={styles.onboardSlides}>
           
            <QuestionWrapper swiper={swiper} >
            <Regular style={styles.question}> 
            ¿Cuál es tu relación con el bebé? </Regular>

            </QuestionWrapper>
          </View>

          <View style={styles.onboardSlides} >
           <ProgressBar progress={0.30} color={colors.tribu_green}
           style={{backgroundColor: colors.grey_lightest}} />
            <QuestionWrapper swiper={swiper} notFirst={true}>
              <Regular style={styles.question}>
              ¿Te atiendes principalmente en el sector público o privado?</Regular>
            </QuestionWrapper>
          </View>

           <View style={styles.onboardSlides} >
            <ProgressBar progress={0.45} color={colors.tribu_green}
           style={{backgroundColor: colors.grey_lightest}} />
            <QuestionWrapper swiper={swiper} notFirst={true}>
              <Regular style={styles.question}>
              ¿Cuándo es tu cumpleaños?</Regular>
            </QuestionWrapper>
          </View>

           <View style={styles.onboardSlides} >
            <ProgressBar progress={0.60} color={colors.tribu_green}
           style={{backgroundColor: colors.grey_lightest}} />
            <QuestionWrapper swiper={swiper} notFirst={true}>
              <Regular style={styles.question}>
              ¿Dónde vives?</Regular>
            </QuestionWrapper>
          </View>

           <View style={styles.onboardSlides} >
            <ProgressBar progress={0.75} color={colors.tribu_green}
           style={{backgroundColor: colors.grey_lightest}} />
            <QuestionWrapper swiper={swiper} notFirst={true}>
              <Regular  style={styles.question}>
              Laboralmente, actualmente estás... </Regular>
            </QuestionWrapper>
          </View>

          <View style={styles.onboardSlides} >
           <ProgressBar progress={0.9} color={colors.tribu_green}
           style={{backgroundColor: colors.grey_lightest}} />
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

