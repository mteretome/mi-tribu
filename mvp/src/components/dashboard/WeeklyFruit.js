import React, { useRef, useState } from 'react';
import { View} from 'react-native';
import { Bold, Regular, SemiBold } from '../../components/common/Text';
import styles from './styles';

import colors from '../../assets/theme/colors';
import Fruit from './Fruits.js'
import Circles from '../../assets/images/svg/circles-01.svg';
import { useWindowDimensions } from 'react-native';


const WeeklyFruit = ({fruit,weight,weightUnit,length}) => {
    const width = useWindowDimensions().width;
    const scale = useWindowDimensions().scale;
    const height = useWindowDimensions().height;
    const ratio = width/height;

    var margin=0;
    if (scale >2.5&&scale<2.6){
       margin = Math.abs(width-370+(scale-2.5)*125);
        
    } 
    else {
        margin = Math.abs(width-380);

    }

    return (
    
     
        <View style={{ justifyContent:'center',}}>
    
        <View style={[{  flexDirection:'row'}]}>
            <View style={{flexDirection:'column',alignItems:'center'}}>
                <SemiBold style={{color:colors.grey_darkest,fontSize:14}}>{weight} {weightUnit}</SemiBold>
                {/* <SemiBold style={{color:colors.grey_darkest,fontSize:14, }}>2 KG</SemiBold> */}

                <SemiBold style={{color:colors.grey_light,fontSize:12}}>SU PESO</SemiBold>
            </View>
            <View style={{flex:2, flexDirection:'column',alignItems:'center'}}>
                <Bold style={{color:colors.tribu_pink,fontSize:16,}}>Tu bebé </Bold> 
                <Bold style={{color:colors.tribu_pink,fontSize:16,}}>está como</Bold> 
                <Fruit fruit={fruit}/>

                <Bold style={{color:colors.tribu_pink,fontSize:16,}}> {fruit}</Bold>
                {/* <Bold style={{color:colors.tribu_pink,fontSize:16,bottom:20}}>una manzana</Bold> */}
            </View>
            <View style={{ flex:1,flexDirection:'column',alignItems:'center'}}>
                <SemiBold style={{color:colors.grey_darkest,fontSize:14,}}>{length} CM </SemiBold>
                {/* <SemiBold style={{color:colors.grey_darkest,fontSize:14,}}>2.3 CM </SemiBold> */}

                <SemiBold style={{color:colors.grey_light,fontSize:12,}}>SU TAMAÑO </SemiBold>
            </View>
        </View>
        </View>
    );
  };

const Stats = ({fruit,weight,weightUnit,length}) => {
    return(
        <View style={{
            flexDirection:'row', 
            padding: 10,
            marginHorizontal:10,
            }}>
{/* ***************FRUIT ***************/}

           <View style={styles.fruitBorder}>
            <View style={styles.fruitBox}>
                  <View style={{flex:1}}>
                    <SemiBold style={{color:colors.tribu_pink,fontSize:16,}}>Tu bebé </SemiBold> 
                    <SemiBold style={{color:colors.tribu_pink,fontSize:16,}}>está como</SemiBold>
                </View>
                    <View style={{flex:2,minHeight:100,margin:5}}>
                    <Fruit fruit={fruit}/>
                </View>
                <View style={{flex:1}}>
                <Regular style={{color:colors.tribu_pink,fontSize:16,}}>{fruit}</Regular>
                </View>
              
                

            </View>
            </View>

{/* ***************WEIGHT ***************/}

            <View style={{
                flex:3,
                alignItems:'center',
                justifyContent:'center',
                }}>
               
            <View style={{flex:1,
                alignItems:'center',
                justifyContent:'center',
                
                }}>
                    <View style={styles.boxBorder}>
                        <View style={styles.boxW}>
                            <Regular>

                                {weight} {weightUnit} 
                            </Regular>
                            <SemiBold style={{color:colors.grey_light,fontSize:12}}>SU PESO</SemiBold>
                         </View>
                        </View>
                </View>
                 
                    

            {/* ***************LENGTH ***************/}

               
            <View style={{
                     flex:2,
                     alignItems:'center',
                     justifyContent:'center'}}>
                           <View style={styles.boxBorder}>
                           <View style={styles.boxS}>
                            <Regular >
                            {length} cm
                            </Regular>
                            <SemiBold style={{color:colors.grey_light,fontSize:12,}}>SU TAMAÑO </SemiBold>
                        </View>
                        </View>
                </View>
          
            </View>
        

           
        </View>
   
    )
   
};

const Middle = ({fruit,weight,weightUnit,length,week}) => {
    return(
        <View style={{
            flexDirection:'row', 
            marginHorizontal:5,
            }}>
    
    {/* ***************WEIGHT ***************/}
            <View style={{flex:3,}}>
                <View style={{flex:1,
                alignItems:'center',
                justifyContent:'center',
                
                
                }}>
                    <View style={{
                       borderColor:'#E0ECEE', 
                       borderWidth:1,
                       padding:2,
                       borderRadius:40,
                       shadowColor:  colors.tribu_bbpink,
                       elevation: 1,}}>
                        <View style={{
                        borderRadius:100,
                        paddingVertical:20,
                        paddingHorizontal:10,
                        shadowColor: colors.tribu_pink,
                        elevation: 10,
                        backgroundColor: '#E0ECEE',}}>
                            <Regular>

                                {weight} {weightUnit} 
                            </Regular>
                            <SemiBold style={{color:colors.grey_light,fontSize:12}}>SU PESO</SemiBold>
                         </View>
                        </View>
                </View>
            </View>
{/* ***************FRUIT ***************/}
            <View style={{
            borderColor:'#E0ECEE', 
            borderWidth:3,margin:2,
            padding:2,flex:4,
            borderRadius:40,
            shadowColor:  colors.tribu_bbpink,
            elevation: 1,

            }}>
            <View style={{
            paddingVertical:25,
            paddingHorizontal:10,
            borderRadius:40,
            shadowColor: colors.tribu_pink,
            elevation: 10,
            backgroundColor: '#E0ECEE',
            }}>
                  <View style={{flex:1}}>
                <Regular style={{color:colors.tribu_pink,fontSize:16,}}>Tu bebé </Regular> 
                <Regular style={{color:colors.tribu_pink,fontSize:16,}}>está como</Regular>
                </View>
                <View style={{flex:2,minHeight:100,margin:5}}>
                    <Fruit fruit={fruit}/>
                 
                    

                </View>
                <View style={{flex:1}}>
                <Regular style={{color:colors.tribu_pink,fontSize:16,}}>{fruit}</Regular>
                </View>
              
                

            </View>
            </View>
{/* ***************LENGTH ***************/}
            <View style={{ flex:3,alignItems:'center'}}>

                <View style={{
                     flex:2,
                     alignItems:'center',
                     justifyContent:'center'}}>
                           <View style={{
                       borderColor:'#E0ECEE', 
                       borderWidth:1,
                       padding:2,
                       borderRadius:40,
                       shadowColor:  colors.tribu_bbpink,
                       elevation: 1,}}>
                        <View style={{
                        borderRadius:100,
                        paddingVertical:15,
                        paddingHorizontal:15,
                        shadowColor:  colors.tribu_pink,
                        elevation: 10,
                        backgroundColor: '#E0ECEE',}}>
                            <Regular >
                            {length} cm
                            </Regular>
                            <SemiBold style={{color:colors.grey_light,fontSize:12,}}>SU TAMAÑO </SemiBold>
                        </View>
                        </View>
                </View>
          
            </View>
        

           
        </View>
   
    )
   
};




export default Stats;