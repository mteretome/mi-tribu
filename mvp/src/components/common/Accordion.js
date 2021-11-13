import React, { useState } from 'react';
import { View, TouchableOpacity, LayoutAnimation,} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from '../../assets/theme/colors';
import { Bold, Light } from './Text';

const Accordion = ({data, title,image,line}) => {
    const [expanded,setExpanded]= useState(null);
    const toggleExpand=()=>{
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(!expanded);
      };
    return(
        <View>
             {line && <View style={{marginHorizontal:10,borderBottomWidth:2,borderBottomColor:colors.grey_lightest,borderBottomRightRadius:20,borderBottomLeftRadius:20}}/>
}               

            <TouchableOpacity style={{
                flexDirection: 'row',
                justifyContent:'space-between',
                height:56,
                paddingLeft:25,
                paddingRight:18,
                alignItems:'center',
            }} onPress={()=>toggleExpand()}>
                <Bold style={{color:colors.grey_dark,fontSize:16}}>{title}</Bold>
                <Icon name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={colors.grey_dark} />
            </TouchableOpacity>
            <View style={{height:1, color: 'white',width:'100%'}}/>
          
            {
                expanded &&
                <View style={{color:colors.grey_darkest,fontSize:16, paddingBottom:10}}>
                    <Light>{data}</Light>    
                </View>
            }
            
       </View>


    
 );   
};

export default Accordion;