import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'

// Thats how you pass data to a function in TouchableOpacity. Basically, you can pass data to a function in TouchableOpacity by using arrow function. In 'onPress' event, you need to write function definition with parameter and then call the function with the parameter. 
const touchableOpacity = () => {
    
    const demo = (x) => {
        console.log('Hello ', x)
    }

  return (
    <SafeAreaView style={styles.wrapper}>
      <TouchableOpacity onPress={()=>{demo(10)}} style={styles.myBtn}>
        <Text style={styles.myBtnText}>Click here</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#333',

    },

    myBtn: {
        backgroundColor: 'royalblue',
        padding: 10,
        margin: 10,
        borderRadius: 8,

    },

    myBtnText: {
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center'
    }




})

export default touchableOpacity