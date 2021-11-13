import React, { useState } from 'react';
import { Bold, Light} from '../common/Text';
import LinearContainer from '../common/LinearContainer';
import CustomCard from '../common/CustomCard';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import colors from '../../assets/theme/colors';
import CustomButton from '../common/CustomButton';
import { SETTINGS } from '../../constants/routeNames';
import { useNavigation } from '@react-navigation/native';
import { Avatar } from 'react-native-elements';
import styles from './styles';
import { useRoute } from '@react-navigation/core';
import Accordion from '../common/Accordion';






const SocialComponent = () => {
  const navigate= useNavigation();

  const {params} = useRoute();
    React.useEffect(() => {
      if (params) {		
        setWeek(JSON.stringify(params.week));
        setNext(JSON.stringify(params.week+1));
        setPrev(JSON.stringify(params.week-1));
      }
      }, [params]);
      const [week,setWeek]= useState(null);
      const [nextWeek,setNext]= useState(null);
      const [prevWeek,setPrev]= useState(null);
      const titleNext = "Semana " + nextWeek + " ";
      const titlePrev = " Semana " + prevWeek;

  
    return (
      <LinearContainer style={{flex:1, alignItems:'stretch'}} >
      <ScrollView style={{padding:5, marginBottom:10}}>
     
        
        
       
        {/* <CustomCard title="Tu Círculo en tu Whatsapp" 
        content={`Te agregamos a una comunidad íntima de futuras mamás como tú! 
        Comparte, Comenta y Conecta.`}
        center={false}> 
        <MaterialIcons name="whatsapp" color="green"size={50}/>
        </CustomCard> */}
        <CustomCard containerStyle={styles.cardShadow} titleStyle={styles.cardTitle} center={true} title="¡Algunos TIPS que podrían ayudarte!">
            <ScrollView horizontal={true} style={{flex:1,flexDirection:'row'}}>
          <CustomCard containerStyle={styles.cardShadow} center={true} ></CustomCard>
          <CustomCard containerStyle={styles.cardShadow} center={true} ></CustomCard>
          <CustomCard containerStyle={styles.cardShadow} center={true} ></CustomCard>
          <CustomCard containerStyle={styles.cardShadow} center={true} ></CustomCard>

          </ScrollView>
        
        </CustomCard>
        
        
        <CustomCard containerStyle={styles.cardShadow}  titleStyle={styles.cardTitle} center={true} title="Preguntas y respuestas frecuentes">
          
          <Accordion line ={true} data="respuesta" title="¿Que son las arañitas?" image="path"/>
          <Accordion line ={true} data="respuesta" title="¿Que son las arañitas?" image="path"/>
          <Accordion line ={true} data="respuesta" title="¿Que son las arañitas?" image="path"/>
          <Accordion line ={true} data="respuesta" title="¿Que son las arañitas?" image="path"/>

    
        </CustomCard>

        <CustomCard  containerStyle={styles.cardShadow}  titleStyle={styles.cardTitle} center={true} title="Pregunta">
          <CustomButton gradient={false} textStyle={{color:colors.grey_light}} style={{borderRadius:10}} bgColor="pink" title="respuesta"></CustomButton>
        

        </CustomCard>
        
        <CustomCard containerStyle={styles.cardShadow} titleStyle={styles.cardTitle} center={true} title="Meme de la semana">
        <ScrollView horizontal={true} containerStyler={{alignItems:'center'}} style={{flex:1,flexDirection:'row'}}>
          <CustomCard containerStyle={styles.cardShadow} center={true} ></CustomCard>
          </ScrollView>
        </CustomCard>
        
        
        
        <View style={{flexDirection:'row',alignSelf:'center'}}> 
        {prevWeek > 4 && <CustomButton gradient={true} style={{marginLeft:5}} leftarrow={true} title={titlePrev} onPress={() => {navigate.navigate(prevWeek);}}/> }
        {nextWeek < 42 && <CustomButton gradient={true} style={{marginLeft:5}} rightarrow = {true} title={titleNext} onPress={() => {navigate.navigate(nextWeek);}} />}
        </View>

      </ScrollView>
      </LinearContainer>

     
    );
  };


export default SocialComponent;


