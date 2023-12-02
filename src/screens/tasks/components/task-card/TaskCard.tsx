import React from 'react';
import { TaskCardTypes } from './task-card.types';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { styles } from './task-card.styles';
import { Delete, Edit, Location } from '../../../../../assets';
import { Icon } from '../../../../components';
import CheckBox from '@react-native-community/checkbox';
import { useDispatch } from 'react-redux';
import { removeTask } from '../../../../features/tasks/tasks-slice';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../navigation/tasks.types';
import { Routes } from '../../../../routes';

export const TaskCard: React.FC<TaskCardTypes> = ({
  id,
  title,
  location,
  isCompleted,
  onCheckboxChanged,
  priority,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const localStyle = StyleSheet.create({
    textDecoration: {
      textDecorationLine: isCompleted ? 'line-through' : 'none',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <View
          style={[
            styles.row,
            {
              alignItems: 'center',
              justifyContent: 'center',
            },
          ]}
        >
          <View
            style={[
              styles.mark,
              {
                backgroundColor: priority,
              },
            ]}
          />
          {Platform.OS == 'ios' ? (
            <CheckBox
              boxType={'square'}
              disabled={false}
              style={{
                height: 16,
                width: 16,
                alignContent: 'center',
                marginHorizontal: 8,
              }}
              tintColors={{ true: '#6871EE' }}
              value={isCompleted}
              onValueChange={() => onCheckboxChanged(id)}
            />
          ) : (
            <CheckBox
              disabled={false}
              tintColors={{ true: '#6871EE' }}
              value={isCompleted}
              onValueChange={() => onCheckboxChanged(id)}
            />
          )}
        </View>
      </View>

      <View style={[styles.column, { flex: 1 }]}>
        <Text style={[styles.title, localStyle.textDecoration]}>{title}</Text>
        {!isCompleted && (
          <>
            {!!location && (
              <>
                <View style={[styles.row, { alignItems: 'center' }]}>
                  <View style={{ height: 10, width: 10 }}>
                    <Location width={10} height={10} />
                  </View>
                  <View style={{ width: 4 }} />
                  <Text style={styles.location}>{location}</Text>
                </View>
              </>
            )}

            <View style={{ height: 4 }} />
            <View style={[styles.row, { justifyContent: 'flex-end' }]}>
              <Icon
                backgroundColor={'#F8FAFF'}
                onPress={() => {
                  dispatch(removeTask(id));
                }}
              >
                <Delete color={'#6871EE'} width={20} height={20} />
              </Icon>
              <View style={{ width: 16 }} />
              <Icon
                backgroundColor={'#F8FAFF'}
                onPress={() => {
                  navigation.navigate(Routes.MANAGE_TASK, { id: id });
                }}
              >
                <Edit color={'#6871EE'} width={20} height={20} />
              </Icon>
            </View>
          </>
        )}
      </View>
    </View>
  );
};
