import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import styles from './styles';
import colors from '../../assets/theme/colors';
import {Bold} from './Text';

const Link = ({style,children,onPress}) => {
	
	return (
		<TouchableOpacity onPress={onPress}>
	  	<Bold style={[
				styles.link, 
				style]}>
				{children}
				</Bold>
		</TouchableOpacity>
	);
};

export default Link;