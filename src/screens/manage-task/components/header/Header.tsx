import React, { PropsWithChildren } from 'react';
import { Text } from 'react-native';
import { TaskCardTypes } from './header.types';
import { styles } from './header.styles';

export const Header: React.FC<PropsWithChildren<TaskCardTypes>> = ({
  title,
  ...rest
}) => {
  return <Text style={[styles.text, rest.style]}>{title}</Text>;
};
