import React, {useRef, useState} from 'react';
import {View,TouchableOpacity} from 'react-native';
import colors from '../../assets/theme/colors';
import WhiteContainer from '../common/WhiteContainer';
import styles from './styles'
import Swiper from 'react-native-swiper';
import {Bold,Light,Regular} from '../common/Text';
import { ProgressBar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../common/CustomButton';
import {WELCOME} from '../../constants/routeNames'; 
import { Question1, Question2, Question3, Question4, Question5, Question6 } from './OnboardingForm';
import { ScrollView } from 'native-base';
import { paddingBottom } from 'styled-system';



const OnboardingComponent= () => {
  const navigate= useNavigation();
  const [progress,setProgress] = useState(0.15);
  const swiper = useRef(null);
  const swipe =(n) =>{
    if (swiper) {
      swiper.current.scrollBy(n || 1)
    }
  };

	return (
    
			<View style={{
        backgroundColor: 'rgba(255,255,255,0.8)',
        flex:5,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal:50,
        paddingVertical:10}} >
        
            <View style={styles.heading}>
        			<Bold style={styles.title}>¡Bienvenida a bordo!</Bold>
              <Light style={styles.subsixteen}>
              Contesta estas preguntas para conocerte mejor y personalizar tu viaje.
              </Light>
            
            
              
      		  </View>
            <ProgressBar progress={progress} color={colors.tribu_green}
           style={{backgroundColor: colors.grey_lightest,marginVertical:10}} />
           
           {progress>0.29 ?
            <TouchableOpacity style={{alignSelf:"flex-start"}} 
              onPress={() => {swipe(-1);setProgress(progress-0.30);}}>
              <Icon name="arrow-back" size={25} color={colors.grey_lightest} />
            </TouchableOpacity> 
            :
            <View style={{marginTop:30}}></View>
            }

        
         <Swiper 
         ref={swiper}
         showsButtons={false} loop={false}
         scrollEnabled={false}
         showsPagination={false}
         onIndexChanged={(index) => {setProgress(progress+0.15);}}
         >

          <View style={styles.onboardSlides}>
            <ScrollView>
            <Regular style={styles.question}> 
            ¿Cuál es tu relación con el bebé? </Regular>
            <Question1/>
            </ScrollView>
            

          </View>

          <View style={styles.onboardSlides} >
           
          <ScrollView>
            
              <Regular style={styles.question}>
              ¿Te atiendes principalmente en el sector público o privado?</Regular>
              <Question2/>
              </ScrollView>
          </View>

           <View style={styles.onboardSlides} >
            
            <ScrollView>
              <Regular style={styles.question}>
              ¿Cuándo es tu cumpleaños?</Regular>
              <Question3/>
           
           </ScrollView>
          </View>

           <View style={styles.onboardSlides} >
           
            <ScrollView>
              <Regular style={styles.question}>
              ¿Dónde vives?</Regular>
              <Question4/>
              </ScrollView>
           
          </View>

           <View style={styles.onboardSlides} >
           
           <ScrollView>
              <Regular  style={styles.question}>
              Laboralmente, actualmente estás... </Regular>
              <Question5/>
              </ScrollView>
            
          </View>

          <View style={styles.onboardSlides} >
          
            <ScrollView >
              <Regular  style={styles.question}>
              ¿Qué número de hijo o hija es el que estás esperando? </Regular>
              <Question6/>
              </ScrollView>
              
            
          </View>

         
         </Swiper>
         {progress>0.85 ?
           <CustomButton title="Terminar" gradient={true}
            style={styles.onboardSlides}
            onPress={() => {
            setProgress(1);
            navigate.navigate(WELCOME);
            }}
            />
            :
          <CustomButton title="Siguiente Pregunta" gradient={true}
          style={styles.onboardSlides}
         
            onPress={() => swipe(1) }
            />
         
          }
  
         
        
            
            
        
      
      </View>
		
	);
};



export default OnboardingComponent;

