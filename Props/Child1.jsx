import { View, Text } from 'react-native'
import React from 'react'
import Child2 from './Child2';

const Child1 = (props) => {
    console.log(props); // Props are passed as an object
  return (
    <View>
      <Text>Name: {props.firstName}{'\n'}Surname: {props.lastName} {'\n\n'} </Text>
      <Child2 data="This is data passed from child 1" />
    </View>
  )
}

export default Child1