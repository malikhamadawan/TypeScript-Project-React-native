import {combineReducers} from 'redux';
import {AuthService} from './services/auth-service';
import authSlice from './slice/auth-slice/auth-slice';

const rootReducer = combineReducers({
  [AuthService.reducerPath]: AuthService.reducer,
  authSlice,
});

export default rootReducer;
