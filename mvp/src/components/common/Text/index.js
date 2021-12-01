import React from 'react';
import {Text} from 'react-native';
import styles from './styles'


export const Regular = ({children,style}) => {

	return (
	<Text style={[style,styles.regular]}>
      {children}
  	</Text>
	);
};

export const Thin = ({children,style}) => {

	return (
	<Text style={[style,styles.thin]}>
      {children}
  	</Text>
	);
};

export const ExtraLight = ({children,style}) => {

	return (
	<Text style={[style,styles.extralight]}>
      {children}
  	</Text>
	);
};

export const Light = ({children,style,numberOfLines}) => {

	return (
	<Text style={[style,styles.light]} numberOfLines={numberOfLines}>
      {children}
  	</Text>
	);
};

export const Medium = ({children,style}) => {

	return (
	<Text style={[style,styles.medium]}>
      {children}
  	</Text>
	);
};
export const SemiBold = ({children,style}) => {

	return (
	<Text style={[style,styles.semibold]}>
      {children}
  	</Text>
	);
};

export const Bold = ({children,style,align}) => {
	const getAlign = () => {
		if(align){
		return align}
		else {
		return "center"}
	}

	return (
	<Text style={[style,{textAlign:getAlign()},styles.bold]}>
      {children}
  	</Text>
	);
};

export const ExtraBold = ({children,style}) => {

	return (
	<Text style={[style,styles.extrabold]}>
      {children}
  	</Text>
	);
};

export const Black = ({children,style}) => {

	return (
	<Text style={[style,styles.black]}>
      {children}
  	</Text>
	);
};

