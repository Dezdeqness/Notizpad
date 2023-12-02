import { Text, View } from 'react-native';
import React from 'react';
import { Icon } from '../icon';
import { Back } from '../../../assets';
import { ToolbarTypes } from './toolbar.types';
import { useNavigation } from '@react-navigation/native';
import { styles } from './toolbar.styles';

export const Toolbar: React.FC<ToolbarTypes> = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.containerInner}>
        <View style={{ padding: 8 }}>
          <Icon onPress={() => navigation.goBack()}>
            <Back width={24} height={24} />
          </Icon>
        </View>
        <Text style={styles.title}>{title}</Text>
        <View
          style={{
            margin: 8,
            width: 24,
            height: 24,
          }}
        />
      </View>
    </View>
  );
};
