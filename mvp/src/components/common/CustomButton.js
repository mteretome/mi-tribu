import React from "react";
import {View,Text,TouchableOpacity,} from 'react-native';
import styles from './styles'
import colors from '../../assets/theme/colors';
import LinearGradient from 'react-native-linear-gradient';


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
		? <TouchableOpacity style={style} onPress={onPress}>
		<LinearGradient
	     colors={[colors.tribu_green, colors.tribu_blue]}
	     style={
			[styles.button,
			{shadowColor: colors.tribu_blue,
			shadowOffset: {
				width: 0,
				height: 5,
			},
			shadowOpacity: 1,
			shadowRadius: 0.5,

			elevation: 5,
          }
        ]}> 
	  		{title && <Text style={[styles.buttonText,textStyle]}>{title}</Text>}
		</LinearGradient>
		</TouchableOpacity>
		: 
		<TouchableOpacity style={
			[styles.button,
			style,
			{backgroundColor: getBgColor(),
			shadowColor: colors.tribu_green,
			shadowOffset: {
				width: 0,
				height: 5,
			},
			shadowOpacity: 1,
			shadowRadius: 0.5,

			elevation: 5,
          }
          ]}
			onPress={onPress}>
			{title && <Text style={[styles.buttonText,textStyle]}>{title}</Text>}
		</TouchableOpacity>
	}
	</View>
	);
};

export default CustomButton;