import React, { Component } from "react";
import { Text, View, Image } from "react-native";

import { CustomButton } from "../../Components/Button/Button";

import { styles } from "./style";

export default class HomeScreen extends Component {
  gotoRecepieSearch = () => {
    this.props.navigation.navigate("Search");
  };

  gotoMealAnalysis = () => {
    this.props.navigation.navigate("Analyze");
  };

  render() {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../../assets/rudy.png")}
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
            source={require("../../../assets/empty.png")}
          ></Image>
          <View style={styles.searchContainer}>
            <Text style={styles.recepieSearchText}>
              Chef Rudy is here to help you cook your favourite recipes, I can also help
              you learn something new...
            </Text>
            <CustomButton
              onPress={this.gotoRecepieSearch}
              styles={{ backgroundColor: "#ff5722" }}
            >
              Recipe Search
            </CustomButton>
          </View>
          <View style={styles.searchContainer}>
            <Text style={styles.nutritionAnalysisText}>
              I can also perform nutritional analysis on your meals, or its ingredients..
            </Text>
            <CustomButton
              onPress={this.gotoMealAnalysis}
              styles={{ backgroundColor: "#ff5722" }}
            >
              Analyze Meal
            </CustomButton>
          </View>
        </View>
      </>
    );
  }
}
