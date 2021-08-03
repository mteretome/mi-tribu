import React,{useRef} from 'react';
import Swiper from 'react-native-swiper';

import LoginComponent from '../../components/welcome/Login';
import NewComponent from '../../components/welcome/New';
import ForgotComponent from '../../components/welcome/Forgot';
import RecoverComponent from '../../components/welcome/Recover';
import NoScrollContainer from '../../components/common/NoScrollContainer';



import LoginWrapper from '../../components/wrappers/LoginWrapper';

const LogInPage = () => {
	const swiper = useRef(null);
	const swipe =(n) =>{
    if (swiper) swiper.current.scrollBy(n || 1)
  	};
	return (
	<LoginWrapper>
			<NoScrollContainer>
			<Swiper 
	         ref={swiper}
	         showsButtons={false} loop={true}
	         scrollEnabled={false}
	         showsPagination={false}
	         >

	         <LoginComponent swipe={swipe}/>
	         <ForgotComponent  swipe={swipe}/>
	         <RecoverComponent swipe={swipe}/>
	         <NewComponent swipe={swipe}/>


	        </Swiper>
	        </NoScrollContainer>
		
	</LoginWrapper>
	);
};


export default LogInPage;