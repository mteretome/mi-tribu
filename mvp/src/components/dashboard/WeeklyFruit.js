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
            <Circles width="100%" height="150%" style={{bottom:75}}/>
        <View style={[styles.floating,styles.floatingMiddle]}>
            <View >
                <SemiBold style={{color:colors.grey_darkest,fontSize:16, top: 0, right:26}}>{weight} GR</SemiBold>
                <SemiBold style={{color:colors.grey_light,fontSize:14, top: -6,  right:26}}>SU PESO</SemiBold>
            </View>
            <View >
                <Bold style={{color:colors.tribu_pink,fontSize:16,left:10,bottom:40}}>Tu bebé está</Bold> 
                <Bold style={{color:colors.tribu_pink,fontSize:16,left:10,bottom:40}}>como</Bold> 
                <Fruit fruit={fruit}/>
                <Bold style={{color:colors.tribu_pink,fontSize:16,left:10,top:24}}>una {fruit}</Bold>
            </View>
            <View>
                <SemiBold style={{color:colors.grey_darkest,fontSize:16, top:-0, left:28}}>{size} CM </SemiBold>
                <SemiBold style={{color:colors.grey_light,fontSize:10,top: -6, left:30}}>SU TAMAÑO </SemiBold>
            </View>
        </View>
        </View>
    );
  };


export default WeeklyFruit;