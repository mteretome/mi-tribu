import React from 'react';
import {View,Image,} from 'react-native';
import colors from '../../assets/theme/colors';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import styles from './styles'
import { useNavigation } from '@react-navigation/native';
import {LOGIN, SIGNUP} from '../../constants/routeNames'; 
import Bg1 from '../../assets/images/svg/pillar1.svg';



const PillarWrapper= ({children, one, two, three,swipe}) => {
  const navigate= useNavigation();
	return (
    
      

     <Container style={styles.container}>
      <Bg1 
        width="100%" 
        style={{position:'absolute'}}/>
      <View style={styles.pillarHead}> 
      <Image style={styles.pillarLogo}
      source={require('../../assets/images/logowelcome.png')}/>
      </View>

      {children}
      <View style={styles.pillarFooter}>
      {three &&
        <CustomButton  style={[styles.floating,{top:99}]} 
        textStyle={{fontSize:18}} title="Comienza tu viaje"
        onPress={() => {
          navigate.navigate(LOGIN) }}/> }
      {two &&
        <CustomButton  
        style={[styles.floating,{paddingHorizontal:90,top:134}]} 
        textStyle={{fontSize:18}} title="Continuar"
        onPress={() => swipe.current.scrollTo(2) } /> }
      {one && 
      <CustomButton  
        style={[styles.floating,{paddingHorizontal:90, top:180}]} 
        textStyle={{fontSize:18}} title="Continuar"
        onPress={() => swipe.current.scrollTo(1) }/> }
      
      {one &&  <Image style={styles.wave}
      source={require('../../assets/images/waves/wave1.png')}/> }
      {two &&  <Image style={styles.wave}
      source={require('../../assets/images/waves/wave2.png')}/> }
      {three &&  <Image style={styles.wave}
      source={require('../../assets/images/waves/wave3.png')}/> }
       

       </View>
      </Container>
		
	);
};



export default PillarWrapper;

