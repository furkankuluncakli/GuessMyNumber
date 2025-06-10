import PrimaryButton from "@/components/PrimaryButton";
import { StyleSheet, TextInput, View } from "react-native";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.numberInput} maxLength={2}
      keyboardType="number-pad"
      autoCorrect={false}
      autoCapitalize="none"
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
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
    backgroundColor: "#4e0329",
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
