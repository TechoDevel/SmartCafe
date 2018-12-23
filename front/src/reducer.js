import { combineReducers } from 'redux';

import waiterReducer from './pages/Waiter/reducer';

const rootReducer = combineReducers({ waiterReducer });

export default rootReducer;
