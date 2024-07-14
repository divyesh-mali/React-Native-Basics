// Add this file in App registry (in index.js) to run this page & see other styling components

import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ComponentStyles = () => {
  return (
    <View>
      <Text style={ {color: 'red'} }>Inline Styling</Text>
      <Text style= {styles.cName} >External Styling</Text>
      <Text style={ [styles.cName, styles.heading]}>Multiple Styles (Arrays)</Text>
      <Text style={ [styles.cName, {fontStyle:'italic'}]}>Multiple Styles again !</Text>
    </View>
  )
}

const styles = new StyleSheet.create({
  cName: {
    color: 'green'
  },

  heading: {
    fontSize: 30,
    fontStyle: 'italic'
  }
})

export default ComponentStyles