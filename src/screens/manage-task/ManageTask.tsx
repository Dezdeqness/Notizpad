import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Image, Platform, Text, TextInput, View } from 'react-native';
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
import { launchImageLibrary } from 'react-native-image-picker';
import { ImageLibraryOptions } from 'react-native-image-picker/src/types';

export const ManageTask: React.FC<ManageTaskScreenProps> = ({ route }) => {
  const id = route.params.id;

  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const [selectedFilter, setSelectedFilter] = useState(TaskPriority.None);
  const [taskName, setTaskName] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isSaveEnabled = useMemo(
    () => selectedFilter !== TaskPriority.None && taskName.length > 0,
    [selectedFilter, taskName],
  );
  const [imageUri, setImageUri] = useState<string>('');
  const [buttonTitle, setButtonTitle] = useState<string>('+ Add photo');

  useEffect(() => {
    if (id) {
      const task = tasks.find(item => item.id === id);
      if (task) {
        setTaskName(task.title);
        setSelectedFilter(task.priority);
        const taskImageUri = task.imageUri;
        if (taskImageUri) {
          setImageUri(taskImageUri);
        }
      }
    }
  }, []);

  useEffect(() => {
    setButtonTitle(imageUri ? '+ Change photo' : '+ Add photo');
  }, [imageUri]);

  const onImageGalleryOptionClick = useCallback(() => {
    const options: ImageLibraryOptions = {
      includeBase64: true,
      mediaType: 'photo',
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        /* empty */
      } else if (response.errorCode) {
        /* empty */
      } else {
        const asset = response.assets?.[0];
        if (asset) {
          const template = 'data:image/*;base64,';
          setImageUri(template + asset.base64);
        }
      }
    }).then();
  }, []);

  return (
    <View>
      <View style={styles.containerToolbar}>
        <Toolbar title={'Add new task'} />
      </View>
      <View
        style={{
          padding: 16,
        }}
      >
        <View
          style={{
            overflow: 'hidden',
            borderRadius: 8,
          }}
        >
          {imageUri === '' ? (
            <TaskPhotoPlaceholder
              width={'100%'}
              height={160}
              preserveAspectRatio="xMidYMid slice"
            />
          ) : (
            <>
              <Image
                height={160}
                source={{ uri: imageUri }}
                resizeMode={'cover'}
              />
            </>
          )}
        </View>
        <View style={styles.containerAddTaskButton}>
          <PrimaryButton
            onPress={() => {
              onImageGalleryOptionClick();
            }}
            backgroundColor={'#F8D94F'}
          >
            <Text style={styles.addTaskButtonText}>{buttonTitle}</Text>
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
                      imageUri: imageUri,
                    })
                  : addTask({
                      title: taskName,
                      priority: selectedFilter,
                      imageUri: imageUri,
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
