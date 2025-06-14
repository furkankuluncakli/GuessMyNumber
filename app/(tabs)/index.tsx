import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";

import {LinearGradient} from "expo-linear-gradient" 
import {useFonts} from "expo-font"
import AppLoading from "expo-app-loading"

import StartGameScreen from "@/screens/StartGameScreen";
import GameOverScreen from "@/screens/GameOverScreen"
import GameScreen from "@/screens/GameScreen";
import { Colors } from '@/constants/Colors'

export default function HomeScreen() {
  const [userNumber, setUserNumber] = useState()
  const [gameIsOver, setGameIsOver] = useState(true)
  const [guessRounds, setGuessRounds] = useState(0)

  const [fonstLoaded] = useFonts({
    "open-sans": require("../../assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("../../assets/fonts/OpenSans-Bold.ttf")
  })

  if(!fonstLoaded){
    return <AppLoading/>
  }

  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber)
    setGameIsOver(false)
  }

  function gameOverHandler (){
    setGameIsOver(true)
  }

  function startNewGameHandler(){
    setUserNumber(null)
    setGuessRounds(0)

  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>

  if(userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }

  if(gameIsOver && userNumber){
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={roundsNumber} onStartNewGame={startNewGameHandler}/> 
  }

  return (
    
  <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
    <ImageBackground 
      source={require("../../assets/images/background.png")} 
      style={styles.rootScreen}
      resizeMode="cover"
      imageStyle={styles.backgroundImage}
      >
     <SafeAreaView style={styles.rootScreen}> {screen}</SafeAreaView>
    </ImageBackground>
  </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen:{
    flex:1,
  },
  backgroundImage:{
    opacity:0.15
  }
});
