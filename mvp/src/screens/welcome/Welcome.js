import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';

import WelcomeComponent from '../../components/welcome/Welcome';

const WelcomePage = () => {
	  const [name, setName] = React.useState(null);
	  const getUser = async () => {
			
		const userString = await AsyncStorage.getItem('user');
	   
		
		if(userString){
			setName(userString);
		}
	
	};
	useEffect(() => {
	  getUser();
	}, []);
	return (
	
				<WelcomeComponent name={name}/>
	);
};


export default WelcomePage;

