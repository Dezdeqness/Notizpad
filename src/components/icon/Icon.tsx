import React, { PropsWithChildren } from 'react';
import { Pressable, View } from 'react-native';
import { IconTypes } from './icon.types';
import { styles } from './icon.styles';

export const Icon: React.FC<PropsWithChildren<IconTypes>> = ({
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
