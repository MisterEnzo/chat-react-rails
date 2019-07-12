import * as types from './action_types';

export function fetchMessages(channel) {
  // return { type: types.FETCH_MESSAGES, messages: [
  //   {
  //     "author":"anonymous92",
  //     "content":"payload",
  //     "created_at":"2017-09-26T23:03:16.365Z"
  //   }
  // ]}
  // ---
  return fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return { type: types.FETCH_MESSAGES, messages: data.messages}
  })
}

// the code for posting works, now  you need to complete the action
export function postMessage(currentUser, message, channel) {
  const body = {author: currentUser, content: message};
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  return {type: types.POST_MESSAGE, message: message};
}

export function selectChannel(channel) {
  return {type: types.SELECT_CHANNEL, channel: channel};
}
