import React from 'react';
import {View,TextInput,Text} from 'react-native';
import styles from './styles'
import colors from '../../assets/theme/colors';

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
				{borderColor: getBorderColor()}]}
			onChangeText={onChangeText}
			placeholderTextColor={colors.grey_lightest}
			value={value}
			{...props}
		/>
		{error && <Text style={styles.error}>{error}</Text>}
	</View>
	
	);
};

export default Input;