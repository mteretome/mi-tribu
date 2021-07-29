import React, {useRef} from 'react';
import {View} from 'react-native';

import TwoComponent from './Two';
import PillarContainer from '../common/PillarContainer';


import ThreeComponent from './Three';
import LinearGradient from 'react-native-linear-gradient';

import OneComponent from './One';
import PillarWrapper from '../wrappers/PillarWrapper';
import Swiper from 'react-native-swiper';

const PillarComponent= () => {
	const swiper = useRef(null);
	return (
		

		<Swiper  ref={swiper}
		showsButtons={false} loop={false}
		dot={
            <View
              style={{
                backgroundColor: 'rgba(255,255,255,.3)',
                width: 10,
                height: 10,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: '#fff',
                width: 10,
                height: 10,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }>


        <PillarContainer style={{flex:1}}>
				  <PillarWrapper one={true} swipe={swiper}>
				    <OneComponent/>
				  </PillarWrapper>
			 </PillarContainer>
       
        <PillarContainer style={{flex:1}}>
			     <PillarWrapper two={true} swipe={swiper}>
				    <TwoComponent/>
			     </PillarWrapper>
	     	</PillarContainer>

        <LinearGradient
        colors={['#53B5C3', '#B9DCDC', '#F5B09B' ]}
        style={{flex:1}}
        start={{ x: 0, y: 0 }}
        end={{ x: 1.4, y: 0.9 }}>
			     <PillarWrapper three={true}>
				      <ThreeComponent/>
			     </PillarWrapper>
		    </LinearGradient>

      </Swiper>
		
	);
};


export default PillarComponent;

