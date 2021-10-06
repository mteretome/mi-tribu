import React from "react";
import {View,Text,TouchableOpacity, ActivityIndicator,} from 'react-native';
import styles from './styles';
import colors from '../../assets/theme/colors';
import LinearGradient from 'react-native-linear-gradient';
import {Bold,Light} from './Text';


const CustomButton = ({
	title,
	loading,
	gradient,
	style,
	bgColor,
	onPress,
	textStyle,
}) => {
	const getBgColor =() =>{
		if (bgColor === 'pink'){
			return colors.tribu_pink;
		}
		else {
			return colors.tribu_green;
		}

	};

	return (
	<View style={styles.inputContainer}>
	{gradient 
		? <TouchableOpacity 
		disabled={loading}
		style={style}
		 onPress={onPress}>
		<LinearGradient
	     colors={[colors.tribu_green, colors.tribu_blue]}
	     style={
			[styles.button,
			{flexDirection:'row',
			shadowColor:  colors.tribu_blue,
			shadowOffset: {
				width: 0,
				height: 5,
			},
			shadowOpacity: 0.5,
			shadowRadius: 0.5,

			elevation: 5,
          }
        ]}> 
			{loading && <ActivityIndicator color={colors.off_white}/>}
	  		{title && <Bold style={[styles.buttonText,textStyle]}>{title}</Bold>}
		</LinearGradient>
		</TouchableOpacity>
		: 
		<TouchableOpacity 
		disabled={loading}
		
		style={
			[styles.button,
			style,
			{backgroundColor: getBgColor(),
			shadowColor:  colors.tribu_blue,
			shadowOffset: {
				width: 0,
				height: 5,
			},
			shadowOpacity: 0.5,
			shadowRadius: 0.5,

			elevation: 5,
          }
          ]}
			onPress={onPress}>
			{loading && <Light styles={styles.buttonText}>LOADING</Light>}

			{title && <Bold style={[styles.buttonText,textStyle]}>{title}</Bold>}
		</TouchableOpacity>
	}
	</View>
	);
};

export default CustomButton;