import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import styles from './styles';
import colors from '../../assets/theme/colors';
import {Bold} from './Text';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Link = ({style,children,onPress,icon}) => {
	
	return (
		<TouchableOpacity style={{flexDirection:'row'}}onPress={onPress}>
	  	<Bold style={[styles.link, style]}>
				{children}
				</Bold>
				
		{icon && <View><Icon 
		color={colors.tribu_green}
		style={{top:15}}
		name="keyboard-arrow-down" size={25} /></View>}
		</TouchableOpacity>
	);
};

export default Link;