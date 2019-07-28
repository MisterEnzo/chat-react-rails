import * as types from '../actions/action_types';
import initialState from './initial_state';

export default function messagesReducer(state = initialState.messages, action){
  switch (action.type){
    case types.FETCH_MESSAGES:
      return action.messages;
    case types.POST_MESSAGE:
      return state;
    case types.RECEIVE_CABLE_MESSAGE:
      return [
        ...state,
        Object.assign({}, action.message)
      ];
    default:
      return state;
  }
}
