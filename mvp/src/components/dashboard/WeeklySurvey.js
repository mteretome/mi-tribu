import React, { useState } from 'react';
import {View,TouchableOpacity} from 'react-native';
import styles from './styles';
import {Medium} from '../common/Text';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../assets/theme/colors';
import { WebView } from 'react-native-webview';


const WeeklySurvey = ({
    containerStyle,
    uri,
    question,
    loading,
    titleStyle,
    onPress,
}) => {
	
   
      const [submit,setSubmit] = useState(false);
      if(uri==null){
          uri="https://docs.google.com/forms/d/e/1FAIpQLSdjFAeXYnDMn5LfpMN7whOS8XBW48TAfEllmeMakBeNR6qOuA/viewform?usp=sf_link";
      }
      const analyticsURI = uri.substring(0, uri.indexOf("viewform?usp=sf_link")) + "viewanalytics"
    //  console.log(uri);

	return (
       
           
		<View style={[styles.surveyCard,containerStyle]}>
            <View style={{marginHorizontal:10}}>
           
            {submit ?  
            <>
            {/* <Medium style={titleStyle}>Resultados</Medium> */}
            <WebView 
                originWhitelist={['*']} 
            source={{ uri: analyticsURI}}
            style={{height:800,width:'auto'}}
            scrollEnabled={true} /> 
            </>
            : 
            <>
             {/* <Medium style={titleStyle}>{question}</Medium> */}
             <WebView 
                originWhitelist={['*']} 
                source={{ uri: uri}}
                style={{height:800,width:'auto'}}
                scrollEnabled={true}
                onNavigationStateChange={event => {
                    if (!event.url) return;
                    if (event.url.includes('formResponse')) {
                        setSubmit(true);
                    }
                 
                }
            }

                /> 
                </>
                }
           
            </View>
            <TouchableOpacity
            disabled={true}
		 onPress={() => {onPress;setSubmit(true);}} style={{}} >
            <LinearGradient style={{
                flex:1, 
                alignSelf: 'stretch',
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
                justifyContent: 'center',
                justifyContent: 'center',padding:15,
                
                
                }}
            colors={[colors.tribu_green, colors.tribu_blue]}> 
           {submit ? <Medium style={[{alignSelf: 'center',
             color:colors.off_white,fontSize:24}]}> ??Gracias por contribuir tu opini??n!  </Medium>
             : <Medium style={[{alignSelf: 'center',
             color:colors.off_white,fontSize:24}]}> Vota y conoce la opini??n de t?? Tribu </Medium>}
            
             </LinearGradient>
             </TouchableOpacity>
           
            
            
       
    </View>
       
	);
};

export default WeeklySurvey;