import React from 'react';

import ThreeComponent from '../../components/pillars/Three';
import PillarWrapper from '../../components/wrappers/PillarWrapper';
import LinearGradient from 'react-native-linear-gradient';

const PillarThree = () => {
	return (
		<LinearGradient
        colors={['#53B5C3', '#B9DCDC', '#F5B09B' ]}
        style={{flex:1}}
        start={{ x: 0, y: 0 }}
        end={{ x: 1.4, y: 0.9 }}
   		>
		<PillarWrapper three={true}>
			<ThreeComponent/>
		</PillarWrapper>
		</LinearGradient>
	);
};


export default PillarThree;

