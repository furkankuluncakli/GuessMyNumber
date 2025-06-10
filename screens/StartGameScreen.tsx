import PrimaryButton from "@/components/PrimaryButton";
import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";

function StartGameScreen() {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText: string) {
    setEnteredNumber(enteredText)
  }

  function resetInputHandler(){
    setEnteredNumber("")
  }

  function confirmInputHandler(){
    const chosen = parseInt(enteredNumber)

    if(isNaN(chosen) || chosen <= 0 || chosen > 99){
      Alert.alert(
        "Invalid Number", 
        "Number has to be between 1 and 99"
      ,[{text: "Okay", style:"destructive-3", onPress:resetInputHandler}]
    );
    return;
    }

    console.log("valid number")
  }


  return (
    <View style={styles.inputContainer}>
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
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 8,
    elevation: 8,
    backgroundColor: "#3b021f",
    justifyContent:"center",
    alignItems:"center"
  },
  numberInput: {
    height: 50,
    width:50,
    fontSize: 28,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
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
