import React from 'react';
import { Routes } from '../routes';
import { Map } from '../screens/map/Map';
import { Generator } from '../screens/generator/Generator';
import {
  GeneratorSelected,
  GeneratorUnselected,
  MapSelected,
  MapUnselected,
  TasksSelected,
  TasksUnselected,
} from '../../assets';
import { useTheme } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { Tasks } from '../screens';

const Tab = createMaterialBottomTabNavigator();

export const TabNavigator: React.FC = () => {
  const theme = useTheme();
  theme.colors.secondaryContainer = 'transperent';

  return (
    <Tab.Navigator
      activeColor={'#6871EE'}
      inactiveColor={'#464963'}
      initialRouteName={Routes.TASKS}
      barStyle={{
        backgroundColor: '#ffffff',
      }}
    >
      <Tab.Screen
        name={Routes.TASKS}
        component={Tasks}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <TasksSelected /> : <TasksUnselected />,
        }}
      />

      <Tab.Screen
        name={Routes.MAP}
        component={Map}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <MapSelected /> : <MapUnselected />,
        }}
      />
      <Tab.Screen
        name={Routes.GENERATOR}
        component={Generator}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <GeneratorSelected /> : <GeneratorUnselected />,
        }}
      />
    </Tab.Navigator>
  );
};
