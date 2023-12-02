import React, { useEffect, useState } from 'react';
import { Platform, Text, TextInput, View } from 'react-native';
import { ManageTaskScreenProps } from '../../navigation/tasks.types';
import { PrimaryButton, Toolbar } from '../../components';
import { TaskPhotoPlaceholder } from '../../../assets';
import CheckBox from '@react-native-community/checkbox';
import { Header } from './components';
import { TypeCell } from './components/type-cell/TypeCell';
import { styles } from './manage-task.styles';
import { TaskPriority } from '../../model/task';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { addTask, editTask } from '../../features/tasks/tasks-slice';
import { useNavigation } from '@react-navigation/native';

export const ManageTask: React.FC<ManageTaskScreenProps> = ({ route }) => {
  const [selectedFilter, setSelectedFilter] = useState(TaskPriority.None);
  const [taskName, setTaskName] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const id = route.params.id;
  useEffect(() => {
    if (id) {
      const task = tasks.find(item => item.id === id);
      if (task) {
        setTaskName(task.title);
        setSelectedFilter(task.priority);
      }
    }
  }, []);

  const isSaveEnabled =
    selectedFilter !== TaskPriority.None && taskName.length > 0;

  return (
    <View>
      <View style={styles.containerToolbar}>
        <Toolbar title={'Add new task'} />
      </View>
      <View>
        <View>
          <TaskPhotoPlaceholder
            width={'100%'}
            height={122}
            preserveAspectRatio="xMidYMid slice"
          />
        </View>
        <View style={styles.containerAddTaskButton}>
          <PrimaryButton onPress={() => {}} backgroundColor={'#F8D94F'}>
            <Text style={styles.addTaskButtonText}>+ Add photo</Text>
          </PrimaryButton>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <Header
          style={{
            marginBottom: 8,
          }}
          title={'Task name'}
        />
        <TextInput
          value={taskName}
          onChangeText={text => {
            setTaskName(text);
          }}
          cursorColor={'#262B4F'}
          style={[styles.inputContainer, styles.inputText]}
        />
        <View
          style={{
            paddingVertical: 8,
          }}
        >
          <Header
            style={{
              marginBottom: 8,
            }}
            title={'Location'}
          />
          <View
            style={{
              paddingLeft: 3,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            {Platform.OS == 'ios' ? (
              <CheckBox
                boxType={'square'}
                disabled={false}
                style={styles.checkboxIos}
                tintColors={{ true: '#6871EE' }}
                value={false}
                onValueChange={() => {}}
              />
            ) : (
              <CheckBox
                disabled={false}
                tintColors={{ true: '#6871EE' }}
                value={false}
                onValueChange={() => {}}
              />
            )}
            <Text style={styles.locationText}>Add location</Text>
          </View>
        </View>
        <Header title={'Type'} />
        <TypeCell
          title={'Urgent'}
          isCompleted={selectedFilter === TaskPriority.Urgent}
          onCheckboxChanged={() => {
            setSelectedFilter(TaskPriority.Urgent);
          }}
          priority={TaskPriority.Urgent}
        />
        <TypeCell
          title={'Regular'}
          isCompleted={selectedFilter === TaskPriority.Regular}
          onCheckboxChanged={() => {
            setSelectedFilter(TaskPriority.Regular);
          }}
          priority={TaskPriority.Regular}
        />
        <TypeCell
          title={'Low'}
          isCompleted={selectedFilter === TaskPriority.Low}
          onCheckboxChanged={() => {
            setSelectedFilter(TaskPriority.Low);
          }}
          priority={TaskPriority.Low}
        />
        <View style={styles.containerSaveButton}>
          <PrimaryButton
            disabled={!isSaveEnabled}
            onPress={() => {
              dispatch(
                id
                  ? editTask({
                      id: id,
                      title: taskName,
                      priority: selectedFilter,
                    })
                  : addTask({
                      title: taskName,
                      priority: selectedFilter,
                    }),
              );
              navigation.goBack();
            }}
            backgroundColor={isSaveEnabled ? '#F8D94F' : '#b09d4b'}
          >
            <Text style={styles.saveButtonText}>Save</Text>
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};
