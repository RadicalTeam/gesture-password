import React from 'react';
import {
  AppRegistry,
} from 'react-native';

import PasswordGesture from './src/index';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state= {
      status: 'normal',
    }
  }
  // Example for check password
  onEnd = function(password) {
    if (password == '123456') {
      this.setState({
        status: 'right',
        message: 'Password is right, success.'
      });

      // your codes to close this view
    } else {
      this.setState({
        status: 'wrong',
        message: 'Password is wrong, try again.'
      });
    }
  }
  onStart = function() {
    this.setState({
      status: 'normal',
      message: 'Please input your password.'
    });
  }
  onReset =  function() {
    this.setState({
      status: 'normal',
      message: 'Please input your password (again).'
    });
  }

  getInitialState = function() {
    return {
      message: 'Please input your password.',
      status: 'normal'
    }
  }

  render() {
    return (
      <PasswordGesture
        ref='pg'
        status={this.state.status}
        message={this.state.message}
        onStart={() => this.onStart()}
        onEnd={(password) => this.onEnd(password)}
        normalColor="black"
        wrongColor="red"
        rightColor="green"
        innerCircle="gray"
        outerCircle="black"
        interval={6}
  />
    );
  }
}

AppRegistry.registerComponent('gesture', () => App);
