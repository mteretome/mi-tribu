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
                <SemiBold style={{color:colors.grey_darkest,fontSize:14, right:35}}>{weight} GR</SemiBold>
                <SemiBold style={{color:colors.grey_light,fontSize:12, right:32}}>SU PESO</SemiBold>
            </View>
            <View >
                <Bold style={{color:colors.tribu_pink,fontSize:16,left:10,bottom:40}}>Tu bebé está</Bold> 
                <Bold style={{color:colors.tribu_pink,fontSize:16,left:10,bottom:40}}>como</Bold> 
                <Fruit fruit={fruit}/>
                <Bold style={{color:colors.tribu_pink,fontSize:16,left:10,top:40}}>una {fruit}</Bold>
            </View>
            <View>
                <SemiBold style={{color:colors.grey_darkest,fontSize:14,left:45}}>{size} CM </SemiBold>
                <SemiBold style={{color:colors.grey_light,fontSize:11.5,left:45}}>SU TAMAÑO </SemiBold>
            </View>
        </View>
        </View>
    );
  };


export default WeeklyFruit;