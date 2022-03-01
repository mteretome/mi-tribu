import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';



export default StyleSheet.create({
  title: {
    fontSize: 20,
    color: colors.black,
    marginVertical: 5,
  },
  subtitle:{
  	color: colors.black,
  	fontSize: 18,
  	textAlign: 'center'
  },
  subsixteen:{
    color: colors.black,
    fontSize: 16,
    textAlign: 'center'
  },
  heading:{
  	alignItems: 'center',
    marginTop: 15,
    marginBottom:15,
    paddingVertical:10,
    marginHorizontal:10
  },
  footer:{
  	alignItems: 'center',
    margin:7,
    flexDirection:'row',
    alignSelf: 'center',
    flex:1
  },

  lightText: {
  	color: colors.black,
  	fontSize: 14,
  	marginVertical: 5,
  	alignSelf:'center'
  },
  congratsSub: { 
    color: colors.tribu_green,
    fontSize:18, 
    marginBottom:10,
  },
  container:{
    paddingHorizontal:60,
    paddingTop: 20,
    alignItems: 'center',
    flex:1,
    justifyContent:'center'
  },
  whiteTitle:{
    fontSize: 40,
    color: colors.white,
    textAlign: 'center',
  
  },
  welcomeLady1:{
    resizeMode:'contain',
    height:'80%',
    top:60
  },
  welcomeLady2:{
    width:'70%',
    resizeMode:'contain',
    bottom:120,
    left:30
  },
  welcomeLady3:{
    width:'70%',
    resizeMode:'contain',
    right:35,
    bottom:100

  },
  overlay:{
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 30,
    paddingHorizontal:20,
    paddingBottom:30,
    paddingTop:20
  },
  question:{
    alignSelf:'center',
    fontSize:18,
    textAlign:'center',
    marginBottom:15,
  },
  textinput: {
    backgroundColor: colors.white,
    color: colors.grey_lightest,
    borderRadius: 10,
    
    paddingHorizontal:20,
    marginVertical:5,
    width: '100%',

  },
  buttonContainer :{
    marginVertical:5,
		paddingHorizontal:50,
  },

 
});