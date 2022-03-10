import React, { useContext, useState } from 'react';
import { Bold, Regular, Light} from '../common/Text';
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
import WeeklyFruit from './WeeklyFruit';
import Icon from 'react-native-vector-icons/Octicons';
import weekInfo from '../../context/actions/weekInfo';
import { FEEDS, PREGNANCYC, PREGNANCYS } from '../../constants/routeNames';


import Tabs from './InfoTab';
import Link from '../../components/common/Link';
import { WEEKS } from '../../constants/routeNames';
import LoadingComponent from '../common/Loading';







const PregnancyComponent = ({weekParam}) => {
  const [week,setWeek]= useState(null);
  const [nextWeek,setNext]= useState(null);
  const [prevWeek,setPrev]= useState(null);
  const navigate= useNavigation();

  const [survey,setSurvey] = useState(null);
  const [tips,setTips] = useState([]);
  const [iconsQ,setIconsQ] = useState(["apple_pink"]);
  const [iconsT,setIconsT] = useState(["calendar_green"]);

  const [answers,setAnswers] = useState([]);
  const [questions,setQuestions] = useState([]);

  const [length,setLength]= useState(null);
  const [weight,setWeight]= useState(null);
  const [weightUnit,setWeightUnit]= useState(null);
  const [fruit,setFruit]= useState(null);
  const [bebe, setBebe] = useState(null);
  const [cuerpo,setCuerpo]= useState(null);
  const [sintomas,setSintomas]= useState(null);
  const [name,setName]= useState(null);



    const {
      authDispatch,
      authState: {loading},
      } = useContext(GlobalContext); 

  const {params} = useRoute();
  
  const getSocial = async (week) => {
    const userString = await AsyncStorage.getItem('user');

    const baby = await AsyncStorage.getItem("bebe_"+week);
    const body = await AsyncStorage.getItem("cuerpo_"+week);
    const symptoms = await AsyncStorage.getItem("sintomas_"+week);

    const fruta = await AsyncStorage.getItem("fruit_"+week);
    const largo = await AsyncStorage.getItem("length_"+week);
    const peso = await AsyncStorage.getItem("weight_"+week);
    const unidad = await AsyncStorage.getItem("unit_"+week);

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
    
    const iconsTAS = await AsyncStorage.getItem("tipIcons_"+week);
    const iconsQAS = await AsyncStorage.getItem("questionIcons_"+week);

    /**********BABY STATS***********/
    if(fruta !== null){
      setFruit(JSON.parse(fruta));
     } 
     if(largo !== null){
      setLength(JSON.parse(largo));
     } 
     if(peso !== null){
      setWeight(JSON.parse(peso));
     } 
     if(unidad !== null){
      setWeightUnit(JSON.parse(unidad));
     } 



    /**********DASHBOARD***********/
   
    if(baby !== null){
      setBebe(JSON.parse(baby));
     } 
     if(body !== null){
      setCuerpo(JSON.parse(body));
     } 
     if(symptoms !== null){
      setSintomas(JSON.parse(symptoms));
     } 
     



    /**********QUESTION & ANSWER 1***********/
    if(q1AS !== null){
      setQuestions(questions => [...questions,q1AS]);
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

      /**********ICONS QUESTIONS**********/
    if(iconsQAS !== null){
      setIconsQ(JSON.parse(iconsQAS));
     }  

       /**********ICONS TIPS**********/
       if(iconsTAS !== null){
        setIconsT(JSON.parse(iconsTAS));

       }  

    



   

    if(userString){
      setName(userString);
  } else {setName("Mamá")}

  
  }

    React.useEffect(() => {
      if(params){
        console.log(params.week)
        setWeek(params.week);
        setNext(params.week+1);
        setPrev(params.week-1);
        social(params.week)(authDispatch); 
        weekInfo(params.week)(authDispatch);
        getSocial(params.week);
      } else {
  
      setWeek(weekParam);
      setNext(JSON.parse(weekParam)+1);
      setPrev(weekParam-1);
      social(weekParam)(authDispatch); 
      weekInfo(weekParam)(authDispatch);
      getSocial(weekParam);
      }
    
      }, [params]);
    
      const titleNext = "Semana " + nextWeek + " ";
      const titlePrev = " Semana " + prevWeek;
     
    


  
    return (
  
         
<LinearContainer style={{flexGrow:1, alignItems:'stretch',padding:5}} >
{/* <LoadingComponent visible={loading}/> */}

<ScrollView contentContainerStyle={{ flexGrow: 1 }}
 nestedScrollEnabled = {true}
 >
  
  <View style={styles.header}>
  
 
      <Bold style={styles.heading}>Hola {name},</Bold>
      <View style={styles.subheader}>
          <Regular style={styles.subheading} >Estás en tu </Regular>
          <TouchableOpacity onPress={() => {navigate.navigate(WEEKS);}} style={{zIndex:1}}>
          <Link icon={true}  onPress={() => {navigate.navigate(WEEKS);}}style={{fontSize:20}}>Semana {week}
          </Link></TouchableOpacity>
      </View>
      <View style={{flexDirection:"row", justifyContent:"space-between"}}> 
      
 {prevWeek > 4 && <TouchableOpacity onPress={() => {
   navigate.navigate(PREGNANCYS,{week: prevWeek});
   }} style={{zIndex:1, marginHorizontal:10}}>
  <Icon name="chevron-left" color={colors.off_white} size={40} />
  </TouchableOpacity> }
  {nextWeek < 42 && <TouchableOpacity style={{borderWidth:1}}onPress={() => {
     navigate.navigate(PREGNANCYS,{week: nextWeek});
    }} style={{ zIndex:1,marginHorizontal:10}}>
  <Icon name="chevron-right" color={colors.off_white} size={40} />
  </TouchableOpacity> }
     </View>
     
  </View>


<View>

<WeeklyFruit fruit={fruit} weight={weight} weightUnit={weightUnit} length={length} week={week}/>
 
{/* <Regular>Tu bebe esta como: {fruit}; {weight} {weightUnit}; {length} cm</Regular> */}
{/* <Fruit fruit={fruit} style={{position:'absolute'}}/> */}

<Tabs baby={bebe} body={cuerpo} symptoms={sintomas}/>
{/* <Bold> Tu Bebe: </Bold> 
<Regular> {bebe}</Regular>
<Bold> Tu Cuerpo: </Bold> 
<Regular> {cuerpo}</Regular>
<Bold> Tu Sintomas: </Bold> 
<Regular> {sintomas}</Regular> */}
 


  {/*********TIPS**********/}
 
  <CustomCard containerStyle={styles.cardShadow} titleStyle={styles.cardTitle} center={true} title="¡Algunos TIPS que podrían ayudarte!">
  {/* <ScrollView horizontal={true} style={{flexDirection:'row',elevation:20,}}> 
   <ImgAccordion icon={iconsT[0]} data={tips[0]}/> 
   {tips[1] && <ImgAccordion icon={iconsT[1]}  data={tips[1]}/>}
   {tips[2] && <ImgAccordion icon={iconsT[2]} data={tips[2]}/>}
   {tips[3]!==tips[0] ? <></> : <ImgAccordion icon={iconsT[3]}  data={tips[3]}/>} 
    </ScrollView>*/}
   <Accordion line ={true} data={tips[0]} icon={iconsT[0]} week={week} />
   {tips[1]&&  <Accordion line ={true} data={tips[1]} icon={iconsT[1]} week={week}  />}
   {tips[2]&&  <Accordion line ={true} data={tips[2]} icon={iconsT[2]} week={week} />}
   {tips[3]!==tips[0] ? <Accordion line ={true} data={tips[3]} icon={iconsT[3]} week={week}/> : <></> }


 
  </CustomCard>
  
 
 

  {/*********FAQ**********/}
  <CustomCard containerStyle={styles.cardShadow}  titleStyle={styles.cardTitle} center={true} title="Preguntas y respuestas frecuentes">
    <Accordion line ={true} data={answers[0]} icon={iconsQ[0]} week={week} title={questions[0]} />
    {questions[1]&&  <Accordion line ={true} data={answers[1]} icon={iconsQ[1]} title={questions[1]} />}
    {questions[2] &&  <Accordion line ={true} data={answers[2]} icon={iconsQ[2]}  title={questions[2]} />}
    {questions[3]!==questions[0] ?   <Accordion line ={true} data={answers[3]} icon={iconsQ[3]} title={questions[3]} /> : <></> }

  </CustomCard>

 
  {/*********BUTTONS**********/}
  <View style={{flexDirection:"row", marginHorizontal:10,justifyContent:"space-between"}}> 
  {prevWeek > 4 && 
      <CustomButton gradient={true} style={{}} leftarrow={true} title={titlePrev} 
      onPress={() => {
        navigate.navigate(PREGNANCYS,{week: prevWeek});
        }}/> 
    }
  {nextWeek < 42 && 
      <CustomButton gradient={true} style={{}} rightarrow = {true} title={titleNext} 
      onPress={() => {
        navigate.navigate(PREGNANCYS,{week: nextWeek});
        }} />

    }
  </View>
  </View>

  </ScrollView>

</LinearContainer>

     
  
     
    );
  };


export default PregnancyComponent;


