import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'

const jsLogo = require('./assets/js.png')

const imageView = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
      {/* <Image style={styles.myLogo} source={jsLogo}/>  */}
      <Image style={styles.myLogo} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/220px-Unofficial_JavaScript_logo_2.svg.png'}}/>
      <Image style={styles.myLogo} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/220px-Unofficial_JavaScript_logo_2.svg.png'}}/>
      <Image style={styles.myLogo} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/220px-Unofficial_JavaScript_logo_2.svg.png'}}/>
      <Image style={styles.myLogo} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/220px-Unofficial_JavaScript_logo_2.svg.png'}}/>
      <Text>HEllO</Text>

      <Image style={styles.myLogo} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/220px-Unofficial_JavaScript_logo_2.svg.png'}}/>
      <Image style={styles.myLogo} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/220px-Unofficial_JavaScript_logo_2.svg.png'}}/>
      <Image style={styles.myLogo} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/220px-Unofficial_JavaScript_logo_2.svg.png'}}/>
      <Image style={styles.myLogo} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/220px-Unofficial_JavaScript_logo_2.svg.png'}}/>
      <Text>HEllO</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'royalblue',
        padding: 10
    },

    myLogo: {
        width: 200,
        height: 300,
        resizeMode: 'stretch',
        margin: 10
    }
})

export default imageView