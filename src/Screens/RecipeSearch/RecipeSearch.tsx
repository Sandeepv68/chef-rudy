import React, { Component } from "react";
import { Text, View, ScrollView, Image, TextInput } from "react-native";

import { styles } from "./style";

export default class RecipeSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getSearchQuery = () => {};

  render() {
    return (
      <>
        <View style={styles.mainContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../../assets/rudy.png")}
              style={styles.rudy}
            ></Image>
          </View>
          <View style={styles.headerTextBoxContainer}>
            <Text style={styles.primaryText}>
              Let's find something to cook...{" "}
            </Text>
          </View>
        </View>
        <View style={styles.searchBoxContainer}>
          <TextInput
            onChangeText={this.getSearchQuery}
            placeholder="eg, Kale salad, Chole Bhatura, Lasagne.."
            style={styles.searchBox}
            onSubmitEditing={(event) =>
              this.getSearchQuery(event.nativeEvent.text)
            }
          />
        </View>
      </>
    );
  }
}
