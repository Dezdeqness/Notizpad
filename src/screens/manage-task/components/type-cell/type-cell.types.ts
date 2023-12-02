import { ViewProps } from 'react-native';
import { TaskPriority } from '../../../../model/task';

export interface TypeCellTypes extends ViewProps {
  title: string;
  isCompleted: boolean;
  onCheckboxChanged: () => void;
  priority: TaskPriority;
}
