import { FlatList, Text, View } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import { PrimaryButton, SelectableButton } from '../../components';
import { TaskCard } from './components/';
import { FilterStatus } from '../../model/task';
import { styles } from './tasks.styles';
import { RootStackParamList } from '../../navigation/tasks.types';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Routes } from '../../routes';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { loadTasks, toggleTaskStatus } from '../../features/tasks/tasks-slice';
import { Circle } from 'react-native-progress';

export const Tasks: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const [isLoading, setLoading] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  const fetchTasks = () => {
    setLoading(true);

    dispatch(loadTasks()).finally(() => {
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const [status, setStatus] = useState(FilterStatus.All);

  const filterTasks = () => {
    switch (status) {
      case FilterStatus.Active:
        return tasks.filter(task => !task.isCompleted);
      case FilterStatus.Completed:
        return tasks.filter(task => task.isCompleted);
      default:
        return tasks;
    }
  };
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const filteredList = useMemo(() => filterTasks(), [tasks, status]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F8FAFF',
      }}
    >
      <View
        style={{
          backgroundColor: '#6871EE',
          borderBottomEndRadius: 20,
          borderBottomStartRadius: 20,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 16,
            paddingVertical: 8,
            justifyContent: 'space-between',
          }}
        >
          <Text style={styles.title}>Hello, there</Text>
          <PrimaryButton
            onPress={() => {
              navigation.navigate(Routes.MANAGE_TASK, {});
            }}
            backgroundColor={'#F8D94F'}
          >
            <Text style={styles.buttonText}>+ Add task</Text>
          </PrimaryButton>
        </View>
        <Text
          style={[
            styles.status,
            {
              paddingHorizontal: 16,
              paddingTop: 10,
              paddingBottom: 16,
            },
          ]}
        >
          You have{'\n'}
          {filteredList.length} tasks here
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 16,
          paddingVertical: 12,
        }}
      >
        <SelectableButton
          onPress={() => {
            setStatus(FilterStatus.All);
          }}
          isSelected={status == FilterStatus.All}
          text={'All'}
        />
        <View style={{ padding: 10 }} />
        <SelectableButton
          onPress={() => {
            setStatus(FilterStatus.Active);
          }}
          isSelected={status == FilterStatus.Active}
          text={'Active'}
        />
        <View style={{ padding: 10 }} />
        <SelectableButton
          onPress={() => {
            setStatus(FilterStatus.Completed);
          }}
          isSelected={status == FilterStatus.Completed}
          text={'Completed'}
        />
      </View>
      <Text style={styles.tasksTitle}>Your Tasks</Text>
      {isLoading ? (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Circle
            size={40}
            borderWidth={4}
            indeterminate={true}
            color={'#6871EE'}
          />
        </View>
      ) : (
        <FlatList
          style={{
            margin: 16,
          }}
          data={filteredList}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 6 }}>
              <TaskCard
                id={item.id}
                title={item.title}
                location={item.location}
                isCompleted={item.isCompleted}
                priority={item.priority}
                onCheckboxChanged={id => {
                  dispatch(toggleTaskStatus(id));
                }}
              />
            </View>
          )}
        />
      )}
    </View>
  );
};
