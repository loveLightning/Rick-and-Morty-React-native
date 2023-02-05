/**
 * @format
 */

import { AppRegistry, ScrollView, Text, TextInput } from 'react-native'

import App from 'src/app'

import { name as appName } from './app.json'

Text.defaultProps = Text.defaultProps || {}
Text.defaultProps.maxFontSizeMultiplier = 1.2
TextInput.defaultProps = TextInput.defaultProps || {}
TextInput.defaultProps.maxFontSizeMultiplier = 1.2
ScrollView.defaultProps = ScrollView.defaultProps || {}
ScrollView.defaultProps.bounces = false
ScrollView.defaultProps.showsVerticalScrollIndicator = false
ScrollView.defaultProps.showsHorizontalScrollIndicator = false
ScrollView.defaultProps.overScrollMode = 'never'

AppRegistry.registerComponent(appName, () => App)
