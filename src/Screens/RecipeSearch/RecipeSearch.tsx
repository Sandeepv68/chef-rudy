import React, { Component } from "react";
import { connect } from "react-redux";

import {
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import { ListPlaceHolder } from "../../Components/ListPlaceHolder/ListPlaceHolder";
import { GridPlaceHolder } from "../../Components/GridPlaceHolder/GridPlaceHolder";

import { styles } from "./style";

import { getRecipesAction } from "../../Redux/Actions/RecipeSearchActions";

class RecipeSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      recipeCount: 0,
      displayGrid: false,
      searchQuery: "",
      from: 0,
      to: 10,
    };
  }

  componentDidUpdate(prevProps, pervState) {
    if (
      this.props.recipeSearch.recipe &&
      this.props.recipeSearch.recipe !== prevProps.recipeSearch.recipe &&
      this.props.recipeSearch.recipe.hits
    ) {
      this.setState({
        recipes: this.props.recipeSearch.recipe.hits,
        recipeCount: this.props.recipeSearch.recipe.count,
      });
    }
  }

  toggleView = () => {
    this.setState({
      displayGrid: !this.state.displayGrid,
    });
  };

  getSearchQuery = (query) => {
    if (query && query.length) {
      this.setState({
        searchQuery: query,
      });
      return this.props.dispatch(getRecipesAction(query));
    } else {
      this.setState({
        recipes: [],
      });
    }
  };

  refreshView = () => {
    if (this.state.searchQuery && this.state.searchQuery.length > 0) {
      return this.props.dispatch(getRecipesAction(this.state.searchQuery));
    }
  };

  goToRecipe = (recipe) => {
    this.props.navigation.navigate("Show", { recipeData: recipe });
  };

  showMoreResults = ({ nativeEvent }) => {
    if ((nativeEvent.contentOffset.y = 500)) {
      return this.props.dispatch(
        getRecipesAction(this.state.searchQuery, this.state.from, this.state.to)
      );
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
            placeholder="eg, Kale salad, Chole Bhatura, Lasagne.."
            style={styles.searchBox}
            onSubmitEditing={(event) => this.getSearchQuery(event.nativeEvent.text)}
          />
          {this.state.recipes.length ? (
            <View style={{ flexDirection: "row-reverse", marginBottom: 5 }}>
              <TouchableOpacity style={{ marginRight: 20 }} onPress={this.toggleView}>
                {this.state.displayGrid ? (
                  <Image
                    source={require("../../../assets/list.png")}
                    style={styles.toggleIcon}
                  ></Image>
                ) : (
                  <Image
                    source={require("../../../assets/grid.png")}
                    style={styles.toggleIcon}
                  ></Image>
                )}
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 10,
                  color: "#9e9e9e",
                  textAlign: "right",
                  marginRight: 10,
                }}
              >
                {this.state.recipeCount} Recipes found
              </Text>
            </View>
          ) : null}

          {this.props.recipeSearch.loading && !this.state.displayGrid ? (
            <ListPlaceHolder />
          ) : null}
          {this.props.recipeSearch.loading && this.state.displayGrid ? (
            <GridPlaceHolder />
          ) : null}

          {this.state.recipes.length == 0 && !this.props.recipeSearch.loading ? (
            <View style={styles.noResultsContainer}>
              <Image
                source={require("../../../assets/no_results.png")}
                style={styles.noResultsFound}
              ></Image>
              <Text style={styles.noResultsText}>
                I couldn't find anything that matches your taste,
              </Text>
              <Text style={styles.noResultsText}>Please search again....</Text>
            </View>
          ) : null}

          {this.state.recipes.length > 0 && !this.props.recipeSearch.loading ? (
            <ScrollView
              fadingEdgeLength={1}
              style={styles.scrollResults}
              showsVerticalScrollIndicator={false}
              refreshControl={
                <RefreshControl
                  refreshing={this.props.recipeSearch.loading}
                  onRefresh={this.refreshView}
                />
              }
              // onScroll={(e) => this.showMoreResults(e)}
            >
              {this.state.displayGrid ? (
                <View style={styles.gridViewContainer}>
                  {this.state.recipes.map((item, key) => {
                    return (
                      <TouchableOpacity key={key} onPress={(e) => this.goToRecipe(item)}>
                        <View style={styles.gridViewCard}>
                          <View>
                            <Image
                              source={{ uri: `${item.recipe.image}` }}
                              style={styles.gridThumbnail}
                            ></Image>
                          </View>
                          <Text style={styles.gridText} numberOfLines={1}>
                            {item.recipe.label}
                          </Text>
                          <Text style={styles.gridSource}>{item.recipe.source}</Text>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              ) : null}

              {!this.state.displayGrid
                ? this.state.recipes.map((item, key) => {
                    return (
                      <TouchableOpacity key={key} onPress={(e) => this.goToRecipe(item)}>
                        <View style={styles.resultItemContainer}>
                          <View style={styles.resultImageContainer}>
                            <Image
                              source={{ uri: `${item.recipe.image}` }}
                              style={styles.resultImage}
                            ></Image>
                          </View>
                          <View style={styles.textDataContainer}>
                            <Text style={styles.itemName} numberOfLines={1}>
                              {item.recipe.label}
                            </Text>
                            <View style={styles.sourceRow}>
                              <Image
                                source={require("../../../assets/user.png")}
                                style={styles.sourceIcon}
                              ></Image>
                              <Text style={styles.sourceName} numberOfLines={1}>
                                {item.recipe.source}
                              </Text>
                            </View>
                            <View style={styles.healthLabelsContainer}>
                              {item.recipe.healthLabels.map((healthLabel, key) => {
                                return (
                                  <Text key={key} style={styles.healthLabel}>
                                    {healthLabel}
                                  </Text>
                                );
                              })}
                            </View>
                            <View style={styles.healthLabelsContainer}>
                              {item.recipe.dietLabels.map((dietLabel, key) => {
                                return (
                                  <Text key={key} style={styles.dietLabel}>
                                    {dietLabel}
                                  </Text>
                                );
                              })}
                              {item.recipe.cautions.map((caution, key) => {
                                return (
                                  <Text key={key} style={styles.cautionLabel}>
                                    {caution}
                                  </Text>
                                );
                              })}
                            </View>
                          </View>
                        </View>
                      </TouchableOpacity>
                    );
                  })
                : null}
            </ScrollView>
          ) : null}
        </View>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  recipeSearch: {
    recipe: state.recipeSearchReducer.recipe,
    loading: state.recipeSearchReducer.loading,
    error: state.recipeSearchReducer.error,
  },
});

export default connect(mapStateToProps, null)(RecipeSearch);
