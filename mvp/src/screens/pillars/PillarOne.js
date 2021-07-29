import React from 'react';

import OneComponent from '../../components/pillars/One';
import PillarWrapper from '../../components/wrappers/PillarWrapper';
import PillarContainer from '../../components/common/PillarContainer';

const PillarOne = () => {
	return (
		<PillarContainer>
		<PillarWrapper one={true}>
			<OneComponent/>
		</PillarWrapper>
		</PillarContainer>
	);
};


export default PillarOne;

