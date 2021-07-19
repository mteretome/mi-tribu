import React from 'react';
import {
  View,
} from 'react-native';
import styles from './styles'

const Container = ({style,children}) => {
	return (
	<View style={[styles.wrapper, style]}>
	{children}
	</View>
	);
};

export default Container;