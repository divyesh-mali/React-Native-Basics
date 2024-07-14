/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import AppPro from './AppPro';
import {name as appName} from './app.json';
import ComponentStyles from './Styling/ComponentStyles';
import flex from './Styling/flex';
import ParentComp from './Props/ParentComp';

AppRegistry.registerComponent(appName, () => ParentComp); // This basically decides which page to run when the app is started initially
