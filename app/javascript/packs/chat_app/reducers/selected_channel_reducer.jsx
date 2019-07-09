import initialState from './initial_state';
import * as types from '../actions/action_types';

export default function selectedChannelReducer(state = initialState.selectedChannel, action){
  switch (action.type) {
    case types.SELECT_CHANNEL:
      return action.channel;
    default:
      return state;
  }
}
