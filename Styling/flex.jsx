import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const flex = () => {
  return (
    <View style={styles.wrapper}>
        <View style={styles.section1}>
            <Text>Section 1</Text>
        </View>

        <View style={styles.section2}>
            <Text>Section 2</Text>
        </View>
    </View>
  )
}

const styles = new StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'royalblue',
    },

    section1: {
        backgroundColor: 'yellow',
        flex: 1
    },

    section2: {
        backgroundColor: 'pink',
        flex: 2
    }
})

export default flex