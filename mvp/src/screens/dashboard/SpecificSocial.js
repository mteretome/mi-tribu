import React, { useEffect } from 'react';
import { ActivityIndicator, View} from 'react-native';
import colors from '../../assets/theme/colors';
import { Bold } from '../../components/common/Text';


import { WEEK_NUMBERS } from '../../constants/routeNames';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SocialComponent from '../../components/dashboard/Social';






const SpecificSocial = ({week}) => {
  console.log("specific week : ", week)
    return (
      <>
      
       
            <SocialComponent weekParam={week}/>
   

       
          </>
    );
  };


export default SpecificSocial;


