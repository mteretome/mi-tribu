import React from 'react';
import {Text,View,Image} from 'react-native';
import colors from '../../assets/theme/colors';
import LinearContainer from '../common/LinearContainer';
import CustomButton from '../common/CustomButton';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Container from '../common/LinearContainer';
import Logo from '../../assets/images/svg/welcomeLogo.svg';




const WelcomeComponent= () => {
  const navigate= useNavigation();
  return (
    
      <LinearContainer>
       <Container style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.whiteTitle}>
          Bienvenida,
          #Name</Text>
          <Text style={styles.subtitle}>Te estábamos esperando.</Text>
        </View>
    <View style={{flexShrink:1,flexDirection:"row"}}>
    
      <Image style={styles.welcomeLady3}
      source={require('../../assets/images/pink/lady3.png')}/>
      <Image style={styles.welcomeLady2}
      source={require('../../assets/images/pink/lady2.png')}/>

    </View>
    <Logo style={{position:'absolute'}}/>
     <Image style={{position:'absolute',width:'13%',resizeMode:'contain', right:177}}
      source={require('../../assets/images/logo.png')}/>

     
      <Image style={styles.welcomeLady1}
      source={require('../../assets/images/pink/lady1.png')}/>
       <View>
      <CustomButton style={{bottom:50}}
        textStyle={{fontSize:17}}
        title="Ingresar a Mi Embarazo" gradient={true}
        onPress={() => {navigate.navigate('Dashboard')}}/>
      </View>
        </Container>
      </LinearContainer>

  );
};



export default WelcomeComponent;

