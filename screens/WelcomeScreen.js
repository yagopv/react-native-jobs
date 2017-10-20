import React, { Component } from 'react';
import { Slides } from '../components';

const SLIDES_DATA = [
  { text: 'Welcome to JobApp', color: '#03A9F4' },
  { text: 'Use this to get a job', color: '#009688' },
  { text: 'Set yout location, then swipe away', color: '#03A9F4' }
];

class WelcomeScreen extends Component {
  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  }

  render() {
    return (
      <Slides 
        data={SLIDES_DATA} 
        onComplete={this.onSlidesComplete}
      />
    );
  }
}

export { WelcomeScreen };
