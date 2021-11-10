import { useRoute } from '@react-navigation/core';
import React, { useState } from 'react';

import CongratsComponent from '../../components/welcome/Congrats';
import CongratsWrapper from '../../components/wrappers/CongratsWrapper';

const CongratsPage = () => {
	const [name,setName] = useState(null);
	const [week,setWeek] =  useState(null);
	const [day,setDay] =  useState(null);
	const {params} = useRoute();
	React.useEffect(() => {
		if (params?.data) {
		  setName(JSON.stringify(params.data.name));
		  setWeek(JSON.stringify(params.data.current_week));
		  setDay(JSON.stringify(params.data.day));
		}
	  }, [params]);
	return (
			<CongratsWrapper>
				<CongratsComponent name={name} week={week} days={day}/>
			</CongratsWrapper>
	);
};


export default CongratsPage;

