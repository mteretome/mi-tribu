import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';



export default StyleSheet.create({
  container:{
   alignItems:'center'
  },
  title: {
    fontSize: 32,
    color: colors.grey_darkest,
    marginVertical: 10,
    textAlign:'center'
  },
  subtitle:{
  	color: colors.white,
  	fontSize: 24,
  	textAlign: 'center',
    marginVertical: 10,
  },
  textContainer:{
    marginVertical: 10,
    paddingHorizontal: 50,
    alignItems:'center',
    textAlign:'center'
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
    right:20,
    bottom:120,
    width:'70%'
  },
  pillar2LadyA: {
    transform: [
    { scaleX: -1 } ],
    left:50,
    bottom:70,
    width:'70%'

  }


});