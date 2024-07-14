import { View, Text } from 'react-native'
import React from 'react'

const Child2 = (props) => {
    console.log(props);
  return (
    <View>
      <Text>Data: {props.data}</Text>
    </View>
  )
}

export default Child2