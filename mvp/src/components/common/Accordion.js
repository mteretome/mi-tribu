import React, { useState } from 'react';
import { View, TouchableOpacity, LayoutAnimation,} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from '../../assets/theme/colors';
import { Bold, Light } from './Text';
import IconSocial from '../dashboard/IconSocial';

const Accordion = ({data, title,icon,line,week}) => {
    const [expanded,setExpanded]= useState(null);
    const toggleExpand=()=>{
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(!expanded);
      };
    return(
        <View>
             {line && <View style={{marginHorizontal:0,borderBottomWidth:1.5,borderBottomColor:colors.grey_lightest}}/>}    
             
             
           
            <TouchableOpacity 
            
            style={{
                flexDirection: 'row',
                justifyContent:'space-between',
                height:'auto',
                flex:1,
                marginVertical:10,
                marginHorizontal:10}}
                
                onPress={()=>toggleExpand()}>

             {icon && 
              
             <View style={{flex:1,marginRight:10, maxHeight:100}}>
             <IconSocial icon={icon} week={week} width="90%" height="90%" />
             </View>
               
             } 

          
              
         
        

              <View style={{flexDirection:'column',flex:4,}}>
                <View style={{flexDirection: 'row'}}>
                    <View  style={{
                    alignSelf:'flex-start',
                    justifyContent:'flex-start',
                    alignItems:'flex-start',textAlign:'right'}}>
                    <Bold style={{color:colors.grey_dark,fontSize:16}}>{title}</Bold>
                    </View>
                    <Icon name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} 
                    size={30} color={colors.grey_lightest} style={{}}/>
                </View>
            
                <View style={{flex:1,width:'100%'}}>
                    {expanded ? 
                    <Light style={{textAlign:'left',color:colors.grey_darkest,fontSize:16, paddingBottom:10}}>{data}</Light>   :
                    <Light style={{textAlign:'left',color:colors.grey_darkest,fontSize:16, paddingBottom:10}} numberOfLines={2} >{data}</Light> }
                </View>
            </View>
            
              
            </TouchableOpacity>
           
          
         
          
          

            </View>

            
  


    
 );   
};

export default Accordion;