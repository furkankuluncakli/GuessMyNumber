import Title from '@/components/ui/Title'
import { Colors } from '@/constants/Colors'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Image, View } from 'react-native'

function GameOverScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Is OVER!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/images/success.png")}/>
      </View>
    </View>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    padding:24,
    alignItems:"center",
    justifyContent:"center"
  },
  imageContainer:{
    height:300,
    width:300,
    borderRadius:150,
    borderWidth:2,
    borderColor:Colors.accent500,
    overflow:"hidden",
    margin:36
  },
  image:{
    width:"100%",
    height:"100%"
  }
})