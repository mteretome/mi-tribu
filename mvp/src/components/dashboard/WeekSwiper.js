import React, {useContext, useEffect, useRef} from 'react';
import {View} from 'react-native';

import Swiper from 'react-native-swiper';
import colors from '../../assets/theme/colors';
import Icon from 'react-native-vector-icons/Octicons';


import PregnancyComponent from './Pregnancy';
import styles from './styles';
import { GlobalContext } from '../../context/Provider';
import AsyncStorage from '@react-native-async-storage/async-storage';


const WeekSwiper= ({name,week}) => {
	const swiper = useRef(null);
  

	return (
		
        


		<Swiper 
        ref={swiper}
		showsButtons={true} loop={false}
        showsPagination={false}
        scrollEnabled={false}
        buttonWrapperStyle={styles.buttons}
        nextButton={ <Icon name="chevron-right" color={colors.off_white} size={35} style={{marginLeft:30,marginVertical:80}}/>}
        prevButton={ <Icon name="chevron-left" color={colors.off_white} size={35} style={{marginRight:30,marginVertical:80}}/>   }
		>
       
       
        <PregnancyComponent week={5} name={name}/>
        <PregnancyComponent week={week} name={name}/>
        <PregnancyComponent week={7} name={name}/>

       

      </Swiper>
		
	);
};


export default WeekSwiper;

