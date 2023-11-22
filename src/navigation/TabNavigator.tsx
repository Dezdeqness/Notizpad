import React from 'react';
import { Routes } from '../routes';
import { Map } from '../screens/map/Map';
import { Generator } from '../screens/generator/Generator';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {
  GeneratorSelected,
  GeneratorUnselected,
  MapSelected,
  MapUnselected,
  TasksSelected,
  TasksUnselected,
} from '../../assets';
import { useTheme } from 'react-native-paper';
import { TasksNavigator } from './TasksNavigator';
import { useBottomBarVisibleContext } from './RootNavigator';

const Tab = createMaterialBottomTabNavigator();

export const TabNavigator: React.FC = () => {
  const theme = useTheme();
  theme.colors.secondaryContainer = 'transperent';

  const bottomContext = useBottomBarVisibleContext();
  const display = bottomContext.valueInRoot;

  return (
    <Tab.Navigator
      activeColor={'#6871EE'}
      inactiveColor={'#464963'}
      initialRouteName={Routes.TASKS}
      barStyle={{
        backgroundColor: '#ffffff',
        display: display,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let icon;

          if (route.name === Routes.TASKS_ROOT) {
            icon = focused ? <TasksSelected /> : <TasksUnselected />;
          } else if (route.name === Routes.MAP) {
            icon = focused ? <MapSelected /> : <MapUnselected />;
          } else {
            icon = focused ? <GeneratorSelected /> : <GeneratorUnselected />;
          }

          return icon;
        },
      })}
    >
      <Tab.Screen name={Routes.TASKS_ROOT} component={TasksNavigator} />
      <Tab.Screen name={Routes.MAP} component={Map} />
      <Tab.Screen name={Routes.GENERATOR} component={Generator} />
    </Tab.Navigator>
  );
};
