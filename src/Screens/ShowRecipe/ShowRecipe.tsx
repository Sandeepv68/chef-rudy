import React, { Component } from "react";

import { Text, View, ScrollView, Image, ImageBackground } from "react-native";
import { styles } from "./style";

export default function ShowRecipe(props) {
  let data = props.route.params.recipeData.recipe;
  return (
    <View style={styles.showRecipe}>
      <ImageBackground source={{ uri: `${data.image}` }} style={styles.headerImage}>
        <Image
          source={require("../../../assets/gradient.png")}
          style={styles.headerGradient}
        ></Image>
        <View style={styles.recipeImageContainer}>
          <Image source={{ uri: `${data.image}` }} style={styles.recipeImage}></Image>
        </View>
      </ImageBackground>
      <ScrollView style={styles.scrollView}>
        <View style={styles.detailsView}>
          <Text style={styles.recipeLabel}>{data.label}</Text>
          <Text style={styles.recipeSource}>{data.source}</Text>
        </View>
        <View style={styles.recipeQuickDetailsView}>
          <Text style={styles.quickDetailsChips}>{data.yield} Servings</Text>
          <Text style={styles.quickDetailsChips}>
            Preparation time: {data.totalTime} Mins
          </Text>
          <Text style={styles.quickDetailsChips}>
            Total Calories: {data.calories.toFixed(2)}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
