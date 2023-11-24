import React from 'react';
import { View, Text } from 'react-native';
import { ManageTaskScreenProps } from '../../navigation/tasks.types';

export const ManageTask: React.FC<ManageTaskScreenProps> = ({ route }) => {
  return (
    <View>
      <Text>Manage task screen {route.params.id}</Text>
    </View>
  );
};
