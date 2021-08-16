import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';


export default StyleSheet.create({
	inputContainer: {
		marginVertical:5,
	},
 textinput: {
    backgroundColor: colors.white,
    color: colors.grey_lightest,
    borderRadius: 10,
    borderWidth:1,
    paddingHorizontal:20,
    marginVertical:5,
    width: '100%',

  },
	whiteBox:{
  	backgroundColor: 'rgba(255,255,255,0.8)',
  	flex:5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
	},
  	scrollBox:{
	paddingHorizontal:50,
 	},
	error: {
		color: colors.tribu_pink,
		paddingTop: 4,
		fontSize:10
	},
	button : {
		paddingHorizontal:40,
    	paddingVertical: 18,
    	marginVertical:5,
    	alignItems:'center',
    	justifyContent: 'space-evenly',
    	borderRadius: 60,
	},
	buttonText : {
		color: colors.white,
		fontSize: 20
	},
	link: {
		textDecorationLine: 'underline',
		color: colors.tribu_green,
		fontSize: 16,
		marginVertical:10

	}

});
