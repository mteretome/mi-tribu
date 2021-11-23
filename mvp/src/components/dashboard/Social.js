import React, { useContext, useState } from 'react';
import { Bold, Light} from '../common/Text';
import LinearContainer from '../common/LinearContainer';
import CustomCard from '../common/CustomCard';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import colors from '../../assets/theme/colors';
import CustomButton from '../common/CustomButton';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { useRoute } from '@react-navigation/core';
import Accordion from '../common/Accordion';
import social from '../../context/actions/social';
import { GlobalContext } from '../../context/Provider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MemeSocial from './MemeSocial';
import ImgAccordion from '../common/ImgAccordion';
import WeeklySurvey from './WeeklySurvey';







const SocialComponent = () => {
  const [week,setWeek]= useState(null);
  const [nextWeek,setNext]= useState(null);
  const [prevWeek,setPrev]= useState(null);
  const navigate= useNavigation();

  const [survey,setSurvey] = useState(null);
  const [faq,setFaq] = useState(null);
  const [tips,setTips] = useState(null);
  const [icons,setIcons] = useState(null);


  const {
    authDispatch,
    } = useContext(GlobalContext); 

  const {params} = useRoute();
  
  const getSocial = async (week) => {
  
    const surveyStorage = await AsyncStorage.getItem("survey_"+week);
    const faqStorage = await AsyncStorage.getItem("q&a_"+week);
    const tipsStorage = await AsyncStorage.getItem("tip_"+week);

    
    if(surveyStorage !== null){
      setSurvey(JSON.parse(survey));
      console.log("This is the survey-->",survey);
    }  else {
      setSurvey("Hubo un problema.")
    }  
    if(faqStorage !== null){
      setFaq(JSON.parse(faqStorage));
       console.log("This is the faq-->",faq);
     }   else {
      setFaq("Hubo un problema.")
    }  
     if(tipsStorage !== null){
      setTips(JSON.parse(tipsStorage));
       console.log("This is the tips-->",tips);
   
     }   else {
      setTips("Hubo un problema.")
    }  
  }

    React.useEffect(() => {
      if (params) {		
        setWeek(JSON.stringify(params.week));
        setNext(JSON.stringify(params.week+1));
        setPrev(JSON.stringify(params.week-1));
      }
      social(JSON.parse(week))(authDispatch); 
      getSocial(week);
      }, [params,week]);
    
      const titleNext = "Semana " + nextWeek + " ";
      const titlePrev = " Semana " + prevWeek;
      const next = nextWeek+"S";
      const prev = prevWeek+"S";


  
    return (
      <LinearContainer style={{flex:1, alignItems:'stretch',}} >
    
        <ScrollView style={{padding:5, marginBottom:10,marginHorizontal:10}}>
     
    
       
        {/* <CustomCard title="Tu Círculo en tu Whatsapp" 
        content={`Te agregamos a una comunidad íntima de futuras mamás como tú! 
        Comparte, Comenta y Conecta.`}
        center={false}> 
        <MaterialIcons name="whatsapp" color="green"size={50}/>
        </CustomCard> */}
        {/*********TIPS**********/}
       
        <CustomCard containerStyle={styles.cardShadow} titleStyle={styles.cardTitle} center={true} title="¡Algunos TIPS que podrían ayudarte!">
        <ScrollView horizontal={true} style={{flexDirection:'row',elevation:20,}}>
         <ImgAccordion icon="apple_pink" week={week} data={faq}/> 
         <ImgAccordion icon="pill_green" wseek={week} data={faq}/>
        </ScrollView>
        </CustomCard>
        
       
       

        {/*********FAQ**********/}
        <CustomCard containerStyle={styles.cardShadow}  titleStyle={styles.cardTitle} center={true} title="Preguntas y respuestas frecuentes">
          <Accordion line ={true} data={faq} icon="apple_pink" week={week} title="¿Que son las arañitas?" image="path"/>
        </CustomCard>

        {/*********SURVEY**********/} 
        <WeeklySurvey containerStyle={styles.cardShadow}  titleStyle={styles.cardTitle} question="Pregunta" multipleChoice={true}/>
             
        {/*********MEME**********/}
       <CustomCard containerStyle={styles.cardShadow} meme={true}
        titleStyle={styles.cardTitle} center={true} title="Meme de la Semana">
         <MemeSocial week={week} />
       </CustomCard>
        
        {/*********BUTTONS**********/}
        <View style={{flexDirection:'row',alignSelf:'center'}}> 
        {prevWeek > 4 && <CustomButton gradient={true} style={{marginLeft:5}} leftarrow={true} title={titlePrev} onPress={() => {navigate.navigate(prev);}}/> }
        {nextWeek < 42 && <CustomButton gradient={true} style={{marginLeft:5}} rightarrow = {true} title={titleNext} onPress={() => {navigate.navigate(next);}} />}
        </View>

      </ScrollView>
      </LinearContainer>

     
    );
  };


export default SocialComponent;


