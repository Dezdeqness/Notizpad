import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from '../routes';
import { ManageTask, Tasks } from '../screens';
import { TasksStackParamList } from './tasks.types';
import React from 'react';

const Stack = createNativeStackNavigator<TasksStackParamList>();

export const TasksNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={Routes.TASKS} component={Tasks} />
      <Stack.Screen name={Routes.MANAGE_TASK} component={ManageTask} />
    </Stack.Navigator>
  );
};
