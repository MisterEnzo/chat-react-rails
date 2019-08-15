import React from 'react';
import ChannelList from '../containers/channel_list';
import Channel from '../containers/channel';
import MessageBar from './message_bar';

const App = (props) => {
  return (
    <div className="app ui vertical stripe segment">
      <div className="ui stackable grid container">
        <div className="two wide column">
          <ChannelList selectedChannel={props.match.params.channel} />
        </div>
        <div className="twelve wide column">
          <Channel selectedChannel={props.match.params.channel} />
          <MessageBar selectedChannel={props.match.params.channel} />
        </div>
      </div>
    </div>
  );
};

export default App;
