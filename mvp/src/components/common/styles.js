import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';


export default StyleSheet.create({
	inputContainer: {
		marginVertical:5,
	},
	textinput: {
		backgroundColor: colors.off_white,
		color: colors.grey_lightest,
		borderRadius: 10,
		borderWidth: 1,
		paddingHorizontal:20,
		marginVertical:5,
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
    	marginVertical:5,
    	alignItems:'center',
    	justifyContent: 'space-evenly',
    	borderRadius: 60,
	},
	buttonText : {
		color: colors.white,
		fontWeight: 'bold',
		fontSize: 16
	},
	link: {
		fontWeight: 'bold',
		textDecorationLine: 'underline',
		color: colors.tribu_green,
		fontSize: 16,
		marginVertical:10

	}

});
