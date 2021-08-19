import React from 'react';
import { View } from 'react-native';
import { Bold, Regular } from '../../components/common/Text';
import LinearContainer from '../../components/common/LinearContainer';
import Bg from '../../assets/images/svg/pregnancy.svg';
import styles from './styles';
import Link from '../../components/common/Link';
import WeeklyFruit from './WeeklyFruit';
import InfoTab from './InfoTab';
import { useNavigation } from '@react-navigation/native';
import { WEEKS } from '../../constants/routeNames';


const PregnancyComponent = ({week}) => {
  const navigate= useNavigation();
    return (
    
      <LinearContainer style={{flex:1}}>
        <Bg  width="100%" style={{position:'absolute',bottom:30}}/>
        <View style={styles.header}>
            <Bold style={styles.heading}>Hola #Name,</Bold>
            <View style={styles.subheader}>
                <Regular style={styles.subheading} >Estás en tu </Regular>
                <Link icon={true} onPress={() => {navigate.navigate(WEEKS)}} style={{fontSize:20}}>Semana {week}
                </Link>
            </View>
        </View>

        <WeeklyFruit fruit="frutilla" weight="2" size="2,5"/>

        <InfoTab body="cuerpo info" baby="bebe info" symptoms="sintomas info"/>
        
      </LinearContainer>
    );
  };


export default PregnancyComponent;