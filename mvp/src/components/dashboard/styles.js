import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';



export default StyleSheet.create({
    heading: {
        color:colors.grey_dark,
        fontSize: 28,
        alignSelf: 'flex-start'
    },
    subheading:{
        color:colors.grey_dark,
        fontSize: 20,
        
    },
    header:{
        margin:20,
        justifyContent: 'flex-start',
        flex:6
    },
    subheader:{ 
        alignItems: 'center',
        marginVertical:5,
        flexDirection:'row',
    }


});