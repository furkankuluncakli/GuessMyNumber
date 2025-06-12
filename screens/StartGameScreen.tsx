import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../constants/Colors"
import Title from "@/components/ui/Title";

function StartGameScreen({onPickNumber}) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText: string) {
    setEnteredNumber(enteredText)
  }

  function resetInputHandler(){
    setEnteredNumber("")
  }

  function confirmInputHandler(){
    const chosenNumber = parseInt(enteredNumber)

    if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
      Alert.alert(
        "Invalid Number", 
        "Number has to be between 1 and 99",
        [{text: "Okay", style:"destructive", onPress:resetInputHandler}]
    );
    return;
    }

    onPickNumber(chosenNumber)
  }


  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <View style={styles.inputContainer}>
        <Text style={styles.instructionText}>Enter a Number</Text>
        <TextInput style={styles.numberInput} maxLength={2}
        keyboardType="number-pad"
        autoCorrect={false}
        autoCapitalize="none"
        value={enteredNumber}
        onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    marginTop:100,
    alignItems:"center"
  },
  inputContainer: {
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 8,
    elevation: 8,
    backgroundColor: Colors.primary800,
    justifyContent:"center",
    alignItems:"center"
  },
  instructionText:{
    color:Colors.accent500,
    fontSize:24
  },
  numberInput: {
    height: 50,
    width:50,
    fontSize: 28,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign:"center",
    
  },
  buttonsContainer:{
    flexDirection:"row",
  },
  buttonContainer:{
    flex:1,
  }
});
