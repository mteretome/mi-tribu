import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import styles from './styles';
import colors from '../../assets/theme/colors';

const Link = ({style,children,onPress}) => {
	
	return (
		<TouchableOpacity onPress={onPress}>
	  	<Text style={[
				styles.link, 
				style]}>
				{children}
				</Text>
		</TouchableOpacity>
	);
};

export default Link;