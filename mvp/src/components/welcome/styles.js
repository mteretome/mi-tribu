import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';



export default StyleSheet.create({
 container: {
    justifyContent: 'flex-start',
    alignItems:'stretch',
    backgroundColor: colors.tribu_bbpink,
  },
  whiteBox:{
  	backgroundColor:colors.white,
  	flex:5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal:60,
    paddingVertical: 15,
	},

  pinkBox:{
  	flex:3,
  	paddingHorizontal:60,
    paddingVertical: 15,
    alignItems: 'center'
  },

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
    marginVertical: 5,
  },
  inputContainer: {
  	justifyContent: 'space-evenly',

  },
  lightText: {
  	fontWeight: '300',
  	color: colors.black,
  	fontSize: 16,
  	marginVertical: 5,
  	alignSelf:'center'
  },
  logo: {
  	 resizeMode: 'center',
  	 flex:1,
  	 width: '70%'


  },
  woman: {
  	top: 10,
  	resizeMode: 'contain',

  }

});