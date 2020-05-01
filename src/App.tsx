import React, { Component } from "react";
import { Text, View, Image, Button, TextInput } from "react-native";

import { styles } from "./style";

export default class App extends Component {
  render() {
    return (
      <>
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
        </View>
        <View style={styles.emptyContainer}>
          <Image
            style={styles.emptyImage}
            source={require("../assets/empty.png")}
          ></Image>
          <View style={styles.searchContainer}>
            <Text style={styles.recepieSearchText}>
              Chef Rudy is here to help you cook your favourite recepies, I can
              also help you learn something new...
            </Text>
            <Button
              title="Recepie Search"
              color="#bf360c"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
          <View style={styles.searchContainer}>
            <Text style={styles.nutritionAnalysisText}>
              I can also perform nutritional analysis on your meals, or its
              ingredients..
            </Text>
            <Button
              title="Analyze Meal"
              color="#bf360c"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
        </View>
      </>
    );
  }
}
