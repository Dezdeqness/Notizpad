import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 8,
    alignSelf: 'stretch',
  },
  pressable: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  selectableButtonText: {
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '700',
    fontFamily: 'SFProText-Bold',
  },
});
