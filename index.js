// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
/**
 * @format
 */
 import React from 'react';
 import 'react-native-gesture-handler';
 import {AppRegistry} from 'react-native';
 import App from './app/Entrypoint';
 import {name as appName} from './app.json';
 import {enableScreens} from 'react-native-screens';
 enableScreens();
 
 function HeadlessCheck({isHeadless}) {
   if (isHeadless) {
     // App has been launched in the background by iOS, ignore
     return null;
   }
 
   return <App />;
 }
 
 AppRegistry.registerComponent(appName, () => HeadlessCheck);
 