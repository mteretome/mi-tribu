import React, { useContext, useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Bold, Regular } from '../../components/common/Text';
import LinearContainer from '../../components/common/LinearContainer';
// import Bg from '../../assets/images/svg/pregnancy.svg';
import Bg from '../../assets/images/pregnancy.svg';


import styles from './styles';
import Link from '../../components/common/Link';
import WeeklyFruit from './WeeklyFruit';
import InfoTab from './InfoTab';
import { useNavigation } from '@react-navigation/native';
import { WEEKS } from '../../constants/routeNames';
import { Avatar } from 'react-native-elements';
import colors from '../../assets/theme/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GlobalContext } from '../../context/Provider';
import { useRoute } from '@react-navigation/core';
import weekInfo from '../../context/actions/weekInfo';
import Icon from 'react-native-vector-icons/Octicons';




const PregnancyComponent = () => {
  


  const navigate= useNavigation();
  const [weekNumber, setWeekNumber] = useState(null);
  const [length,setLength]= useState(null);
  const [weight,setWeight]= useState(null);
  const [weightUnit,setWeightUnit]= useState(null);
  const [fruit,setFruit]= useState(null);
  //
  const [bebe, setBebe] = useState(null);
  const [cuerpo,setCuerpo]= useState(null);
  const [sintomas,setSintomas]= useState(null);
  const [name,setName]= useState(null);
  const [week,setWeek]= useState(null);
  const [nextWeek,setNext]= useState(null);
  const [prevWeek,setPrev]= useState(null);
  const {
    authDispatch,
    } = useContext(GlobalContext); 
    const {params} = useRoute();
    React.useEffect(() => {
      if (params) {		
        setWeek(JSON.stringify(params.week));
        setNext(JSON.stringify(params.week+1));
        setPrev(JSON.stringify(params.week-1));
      }
      }, [params]);

  const getDashboard = async (week) => {

        
    const dashboard = await AsyncStorage.getItem("dashboard_"+week);
    const userString = await AsyncStorage.getItem('user');
   
    
    
    if(userString){
        setName(userString);
    }
    
    if(dashboard){
        setBebe(JSON.parse(dashboard).bebe);
        setCuerpo(JSON.parse(dashboard).cuerpo);
        setSintomas(JSON.parse(dashboard).sintomas);

    }

};

const getBabyMetric = async (week) => {
  
  const baby = await AsyncStorage.getItem("babystats_"+week);
  
  if(baby !== null){
    setWeekNumber(JSON.parse(baby)[0]);
    setLength(JSON.parse(baby)[1]);
    setWeight(JSON.parse(baby)[2]);
    setWeightUnit(JSON.parse(baby)[3]);
    setFruit(JSON.parse(baby)[4]);
    console.log("This is the data--> weekNumber: ",weekNumber ,"Length:",length, "wieght: ", weight, "weight unit: ", weightUnit,"fruit name: ", fruit );
    console.log("week is ------->", week);

  }    
}

useEffect(() => {
  weekInfo(JSON.parse(week))(authDispatch);
  getDashboard(week);
  getBabyMetric(week);
}, []);
 
    return (
    <>
    
      <LinearContainer style={{flex:1}}> 
      <Bg  height="100%" width="100%" style={{position:'absolute'}}/>
      {nextWeek < 42 && <TouchableOpacity style={{borderWidth:1}}onPress={() => {navigate.navigate(nextWeek);}} style={{position:'absolute', zIndex:1,right:5, top:100,margin:20}}>
        <Icon name="chevron-right" color={colors.off_white} size={40} />
        </TouchableOpacity> }
       {prevWeek > 4 && <TouchableOpacity onPress={() => {navigate.navigate(prevWeek);}} style={{position:'absolute',zIndex:1, left:5, top:100,margin:20}}>
        <Icon name="chevron-left" color={colors.off_white} size={40} />
        </TouchableOpacity> }
       
        
        <View style={styles.header}>
        
       
            <Bold style={styles.heading}>Hola {name},</Bold>
            <View style={styles.subheader}>
                <Regular style={styles.subheading} >Estás en tu </Regular>
                <TouchableOpacity onPress={() => {navigate.navigate(WEEKS);}} style={{zIndex:1}}>
                <Link icon={true}  onPress={() => {navigate.navigate(WEEKS);}}style={{fontSize:20}}>Semana {week}
                </Link></TouchableOpacity>
                
       
            </View>
           
            <Avatar  rounded  
            // source={require('../../assets/images/pink/lady2.png')}
            icon={{name: 'user', type: 'font-awesome'}}
            size="medium"   onPress={() => console.log("Works!")}  activeOpacity={0.7}
            containerStyle={{position:'absolute',right:0, top:5,borderColor:colors.white,borderWidth:2, shadowColor:colors.off_white,
              shadowOpacity: 1,
              elevation: 10,}}
            overlayContainerStyle={{backgroundColor: colors.tribu_pink}}/>
        </View>
        <WeeklyFruit fruit={fruit} weight={weight} weightUnit={weightUnit} length={length} week={week}/>

        <InfoTab baby={bebe} body={cuerpo} symptoms={sintomas}/>
        
      </LinearContainer> 
      </>
    );
  };


export default PregnancyComponent;