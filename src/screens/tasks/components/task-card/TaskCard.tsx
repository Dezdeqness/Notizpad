import React from 'react';
import { TaskCardTypes } from './task-card.types';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from './task-card.styles';
import { Delete, Edit, Location } from '../../../../../assets';
import { Icon } from '../../../../components/icon/Icon';
import CheckBox from '@react-native-community/checkbox';

export const TaskCard: React.FC<TaskCardTypes> = ({
  id,
  title,
  location,
  isCompleted,
  onCheckboxChanged,
  priority,
}) => {
  const localStyle = StyleSheet.create({
    textDecoration: {
      textDecorationLine: isCompleted ? 'line-through' : 'none',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <View style={styles.row}>
          <View
            style={[
              styles.mark,
              {
                backgroundColor: priority,
              },
            ]}
          />

          <CheckBox
            disabled={false}
            tintColors={{ true: '#6871EE' }}
            value={isCompleted}
            onValueChange={() => onCheckboxChanged(id)}
          />
        </View>
      </View>

      <View style={[styles.column, { flex: 1 }]}>
        <Text style={[styles.title, localStyle.textDecoration]}>{title}</Text>
        {!isCompleted && (
          <>
            <View style={[styles.row, { alignItems: 'center' }]}>
              <View style={{ height: 10, width: 10 }}>
                <Location width={10} height={10} />
              </View>
              <View style={{ width: 4 }} />
              <Text style={styles.location}>{location}</Text>
            </View>
            <View style={{ height: 4 }} />
            <View style={[styles.row, { justifyContent: 'flex-end' }]}>
              <Icon backgroundColor={'#F8FAFF'}>
                <Delete color={'#6871EE'} width={20} height={20} />
              </Icon>
              <View style={{ width: 16 }} />
              <Icon backgroundColor={'#F8FAFF'}>
                <Edit color={'#6871EE'} width={20} height={20} />
              </Icon>
            </View>
          </>
        )}
      </View>
    </View>
  );
};
