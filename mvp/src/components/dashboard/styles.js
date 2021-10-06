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
        marginVertical:20,
        marginHorizontal:20,
        
        justifyContent: 'flex-start',
        flex:1
    },
    subheader:{ 
        alignItems: 'center',
        marginVertical:5,
        flexDirection:'row',
    },
    floating: {
      alignItems:'center',
      justifyContent:'center',
      alignSelf:'center',
      alignContent:'center',
      top:50,
    },
    floatingMiddle: {
      flexDirection:'row',
      position:'absolute',
      paddingTop:50,
    },
    tabBar:{
      backgroundColor: 'rgba(255,255,255,0.0)',
      elevation:0,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      color:colors.tribu_green,
      padding:5,
    },
    labelFocused:{ 
      color:colors.tribu_green, 
      fontSize:12,
      marginHorizontal:3
      },
    label:{ 
      color:colors.grey_light, 
      fontSize:12,
      marginHorizontal:3
    },
    tabview:{
      flex:5,
      backgroundColor: 'rgba(255,255,255,0.8)',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },
    fruitContainer:{
      marginHorizontal:30,
      marginVertical:50, 
      height: '30%',
      justifyContent:'center',
    },
    buttons: {
      backgroundColor: 'transparent', 
      flexDirection: 'row', 
      position: 'absolute', 
      top: 80, 
      left: 0, 
      flex: 1, 
      paddingHorizontal: 20, 
      paddingVertical: 10, 
      justifyContent: 'space-between', 
      alignItems: 'flex-start',
			elevation: 10,
      shadowColor: colors.off_white,
      shadowOpacity: 1, 
    },
    card: {
      elevation: 10,
      shadowColor: colors.off_white,
			shadowOpacity: 1,

    }



});