import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import colors from '../../assets/theme/colors';
import Container from '../common/Container';
import WhiteContainer from '../common/WhiteContainer';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import styles from './styles'
import { RECOVER } from '../../constants/routeNames';
import { useNavigation } from '@react-navigation/native';



const OneComponent= () => {
  const navigate= useNavigation();
	return (
    
		  <View><Text>Creada para ti</Text></View>
		
	);
};



export default OneComponent;

