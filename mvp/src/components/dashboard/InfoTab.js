
import React, { useEffect, useState } from 'react';
import { Bold, Light, Regular} from '../common/Text';
import colors from '../../assets/theme/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { ScrollView, View } from 'react-native';
import styles from './styles';




const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: colors.tribu_green,}}
      style={styles.tabBar}
      renderLabel={({ route, focused, color }) => {
        const getIcon =() =>{
          if (route.title === 'TU BEBÉ'){
            return "baby-face-outline"; }
          else if (route.title === 'TUS SÍNTOMAS'){
            return "bandage";} 
          else {
            return "human-pregnant"; }
          };
        return (
        <View style={{flexDirection:'row'}}>
        <Icon
          name={getIcon()}
          color={focused ? colors.tribu_green : colors.grey_light}
          size={20}/>
          {focused ? 
          <Bold style={styles.labelFocused}> {route.title} </Bold>
          :
          <Bold style={styles.label}> {route.title}</Bold> 
          }
        </View>
         )
        }
      }
    />
);

const InfoTab = ({baby,body,symptoms}) => {
 
  const Cuerpo = () => {
    return (
      <ScrollView style={{marginHorizontal:30,marginVertical:10}}>
        <Light style={{fontSize:18,textAlign:'justify'}}> {body}</Light>
        </ScrollView>
    );
  };
  const Sintomas = () => {
      return (
        <ScrollView style={{marginHorizontal:30,marginVertical:10}}>


          <Light style={{fontSize:18,textAlign:'justify'}} >{symptoms}</Light>
          </ScrollView>
      );
    };
  const Bebe = () => {
      return (
        <ScrollView style={{marginHorizontal:30,marginVertical:10}}>


          <Light  style={{fontSize:18}}>{baby}</Light>
          </ScrollView>
      );
  };
  
  const renderScene = SceneMap({
      first: Bebe,
      second: Cuerpo,
      third: Sintomas,
  });

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'TU BEBÉ',},
        { key: 'second', title: 'TU CUERPO' },
        { key:'third', title: 'TUS SÍNTOMAS'}
    ]);

	return (
        <TabView style={styles.tabview}
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
      />
  );
};



export default InfoTab;