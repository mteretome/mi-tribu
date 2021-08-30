import React from 'react';
import { Bold} from '../common/Text';
import LinearContainer from '../common/LinearContainer';
import CustomCard from '../common/CustomCard';
import { View, TouchableOpacity } from 'react-native';
import colors from '../../assets/theme/colors';
import SimpleIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from '../common/CustomButton';
import { SETTINGS } from '../../constants/routeNames';
import { useNavigation } from '@react-navigation/native';


const SocialComponent = () => {
  const navigate= useNavigation();
    return (
      <LinearContainer style={{flex:1, alignItems:'stretch'}} >
        <View style={{padding:16,backgroundColor:colors.tribu_green,flexDirection:'row',justifyContent:'space-between'}}>
          <Bold style={{color:colors.white,fontSize:20,left:165}}>Social
          </Bold>
          <TouchableOpacity onPress={() => {navigate.navigate(SETTINGS)}}>
          <SimpleIcons name="settings" color={colors.off_white} 
          size={25} style={{left:10}} > </SimpleIcons></TouchableOpacity>
          
          </View>
       
        <CustomCard title="Tu Círculo en tu Whatsapp" 
        content={`Te agregamos a una comunidad íntima de futuras mamás como tú! 
        Comparte, Comenta y Conecta.`}
        center={false}> 
        <MaterialIcons name="whatsapp" color="green"size={50}/>
        </CustomCard>
        <CustomCard center={true} title="¡Algunos TIPS que podrían ayudarte!"></CustomCard>
        <CustomCard center={true} title="Meme de la semana"></CustomCard>
        <CustomCard center={true} title="Preguntas y respuestas frecuentes"></CustomCard>
        <CustomCard center={true} title="Weekly Survey"></CustomCard>
        <View style={{flexDirection:'row'}}>
        <CustomButton gradient={false} style={{marginLeft:5,marginRight:5}} title="< Semana 9"></CustomButton>
        <CustomButton gradient={false} style={{marginRight:5,marginLeft:5}} title="Semana 10 >"></CustomButton>
        </View>

      </LinearContainer>
    );
  };


export default SocialComponent;


