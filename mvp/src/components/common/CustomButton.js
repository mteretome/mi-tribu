import React, { useState } from "react";
import {View,ActivityIndicator,Text,TouchableOpacity,} from 'react-native';
import styles from './styles'
import colors from '../../assets/theme/colors';
import LinearGradient from 'react-native-linear-gradient';

const CustomButton = ({
	title,
	loading,
	gradient,
	style,
	bgColor,
	onPress
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
		? <TouchableOpacity onPress={onPress}>
		<LinearGradient
	     colors={[colors.tribu_green, colors.tribu_blue]}
	     style={
			[styles.button,
			style,
			{shadowColor: colors.tribu_green,
			shadowOffset: {
				width: 0,
				height: 5,
			},
			shadowOpacity: 0.5,
			shadowRadius: 0.5,

			elevation: 5,
          }
        ]}> 
	  		{title && <Text style={styles.buttonText}>{title}</Text>}
		</LinearGradient>
		</TouchableOpacity>
		: <TouchableOpacity style={
			[styles.button,
			style,
			{backgroundColor: getBgColor(),
			shadowColor: colors.tribu_green,
			shadowOffset: {
				width: 0,
				height: 5,
			},
			shadowOpacity: 0.5,
			shadowRadius: 0.5,

			elevation: 1,
          	}
          ]}
			onPress={onPress}>
			{title && <Text style={styles.buttonText}>{title}</Text>}
		</TouchableOpacity>
	}
	</View>
	);
};

export default CustomButton;