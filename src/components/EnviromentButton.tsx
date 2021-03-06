import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnviromentButtonProps extends RectButtonProperties {
  title: string;
  active?: boolean;
}

export function EnviromentButton({
  title, 
  active = false,
  ...rest
}: EnviromentButtonProps){
  return(
    <RectButton 
      style={[
        styles.container,
        active && styles.containerActive  
      ]}
      {...rest} 
    >
      <Text style={[
        styles.text,
        active && styles.textActive
      ]}>{title}</Text>
    </RectButton>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    width: 106,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginHorizontal: 2
  },
  containerActive: {
    
    backgroundColor: colors.green_light
  },
  text:{
    color: colors.heading,
    fontFamily: fonts.text
  },
  textActive: {
    fontFamily: fonts.heading,
    color: colors.green_dark,
  }
});