import { combineReducers } from 'redux';
import messages from './message_reducer';

const rootReducer = combineReducers({
  messages
});

export default rootReducer;
