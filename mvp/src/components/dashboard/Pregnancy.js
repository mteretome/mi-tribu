import React from 'react';
import { View } from 'react-native';
import { Bold, Regular } from '../../components/common/Text';
import LinearContainer from '../../components/common/LinearContainer';
import Bg from '../../assets/images/svg/pregnancy.svg';
import styles from './styles';
import Link from '../../components/common/Link';
import Icon from 'react-native-vector-icons/MaterialIcons';
import WhiteContainer from '../../components/common/WhiteContainer';
import WeekNavigator from '../wrappers/WeekNav';

const PregnancyComponent = () => {
    return (
    
      <LinearContainer style={{flex:1}}>
        <Bg  width="100%" style={{position:'absolute',bottom:30}}/>
        <View style={styles.header}>
            <Bold style={styles.heading}>Hola #Name,</Bold>
            <View style={styles.subheader}>
                <Regular style={styles.subheading} >Estás en tu </Regular>
                <Link style={{fontSize:20}}>Semana #</Link>
                <Link style={{top:5}}>
                    <Icon name="keyboard-arrow-down" size={30} />
                </Link>
            </View>
        </View>
        <WhiteContainer>
            <WeekNavigator/>
        </WhiteContainer>
        
      </LinearContainer>
    );
  };


export default PregnancyComponent;