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

  handleChange = (message) => {
    this.setState({
      message: message
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.postMessage(this.state.message,
                           this.props.selectedChannel);
    this.setState({
      message: ''
    });
  }

  render() {
    return (
      <div className="message-bar">
        <textarea type='text' value={this.state.message} onChange={(event) => this.handleChange(event.target.value)} />
        <input type='submit' value='Submit'
               onClick={(event) => this.handleSubmit(event)}
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
    currentUser: state.currentUser
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageBar);
