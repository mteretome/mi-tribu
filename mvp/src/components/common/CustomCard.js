import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import styles from './styles';
import colors from '../../assets/theme/colors';
import {Bold, Light, Medium, Regular} from './Text';
import Svg,{ Circle,Rect } from 'react-native-svg';


const CustomCard = ({
    containerStyle,
    title,
    content,
    center,
    children,
    titleStyle,
    contentStyle,
    activeCircle,
    week,
}) => {
	
    const getWeek =() =>{
		if (week==true){
			return !activeCircle;
		}
		else {
			return false;
    }
	};
    const inactiveCircle = getWeek() ;
	return (
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        
        {inactiveCircle &&
      
          <Svg height="20%" width="20%" viewBox="0 0 100 100 ">
          <Circle
            cx="50"
            cy="50"
            r="45"
            stroke={colors.off_white}
            strokeWidth="4"
            fill={colors.grey_lightest}
          /></Svg>
          }
           {activeCircle &&
            <Svg height="20%" width="20%" viewBox="0 0 100 100 ">
            <Circle
              cx="50"
              cy="50"
              r="45"
              stroke={colors.off_white}
              strokeWidth="4"
              fill={colors.tribu_green}
            /></Svg>} 
           
		<View style={[styles.card,containerStyle]}>
           
            {center ? 
            <View  style={[styles.cardCenter]} >
                <Medium style={titleStyle}>{title}</Medium>
                <Light style={contentStyle} > {content} </Light>
                <View style={{margin:10}}>{children}</View>
            </View>
            :
            <View style={[styles.cardLeft,{flex:1,justifyContent:'flex-start'}]}>

                <View style={{margin:10}}>{children}</View>
                <View style={styles.cardLText,{flexShrink: 1,justifyContent:'flex-start'}}>
                    <Medium style={[titleStyle,{alignSelf:'flex-start',textAlign: 'left'}]}>{title}</Medium>
                    <Light style={[contentStyle,{alignSelf:'stretch',textAlign:'left'}]}>{content}</Light>
                </View>

            </View>  
            }


        </View>
        </View>
	);
};

export default CustomCard;