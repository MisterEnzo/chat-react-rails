import { combineReducers } from 'redux';
import messages from './message_reducer';
import channels from './channel_reducer';

const rootReducer = combineReducers({
  messages,
  channels
});

export default rootReducer;
