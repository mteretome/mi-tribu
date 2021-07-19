import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';


export default StyleSheet.create({
	wrapper: {
		flex:1,
	},
	inputContainer: {
		marginVertical:10
	},
	textinput: {
		backgroundColor: colors.off_white,
		color: colors.grey_lightest,
		borderRadius: 10,
		borderWidth: 1,
		paddingHorizontal:20,
		marginTop:5,
		width: '100%',

	},

	error: {
		color: colors.tribu_pink,
		paddingTop: 4,
		fontSize:10
	},
	button : {
		paddingHorizontal:60,
    	paddingVertical: 18,
    	alignItems:'center',
    	justifyContent: 'space-evenly',
    	borderRadius: 200,

	},
	buttonText : {
		color: colors.white,
		fontWeight: 'bold'
	}

});
