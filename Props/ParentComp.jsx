// Add this to index.js

import { View, Text } from 'react-native'
import React from 'react'
import Child1 from './Child1'
import Student from './Student';

const ParentComp = () => {
    // Objects to pass as data
    const data1 = {name: 'Divyesh', phone: '123456789'}
    const data2 = {name: 'Divu', phone: '987654321'}

    // Array of objects to pass as data
    const data = [
        {name: 'Yash', phone: '784512'},
        {name: 'Kartik', phone: '895623'},
    ]

  return (
    <View>
        {/* Passing data normally */}
        <Student name="Yo" phone="34736" />

        {/* Passsing data as an object */}
        <Student data={data1} />
        <Student data={data2} />

        {/* Passing data as an array of objects */}
        <Student data={data[0]} />
        <Student data={data[1]} />

        {/* Passing data as an array of objects */}
    </View>
    


    // Part 1
    // <View>
    //   <Child1 firstName="Divyesh" lastName="Mali" />
    // </View>
    
  )
}

export default ParentComp