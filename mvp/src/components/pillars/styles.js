import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';



export default StyleSheet.create({
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
    margin:5,
    flexDirection:'row',
    alignSelf: 'center'
  },

  lightText: {
  	fontWeight: '300',
  	color: colors.black,
  	fontSize: 16,
  	marginVertical: 5,
  	alignSelf:'center'
  },

});