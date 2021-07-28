import React from 'react';
import NewComponent from '../../components/welcome/New';
import LoginWrapper from '../../components/wrappers/LoginWrapper';


const NewPage = () => {
	return (
		<LoginWrapper>
		<NewComponent/>
		</LoginWrapper>
	);
};


export default NewPage;