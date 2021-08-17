import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Input from '../common/Input';
import { Radio, Icon,} from "native-base";
import { Light } from '../common/Text';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format} from 'date-fns'
import colors from '../../assets/theme/colors'




export const Question1 = () => {

	return (
        <Radio.Group defaultValue="1" name="exampleGroup" style={{marginHorizontal:30}}>
        <Radio aria-label="mom" 
         icon={<Icon as={<MaterialCommunityIcons name="face-woman" />} />}
         colorScheme="primary" value="1" my={1}>
          <Light style={{marginHorizontal:10,fontSize:16}}>Soy la mamá</Light>
        </Radio>
        <Radio aria-label="dad" 
        icon={<Icon as={<MaterialCommunityIcons name="face" />} />}
        colorScheme="primary" value="2" my={1}>
        <Light style={{marginHorizontal:10,fontSize:16}}>Soy el papá</Light>
        </Radio>
        <Radio aria-label="other"
        icon={<Icon as={<MaterialCommunityIcons name="baby-face-outline" />} />}
         colorScheme="primary" value="3" my={1}>
        <Light style={{marginHorizontal:10,fontSize:16}}>Otro</Light>
        </Radio>
      </Radio.Group>
	);
};

export const Question2 = () => {

	return (
        <Radio.Group defaultValue="1" name="exampleGroup" style={{marginHorizontal:30}}>
        <Radio aria-label="mom" 
         icon={<Icon as={<MaterialCommunityIcons name="hospital-building" />} />}
         colorScheme="primary" value="1" my={1}>
          <Light style={{marginHorizontal:10,fontSize:16}}>Público - Fonasa</Light>
        </Radio>
        <Radio aria-label="dad" 
        icon={<Icon as={<MaterialCommunityIcons name="hospital-building" />} />}
        colorScheme="primary" value="2" my={1}>
        <Light style={{marginHorizontal:10,fontSize:16}}>Privado - Isapre</Light>
        </Radio>
      </Radio.Group>
	);
};

export const Question3 = () => {
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date());
    const showDatePicker = () => {
        setShow(!show);
      };
      const onChange = (value) => {
        setShow(false);
        setDate(value);
        
      };
      const getDate =(n) =>{
        var day = new Date().getDate();
        var month = new Date().getMonth();
        var year = new Date().getFullYear();
        if(n==1){
            return new Date(year-5, month, day);
        }
        else{
          return new Date(year-80, month, day);
        }
    };

	return (
        <View style={{marginHorizontal:30}}>
        <TouchableOpacity onPress={showDatePicker}>
              <Input editable={false} style={{textAlign:'center'}}>
              {format(date,'dd/MM/yyyy')}</Input>
              </TouchableOpacity>
               <DateTimePickerModal
                isVisible={show}
                date={date}
                onCancel={showDatePicker}
                onConfirm={onChange}
                maximumDate={getDate(1)}
                minimumDate={getDate(0)}
                mode="date"
                display="spinner"
              />
       </View>
	);
};

export const Question4 = () => {

	return (
        <View style={{marginHorizontal:30}}>
            <Input style={{textAlign:'center'}} placeholder="Ciudad"></Input>
            <Input style={{textAlign:'center'}}placeholder="Comuna"></Input>
              
       </View>
	);
};

export const Question5 = () => {

	return (
        <Radio.Group defaultValue="1" name="exampleGroup" style={{marginHorizontal:30}}>
        <Radio aria-label="mom" 
         icon={<Icon as={<MaterialIcons name="work" />} />}
         selectedColor={colors.tribu} value="1" my={1}>
          <Light style={{marginHorizontal:10,fontSize:16}}>Trabajando jornada completa</Light>
        </Radio>
        <Radio aria-label="dad" 
        icon={<Icon as={<MaterialIcons name="home-work" />} />}
        colorScheme="primary" value="2" my={1}>
        <Light style={{marginHorizontal:10,fontSize:16}}>Trabajando media jornada</Light>
        </Radio>
        <Radio aria-label="other"
        icon={<Icon as={<MaterialIcons name="home" />} />}
         colorScheme="primary" value="3" my={1}>
        <Light style={{marginHorizontal:10,fontSize:16}}>Inactiva laboralmente </Light>
        </Radio>
      </Radio.Group>
	);
};
export const Question6 = () => {

	return (
        <Radio.Group defaultValue="1" name="exampleGroup" style={{marginHorizontal:30}}>
        <Radio aria-label="one" 
         icon={<Icon as={<MaterialCommunityIcons name="baby-face-outline" />} />}
         colorScheme="primary" value="1" my={1}>
          <Light style={{marginHorizontal:10,fontSize:16}}>Primero</Light>
        </Radio>
        <Radio aria-label="two" 
        icon={<Icon as={<MaterialCommunityIcons name="human-child" />} />}
        colorScheme="primary" value="2" my={1}>
        <Light style={{marginHorizontal:10,fontSize:16}}>Segundo</Light>
        </Radio>
        <Radio aria-label="three"
        icon={<Icon as={<MaterialCommunityIcons name="human-male-female" />} />}
         colorScheme="primary" value="3" my={1}>
        <Light style={{marginHorizontal:10,fontSize:16}}>Tercero</Light>
        </Radio>
        <Radio aria-label="four"
        icon={<Icon as={<MaterialIcons name="family-restroom" />} />}
         colorScheme="primary" value="4" my={1}>
        <Light style={{marginHorizontal:10,fontSize:16}}>Cuarto o más </Light>
        </Radio>
      </Radio.Group>
	);
};

