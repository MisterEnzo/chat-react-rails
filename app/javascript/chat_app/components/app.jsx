import React from 'react';
import ChannelList from '../containers/channel_list';
import Channel from '../containers/channel';
import MessageBar from './message_bar';

const App = (props) => {
  return (
    <div className="app">
      <ChannelList selectedChannel={props.match.params.channel} />
      <Channel selectedChannel={props.match.params.channel} />
      <MessageBar selectedChannel={props.match.params.channel} />
    </div>
  );
};

export default App;
