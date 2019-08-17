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

  onEnterPress = (event) => {
    if (event.keyCode == 13 && event.shiftKey == false) {
      event.preventDefault();
      document.getElementById("submit-button").click();
    }
  }

  render() {
    return (
      <div className="message-bar">
        <form onSubmit={(event)=>this.handleSubmit(event)}>
          <div className="text-area">
            <textarea type='text' value={this.state.message}
              onChange={(event) => this.handleChange(event.target.value)}
              onKeyDown={(event) => this.onEnterPress(event)}
            />
          </div>
          <div className="submit-button">
            <input type='submit' value='Send'
                   className='ui button primary'
                   id="submit-button" />
          </div>
         </form>
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
