import React from 'react'

import { 
    Text, 
    View,
    StyleSheet,
    useColorScheme,
    SafeAreaView,
    Button
} from 'react-native'

function AppPro() : JSX.Element {
    const isDarkMode = useColorScheme() === 'dark'

    
    return (
        // This view has attribute style which is assigned the value of the object styles.container i.e the container object from the stylesheet.
        <View style = {styles.container}>  
        {/*If the dark mode is enabled, the text color will be white, otherwise it will be black*/}
            <Text style={isDarkMode ? styles.whiteText : styles.blackText}> 
                Hello World bro
            </Text>

            <Button
                title="Press me"
                onPress={() => alert('Button Pressed')}></Button>
        </View>
    )
}

// Stylessheet is used to style the components. It contains objects with a set of key-value pairs that define the properties of the components & each key can further have multiple keys and values.
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', // moves from top to bottom
        alignItems: 'center' // moves from left to right
    },
    whiteText: {
        color: 'white' 
    },
    
    blackText: {
        color: '#000000'
    }
})


export default AppPro