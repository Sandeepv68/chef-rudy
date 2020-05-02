import React, { Component } from "react";
import { connect } from "react-redux";

import { Text, View, ScrollView, Image, TextInput } from "react-native";

import { styles } from "./style";

import { getRecipesAction } from "../../Redux/Actions/RecipeSearchActions";

class RecipeSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
    };
  }

  componentDidUpdate() {}

  getSearchQuery = (query) => {
    if (query) {
      this.props.dispatch(getRecipesAction(query));
    }
  };

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
            <Text style={styles.primaryText}>Let's find something to cook... </Text>
          </View>
        </View>
        <View style={styles.searchBoxContainer}>
          <TextInput
            onChangeText={this.getSearchQuery}
            placeholder="eg, Kale salad, Chole Bhatura, Lasagne.."
            style={styles.searchBox}
            onSubmitEditing={(event) => this.getSearchQuery(event.nativeEvent.text)}
          />
        </View>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  recipeSearch: {
    recipe: state.recipeSearchReducer.recipe,
    loading: state.recipeSearchReducer.recipe,
    error: state.recipeSearchReducer.error,
  },
});

export default connect(mapStateToProps, null)(RecipeSearch);
