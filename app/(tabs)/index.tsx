import { ImageBackground, StyleSheet, View } from "react-native";
import {LinearGradient} from "expo-linear-gradient" 

import StartGameScreen from "@/screens/StartGameScreen";

export default function HomeScreen() {
  return (
  <LinearGradient colors={["#4e0329","#ddb52f"]} style={styles.rootScreen}>
    <ImageBackground 
      source={require("../../assets/images/background.png")} 
      style={styles.rootScreen}
      resizeMode="cover"
      imageStyle={styles.backgroundImage}
      >
      
      <StartGameScreen />
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
