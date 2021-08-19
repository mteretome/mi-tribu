import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Bold, Regular } from '../../components/common/Text';
import LinearContainer from '../../components/common/LinearContainer';
import Bg from '../../assets/images/svg/pregnancy.svg';
import styles from './styles';
import Icon from 'react-native-vector-icons/Octicons';
import colors from '../../assets/theme/colors';
import { PREGNANCY } from '../../constants/routeNames';
import { useNavigation } from '@react-navigation/native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


const WeekList = () => {
  const navigate= useNavigation();
    return (
    
      <LinearContainer style={{flex:1}}>
        <Bg  width="100%" style={{position:'absolute',bottom:30}}/>
        <TouchableOpacity  onPress={() => {navigate.navigate(PREGNANCY)}}>
          <Icon name="chevron-left" color={colors.off_white} 
          size={50} style={{marginTop:40,marginLeft:25}} />
        </TouchableOpacity>

        <View style={{paddingVertical:40,paddingHorizontal:20}}>
        

        <Card>
        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
       </Card>
      </View>
      </LinearContainer>
    );
  };


export default WeekList;