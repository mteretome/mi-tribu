import React, { useContext } from 'react';
import {Text,View,Image} from 'react-native';
import LinearContainer from '../common/LinearContainer';
import CustomButton from '../common/CustomButton';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../assets/images/svg/welcomeLogo.svg';
import {Bold,Regular} from '../common/Text';
import { dashboardClear } from '../../context/actions/welcome';
import { GlobalContext } from '../../context/Provider';




const WelcomeComponent= ({name}) => {
  const navigate= useNavigation();
  const {
    authDispatch,
    authState: {error,loading,data},
    } = useContext(GlobalContext); 
  
  return (
    
      <LinearContainer>
       <View style={styles.container}>
        
        <View style={[styles.heading,{flex:1}]}>
          <Bold style={[styles.whiteTitle,]}>
          Bienvenida,</Bold>
          <Bold style={[styles.whiteTitle,{}]}>{name}</Bold>
          <Regular style={styles.subtitle}>Te estábamos esperando.</Regular>
        </View>
    
    <View style={{flex:1,flexDirection:"row"}}>
    
      <Image style={styles.welcomeLady3}
      source={require('../../assets/images/pink/lady3.png')}/>
      <Image style={styles.welcomeLady2}
      source={require('../../assets/images/pink/lady2.png')}/>

    </View>
    <Logo style={{position:'absolute'}}/>

<Image style={{position:'absolute',width:'13%',resizeMode:'contain', right:177}}
 source={require('../../assets/images/logo.png')}/>
    <View style={{flex:1, position:'absolute'}}>
    

 
 </View>
    <View style={{flex:4}}>
    <Image style={styles.welcomeLady1}
 source={require('../../assets/images/pink/lady1.png')}/>
      <CustomButton style={{bottom:50}}
        textStyle={{fontSize:17}}
        title="Ingresar a Mi Embarazo" gradient={true}
        onPress={() => {
          dashboardClear()(authDispatch);
          }}/>
        
     </View>
        </View>
      </LinearContainer>

  );
};



export default WelcomeComponent;

