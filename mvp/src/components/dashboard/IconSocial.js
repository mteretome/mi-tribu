import React from 'react';
import { Text } from 'react-native';

import { SvgUri } from 'react-native-svg'; 
import { SvgCssUri } from 'react-native-svg';



const IconSocial = ({icon,style,week,width,height}) => {
const iconURI = "https://storage.googleapis.com/mitribu-mobile/social/icons/" +week+"/"+icon+".svg";
// console.log(iconURI);
const getDim= (val) =>{
      if(val){
            return val
      }
      else{
            return '50%'
      }

};
	return (
        <SvgCssUri
        width={getDim(width)}
        height={getDim(height)}
        uri={iconURI}
        style={style}
         />
      ); 
};

export default IconSocial;