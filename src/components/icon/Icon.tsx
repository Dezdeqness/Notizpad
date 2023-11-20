import React from 'react';
import { Pressable, View } from 'react-native';
import { IconTypes } from './icon.types';
import { styles } from './icon.styles';

export const Icon: React.FC<IconTypes> = ({
  backgroundColor,
  children,
  ...rest
}) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => rest.onPress}
        android_ripple={{ color: 'grey' }}
        style={[
          styles.pressable,
          {
            backgroundColor: '#F8FAFF',
          },
        ]}
      >
        {children}
      </Pressable>
    </View>
  );
};
