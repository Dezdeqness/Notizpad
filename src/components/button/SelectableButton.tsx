import React, { PropsWithChildren } from 'react';
import { SelectableButtonTypes } from './button.types';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { styles } from './button.styles';

export const SelectableButton: React.FC<
  PropsWithChildren<SelectableButtonTypes>
> = ({
  text,
  textStyle = styles.selectableButtonText,
  isSelected,
  selectedColorBackground = '#6871EE',
  unSelectedColorBackground = '#fff',
  selectedColorText = '#fff',
  unSelectedColorText = '#262B4F',
  ...rest
}) => {
  const localStyle = StyleSheet.create({
    buttonBackground: {
      backgroundColor: isSelected
        ? selectedColorBackground
        : unSelectedColorBackground,
    },
    textColor: {
      color: isSelected ? selectedColorText : unSelectedColorText,
    },
  });

  return (
    <View style={styles.container}>
      <Pressable
        {...rest}
        onPress={rest.onPress}
        android_ripple={{ color: 'grey' }}
        style={[styles.pressable, localStyle.buttonBackground]}
      >
        <Text style={[textStyle, localStyle.textColor]}>{text}</Text>
      </Pressable>
    </View>
  );
};
