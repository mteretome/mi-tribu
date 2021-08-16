import React from 'react';
import {View} from 'react-native';
import styles from './styles'


const NoScrollContainer = ({style,children}) => {

	return (
	<View style={[style,styles.whiteBox,styles.scrollBox]}>
     
      {children}
  </View>
	);
};

export default NoScrollContainer;
