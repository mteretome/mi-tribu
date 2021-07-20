import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import styles from './styles'
import colors from '../../assets/theme/colors';
import LinearGradient from 'react-native-linear-gradient';

const Link = ({style,children,onPress}) => {
	
	return (
		<TouchableOpacity onPress={onPress}>
		{/*<LinearGradient
	     colors={[colors.tribu_green, colors.tribu_blue]}> */}
	  	<Text style={[
				styles.link, 
				style]}>
				{children}
				</Text>
		{/*</LinearGradient>*/}
		</TouchableOpacity>
	);
};

export default Link;