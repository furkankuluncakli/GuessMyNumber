import React, { ReactNode } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../constants/Colors'

type PrimaryButtonProps={
  children: ReactNode
   onPress: () => void
}

function PrimaryButton({children, onPress}: PrimaryButtonProps) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable style= {({pressed}) => 
        pressed ? 
        [styles.buttonInnerContainer, styles.pressed]
        :
        styles.buttonInnerContainer} 
        android_ripple={{color:Colors.primary600 }}
        onPress={onPress}
        >
      <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
  buttonOuterContainer:{
     borderRadius:28,
     margin:4,
     overflow:"hidden"
  },
  buttonInnerContainer:{
    backgroundColor: Colors.primary500,
    paddingVertical:8,
    paddingHorizontal:16,
    elevation:2
  },
  buttonText:{
    color:"white",
    textAlign:"center"
  },
  pressed:{
    opacity:0.75
  }
})
