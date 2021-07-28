import React from 'react';
import {
  View,
} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';


const LinearContainer = ({style,children}) => {

	return (
	<LinearGradient
         colors={['#53B5C3', '#B9DCDC', '#FFD5DF' ]}
        style={[style,{flex:1}]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0.5 }}
   >
		{children}
	</LinearGradient>



	);
};

export default LinearContainer;

