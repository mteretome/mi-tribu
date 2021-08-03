import React from 'react';
import {View,TouchableOpacity} from 'react-native';
import colors from '../../assets/theme/colors';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import styles from './styles'
import {Bold,Light} from '../common/Text';
import Icon from 'react-native-vector-icons/Ionicons';


const NewComponent= ({swipe}) => {
	return (
    
			<View>
        <TouchableOpacity style={{alignSelf:"flex-start", position:'absolute'}} 
              onPress={() => {swipe(-1)}}>
              <Icon name="arrow-back" size={25} color={colors.grey_lightest} />
        </TouchableOpacity> 
        <View style={styles.heading}>
    			<Bold style={styles.title}>Nueva contraseña</Bold>
          <Light style={styles.subtitle}>Por favor ingresa tu nueva contraseña</Light>
  		  </View>

      <View style={styles.inputContainer}>
        <Input placeholder="Nueva contraseña"
        secureTextEntry={true}/>
        <Input placeholder="Repite tu nueva contraseña"
        secureTextEntry={true}/>
        
        <CustomButton onPress={() => swipe(1) }
         title="Guardar y Continuar" gradient={true}/>
      </View>

      </View>
		
	);
};



export default NewComponent;