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
        marginTop:20,
        marginBottom:5,
        marginHorizontal:20,
        justifyContent: 'flex-start',
        flex:1,
      
    },
    subheader:{ 
        alignItems: 'center',
        flexDirection:'row',
    },
    floating: {
      flex:1,
      flexDirection:'row',
      alignItems:'center'

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
      justifyContent:'center',
      flex:3,

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

    },
    cardShadow: {
      shadowColor:  'black',
			elevation: 10,
      backgroundColor: '#E0ECEE',
      height:'auto'
    


    },
    cardTitle:{
      color:colors.grey_dark,
      fontSize:24,
      marginHorizontal:15, 
    
    },
    surveyCard: {
      borderRadius: 10,
      backgroundColor: 'rgba(255,255,255,1)',
      alignSelf: 'stretch',
      paddingTop:10,
      marginHorizontal:10,
      marginTop:10,
      flex:1,
      marginBottom:10
    },
    cardCenter: {
      justifyContent: 'center',
      alignSelf: 'center',
      flex:1
      
    },



});