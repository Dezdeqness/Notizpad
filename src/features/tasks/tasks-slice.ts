import { Task, TaskPriority } from '../../model/task';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { taskData } from '../../mock/task-list';
import { sleep } from '../../mock/sleep';

export interface TasksState {
  tasks: Task[];
}

export interface EditTaskPayload {
  id: string;
  title: string;
  priority: TaskPriority;
}

export interface AddTaskPayload {
  title: string;
  priority: TaskPriority;
}

const initialState: TasksState = {
  tasks: [],
};

export const loadTasks = createAsyncThunk('tasks/loadTasks', async () => {
  await sleep(2000);
  return taskData;
});

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<AddTaskPayload>) => {
      state.tasks.push({
        id: Date.now().toString(),
        title: action.payload.title,
        location: '',
        isCompleted: false,
        priority: action.payload.priority,
      });
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(item => item.id === action.payload);
    },
    toggleTaskStatus: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find(item => item.id == action.payload);
      if (task) {
        task.isCompleted = !task.isCompleted;
      }
    },
    editTask: (state, action: PayloadAction<EditTaskPayload>) => {
      const task = state.tasks.find(item => item.id == action.payload.id);
      if (task) {
        task.title = action.payload.title;
        task.priority = action.payload.priority;
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(loadTasks.fulfilled, (state, action) => {
      state.tasks = action.payload;
    });
  },
});

export const { addTask, removeTask, toggleTaskStatus, editTask } =
  tasksSlice.actions;

export default tasksSlice.reducer;
