import React from 'react';

import TwoComponent from '../../components/pillars/Two';
import PillarWrapper from '../../components/wrappers/PillarWrapper';
import PillarContainer from '../../components/common/PillarContainer';

const PillarTwo = () => {
	return (
		<PillarContainer>
		<PillarWrapper two={true}>
			<TwoComponent/>
		</PillarWrapper>
		</PillarContainer>
	);
};


export default PillarTwo;
