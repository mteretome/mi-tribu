import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';



export default StyleSheet.create({
  container:{
   alignItems:'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    color: colors.grey_darkest,
    marginVertical: 10,
  },
  subtitle:{
  	fontWeight: '300',
  	color: colors.white,
  	fontSize: 28,
  	textAlign: 'center',
    marginVertical: 10,
  },
  textContainer:{
    marginVertical: 10,
    paddingHorizontal: 30,
     alignItems:'center'
  },
  pillarLady:{
    left:80,
    bottom:60,
    width:'80%',
  },
  pillar3Lady:{
    bottom:40,
    width:'90%',
  },
  tool: {
    position:'absolute',
    left: 100,
    top:300
  },
  pillar2LadyB: {
    transform: [
    { scaleX: -1 } ],
    right:45,
    bottom:100,
    width:'80%'
  },
  pillar2LadyA: {
    transform: [
    { scaleX: -1 } ],
    left:80,
    bottom:60,
    width:'80%'

  }


});