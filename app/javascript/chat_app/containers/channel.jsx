import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchMessages, receiveCableMessage } from '../actions/index';

import Message from '../components/message';
import MessageBar from '../components/message_bar';

class Channel extends Component {
  constructor(props){
    super(props);
    this.fetch = this.fetch.bind(this);
  }

  fetch(channel) {
    this.props.fetchMessages(channel);
  }

  componentDidMount() {
    this.fetch(this.props.selectedChannel);
    this.subscribeActionCable(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.selectedChannel != nextProps.selectedChannel){
      this.fetch(nextProps.selectedChannel);
      // unsubscribe from current action cable connection
      this.unsubscribeActionCable();
      // subscribe to new selected channel
      this.subscribeActionCable(nextProps);
    }
  }

  componentDidUpdate() {
    this.scrollBottom();
  }

  scrollBottom = () => {
    let messages = document.querySelector(".messages");
    messages.scrollTop = messages.scrollHeight;
  }

  subscribeActionCable = (props) => {
    // action cable connection is initialized
    App[`channel_${props.selectedChannel}`] = App.cable.subscriptions.create(
      { channel: 'ChannelsChannel', channel_name: props.selectedChannel},
      {
        received: (message) => {
          // push the new message to redux state
          props.receiveCableMessage(message);
        }
      }
    );
  }

  unsubscribeActionCable = () => {
    var subscription = App.cable.subscriptions.subscriptions[1];
    App.cable.subscriptions.remove(subscription);
  }

  render() {
    if (!this.props.selectedChannel) {
      return (
        <div>Loading...</div>
      )
    }
    return(
      <div className="channel">
        <h1 className="ui header">{this.props.selectedChannel}</h1>
        <div className="messages">
          {this.props.messages.map(({ author, content, created_at }) => {
            return(
              <Message author={author} content={content} timeStamp={created_at}
                       key={created_at} />
            )
          })}
        </div>
        <MessageBar selectedChannel={this.props.selectedChannel} />
      </div>
    )
  }
};

function mapStateToProps(state){
  return {
    messages: state.messages
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {
      fetchMessages: fetchMessages,
      receiveCableMessage: receiveCableMessage
     },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Channel);
