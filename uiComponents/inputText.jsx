// Add to index.js to view this individual component

import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'

const inputText = () => {
    const [email, setEmail] = useState('')
  return (
    <View style={styles.wrapper}>
      <TextInput onChangeText={ (text) => {setEmail(text)} } style={styles.inputBox} placeholder='Email'></TextInput>
      <Text style={{color:'white'}}>{email}</Text>  
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'royalblue',
        padding: 10
    },

    inputBox: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        elevation: 15,
    }
})

export default inputText