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
  const [tips,setTips] = useState([]);
  const [icons,setIcons] = useState(null);
  const [answers,setAnswers] = useState([]);
  const [questions,setQuestions] = useState([]);




  const {
    authDispatch,
    } = useContext(GlobalContext); 

  const {params} = useRoute();
  
  const getSocial = async (week) => {
  
    const surveyAS = await AsyncStorage.getItem("survey_"+week);
    const q1AS = await AsyncStorage.getItem("q1_"+week);
    const a1AS = await AsyncStorage.getItem("a1_"+week);
    const q2AS = await AsyncStorage.getItem("q2_"+week);
    const a2AS = await AsyncStorage.getItem("a2_"+week);
    const q3AS = await AsyncStorage.getItem("q3_"+week);
    const a3AS = await AsyncStorage.getItem("a3_"+week);
    const q4AS = await AsyncStorage.getItem("q4_"+week);
    const a4AS = await AsyncStorage.getItem("a4_"+week);
    const tip1AS = await AsyncStorage.getItem("tip1_"+week);
    const tip2AS = await AsyncStorage.getItem("tip2_"+week);
    const tip3AS = await AsyncStorage.getItem("tip3_"+week);
    const tip4AS = await AsyncStorage.getItem("tip4_"+week);


    
    if(surveyAS !== null){
      setSurvey(surveyAS);
    }  
    /**********QUESTION & ANSWER 1***********/
    if(q1AS !== null){
      setQuestions(questions => [...questions, q1AS]);
     }   
    if(a1AS !== null){
      setAnswers(answers => [...answers, a1AS]);
     }   
    /**********QUESTION & ANSWER 2***********/
    if(q2AS !== null){
      setQuestions(questions => [...questions, q2AS]);
     }  
    if(a2AS !== null){
      setAnswers(answers => [...answers, a2AS]);
     }  
    /**********QUESTION & ANSWER 3***********/
    if(q3AS !== null){
      setQuestions(questions => [...questions, q3AS]);
     }  
    if(a3AS !== null){
      setAnswers(answers => [...answers, a3AS]);
     }  
    /**********QUESTION & ANSWER 4***********/
    if(q4AS !== null){
      setQuestions(questions => [...questions, q4AS]);
     }  
    if(a4AS !== null){
      setAnswers(answers => [...answers, a4AS]);
     }   
      /**********TIP  1***********/
     if(tip1AS !== null){
      setTips(tips => [...tips, tip1AS]);
     }  
    /**********TIP  2**********/
    if(tip2AS !== null){
      setTips(tips => [...tips, tip2AS]);
     }  
    /**********TIP  3***********/
    if(tip3AS !== null){
      setTips(tips => [...tips, tip3AS]);
     }   
    /**********TIP  4***********/
    if(tip4AS !== null){
      setTips(tips => [...tips, tip4AS]);
     }  
    console.log("This is the questions-->",questions);
    console.log("This is the answers-->",answers);

    console.log("This is the tips-->",tips);

  }

    React.useEffect(() => {
      if (params) {		
        setWeek(JSON.stringify(params.week));
        setNext(JSON.stringify(params.week+1));
        setPrev(JSON.stringify(params.week-1));
      }
      social(JSON.parse(params.week))(authDispatch); 
      getSocial(params.week);
      }, [params]);
    
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
         <ImgAccordion icon="apple_pink" week={week} data={tips[0]}/> 
         {tips[1] && <ImgAccordion icon="apple_pink" wseek={week} data={tips[1]}/>}
         {tips[2] && <ImgAccordion icon="apple_pink" wseek={week} data={tips[2]}/>}
         {tips[3] && <ImgAccordion icon="apple_pink" wseek={week} data={tips[3]}/>}

        </ScrollView>
        </CustomCard>
        
       
       

        {/*********FAQ**********/}
        <CustomCard containerStyle={styles.cardShadow}  titleStyle={styles.cardTitle} center={true} title="Preguntas y respuestas frecuentes">
          <Accordion line ={true} data={answers[0]} icon="apple_pink" week={week} title={questions[0]} />
          {questions[1]&&  <Accordion line ={true} data={answers[1]} icon="apple_pink" week={week} title={questions[1]} />}
          {questions[2] &&  <Accordion line ={true} data={answers[2]} icon="apple_pink" week={week} title={questions[2]} />}
          {questions[3] &&  <Accordion line ={true} data={answers[3]} icon="apple_pink" week={week} title={questions[3]} />}

        </CustomCard>

        {/*********SURVEY**********/} 
        <WeeklySurvey containerStyle={styles.cardShadow}  uri={survey} titleStyle={styles.cardTitle} multipleChoice={true}/>
             
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


