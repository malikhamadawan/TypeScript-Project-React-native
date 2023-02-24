import React, {FC, useEffect, useRef} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import MainStack from './src/navigation';
import {persistor, store} from './src/redux/store';
import OneSignal from 'react-native-onesignal';
import PushNotification from 'react-native-push-notification';
import {Platform} from 'react-native';
type IAppStates = {
  isLoading: boolean;
};

const App: FC<IAppStates> = ({isLoading}) => {
  const ONESIGNAL_APP_ID = `e008b737-1000-4a07-9adc-ba2d29610daf`;
  useEffect(() => {
    OneSignal.setAppId(ONESIGNAL_APP_ID);
    // OneSignal.setRequiresUserPrivacyConsent(true);
    OneSignal.setLogLevel(6, 0);
    OneSignal.promptForPushNotificationsWithUserResponse(response => {
      console.log('rse', response);
    });
    OneSignal.setNotificationOpenedHandler(handle => {
      console.log('notification', JSON.stringify(handle?.notification?.body));
    });
    OneSignal.setNotificationWillShowInForegroundHandler(
      notificationReceivedEvent => {
        const notification = notificationReceivedEvent.getNotification();

        notificationReceivedEvent.complete(notification);
        console.log('OneSignal: notification received:', notification);
        if (Platform.OS === 'android') {
          // Show notification popup on Android
          const data = notification.additionalData;
          console.log('data', data);

          const message = notification.body;
          const title = notification.title;
          // const notificationType = notification.notificationType;
          const channel = 'default';
          const smallIcon = 'ic_notification';
          PushNotification.localNotification({
            channelId: channel,
            title: title,
            message: message,
            smallIcon: smallIcon,
            largeIcon: 'ic_launcher',
            priority: 'high',
            visibility: 'public',
            playSound: true,
            soundName: 'default',
            // actions: '["Yes", "No"]', // Change this to the actions you want to show in the notification popup
          });
        }
      },
    );
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainStack />
      </PersistGate>
    </Provider>
  );
};

export default App;
