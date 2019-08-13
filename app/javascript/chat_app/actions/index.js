import * as types from './action_types';

export function fetchMessages(channel) {
  return fetch(`/api/v1/channels/${channel}/messages`, {credentials: "same-origin"} )
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return { type: types.FETCH_MESSAGES, messages: data}
  })
}

// the code for posting works, now  you need to complete the action
export function postMessage(message, channel) {
  const body = {content: message};
  const url = `/api/v1/channels/${channel}/messages`;
  const csrfToken = document.querySelector('meta[name="csrf-token"]').content;
  const promise = fetch(url, {
    credentials: "same-origin",
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken
    },
    body: JSON.stringify(body)
  });
  return {type: types.POST_MESSAGE, message: message};
}

export function selectChannel(channel) {
  return {type: types.SELECT_CHANNEL, channel: channel};
}

export function receiveCableMessage(message) {
  return { type: types.RECEIVE_CABLE_MESSAGE, message: message }
}
