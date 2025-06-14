import { Colors } from '@/constants/Colors'
import React from 'react'
import { StyleSheet, Text } from 'react-native'

function InstructionText({children}) {
  return (
    <Text style={styles.instructionText}>{children}</Text>
  )
}

export default InstructionText

const styles = StyleSheet.create({
    instructionText:{
    fontFamily:"open-sans",
    color:Colors.accent500,
    fontSize:24
  },
})