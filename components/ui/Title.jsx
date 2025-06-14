import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Colors } from '../../constants/Colors'

function Title({children}) {
  return (
    <Text style={styles.title}>{children}  </Text>
  )
}

export default Title

const styles = StyleSheet.create({
    title:{
        fontFamily:"open-sans-bold",
        fontSize:24,
        color: "white",
        textAlign:"center",
        padding:8,
        borderWidth:2,
        borderColor: Colors.accent500
    }
})