import React from 'react';
import {View,TouchableOpacity} from 'react-native';
import colors from '../../assets/theme/colors';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import styles from './styles';
import Link from '../common/Link';
import {Bold,Light} from '../common/Text';
import Icon from 'react-native-vector-icons/Ionicons';



const RecoverComponent= ({swipe}) => {
	return (
    
			<View>
        <TouchableOpacity style={{alignSelf:"flex-start", position:'absolute'}} 
          onPress={() => {swipe(-1)}}>
          <Icon name="arrow-back" size={25} color={colors.grey_lightest} />
        </TouchableOpacity> 
        <View style={styles.heading}>
    			<Bold style={styles.title}>Recuperar contraseña</Bold>
          <Light style={styles.subsixteen}>Ya te envíamos un código, ingrésalo abajo.</Light>
  		  </View>

      <View style={styles.inputContainer}>
        <Input placeholder="Código de Seguridad"/>
        
        <CustomButton title="Recordar mi contraseña" gradient={true}
       onPress={() => swipe(1) }/>
      </View>

        <View style={[styles.footer,{flexDirection:'row',alignSelf: 'center',}]}>
          <Light style={styles.lightText}>¿Aún no recibes el código? </Light>
          <Link onPress={() => swipe(-1) }>Reenvíalo.</Link>
      </View>
      </View>

	);
};



export default RecoverComponent;

