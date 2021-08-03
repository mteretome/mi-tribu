import React, {useState} from 'react';
import {View,TouchableOpacity} from 'react-native';
import colors from '../../assets/theme/colors';
import WhiteContainer from '../common/WhiteContainer';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import styles from './styles'
import { LOGIN } from '../../constants/routeNames';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import Blob from '../../assets/images/svg/congrats.svg';
import {Bold,Regular,ExtraBold} from '../common/Text';




const DuedateComponent= ({toggleOverlay}) => {


  const [calc, setCalc] = useState(true);
  const toggle= () => {setCalc(!calc);};

  const BeforeCalc= () => {
      return (  
          <View>
             <View style={styles.heading}>
              <Bold style={{color: colors.tribu_green, fontSize:24,}}>
              Calculadora de fecha de parto</Bold>
             
          </View>
            <View style={{marginHorizontal:20}}>
             <Regular style={styles.lightText}>¿Cuándo fue el primer día de tu último período?</Regular>
              <Input placeholder="DD/MM/YYYY*"/>
              <Regular style={styles.lightText}>Duracion habitual de tu ciclo:</Regular>
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
              <Blob style={{position:'absolute', bottom:-60}}/>
              <Bold style={{marginBottom:20,color: colors.tribu_green, fontSize:24}}>
              Tu fecha estimada de parto* es</Bold>
              <ExtraBold style={{marginBottom:20,color: colors.tribu_green, fontSize:36}}>
              Diciembre 2, 2021</ExtraBold>        
            </View>
            </View>
            <CustomButton onPress={toggleOverlay}
             title="Continuar" gradient={true}/>
            <Regular 
            style={{fontSize:16, textAlign:'center',color: colors.tribu_green,marginTop:10}}
            >*Recuerda que lo anterior es una estimación. 
            Siempre podrás actualizar tu fecha de parto en</Regular> 
            <Bold style={{fontSize:16, textAlign:'center',color: colors.tribu_green,marginBottom:10}}>
            configuraciones.</Bold>
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