import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerToolbar: {
    zIndex: 3,
  },
  containerAddTaskButton: {
    zIndex: 2,
    marginTop: -18,
    alignSelf: 'center',
  },
  addTaskButtonText: {
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '700',
    fontFamily: 'SFProText-Bold',
    color: '#262B4F',
  },
  inputContainer: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderColor: '#DADBDD',
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  inputText: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    fontFamily: 'SFProText-Regular',
    color: '#262B4F',
  },
  contentContainer: {
    paddingTop: 12,
    paddingHorizontal: 16,
  },
  checkboxIos: {
    height: 16,
    width: 16,
    alignContent: 'center',
    marginHorizontal: 8,
  },
  locationText: {
    color: '#162E48',
    fontSize: 14,
    lineHeight: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    fontFamily: 'SFProText-Bold',
  },
  containerSaveButton: {
    marginTop: 24,
  },
  saveButtonText: {
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '700',
    fontFamily: 'SFProText-Bold',
    color: '#262B4F',
  },
});
