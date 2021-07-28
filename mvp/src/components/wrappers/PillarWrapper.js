import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import colors from '../../assets/theme/colors';
import Container from '../common/Container';
import WhiteContainer from '../common/WhiteContainer';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import styles from './styles'
import { RECOVER } from '../../constants/routeNames';
import { useNavigation } from '@react-navigation/native';
import PillarContainer from '../common/PillarContainer';


const PillarWrapper= () => {
  const navigate= useNavigation();
	return (
    
		  <PillarContainer >
      <Container style={styles.container}>
      <View style={styles.pillarHead}> 
      <Image style={styles.pillarLogo}
      source={require('../../assets/images/logowelcome.png')}/>
      </View>


       <CustomButton  title="Continuar"/>
        </Container>
      </PillarContainer>
		
	);
};



export default PillarWrapper;

