import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Student = (props) => {
    // Check if `data` prop is passed, otherwise use `name` and `phone` directly
    const { data, name, phone } = props;
    const studentData = data || { name, phone };

    console.log(props)

  return (
    <View>
      {/* Passing data via props  */}
      <Text style={styles.sName}>
         {props.name} {'\n\n\n'}
      </Text>

      
          
       {/* Passing data as an object */}
      <Text style={styles.sName}>
         {studentData.name} 
      </Text>

      <Text> 
        {studentData.phone} {'\n'}
      </Text>

      
    </View>
  )
}

const styles = StyleSheet.create({
    sName: {
        fontSize: 15,
        color: 'red',
    }
})

export default Student