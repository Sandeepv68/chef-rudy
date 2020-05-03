import React, { Component } from "react";

import { Text, View, ScrollView, Image, ImageBackground } from "react-native";
import { styles } from "./style";

export default function ShowRecipe(props) {
  console.log(props.route.params.recipeData.recipe);
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ImageBackground
        source={{ uri: `${props.route.params.recipeData.recipe.image}` }}
        style={{ height: 300, alignItems: "center" }}
      >
        <Image
          source={require("../../../assets/gradient.png")}
          style={{ resizeMode: "cover", height: 300, width: 500 }}
        ></Image>
        <View
          style={{
            height: 200,
            width: 200,
            top: -100,
            backgroundColor: "#fff",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 9,
            },
            shadowOpacity: 0.48,
            shadowRadius: 11.95,
            elevation: 5,
            borderRadius: 22,
          }}
        >
          <Image
            source={{ uri: `${props.route.params.recipeData.recipe.image}` }}
            style={{ height: 200, width: 200, borderRadius: 22 }}
          ></Image>
        </View>
      </ImageBackground>
    </View>
  );
}
