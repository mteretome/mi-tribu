import React from 'react';
import { Bold} from '../common/Text';
import LinearContainer from '../common/LinearContainer';
import CustomCard from '../common/CustomCard';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import colors from '../../assets/theme/colors';
import SimpleIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from '../common/CustomButton';
import { SETTINGS } from '../../constants/routeNames';
import { useNavigation } from '@react-navigation/native';
import { Avatar } from 'react-native-elements';


const SocialComponent = () => {
  const navigate= useNavigation();
    return (
      <LinearContainer style={{flex:1, alignItems:'stretch'}} >
        <View style={{paddingVertical:25,paddingHorizontal:20,backgroundColor:colors.tribu_green,flexDirection:'row',justifyContent:'space-between'}}>
          <Bold style={{color:colors.white,fontSize:24,left:150}}>Social
          </Bold>
          <TouchableOpacity onPress={() => {navigate.navigate(SETTINGS)}}>
          <Avatar  rounded  
            // source={require('../../assets/images/pink/lady2.png')}
            icon={{name: 'user', type: 'font-awesome'}}
            size="small"   onPress={() => console.log("Works!")}  activeOpacity={0.7}
            containerStyle={{borderColor:colors.white,borderWidth:2,}}
            overlayContainerStyle={{backgroundColor: colors.tribu_pink}}/>
          </TouchableOpacity>
          
          </View>
          <ScrollView style={{padding:5}}>

        
        
       
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
      </ScrollView>
      </LinearContainer>
    );
  };


export default SocialComponent;


