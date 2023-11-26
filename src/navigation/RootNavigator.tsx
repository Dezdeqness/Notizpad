import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator } from './TabNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from '../routes';
import { ManageTask } from '../screens';
import { RootStackParamList } from './tasks.types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Routes.TABS} component={TabNavigator} />
        <Stack.Screen name={Routes.MANAGE_TASK} component={ManageTask} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
