import React, {useRef} from 'react';
import {View} from 'react-native';

import Swiper from 'react-native-swiper';
import colors from '../../assets/theme/colors';

import PregnancyComponent from './Pregnancy';

const WeekSwiper= () => {
	const swiper = useRef(null);
	return (
		

		<Swiper ref={swiper}
		showsButtons={true} loop={false}
        showsPagination={false}
        scrollEnabled={false}
		>

        <PregnancyComponent week={10}/>
        <PregnancyComponent week={11}/>
        <PregnancyComponent week={12}/>

       

      </Swiper>
		
	);
};


export default WeekSwiper;

