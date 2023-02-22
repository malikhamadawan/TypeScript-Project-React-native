import React, {FC} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import MainStack from './src/navigation';
import {persistor, store} from './src/redux/store';

type IAppStates = {
  isLoading: boolean;
};

const App: FC<IAppStates> = ({isLoading}) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainStack />
      </PersistGate>
    </Provider>
  );
};

export default App;
