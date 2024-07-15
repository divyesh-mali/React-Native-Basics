// Add this to index.js

import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const UseStateDemo = () => {
    const [data, setData] = useState('Hello World')

    const demo = () => {
        setData('Hello World Again')
    }

    console.log("UI rendered..."); // This execution of this statement shows that the whole UI is re-rendered when the state is changed

  return (
    <View>
      <Text>{data}</Text>
      <TouchableOpacity onPress={demo}>
        <Text>
            Click me 
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default UseStateDemo