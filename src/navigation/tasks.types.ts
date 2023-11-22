import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  TasksRoot: undefined;
  Map: undefined;
  Generator: undefined;
};

export type TasksStackParamList = {
  Tasks: undefined;
  ManageTask: { id: number };
};

export type TasksScreenProps = NativeStackScreenProps<
  TasksStackParamList,
  'Tasks'
>;

export type ManageTaskScreenProps = NativeStackScreenProps<
  TasksStackParamList,
  'ManageTask'
>;
