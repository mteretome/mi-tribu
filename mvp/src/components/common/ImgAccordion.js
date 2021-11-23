import React, { useState } from 'react';
import { View, TouchableOpacity, LayoutAnimation,} from "react-native";
import IconM from "react-native-vector-icons/MaterialCommunityIcons";
import colors from '../../assets/theme/colors';
import IconSocial from '../dashboard/IconSocial';
import { Bold, Light } from './Text';
import { FAB } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {Icon,Overlay} from 'react-native-elements';


const ImgAccordion = ({data, icon,week}) => {
    const [expanded,setExpanded]= useState(false);
    const toggleExpand=()=>{
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(!expanded);
      };
    return(

        <View style={{flexDirection:'column',marginHorizontal:10,flex:1,}}>
                
                <View style={{
                    shadowOpacity: 1,
                    elevation: 4,
                    backgroundColor:colors.off_white,
                    borderRadius:10,
                    padding:10,
                    
                    
                }}>
                       
                    <IconSocial icon={icon} week={week} height={100}
                    style={{alignSelf:'center',marginVertical:20}}/>
                   
                   <View style={{padding:10,margin:10}}>

                   </View>
                   
                   </View>

                        <View style={{
                        backgroundColor:colors.off_white,
                        borderRadius:10,
                        paddingVertical:10,
                        paddingHorizontal:20,
                        marginHorizontal:20,
                        shadowColor:  'black',
                        shadowOpacity: 1,
                        shadowRadius: 1,
                        maxWidth:250,
                        elevation: 5,
                        height:'auto',
                        alignSelf:'center',
                        bottom:40,
                        
                        }}>
                         <TouchableOpacity onPress={()=>toggleExpand()}>
                    
                        {expanded ? 
                        <Light style={{textAlign:'left',color:colors.grey_darkest,
                        fontSize:16, paddingTop:10}}>{data} </Light>   :
                        <Light style={{textAlign:'left',color:colors.grey_darkest,
                        fontSize:16, paddingTop:10}} numberOfLines={2} >{data} </Light> }
                        <FAB 
                        size="small"
                        style={{top:30,}}
                        icon={<IconM 
                            name={expanded ? 'chevron-up' : 'chevron-down'} 
                            color={'rgba(249, 247, 246, 0.5)'} size={30} style={{right:3,bottom:2}}/>} 
                        raised={true}
                        color={colors.tribu_green}
                        onPress={()=>toggleExpand()}
                        />
                       
                        
                        </TouchableOpacity > 
                        </View>
                  
                
           
           </View>

     
            
            
          
          
          

           

            
  


    
 );   
};

export default ImgAccordion;