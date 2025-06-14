import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

import Title from "../components/ui/Title"
import NumberContainer from '@/components/game/NumberContainer';
import PrimaryButton from '@/components/ui/PrimaryButton';
import Card from '@/components/ui/Card';
import InstructionText from '@/components/ui/InstructionText';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameOver}) {
  const initialGuess = generateRandomBetween(1,100,userNumber )
  const [currentGuess, setCurrentGuess] = useState(initialGuess)

  useEffect(() =>{
    if(currentGuess == userNumber){
      onGameOver()
    }
  } ,[currentGuess, userNumber, onGameOver])

  useEffect(()=>{
    minBoundary=1,
    maxBoundary=100
  }, [])

  function nextGuessHandler(direction){
    if(
      direction==="lower" && currentGuess < userNumber || 
      direction==="greater" && currentGuess > userNumber
    ){
      Alert.alert("LIAR", "You are a liar. You know thats not true", [
        {text: "Sorry!", style:"cancel",}])
      return;
    }

    if(direction === "lower"){
      maxBoundary = currentGuess
    }else{
      minBoundary = currentGuess + 1
    }
    const newRndNum = generateRandomBetween(minBoundary, maxBoundary, currentGuess) 
     setCurrentGuess(newRndNum)
  }

  return (
    <View style={styles.screen}>
        <Title> Opponent's Guess</Title>
        <NumberContainer>
          {currentGuess}
        </NumberContainer>
        <Card>
            <InstructionText>Higher or Lower?</InstructionText>
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
                   <Ionicons name="remove" size={24} color="white" />
                </PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
                  <Ionicons name="add" size={24} color="white" />
                </PrimaryButton>
              </View>
            </View>
            
        </Card>
        {/* <View>Log Rounds</View> */}
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:24,
    },
    buttonsContainer:{
      flexDirection:"row",
      marginTop:12
    },
    buttonContainer:{
      flex:1
    }
})