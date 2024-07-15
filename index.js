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
import UseStateDemo from './useState/UseStateDemo';
import textView from './uiComponents/textView';
import inputText from './uiComponents/inputText';
import imageView from './uiComponents/imageView';

AppRegistry.registerComponent(appName, () => imageView); // This basically decides which page to run when the app is started initially
