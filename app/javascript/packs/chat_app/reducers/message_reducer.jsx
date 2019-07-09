import * as types from '../actions/action_types';
import initialState from './initial_state';

export default function messagesReducer(state = initialState.messages, action){
  switch (action.type){
    case types.FETCH_MESSAGES:
      return action.messages;
    case types.POST_MESSAGE:
      return state;
    default:
      return state;
  }
}
