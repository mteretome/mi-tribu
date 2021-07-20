import React from 'react';
import {
  View,
} from 'react-native';
import styles from './styles'


const Container = ({style,children,flex}) => {
	const getFlex =() =>{
		if (flex == null){
			return 1;
		}
		else {
			return flex;
		}

	};

	return (
	<View style={
		[style,
		{flex: getFlex()}]
	}>
	{children}
	</View>
	);
};

export default Container;