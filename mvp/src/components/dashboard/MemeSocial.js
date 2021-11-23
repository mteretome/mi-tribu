import React, { useEffect } from 'react';
import { Image, ScrollView, View } from 'react-native';




const MemeSocial = ({week,style,width,height}) => {
const memeURI = "https://storage.googleapis.com/mitribu-mobile/social/memes/" +week+".png";
var scro;
useEffect(() => {
  if(scro)
  {scro.scrollTo({x: 30, y: 0})}
  }, [scro]);
// console.log(memeURI);
	return (
    
        <ScrollView 
        ref={(scroller) => {scro = scroller}}
        style={{resizeMode: 'contain',}} horizontal={true}>
        
        <Image style={[style,{height:400,width:undefined,aspectRatio:1,}]}
        source={{
          uri: memeURI,
        }}/> 
        
        </ScrollView>
      ); 
};

export default MemeSocial;