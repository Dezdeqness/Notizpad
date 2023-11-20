import { ViewProps } from 'react-native';
import { TaskPriority } from '../../../../model/task';

export interface TaskCardTypes extends ViewProps {
  id: string;
  title: string;
  location: string;
  isCompleted: boolean;
  onCheckboxChanged: (id: string) => void;
  priority: TaskPriority;
}
