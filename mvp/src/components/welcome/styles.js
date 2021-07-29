import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';



export default StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.black,
    marginVertical: 5,
  },
  subtitle:{
  	fontWeight: '300',
  	color: colors.black,
  	fontSize: 18,
  	textAlign: 'center'
  },
  heading:{
  	alignItems: 'center',
    marginTop: 15,
    marginBottom:12,
  },
  footer:{
  	alignItems: 'center',
    margin:5,
    flexDirection:'row',
    alignSelf: 'center'
  },

  lightText: {
  	fontWeight: '300',
  	color: colors.black,
  	fontSize: 16,
  	marginVertical: 5,
  	alignSelf:'center'
  },
  congratsSub: { 
    color: colors.tribu_green,
    fontSize:18, 
    marginBottom:30,
    fontWeight:'200',
  },
  container:{
    paddingHorizontal:60,
    paddingVertical: 15,
    alignItems: 'center',
    flex:1,
    justifyContent:'center'
  },
  whiteTitle:{
    fontWeight: 'bold',
    fontSize: 48,
    color: colors.white,
    textAlign: 'center',
    marginVertical:30
  },
  welcomeLady1:{
    top:125,
    width:'80%',
    resizeMode:'contain'
  },
  welcomeLady2:{
    width:'70%',
    resizeMode:'contain',
    bottom:140,
    left:30
  },
  welcomeLady3:{
    width:'70%',
    resizeMode:'contain',
    right:35,
    bottom:120

  }






});