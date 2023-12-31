export interface Task {
  id: string;
  title: string;
  location: string;
  isCompleted: boolean;
  priority: TaskPriority;
  imageUri: string;
}

export enum TaskPriority {
  Urgent = '#DF7E8D',
  Regular = '#F8D94F',
  Low = '#77D4BD',
  None = '',
}

export enum FilterStatus {
  All = 'all',
  Active = 'active',
  Completed = 'completed',
}
