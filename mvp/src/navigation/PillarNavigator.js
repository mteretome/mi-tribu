import React from 'react';
import {
	LOGIN,
	DEVPAGE,
	SIGNUP,
  PILLARS
} from '../constants/routeNames';
import {
  View,
  Text,
} from 'react-native';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PillarOne from '../screens/pillars/PillarOne';
import PillarTwo from '../screens/pillars/PillarTwo';
import PillarThree from '../screens/pillars/PillarThree';


function PillarNavigator() {
  const PillarsTab = createBottomTabNavigator();
  return (
    <PillarsTab.Navigator>
      <PillarsTab.Screen name="P1" component={PillarOne} />
       <PillarsTab.Screen name="P2" component={PillarTwo} />
       <PillarsTab.Screen name="P3" component={PillarThree} />
    </PillarsTab.Navigator>
  );
};




export default PillarNavigator;