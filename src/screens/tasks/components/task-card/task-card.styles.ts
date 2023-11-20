import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingTop: 6,
    paddingBottom: 6,
    paddingEnd: 6,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  mark: {
    height: 26,
    width: 3,
    borderTopEndRadius: 25,
    borderBottomEndRadius: 25,
  },
  checkBox: {
    marginHorizontal: 8,
    marginTop: 5,
    borderWidth: 2,
    borderRadius: 4,
    height: 16,
    width: 16,
  },
  title: {
    color: '#162E48',
    fontFamily: 'SFProText-Bold',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 25,
  },
  location: {
    color: '#5E6178',
    fontFamily: 'SFProText-Regular',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 14,
  },
});
