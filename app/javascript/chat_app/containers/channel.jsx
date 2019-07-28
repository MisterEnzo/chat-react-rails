import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchMessages } from '../actions/index';

import Message from '../components/message';

class Channel extends Component {
  constructor(props){
    super(props);
    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    let channel = this.props.selectedChannel;
    this.props.fetchMessages(channel);
  }

  componentDidMount() {
    this.fetch();
    console.log(App);
    this.subscribeActionCable(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.selectedChannel != nextProps.selectedChannel){
      this.subscribeActionCable(nextProps);
      console.log(App);
    }
  }

  componentWillUnmount() {
  }

  subscribeActionCable = (props) => {
    App[`channel_${props.selectedChannel}`] = App.cable.subscriptions.create(
      { channel: 'ChannelsChannel', channel_name: props.selectedChannel},
      {
        received: (message) => {
          console.log(message);
        }
      }
    );
  }

  render() {
    return(
      <div>
        <h1>Channel: {this.props.selectedChannel}</h1>
        {this.props.messages.map(({ author, content, created_at }) => {
          return(
            <Message author={author} content={content} timeStamp={created_at}
                     key={created_at} />
          )
        })}

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
    { fetchMessages: fetchMessages },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Channel);
