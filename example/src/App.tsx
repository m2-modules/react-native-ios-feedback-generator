import {
  impactFeedback,
  ImpactFeedbackStyle,
  notificationFeedback,
  NotificationFeedbackStyle,
  selectionFeedback,
} from '@m2-modules/react-native-ios-feedback-generator';
import * as React from 'react';
import { Alert, Button, Platform, StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="impactFeedback - Heavy"
        onPress={() => {
          if (Platform.OS !== 'ios') {
            return Alert.alert('This module only support iOS platform.');
          }
          impactFeedback(ImpactFeedbackStyle.Heavy);
        }}
      />
      <Button
        title="impactFeedback - Medium"
        onPress={() => {
          if (Platform.OS !== 'ios') {
            return Alert.alert('This module only support iOS platform.');
          }
          impactFeedback(ImpactFeedbackStyle.Medium);
        }}
      />
      <Button
        title="impactFeedback - Light"
        onPress={() => {
          if (Platform.OS !== 'ios') {
            return Alert.alert('This module only support iOS platform.');
          }
          impactFeedback(ImpactFeedbackStyle.Light);
        }}
      />
      <Button
        title="impactFeedback - Rigid"
        onPress={() => {
          if (Platform.OS !== 'ios') {
            return Alert.alert('This module only support iOS platform.');
          }
          impactFeedback(ImpactFeedbackStyle.Rigid);
        }}
      />
      <Button
        title="impactFeedback - Soft"
        onPress={() => {
          if (Platform.OS !== 'ios') {
            return Alert.alert('This module only support iOS platform.');
          }
          impactFeedback(ImpactFeedbackStyle.Soft);
        }}
      />
      <Button title="selectionFeedback" onPress={() => selectionFeedback()} />
      <Button
        title="notificationFeedback - Success"
        onPress={() => {
          if (Platform.OS !== 'ios') {
            return Alert.alert('This module only support iOS platform.');
          }
          notificationFeedback(NotificationFeedbackStyle.Success);
        }}
      />
      <Button
        title="notificationFeedback - Warning"
        onPress={() => {
          if (Platform.OS !== 'ios') {
            return Alert.alert('This module only support iOS platform.');
          }
          notificationFeedback(NotificationFeedbackStyle.Warning);
        }}
      />
      <Button
        title="notificationFeedback - Error"
        onPress={() => {
          if (Platform.OS !== 'ios') {
            return Alert.alert('This module only support iOS platform.');
          }
          notificationFeedback(NotificationFeedbackStyle.Error);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
