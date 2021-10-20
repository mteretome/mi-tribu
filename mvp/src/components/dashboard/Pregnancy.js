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
import { Avatar } from 'react-native-elements';
import colors from '../../assets/theme/colors';


const PregnancyComponent = ({week}) => {
  const navigate= useNavigation();
    return (
    
      <LinearContainer style={{flex:1}}>
        <Bg  width="100%" style={{position:'absolute',bottom:30}}/>
       
        <View style={styles.header}>
            <Bold style={styles.heading}>Hola #Name,</Bold>
            <View style={styles.subheader}>
                <Regular style={styles.subheading} >Estás en tu </Regular>
                <Link icon={true} onPress={() => {navigate.navigate(WEEKS);}} style={{fontSize:20}}>Semana {week}
                </Link>
            </View>
            <Avatar  rounded  
            // source={require('../../assets/images/pink/lady2.png')}
            icon={{name: 'user', type: 'font-awesome'}}
            size="medium"   onPress={() => console.log("Works!")}  activeOpacity={0.7}
            containerStyle={{position:'absolute',right:0, top:5,borderColor:colors.white,borderWidth:2, shadowColor:colors.off_white,
              shadowOpacity: 1,
              elevation: 10,}}
            overlayContainerStyle={{backgroundColor: colors.tribu_pink}}/>
        </View>

        <WeeklyFruit fruit="apple" weight="2" size="2,5" week={week}/>


        <InfoTab body="cuerpo info" baby="bebe info" symptoms="sintomas info"/>
        
      </LinearContainer>
    );
  };


export default PregnancyComponent;