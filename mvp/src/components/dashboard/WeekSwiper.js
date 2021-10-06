import React, {useRef} from 'react';
import {View} from 'react-native';

import Swiper from 'react-native-swiper';
import colors from '../../assets/theme/colors';
import Icon from 'react-native-vector-icons/Octicons';


import PregnancyComponent from './Pregnancy';
import styles from './styles';

const WeekSwiper= () => {
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
       
       
        <PregnancyComponent week={10}/>
        <PregnancyComponent week={11}/>
        <PregnancyComponent week={12}/>

       

      </Swiper>
		
	);
};


export default WeekSwiper;

