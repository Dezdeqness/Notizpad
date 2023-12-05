import { check, request, RESULTS } from 'react-native-permissions';
import { CAMERA_PERMISSION } from './permissions.constants';

const isGranted = (value: string): boolean => value === RESULTS.GRANTED;

const isDenied = (value: string): boolean => value === RESULTS.DENIED;

const isBlocked = (value: string): boolean => value === RESULTS.BLOCKED;

const inUnavailable = (value: string): boolean => value === RESULTS.UNAVAILABLE;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const requestCameraPermission = () => request(CAMERA_PERMISSION);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const checkCameraPermission = () => check(CAMERA_PERMISSION);

export default {
  isGranted,
  isDenied,
  isBlocked,
  inUnavailable,
  requestCameraPermission,
  checkCameraPermission,
};
