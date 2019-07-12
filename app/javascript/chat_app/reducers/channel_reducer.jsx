import * as types from '../actions/action_types';
import initialState from './initial_state';

export default function channelReducer(state = initialState.channels, action){
  switch (action.type) {
    default:
      return state;
  }
}
