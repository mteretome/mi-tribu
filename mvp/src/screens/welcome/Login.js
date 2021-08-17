import React,{useRef, useState} from 'react';
import Swiper from 'react-native-swiper';
import { ActivityIndicator } from "react-native";
import LoginComponent from '../../components/welcome/Login';
import NewComponent from '../../components/welcome/New';
import ForgotComponent from '../../components/welcome/Forgot';
import RecoverComponent from '../../components/welcome/Recover';
import NoScrollContainer from '../../components/common/NoScrollContainer';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../assets/theme/colors';




import LoginWrapper from '../../components/wrappers/LoginWrapper';

const LogInPage = () => {
	const [index,setIndex] = useState(0);
	const swiper = useRef(null);
	const swipe =(n) =>{
    if (swiper) swiper.current.scrollBy(n || 1)
  	};
	return (
	<LoginWrapper>
			<NoScrollContainer>

			{index>0 &&
			<TouchableOpacity style={{alignSelf:"flex-start", position:'absolute',top:40,left:30}} 
          	onPress={() => {swipe(-1);}}>
          	<Icon name="arrow-back" size={25} color={colors.grey_lightest} />
        	</TouchableOpacity> }
			 
			<Swiper 
	         ref={swiper}
	         showsButtons={false} loop={true}
	         scrollEnabled={false}
	         showsPagination={false}
	         loadMinimal={true}
	         loadMinimalLoader={<ActivityIndicator size="large" color="#359D9E"/>}
			 onIndexChanged={(index) => {setIndex(index);}}					
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