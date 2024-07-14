// This is the minimum amount of code required to run a React Native app. Basiacally, a hello world app in React Native.
import React from 'react'

import {
  View,
  Text,
  SafeAreaView

} from 'react-native';

function App() {
  return (  // This is the JSX code that will be rendered on the screen. It is similar to HTML which is used inside javascript/typescript
    <SafeAreaView>
      <View>
        <Text>Hello World !</Text>
        <Text>Hello World !</Text>
        <Text>Hello World !</Text>
      </View>
    </SafeAreaView>
  )
}

export default App;