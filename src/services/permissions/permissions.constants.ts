import { Platform } from 'react-native';
import { PERMISSIONS } from 'react-native-permissions';

export const CAMERA_PERMISSION = Platform.select({
  ios: PERMISSIONS.IOS.CAMERA,
  android: PERMISSIONS.ANDROID.CAMERA,
});
