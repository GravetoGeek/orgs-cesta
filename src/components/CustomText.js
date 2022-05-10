import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function CustomText({ children, style }) {
  let defaultStyle = customStyle.customText

  if (style?.fontWeight === 'bold') {
    defaultStyle = customStyle.customBoldText
  }

  return <Text style={[style, defaultStyle]}>{children}</Text>;
}


const customStyle = StyleSheet.create({
  customText: {
    fontFamily: 'Montserrat_400Regular',
    fontWeight: 'normal'
  },
  customBoldText: {
    fontFamily: 'Montserrat_700Bold',
    fontWeight: 'normal'
  }
})