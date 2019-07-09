import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { postMessage } from '../actions/index';

class MessageBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: ''
    };
  }

  onFormChange = (message) => {
    this.setState({
      message: message
    })
  }

  onFormSend = () => {
    this.props.postMessage(this.props.currentUser,
                           this.state.message,
                           this.props.selectedChannel);
    this.setState({
      message: ''
    });
  }

  render() {
    return (
      <div>
        <input type='text' value={this.state.message} onChange={(event) => this.onFormChange(event.target.value)} />
        <input type='submit' value='Submit'
               onClick={() => this.onFormSend()}
               className='btn'/>
      </div>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {postMessage: postMessage},
    dispatch
)};

function mapStateToProps(state){
  return {
    currentUser: state.currentUser,
    selectedChannel: state.selectedChannel
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageBar);
