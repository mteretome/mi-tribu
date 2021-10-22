import React from 'react';
import { View,Image} from 'react-native';
import { Bold, SemiBold } from '../../components/common/Text';
import styles from './styles';

import Circles from '../../assets/images/svg/circles.svg';
import colors from '../../assets/theme/colors';
import { Tracker } from './Trackers';
import Fruit from './Fruits.js'

const WeeklyFruit = ({fruit,weight,size,week}) => {
    return (
    
     
        <View style={styles.fruitContainer}>
            <Tracker week={week}/>
            <View  width="100%" height="150%" style={{bottom:75}}> 
            <Circles/>
            </View>
        <View style={[styles.floating,styles.floatingMiddle,{marginHorizontal:20}]}>
            <View style={{flex:1,bottom:-10}}>
                <SemiBold style={{color:colors.grey_darkest,fontSize:16}}>{weight} GR</SemiBold>
                <SemiBold style={{color:colors.grey_light,fontSize:14}}>SU PESO</SemiBold>
            </View>
            <View style={{flex:2}}>
                <Bold style={{color:colors.tribu_pink,fontSize:16,bottom:30}}>Tu bebé está</Bold> 
                <Bold style={{color:colors.tribu_pink,fontSize:16,bottom:30}}>como</Bold> 
                <Fruit fruit={fruit}/>
                <Bold style={{color:colors.tribu_pink,fontSize:16,top:24}}>una {fruit}</Bold>
            </View>
            <View style={{flex:1,bottom:-10,left:5}}>
                <SemiBold style={{color:colors.grey_darkest,fontSize:16}}>{size} CM </SemiBold>
                <SemiBold style={{color:colors.grey_light,fontSize:10}}>SU TAMAÑO </SemiBold>
            </View>
        </View>
        </View>
    );
  };


export default WeeklyFruit;