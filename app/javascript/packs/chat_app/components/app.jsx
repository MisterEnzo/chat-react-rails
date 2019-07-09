import React from 'react';
import ChannelList from '../containers/channel_list';
import Channel from '../containers/channel';
import MessageBar from '../components/message_bar';

const App = () => {
  return (
    <div className="app">
      <ChannelList />
      <Channel />
      <MessageBar />
    </div>
  );
};

export default App;
