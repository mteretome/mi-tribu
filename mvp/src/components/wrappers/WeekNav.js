
import React from 'react';
import { Bold } from '../common/Text';
import colors from '../../assets/theme/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



const Cuerpo = () => {
    return (
        <Bold>Cuerpo</Bold>
    );
  };
const Sintomas = () => {
    return (
        <Bold>Sintomas</Bold>
    );
  };
  const Bebe = () => {
    return (
        <Bold>Bebe</Bold>
    );
  };


const WeekNav = () => {
	const Tab = createMaterialTopTabNavigator();
	return (

    <Tab.Navigator 
        initialRouteName={'Tu Bebe'}
        
    >
         <Tab.Screen 
            name={'Tu Bebe'} 
            component={Bebe}
            />
        <Tab.Screen 
            name={'Tu Cuerpo'} 
            component={Cuerpo}
            
            />
        <Tab.Screen 
            name={'Tus Síntomas'} 
            component={Sintomas}
            
            />
       
	</Tab.Navigator>
  );
};

const WeekNavigator = () => {
  return (
    <WeekNav/>    
  );
};

export default WeekNavigator;