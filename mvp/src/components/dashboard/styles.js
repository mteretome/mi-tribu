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
        marginHorizontal:20,
        
        justifyContent: 'flex-start',
        flex:2
    },
    subheader:{ 
        alignItems: 'center',
        marginVertical:5,
        flexDirection:'row',
    },
    floatingLeft: {
        position:'absolute',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'flex-end',
        bottom:85,
        right:9
    },
    floatingCenter: {
        position:'absolute',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        bottom:25
    },
    floatingRight: {
        position:'absolute',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'flex-start',
        bottom:85,
        left:21
    },
    tabBar:{
      backgroundColor: 'rgba(255,255,255,0.0)',
      elevation:0,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      color:colors.tribu_green,
      marginHorizontal:3,
      marginVertical:12,
      padding:3,
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
      flex:6,
      backgroundColor: 'rgba(255,255,255,0.8)',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },


});