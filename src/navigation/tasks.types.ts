import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Tabs: undefined;
  ManageTask: { id?: number };
};

export type TabsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Tabs'
>;

export type ManageTaskScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ManageTask'
>;
