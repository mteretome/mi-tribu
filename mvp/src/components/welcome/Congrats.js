import React from 'react';
import {View,} from 'react-native';
import colors from '../../assets/theme/colors';
import Container from '../common/Container';
import WhiteContainer from '../common/WhiteContainer';
import CustomButton from '../common/CustomButton';
import styles from './styles'
import { ONBOARD,CONGRATS,SIGNUP, WELCOME } from '../../constants/routeNames';
import { useNavigation } from '@react-navigation/native';
import Blob from '../../assets/images/svg/congrats.svg';
import {Bold,Light,ExtraBold, SemiBold} from '../common/Text';

import { useRoute } from '@react-navigation/native';
import daysToWeeks from 'date-fns/daysToWeeks/index.js';


const CongratsComponent= ({name,week,days}) => {
  
  const navigate= useNavigation();
  const weeks_left = 41-week;
  const days_left = 7-days;

	return (
    
			<WhiteContainer>
        <View style={styles.heading}>
        <Blob style={{position:'absolute', top:50}}/>
    			<Bold style={{
          color:colors.tribu_pink,
          fontSize: 28,
          marginTop: 30,
          alignSelf:'center'}}>🎉¡Felicitaciones,</Bold>

          <Bold style={{
          color:colors.tribu_pink,
          fontSize: 24,
          marginBottom:5,
          alignSelf:'center'}}>tu cuenta ha sido creada!🎉  </Bold>
  		  </View>

      <View style={{marginTop:30, marginBottom:30, alignItems:'center'}}>
      
        <SemiBold style={styles.congratsSub}>{JSON.parse(name)} estás en tu Semana {week} + {days} días de embarazo.</SemiBold>
       
        <Light  style={styles.congratsSub}>Te quedan {weeks_left} semanas y {days_left} días.</Light>
        
      </View>
      <CustomButton onPress={() => {
            navigate.navigate(WELCOME);
          }} title="Continuar" gradient={true}/>

      </WhiteContainer>
		
	);
};



export default CongratsComponent;

