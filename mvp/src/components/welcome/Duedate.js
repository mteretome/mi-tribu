import React, {useState} from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
import colors from '../../assets/theme/colors';
import WhiteContainer from '../common/WhiteContainer';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import styles from './styles'
import { LOGIN } from '../../constants/routeNames';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import Blob from '../../assets/images/svg/congrats.svg';




const DuedateComponent= ({toggleOverlay}) => {


  const [calc, setCalc] = useState(true);
  const toggle= () => {setCalc(!calc);};

  const BeforeCalc= () => {
      return (  
          <View>
             <View style={styles.heading}>
              <Text style={{color: colors.tribu_green, fontSize:24, fontWeight:'bold'}}>
              Calculadora de fecha de parto</Text>
              <Text style={styles.lightText}>¿Cuándo fue el primer día de tu último período?</Text>
          </View>
            <View style={{marginHorizontal:20}}>
              <Input placeholder="DD/MM/YYYY*"/>
              <Text style={styles.lightText}>Duracion habitual de tu ciclo:</Text>
              <Input placeholder="Dias*"/>
            
              <CustomButton style={{marginTop:10}} onPress={toggle} 
              title="Calcular" gradient={true}/>
            </View>
          </View>
      );
  };

 const AfterCalc= () => {
      return (  
          <View>
           <View style={styles.heading}>
             <View style={{marginVertical:20, alignItems:'center'}}>
              <Blob style={{position:'absolute', bottom:-40}}/>
              <Text style={{marginBottom:20,color: colors.tribu_green, fontSize:24, fontWeight:'bold'}}>
              Tu fecha estimada de parto* es</Text>
              <Text style={{marginBottom:20,color: colors.tribu_green, fontSize:36, fontWeight:'bold'}}>
              Diciembre 2, 2021</Text>        
            </View>
            </View>
            <CustomButton onPress={toggleOverlay}
             title="Continuar creando mi cuenta" gradient={true}/>
            <Text 
            style={{fontSize:16, textAlign:'center',color: colors.tribu_green,marginTop:10}}
            >*Recuerda que lo anterior es una estimación. 
            Siempre podrás actualizar tu fecha de parto en Configuraciones.</Text>
          </View>
      );
  };


	return (
 
			<View>
      <TouchableOpacity onPress={toggleOverlay}>
        <Icon
        name="x" size={40} 
        color={colors.grey_light} 
        style={{alignSelf:"flex-end"}}
        />
        </TouchableOpacity>
      
      {calc ? <BeforeCalc/> :
      <AfterCalc/> }
       

      </View>

		
	);
};






export default DuedateComponent;