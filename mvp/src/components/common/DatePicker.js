import { format} from 'date-fns';
import { es } from 'date-fns/locale';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import React, {useState,useEffect} from 'react';
import {View,TouchableOpacity,Dimensions} from 'react-native';
import Input from '../common/Input';






const DatePicker= ({day, showText}) => {
  const [show, setShow] = useState(false);
  const [date,setDate] = useState(day);
  const [text,setText] = useState(showText);
  const showDatePicker = () => {
    setShow(!show);
  };
  const onChange = (value) => {
    setShow(false);
    setText(false);
    setDate(value); 
    
  };
 

  const getDate =(n) =>{
      var day = new Date().getDate();
      var month = new Date().getMonth();
      var year = new Date().getFullYear();
      if(n==1){
        return new Date();
      }
      else if(n==2){
        return new Date(year + 1, month, day);
      }
      else{
        return new Date(year, month-10, day-9);
      }
  };
      return (  
        <View>
              <TouchableOpacity onPress={showDatePicker}>
              {text ?  <Input editable={false} placeholder="Fecha de Parto Estimada*"> 
              </Input>
              : 
              <Input editable={false}>
              {format(date,'dd/MM/yyyy')}</Input> }
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



export default DatePicker;