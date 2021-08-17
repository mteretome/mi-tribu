import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';



export default StyleSheet.create({
 container: {
    flexDirection: 'column',
  },
  topBox:{
  	flex: 3,
  	paddingHorizontal:60,
    paddingVertical: 15,
    alignItems: 'center',
  },
  logo: {
  	 resizeMode: 'center',
     flex:1,
  	 width: '50%',
  },
  loginLady: {
  	bottom: 80,
  	resizeMode: 'contain',

  },
  onboardLady:{
     transform: [
    { scaleX: -1 } ],
    bottom: 80,
    resizeMode: 'contain',
  },
  signupLady: {
    bottom: 90,
    resizeMode: 'contain',

  },
  congratsLady: {
    bottom: 80,
    resizeMode: 'contain',
  },
  pillarLogo: {
     resizeMode: 'contain',
     flex:1,
     width: '50%',
     
  },
  pillarHead:{
    paddingHorizontal:60,
    paddingVertical: 15,
    alignItems: 'center',
    flex:1,

  },
  floating:{
    alignSelf:'center',
    zIndex: 1,
  },
  wave:{
    width:'100%'
  },

});