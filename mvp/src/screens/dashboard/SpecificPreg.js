import React, { useEffect } from 'react';
import { ActivityIndicator, View} from 'react-native';
import colors from '../../assets/theme/colors';
import { Bold } from '../../components/common/Text';


import { WEEK_NUMBERS } from '../../constants/routeNames';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SocialComponent from '../../components/dashboard/Social';
import PregnancyComponent from '../../components/dashboard/Pregnancy';






const SpecificPregnancy = ({week}) => {
  console.log("specific week : ", week)
    return (
      <>
      
      
            <PregnancyComponent weekParam={week}/>
   

       
          </>
    );
  };


export default SpecificPregnancy;


