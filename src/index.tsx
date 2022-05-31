import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package '@m2-modules/react-native-ios-feedback-generator' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const ReactNativeIosFeedbackGenerator =
  NativeModules.ReactNativeIosFeedbackGenerator
    ? NativeModules.ReactNativeIosFeedbackGenerator
    : new Proxy(
        {},
        {
          get() {
            throw new Error(LINKING_ERROR);
          },
        }
      );

const {
  ImpactFeedbackStyleLight,
  ImpactFeedbackStyleMedium,
  ImpactFeedbackStyleHeavy,
  ImpactFeedbackStyleSoft,
  ImpactFeedbackStyleRigid,
  NotificationFeedbackStyleSuccess,
  NotificationFeedbackStyleWarning,
  NotificationFeedbackStyleError,
} = ReactNativeIosFeedbackGenerator.getConstants();

export enum ImpactFeedbackStyle {
  Light = ImpactFeedbackStyleLight,
  Medium = ImpactFeedbackStyleMedium,
  Heavy = ImpactFeedbackStyleHeavy,
  Soft = ImpactFeedbackStyleSoft,
  Rigid = ImpactFeedbackStyleRigid,
}

export enum NotificationFeedbackStyle {
  Success = NotificationFeedbackStyleSuccess,
  Warning = NotificationFeedbackStyleWarning,
  Error = NotificationFeedbackStyleError,
}

export function impactFeedback(impactFeedbackStyle: ImpactFeedbackStyle) {
  ReactNativeIosFeedbackGenerator.impactFeedback(impactFeedbackStyle);
}

export function selectionFeedback() {
  ReactNativeIosFeedbackGenerator.selectionFeedback();
}

export function notificationFeedback(
  notificationFeedbackStyle: NotificationFeedbackStyle
) {
  ReactNativeIosFeedbackGenerator.notificationFeedback(
    notificationFeedbackStyle
  );
}
