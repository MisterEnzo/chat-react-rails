import { combineReducers } from 'redux';
import channels from './channel_reducer';
import messages from './message_reducer';
import selectedChannel from './selected_channel_reducer';
import currentUser from './current_user_reducer';

const rootReducer = combineReducers({
  channels,
  messages,
  selectedChannel,
  currentUser
});

export default rootReducer;
