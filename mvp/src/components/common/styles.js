import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';


export default StyleSheet.create({
	wrapper: {
		flex:1,
	},
	textinput: {
		backgroundColor: colors.off_white,
		color: colors.grey_lightest,
		borderRadius: 10,
		borderWidth: 1,
		// borderColor: colors.off_white,
		paddingHorizontal:20,
		marginTop:5

	},
	inputContainer: {
		// alignItems:'center',
    	paddingHorizontal:60,
    	paddingVertical: 15
	},
	error: {
		color: colors.tribu_pink,
		paddingTop: 4,
		fontSize:10
	}

});
