// Add to index.js to view this individual component
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const textView = () => {
    const data = 'Welcome to'
  return (
    <View style={styles.wrapper}>
        <View style={{backgroundColor:'white', padding:10, borderRadius:10, elevation:15}}>{/*Elevation adds shadow */}
            <Text style={{color:'black'}}>{data}</Text>
    </View>
    <Text style={styles.heading}>NEW <Text style={{color:'yellow', fontWeight:'bold'}}>WORLD</Text> ORDER</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'royalblue',
    },
    heading: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20
    }
})

export default textView