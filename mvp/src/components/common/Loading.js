import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import Pregnancy from '../../assets/images/svg/pregnant.svg';
import {Overlay } from 'react-native-elements';
import colors from '../../assets/theme/colors';



const LoadingComponent = ({visible}) => {

	return (
	<Overlay isVisible={visible}
	style={[{flex:1,  alignItems:'center',
    justifyContent:'center',backgroundColor:'rgba(53,157,158,0)'}]}>
		
		<View  style={{alignItems:'center',
    justifyContent:'center'}}>
		<Pregnancy/>
        <ActivityIndicator  size="large" style={{position:'absolute',bottom:30}}
        color={colors.off_white}/>
		</View>
	</Overlay>
	);
};

export default LoadingComponent;