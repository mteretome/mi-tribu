import React from 'react';
import {View,Image,} from 'react-native';
import colors from '../../assets/theme/colors';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import styles from './styles'
import { useNavigation } from '@react-navigation/native';
import {SIGNUP} from '../../constants/routeNames'; 
import Wave1 from '../../assets/images/svg/wave1.svg';
import Wave2 from '../../assets/images/svg/wave2.svg';
import Wave3 from '../../assets/images/svg/wave3.svg';
import Bg1 from '../../assets/images/svg/pillar1.svg';
import Bg2 from '../../assets/images/svg/pillar2.svg';
import Bg3 from '../../assets/images/svg/pillar3.svg';


const PillarWrapper= ({children, one, two, three,swipe}) => {
  const navigate= useNavigation();
	return (
    
      

     <Container style={styles.container}>
     {one && <Bg1 style={{position:'absolute'}}/>}
      {two && <Bg2 style={{position:'absolute'}}/>}
      {three && <Bg3 style={{position:'absolute'}}/>}
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
          navigate.navigate(SIGNUP) }}/> }
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
      
      {one && <Wave1 style={[styles.wave]}/>}
      {two && <Wave2 style={[styles.wave]}/>}
      {three && <Wave3 style={[styles.wave]}/>}
       

       </View>
      </Container>
		
	);
};



export default PillarWrapper;
