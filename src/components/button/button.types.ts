import { PressableProps } from 'react-native';

export interface PrimaryButtonTypes extends PressableProps {
  backgroundColor: string;
}

export interface SelectableButtonTypes extends PressableProps {
  text: string;
  isSelected: boolean;
  textStyle?: object;
  selectedColorBackground?: string;
  unSelectedColorBackground?: string;
  selectedColorText?: string;
  unSelectedColorText?: string;
}
