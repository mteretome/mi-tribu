import React from 'react';
import {View,ScrollView} from 'react-native';
import styles from './styles'


const WhiteContainer = ({style,children}) => {

	return (
	<View style={[style,styles.whiteBox]}>
      <ScrollView style={styles.scrollBox}>
      {children}
      </ScrollView>
  </View>
	);
};

export default WhiteContainer;
