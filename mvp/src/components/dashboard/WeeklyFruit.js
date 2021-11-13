import React from 'react';
import { View} from 'react-native';
import { Bold, SemiBold } from '../../components/common/Text';
import styles from './styles';

import Circles from '../../assets/images/svg/circles.svg';
import colors from '../../assets/theme/colors';
import { Tracker } from './Trackers';
import Fruit from './Fruits.js'

const WeeklyFruit = ({fruit,weight,weightUnit,length,week}) => {
    return (
    
     
        <View style={styles.fruitContainer}>
            <View>
            <Tracker  week={week}/>
            </View>
            {/* <Circles width="100%" height="150%" style={{bottom:75}}/> */}
        <View style={[styles.floating]}>
            <View style={{ flex:1,flexDirection:'column',justifyContent:'center',top:25,left:7 }}>
                <SemiBold style={{color:colors.grey_darkest,fontSize:14, }}>{weight} {weightUnit}</SemiBold>
                <SemiBold style={{color:colors.grey_light,fontSize:12,}}>SU PESO</SemiBold>
            </View>
            <View style={{flex:2, flexDirection:'column',alignItems:'center',bottom:25}}>
                <Bold style={{color:colors.tribu_pink,fontSize:16}}>Tu bebé está</Bold> 
                <Bold style={{color:colors.tribu_pink,fontSize:16}}>como</Bold> 
                <Fruit fruit={fruit}/>
                <Bold style={{color:colors.tribu_pink,fontSize:16,bottom:40}}>una {fruit}</Bold>
            </View>
            <View style={{ flex:1,flexDirection:'column',justifyContent:'center',top:25,right:7 }}>
                <SemiBold style={{color:colors.grey_darkest,fontSize:14,}}>{length} CM </SemiBold>
                <SemiBold style={{color:colors.grey_light,fontSize:11.5,}}>SU TAMAÑO </SemiBold>
            </View>
        </View>
        </View>
    );
  };


export default WeeklyFruit;