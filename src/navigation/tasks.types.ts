import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Tabs: undefined;
  ManageTask: { id?: string };
};

export type TabsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Tabs'
>;

export type ManageTaskScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ManageTask'
>;
