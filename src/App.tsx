import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Welcome from "../assets/welcome.svg";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/rudy.png")} style={styles.rudy}></Image>
      <View>
        <Text style={styles.primaryText}>Chef Rudy </Text>
        <Text style={styles.secndaryText}>Welcomes you...</Text>
      </View>

      {/* <Welcome height={"300px"} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 40,
    backgroundColor: "#fff",
    display: "flex",
  },
  rudy: {
    height: 80,
    width: 80,
    marginRight: 10,
  },
  primaryText: {
    fontSize: 19,
    fontWeight: "bold",
  },
  secndaryText: {
    fontSize: 15,
    color: "#ccc",
    fontWeight: "100",
  },
});

const palette = {};
