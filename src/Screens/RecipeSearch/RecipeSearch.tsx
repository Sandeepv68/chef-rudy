import React, { Component } from "react";
import { connect } from "react-redux";

import { Text, View, ScrollView, Image, TextInput } from "react-native";
import { Placeholder, PlaceholderMedia, PlaceholderLine, Fade } from "rn-placeholder";

import { styles } from "./style";

import { getRecipesAction } from "../../Redux/Actions/RecipeSearchActions";

import data from "./data.json";

class RecipeSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
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
      });
    }
  }

  getSearchQuery = (query) => {
    if (query && query.length) {
      return this.props.dispatch(getRecipesAction(query));
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
          {this.props.recipeSearch.loading ? (
            <>
              <Placeholder
                Animation={Fade}
                Left={PlaceholderMedia}
                style={{ opacity: 1 }}
              >
                <PlaceholderLine width={80} />
                <PlaceholderLine />
                <PlaceholderLine width={30} />
              </Placeholder>
              <Placeholder
                Animation={Fade}
                Left={PlaceholderMedia}
                style={{ opacity: 0.5 }}
              >
                <PlaceholderLine width={80} />
                <PlaceholderLine />
                <PlaceholderLine width={30} />
              </Placeholder>
              <Placeholder
                Animation={Fade}
                Left={PlaceholderMedia}
                style={{ opacity: 0.3 }}
              >
                <PlaceholderLine width={80} />
                <PlaceholderLine />
                <PlaceholderLine width={30} />
              </Placeholder>
              <Placeholder
                Animation={Fade}
                Left={PlaceholderMedia}
                style={{ opacity: 0.1 }}
              >
                <PlaceholderLine width={80} />
                <PlaceholderLine />
                <PlaceholderLine width={30} />
              </Placeholder>
              <Placeholder
                Animation={Fade}
                Left={PlaceholderMedia}
                style={{ opacity: 0.1 }}
              >
                <PlaceholderLine width={80} />
                <PlaceholderLine />
                <PlaceholderLine width={30} />
              </Placeholder>
            </>
          ) : null}

          {/* {this.state.recipes.length == 0 && !this.props.recipeSearch.loading ? (
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
          ) : null} */}

          {data.length > 0 && !this.props.recipeSearch.loading ? (
            <ScrollView style={styles.scrollResults} showsVerticalScrollIndicator={false}>
              {data.map((item, key) => {
                return (
                  <View key={key} style={styles.resultItemContainer}>
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
                          return <Text key={key} style={styles.healthLabel}>{healthLabel}</Text>;
                        })}
                      </View>
                      <View style={styles.healthLabelsContainer}>
                        {item.recipe.dietLabels.map((dietLabel, key) => {
                          return <Text key={key} style={styles.dietLabel}>{dietLabel}</Text>;
                        })}
                        {item.recipe.cautions.map((caution, key) => {
                          return <Text key={key} style={styles.cautionLabel}>{caution}</Text>;
                        })}
                      </View>
                    </View>
                  </View>
                );
              })}
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
