import React, { Component } from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './store/store';

import {
  WelcomeScreen,
  AuthScreen,
  MapScreen,
  DeckScreen,
  SettingsScreen,  
  ReviewScreen
} from './screens';

class App extends Component {
  render() {
    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },  
      main: {
        screen: TabNavigator({
          map: { screen: MapScreen },
          deck: { screen: DeckScreen },
          review: {
            screen: StackNavigator({  
              review: { screen: ReviewScreen },
              settings: { screen: SettingsScreen }
            })
          }
        })  
      }
    }, {
      navigationOptions: {
        tabBarVisible: false
      },
      lazy: true
    });

    return ( 
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

export default App;
