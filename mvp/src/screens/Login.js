import React from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import colors from '../assets/theme/colors';


const LogInPage = () => {
	return (
		<View style={styles.container}>
			<View style={styles.logtop}>
			</View>
			<View style={styles.login}>
			<Text style={styles.text}>This is the log in page</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.tribu_pink,
  },
  login:{
  	backgroundColor:colors.white,
  	flex:1,
  	alignItems:'flex-end',
	},
  logtop:{
  	flex:1,
  },
  text: {
    textAlign: 'center',
    color: colors.grey_darkest,
    marginBottom: 15,
  },
});


export default LogInPage;

