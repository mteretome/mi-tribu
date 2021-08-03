import React from 'react';
import {View,} from 'react-native';
import colors from '../../assets/theme/colors';
import Container from '../common/Container';
import WhiteContainer from '../common/WhiteContainer';
import CustomButton from '../common/CustomButton';
import styles from './styles'
import { ONBOARD } from '../../constants/routeNames';
import { useNavigation } from '@react-navigation/native';
import Blob from '../../assets/images/svg/congrats.svg';
import {Bold,Light,ExtraBold} from '../common/Text';


const CongratsComponent= () => {
  const navigate= useNavigation();
	return (
    
			<WhiteContainer>
        <View style={styles.heading}>
    			<Bold style={styles.lightText}>🎉 ¡Felicitaciones, tu cuenta ha sido creada! 🎉  </Bold>
  		  </View>

      <View style={{marginVertical:20, alignItems:'center'}}>
      <Blob style={{position:'absolute', bottom:20}}/>
        <Light style={styles.congratsSub}>#NAME + ,", estás en tu Semana X + Y días de embarazo.</Light>
        <ExtraBold style={{marginBottom:50,color: colors.tribu_green, fontSize:36,}}>
        Diciembre 2, 2021</ExtraBold>
        <Light  style={styles.congratsSub}>Te quedan W semanas y Z días.</Light>
        
      </View>
      <CustomButton onPress={() => {
            navigate.navigate(ONBOARD)
          }} title="Continuar" gradient={true}/>

      </WhiteContainer>
		
	);
};



export default CongratsComponent;

