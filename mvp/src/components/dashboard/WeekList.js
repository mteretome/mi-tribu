import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity,FlatList } from 'react-native';
import LinearContainer from '../../components/common/LinearContainer';
import Bg from '../../assets/images/svg/pregnancy.svg';
import Icon from 'react-native-vector-icons/Octicons';
import colors from '../../assets/theme/colors';
import { PREGNANCY, WEEK_NUMBERS } from '../../constants/routeNames';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import CustomCard from '../common/CustomCard';
import Fruit from '../../assets/images/fruit_outline.svg';
import FruitGreen from '../../assets/images/fruit_green_outline.svg';
import { indexOf, sortedIndex } from 'lodash';
import AsyncStorage from '@react-native-async-storage/async-storage';
import setWeek from 'date-fns/setWeek';


const WEEKS_EX = [
  {
    id: "12",
    dates: "25 de Julio - 1 de Agosto",
    active: true
  },
  {
    id: "11",
    dates: "18 de Julio - 24 de Julio",
    active: true
  },
  {
    id: "10",
    dates: "11 de Julio - 17 de Julio",
    active: true
  },
  {
    id: "9",
    dates: "4 de Julio - 10 de Julio",
    active: false
  },
  {
    id: "8",
    dates: "27 de Junio - 3 de Julio",
    active: false
  },
  {
    id: "7",
    dates: "20 de Junio - 26 de Junio",
    active: false
  },
  {
    id: "6",
    dates: "13 de Junio - 19 de Junio",
    active: false
  },
  {
    id: "5",
    dates: "6 de Junio - 12 de Junio",
    active: false
  },

] 



const WeekList = ({weeks}) => {
  const navigate= useNavigation();
 
    return (
    
      <LinearContainer style={{flex:1,flexDirection:'row'}}>
        <Bg  width="100%" style={{position:'absolute',bottom:30}}/>
        <TouchableOpacity  onPress={() => {navigate.navigate(PREGNANCY)}} >
          <Icon name="chevron-left" color={colors.off_white} 
          size={50} style={{marginTop:40,marginLeft:25}} />
        </TouchableOpacity>

            <View style={{paddingHorizontal:20,flex:10}}>
              <FlatList
              data={weeks}
              renderItem = {({ item }) => 
                (
                  <View>
                     <View style={{
                          borderWidth:2, 
                          borderColor: 'rgba(255,255,255,0.8)',
                          backgroundColor: 'rgba(255,255,255,0.8)',
                          height:"100%",
                          marginLeft:30,
                          position:'absolute',
                          }}>
                          </View>
                  <TouchableOpacity style={styles.card}  onPress={() => {navigate.navigate(item.id)}}>
                            {item.active ? 
                            <CustomCard center={false}
                            activeCircle={item.active} week={true}
                             title={"Semana " +item.id} content={item.dates}
                             current={item.current}
                             titleStyle={{color:colors.tribu_green}}>
                            <FruitGreen/>
                            </CustomCard>
                            :
                            <CustomCard center={false}
                            activeCircle={item.active} week={true}
                             title={"Semana " +item.id} content={item.dates}
                             titleStyle={{color:colors.grey_dark}}>
                            <Fruit/>
                            </CustomCard>
                            }
                    
                  </TouchableOpacity>
                  </View>
                )
              }
              />
      </View>

      </LinearContainer>
    );
  };


export default WeekList;