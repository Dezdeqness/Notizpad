import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useBottomBarVisibleContext } from '../../navigation/RootNavigator';
import { ManageTaskScreenProps } from '../../navigation/tasks.types';

export const ManageTask: React.FC<ManageTaskScreenProps> = ({ route }) => {
  const { updateValueInRoot } = useBottomBarVisibleContext();

  useEffect(() => {
    updateValueInRoot('none');

    return () => {
      updateValueInRoot('flex');
    };
  }, []);
  return (
    <View>
      <Text>Manage task screen {route.params.id}</Text>
    </View>
  );
};
