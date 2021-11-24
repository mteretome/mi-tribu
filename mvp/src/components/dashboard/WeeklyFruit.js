import React, { useRef, useState } from 'react';
import { View} from 'react-native';
import { Bold, SemiBold } from '../../components/common/Text';
import styles from './styles';

import colors from '../../assets/theme/colors';
import Fruit from './Fruits.js'
import Circles from '../../assets/images/svg/circles-01.svg';
import { useWindowDimensions } from 'react-native';


const WeeklyFruit = ({fruit,weight,weightUnit,length,week}) => {
    const width = useWindowDimensions().width;
    const scale = useWindowDimensions().scale;
    const height = useWindowDimensions().height;
    const ratio = width/height;

    var margin=0;
    if (scale >2.5&&scale<2.6){
       margin = Math.abs(width-370+(scale-2.5)*125);
        
    } 
    else {
        margin = Math.abs(width-380);

    }
    // console.log("scale", scale);
    // console.log("height", height);

    // console.log("aspect", ratio);








    return (
    
     
        <View style={styles.fruitContainer}>
            <Circles width='100%' height='100%' style={{position:'absolute',alignSelf:'center'}}/>
    
        <View style={[styles.floating,{marginHorizontal:margin}]}>
            <View style={{ flex:1,flexDirection:'column',alignItems:'center'}}>
                <SemiBold style={{color:colors.grey_darkest,fontSize:14}}>{weight} {weightUnit}</SemiBold>
                {/* <SemiBold style={{color:colors.grey_darkest,fontSize:14, }}>2 KG</SemiBold> */}

                <SemiBold style={{color:colors.grey_light,fontSize:12}}>SU PESO</SemiBold>
            </View>
            <View style={{flex:2, flexDirection:'column',alignItems:'center'}}>
                <Bold style={{color:colors.tribu_pink,fontSize:16,top:10}}>Tu bebé </Bold> 
                <Bold style={{color:colors.tribu_pink,fontSize:16,top:5}}>está como</Bold> 
                <Fruit fruit={fruit}/>

                <Bold style={{color:colors.tribu_pink,fontSize:16,bottom:18}}> {fruit}</Bold>
                {/* <Bold style={{color:colors.tribu_pink,fontSize:16,bottom:20}}>una manzana</Bold> */}
            </View>
            <View style={{ flex:1,flexDirection:'column',alignItems:'center'}}>
                <SemiBold style={{color:colors.grey_darkest,fontSize:14,}}>{length} CM </SemiBold>
                {/* <SemiBold style={{color:colors.grey_darkest,fontSize:14,}}>2.3 CM </SemiBold> */}

                <SemiBold style={{color:colors.grey_light,fontSize:12,}}>SU TAMAÑO </SemiBold>
            </View>
        </View>
        </View>
    );
  };


export default WeeklyFruit;