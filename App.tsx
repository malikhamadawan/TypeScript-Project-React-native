import React, {FC, useEffect, useRef} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import MainStack from './src/navigation';
import {persistor, store} from './src/redux/store';
import OneSignal from 'react-native-onesignal';
type IAppStates = {
  isLoading: boolean;
};

const App: FC<IAppStates> = ({isLoading}) => {
  const ONESIGNAL_APP_ID = `e008b737-1000-4a07-9adc-ba2d29610daf`;
  useEffect(() => {
    OneSignal.setAppId(ONESIGNAL_APP_ID);
    OneSignal.promptForPushNotificationsWithUserResponse();
    OneSignal.setNotificationOpenedHandler(handle => {
      console.log('notification', handle);
    });
    OneSignal.setLogLevel(6, 0);
    console.log(OneSignal.getDeviceState());
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
