import { Colors } from '@/constants/Colors'
import React from 'react'
import { StyleSheet, View } from 'react-native'

function Card({children}) {
  return (
    <View style={styles.card}>
        {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    card: {
        marginTop: 36,
        marginHorizontal: 24,
        padding: 16,
        borderRadius: 8,
        elevation: 8,
        backgroundColor: Colors.primary800,
        justifyContent:"center",
        alignItems:"center"
      },
})