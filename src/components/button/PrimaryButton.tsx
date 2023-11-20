import React, { PropsWithChildren } from 'react';
import { Pressable, View } from 'react-native';
import { PrimaryButtonTypes } from './button.types';
import { styles } from './button.styles';

export const PrimaryButton: React.FC<PropsWithChildren<PrimaryButtonTypes>> = ({
  backgroundColor,
  children,
  ...rest
}) => {
  return (
    <View style={styles.container}>
      <Pressable
        {...rest}
        onPress={rest.onPress}
        android_ripple={{ color: 'grey' }}
        style={[
          styles.pressable,
          {
            backgroundColor: backgroundColor,
          },
        ]}
      >
        {children}
      </Pressable>
    </View>
  );
};
