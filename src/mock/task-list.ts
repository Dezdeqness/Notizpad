import { Task, TaskPriority } from '../model/task';

export const taskData: Task[] = [
  {
    id: 'id1',
    title: 'Go to gym',
    location: 'Kyev',
    isCompleted: true,
    priority: TaskPriority.Low,
  },
  {
    id: 'id2',
    title: 'Go to STO',
    location: 'Kyev',
    isCompleted: false,
    priority: TaskPriority.Urgent,
  },
  {
    id: 'id3',
    title: 'Teach React Native',
    location: 'Kyev',
    isCompleted: true,
    priority: TaskPriority.Urgent,
  },
  {
    id: 'id4',
    title: 'Refresh CV',
    location: 'Kyev',
    isCompleted: true,
    priority: TaskPriority.Regular,
  },
  {
    id: 'id5',
    title: 'Bicycle',
    location: 'Kyev',
    isCompleted: false,
    priority: TaskPriority.Urgent,
  },
  {
    id: 'id6',
    title: 'Buy gift',
    location: 'Kyev',
    isCompleted: false,
    priority: TaskPriority.Urgent,
  },
  {
    id: 'id7',
    title: 'Find girlfriend',
    location: 'Kyev',
    isCompleted: false,
    priority: TaskPriority.Low,
  },
];
