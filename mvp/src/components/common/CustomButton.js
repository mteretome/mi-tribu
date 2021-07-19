import React from 'react';
import {View,ActivityIndicator,Text,TouchableOpacity} from 'react-native';
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
	...props
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
     style={styles.button}> 
  		{title && <Text style={styles.buttonText}>{title}</Text>}
	</LinearGradient>
	</TouchableOpacity>
	: <TouchableOpacity style={
		[styles.button,
		style,
		{backgroundColor: getBgColor()}]}
		onPress={onPress}>
		{title && <Text style={styles.buttonText}>{title}</Text>}
	</TouchableOpacity>
	}</View>
	);
};

export default CustomButton;