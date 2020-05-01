import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Welcome from "../assets/welcome.svg";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/rudy.png")}
            style={styles.rudy}
          ></Image>
        </View>

        <View style={styles.headerTextBoxContainer}>
          <Text style={styles.primaryText}>Chef Rudy </Text>
          <Text style={styles.secondaryText}>Welcomes you...</Text>
        </View>

        {/* <Welcome height={"300px"} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 40,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
  },
  imageContainer: {
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1,
    backgroundColor: "#0000",
  },
  rudy: {
    height: 80,
    width: 80,
    marginRight: 10,
    backgroundColor: "#fff",
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "#000",
    shadowOpacity: 1,
  },
  primaryText: {
    fontSize: 19,
    fontWeight: "bold",
  },
  secondaryText: {
    fontSize: 15,
    color: "#ccc",
    fontWeight: "100",
  },
  headerTextBoxContainer: {
    display: "flex",
    alignContent: "center",
    paddingTop: 20,
  },
});

const palette = {};
