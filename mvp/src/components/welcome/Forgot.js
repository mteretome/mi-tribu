import React from 'react';
import {View,TouchableOpacity} from 'react-native';
import colors from '../../assets/theme/colors';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import styles from './styles'
import {Bold,Light} from '../common/Text';
import Icon from 'react-native-vector-icons/Ionicons';


const ForgotComponent= ({swipe}) => {
	return (
    
			<View>
        <TouchableOpacity style={{alignSelf:"flex-start", position:'absolute'}} 
          onPress={() => {swipe(-1)}}>
          <Icon name="arrow-back" size={25} color={colors.grey_lightest} />
        </TouchableOpacity> 
        <View style={styles.heading}>
    			<Bold style={styles.title}>Recuperar contraseña</Bold>
          <Light style={styles.subtitle}>Te enviaremos un código a tu celular o email.</Light>
  		  </View>

      <View style={styles.inputContainer}>
        <Input placeholder="Email"/>
        <Light style={styles.subtitle}>o</Light>
        <Input placeholder="Celular"
        secureTextEntry={true}
        // error={'Either email or password is incorrect!'}
        />
        
        <CustomButton onPress={() => swipe(1) }
        title="Enviar código" gradient={true}/>
      </View>

      </View>
		
	);
};



export default ForgotComponent;

