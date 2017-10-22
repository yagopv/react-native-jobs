import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AuthScreen extends Component {
  componentDidMount = () => {    
    this.props.facebookLogin();
  }
  
  componentWillReceiveProps = (nextProps) => {
    this.onAuthComplete(nextProps);
  }
  
  onAuthComplete(props) {
    if (props.token) {
      this.props.navigation.navigate('map');
    }
  }

  render() {
    return (
      <View />
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  token: auth.token
});

const ConnectedAuthScreen = connect(mapStateToProps, actions)(AuthScreen);

export { ConnectedAuthScreen as AuthScreen };
