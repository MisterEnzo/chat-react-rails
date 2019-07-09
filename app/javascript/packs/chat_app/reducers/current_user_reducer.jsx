import initialState from './initial_state';

export default function currentUserReducer(state = initialState.currentUser, action){
  switch (action.type){
    default:
      return state;
  }
}
