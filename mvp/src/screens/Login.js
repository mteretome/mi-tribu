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
  TextInput
} from 'react-native';
import colors from '../assets/theme/colors';
import Container from '../components/common/Container';
import Input from '../components/common/Input';

const LogInPage = () => {
	return (
		<Container style={styles.container}>
		{/*pink header*/}
      <View style={styles.logtop}> 
    {/*--------*/}
      </View>
    {/*log in interface*/}
			<View style={styles.login}>
			<Text style={styles.text}>This is the log in page</Text>
		  <Input 
      value="Email"
      onChangeText={(text)=> onChangeText(text)}

       />
      
      <Input 
      value="Password"
      onChangeText={(text)=> onChangeText(text)}
      // error={'Either email or password is incorrect!'}
      />
    {/*------*/}
      </View>
		</Container>
	);
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems:'stretch',
    backgroundColor: colors.tribu_pink,
  },
  login:{
  	backgroundColor:colors.white,
  	flex:1.25,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    
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

