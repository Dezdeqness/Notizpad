import React from 'react';
import { Platform, Text, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { styles } from './type-cell.styles';
import { TypeCellTypes } from './type-cell.types';

export const TypeCell: React.FC<TypeCellTypes> = ({
  title,
  isCompleted,
  onCheckboxChanged,
  priority,
}) => {
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
          {Platform.OS == 'ios' ? (
            <CheckBox
              boxType={'square'}
              disabled={true}
              style={styles.checkboxIos}
              tintColors={{ true: '#6871EE' }}
              value={isCompleted}
              onValueChange={() => onCheckboxChanged()}
            />
          ) : (
            <CheckBox
              disabled={false}
              tintColors={{ true: '#6871EE' }}
              value={isCompleted}
              onValueChange={() => onCheckboxChanged()}
            />
          )}
        </View>
      </View>

      <View style={[styles.column, { flex: 1 }]}>
        <Text style={[styles.title]}>{title}</Text>
      </View>
    </View>
  );
};
