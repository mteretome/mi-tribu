
import React from 'react';
import { Bold, Regular} from '../common/Text';
import colors from '../../assets/theme/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { View } from 'react-native';
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

const InfoTab = ({body,baby,symptoms}) => {
  const Cuerpo = () => {
    return (
        <Regular>{body}</Regular>
    );
  };
  const Sintomas = () => {
      return (
          <Regular>{symptoms}</Regular>
      );
    };
  const Bebe = () => {
      return (
          <Regular>{baby}</Regular>
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