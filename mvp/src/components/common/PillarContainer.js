import React from 'react';
import {
  View,
} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';


const PillarContainer = ({style,children}) => {


	return (
	<LinearGradient
        colors={['#53B5C3', '#B9DCDC', '#EDC6FF' ]}
        style={[style,{flex:1}]}
        start={{ x: 0.7, y: 0 }}
   >
		{children}
	</LinearGradient>


	);
};

export default PillarContainer;
