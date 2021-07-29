import React from 'react';
import {Text,View,} from 'react-native';
import colors from '../../assets/theme/colors';
import Container from '../common/Container';
import WhiteContainer from '../common/WhiteContainer';
import CustomButton from '../common/CustomButton';
import styles from './styles'
import { ONBOARD } from '../../constants/routeNames';
import { useNavigation } from '@react-navigation/native';
import Blob from '../../assets/images/svg/congrats.svg';


const CongratsComponent= () => {
  const navigate= useNavigation();
	return (
    
			<WhiteContainer>
        <View style={styles.heading}>
    			<Text style={styles.title}>🎉 Felicitaciones 🎉  </Text>
          <Text style={styles.title}>¡Tu cuenta ha sido creada! </Text>
  		  </View>

      <View style={{marginVertical:20, alignItems:'center'}}>
      <Blob style={{position:'absolute', bottom:20}}/>
        <Text style={styles.congratsSub}>#NAME + ,", estás en tu Semana X + Y días de embarazo.</Text>
        <Text style={{marginBottom:50,color: colors.tribu_green, fontSize:36, fontWeight:'bold'}}>
        Diciembre 2, 2021</Text>
        <Text  style={styles.congratsSub}>Te quedan W semanas y Z días.</Text>
        
      </View>
      <CustomButton onPress={() => {
            navigate.navigate(ONBOARD)
          }} title="Continuar" gradient={true}/>

      </WhiteContainer>
		
	);
};



export default CongratsComponent;

