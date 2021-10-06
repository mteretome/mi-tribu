import React from 'react';
import {View,TextInput,Text} from 'react-native';
import styles from './styles'
import colors from '../../assets/theme/colors';
import { Light } from './Text';

const Input = ({
	onChangeText,
	style,
	value, 
	error,
	...props
}) => {

	const getBorderColor=()=>{
		if(error){
			return colors.tribu_pink;
		} else {
			return colors.off_white;
		}
	}
	
	return (
	<View style={styles.inputContainer}>
		<TextInput 
			style={[
				styles.textinput, 
				style,
				{borderColor: getBorderColor(),
				fontFamily:'Montserrat-Light'}]}
			onChangeText={onChangeText}
			placeholderStyle={{fontFamily:'Montserrat-Light'}}
			placeholderTextColor={colors.grey_lightest}
			value={value}
			{...props}
		/>
		{error && <Light style={styles.error}>{error}</Light>}
	</View>
	
	);
};

export default Input;