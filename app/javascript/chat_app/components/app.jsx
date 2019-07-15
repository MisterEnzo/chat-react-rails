import React from 'react';
import Channel from '../containers/channel';
import MessageBar from './message_bar';

const App = (props) => {
  return (
    <div className="app">
      <Channel selectedChannel={props.match.params.channel} />
      <MessageBar selectedChannel={props.match.params.channel} />
    </div>
  );
};

export default App;
