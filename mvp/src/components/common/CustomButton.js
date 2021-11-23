import React from "react";
import {View,Text,TouchableOpacity, ActivityIndicator,} from 'react-native';
import styles from './styles';
import colors from '../../assets/theme/colors';
import LinearGradient from 'react-native-linear-gradient';
import {Bold,Light} from './Text';
import Icon from 'react-native-vector-icons/Octicons';




const CustomButton = ({
	title,
	loading,
	gradient,
	style,
	bgColor,
	onPress,
	textStyle,
	rightarrow,
	leftarrow,
}) => {
	const getBgColor =() =>{
		if (bgColor){
			return bgColor;
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
		style={[style]}
		 onPress={onPress}>
		<LinearGradient
	     colors={[colors.tribu_green, colors.tribu_blue]}
	     style={
			[styles.button,
			{flexDirection:'row',
			shadowColor:  colors.tribu_blue,
		

			elevation: 5,
          }
        ]}> 
        
		
		{leftarrow && <Icon name="chevron-left" color={'rgba(249, 247, 246, 0.5)'} size={25}/>}

			{loading && <ActivityIndicator color={colors.off_white}/>}
	  		{title && <Bold style={[styles.buttonText,textStyle]}>{title}</Bold>}
			{rightarrow && <Icon name="chevron-right" color={'rgba(249, 247, 246, 0.5)'} size={25} />}
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