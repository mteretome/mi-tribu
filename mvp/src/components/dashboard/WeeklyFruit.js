import React from 'react';
import { View,Image} from 'react-native';
import { Bold, SemiBold } from '../../components/common/Text';
import styles from './styles';

import Fruit from '../../assets/images/svg/fruit.svg';
import colors from '../../assets/theme/colors';

const WeeklyFruit = ({fruit,weight,size}) => {
    return (
    
     
        <View style={{margin:40, height: '30%'}}>
        <Fruit />
        <View style={styles.floatingCenter}>
            <Bold style={{color:colors.tribu_pink,fontSize:16}}>Tu bebé está</Bold> 
            <Bold style={{color:colors.tribu_pink,fontSize:16}}>como</Bold> 
            <Image style={{marginVertical:15}}
            source={require('../../assets/images/temp.png')}/>
            <Bold style={{color:colors.tribu_pink,fontSize:16}}>una {fruit}</Bold>
        </View>
        
        <View style={styles.floatingRight}>
            <SemiBold style={{color:colors.grey_darkest,fontSize:14}}>{weight} GR</SemiBold>
            <SemiBold style={{color:colors.grey_light,fontSize:12}}>SU PESO</SemiBold>
        </View>
        <View style={styles.floatingLeft}>
            <SemiBold style={{color:colors.grey_darkest,fontSize:14}}>{size} CM </SemiBold>
            <SemiBold style={{color:colors.grey_light,fontSize:11.5}}>SU TAMAÑO </SemiBold>
        </View>
        
        
        </View>
    );
  };


export default WeeklyFruit;