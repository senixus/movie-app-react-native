/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import React from 'react';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import configureStore from './src/store/index';

const RNRedux = () => (
  <Provider store={configureStore}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
