import React from 'react';
import { View,Image} from 'react-native';
import { Bold, SemiBold } from '../../components/common/Text';
import styles from './styles';

import Fruit from '../../assets/images/svg/fruit.svg';
import colors from '../../assets/theme/colors';
import Tracker from '../../assets/images/tracker.svg';

const WeeklyFruit = ({fruit,weight,size}) => {
    return (
    
     
        <View style={styles.fruitContainer}>
            <Tracker style={[styles.floating]}/>
            <Fruit />
        <View style={[styles.floating,styles.floatingMiddle]}>
            <View >
                <SemiBold style={{color:colors.grey_darkest,fontSize:14}}>{weight} GR</SemiBold>
                <SemiBold style={{color:colors.grey_light,fontSize:12}}>SU PESO</SemiBold>
            </View>
            <View style={{alignItems:'center', marginHorizontal:22,paddingHorizontal:22}}>
                <Bold style={{color:colors.tribu_pink,fontSize:16}}>Tu bebé está</Bold> 
                <Bold style={{color:colors.tribu_pink,fontSize:16}}>como</Bold> 
                <Image style={{marginVertical:15}}
                source={require('../../assets/images/temp.png')}/>
                <Bold style={{color:colors.tribu_pink,fontSize:16}}>una {fruit}</Bold>
            </View>
            <View>
                <SemiBold style={{color:colors.grey_darkest,fontSize:14}}>{size} CM </SemiBold>
                <SemiBold style={{color:colors.grey_light,fontSize:11.5}}>SU TAMAÑO </SemiBold>
            </View>
        </View>
        </View>
    );
  };


export default WeeklyFruit;