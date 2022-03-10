import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';


export default StyleSheet.create({
	inputContainer: {
		marginVertical:5,
		paddingHorizontal:50,
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
 	},
	error: {
		color: colors.tribu_pink,
		paddingTop: 4,
		fontSize:10
	},
	button : {
		paddingHorizontal:20,
    	paddingVertical: 15,
    	marginVertical:5,
    	alignItems:'center',
    	justifyContent: 'space-evenly',
    	borderRadius: 60,
		
	},
	buttonText : {
		color: colors.white,
		fontSize: 18
	},
	link: {
		textDecorationLine: 'underline',
		color: colors.tribu_green,
		fontSize: 16,
		marginVertical:10

	},
	card: {
		borderRadius: 10,
		backgroundColor: 'rgba(255,255,255,1)',
		alignSelf: 'stretch',
		padding: 10,
		margin:10,
		flexDirection:'row',
		flex:1
	},
	
	cardCenter: {
		justifyContent: 'center',
		alignSelf: 'center',
		flex:1
		
	},
	cardLeft: {
		flexDirection: 'row',
	},
	cardLText:{
		alignItems: 'flex-start',
		justifyContent: 'center'

	}

});
