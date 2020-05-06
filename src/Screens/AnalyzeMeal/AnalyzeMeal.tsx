import React, { Component } from "react";
import { connect } from "react-redux";

import { Text, TextInput, ScrollView, View, Image, TouchableOpacity } from "react-native";
import { PieChart } from "react-native-svg-charts";
import ListPlaceHolderGraph from "../../Components/ListPlaceHolderGraph/ListPlaceHolderGraph";

import { styles } from "./style";

import { analyzeRecieAction } from "../../Redux/Actions/RecipeAnalyzeAction";

class AnalyzeMeal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serving: 1,
      searchString: "",
      nutritionData: {},
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.recipeData !== prevProps.recipeData) {
      this.setState({
        nutritionData: this.props.recipeData.data,
      });
    }
  }

  changeServing = (type) => {
    this.setState({
      serving:
        type == "add"
          ? this.state.serving + 1
          : this.state.serving == 1
          ? this.state.serving
          : this.state.serving - 1,
    });
  };

  getSearchString = (text) => {
    this.setState({
      searchString: text,
    });
  };

  analyzeRecipe = () => {
    if (this.state.searchString && this.state.searchString.length) {
      return this.props.dispatch(
        analyzeRecieAction(this.state.searchString, this.state.serving)
      );
    }
  };

  render() {
    let pieData;
    this.state.nutritionData.totalNutrientsKCal
      ? (pieData = [
          {
            key: "pie0",
            svg: { fill: "#ffcc80" },
            value: this.state.nutritionData.totalNutrientsKCal["CHOCDF_KCAL"].quantity,
          },
          {
            key: "pie1",
            svg: { fill: "#ef9a9a" },
            value: this.state.nutritionData.totalNutrientsKCal["FAT_KCAL"].quantity,
          },
          {
            key: "pie2",
            svg: { fill: "#c5e1a5" },
            value: this.state.nutritionData.totalNutrientsKCal["PROCNT_KCAL"].quantity,
          },
        ])
      : [];
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
            <Text style={styles.primaryText}>Let me analyze your meals.. </Text>
          </View>
        </View>
        <View style={styles.searchBoxContainer}>
          <TextInput
            placeholder="eg, 1 Cup orange juice, 2 Carrots"
            style={styles.searchBox}
            multiline
            numberOfLines={4}
            onChangeText={(text) => this.getSearchString(text)}
          />
          <View style={{ flexDirection: "row", margin: 15 }}>
            <TouchableOpacity onPress={(e) => this.changeServing("add")}>
              <Text
                style={{
                  padding: 5,
                  paddingRight: 10,
                  paddingLeft: 10,
                  backgroundColor: "#e0e0e0",
                  color: "#757575",
                  borderRadius: 22,
                  marginRight: 5,
                  fontWeight: "bold",
                }}
              >
                +
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                padding: 5,
                paddingRight: 10,
                paddingLeft: 10,
                backgroundColor: "#e0e0e0",
                color: "#757575",
                fontWeight: "bold",
                borderRadius: 22,
              }}
            >
              {this.state.serving} Servings
            </Text>
            <TouchableOpacity onPress={(e) => this.changeServing("sub")}>
              <Text
                style={{
                  padding: 5,
                  paddingRight: 10,
                  paddingLeft: 10,
                  backgroundColor: "#e0e0e0",
                  color: "#757575",
                  borderRadius: 22,
                  fontWeight: "bold",
                  marginLeft: 5,
                }}
              >
                -
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.analyzeRecipe}>
              <Text
                style={{
                  padding: 5,
                  paddingRight: 10,
                  paddingLeft: 10,
                  backgroundColor: "#ffcc80",
                  color: "#bf360c",
                  borderRadius: 22,
                  marginLeft: 25,
                  fontWeight: "bold",
                }}
              >
                Analyze
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={{ flex: 1, paddingTop: 20 }}>
          {this.props.recipeData.loading ? (
            <ListPlaceHolderGraph></ListPlaceHolderGraph>
          ) : null}

          {Object.keys(this.state.nutritionData).length &&
          !this.props.recipeData.loading ? (
            <>
              <View
                style={{
                  height: 200,
                  padding: 15,
                  marginLeft: 20,
                  marginRight: 20,
                  backgroundColor: "#fff",
                  borderRadius: 15,
                  flexDirection: "row",
                  marginBottom: 20,
                }}
              >
                <PieChart style={{ height: 160, width: 160 }} data={pieData} />
                <View>
                  <View style={{ flexDirection: "row", marginLeft: 20 }}>
                    <Text style={{ fontSize: 55, textAlignVertical: "bottom" }}>
                      {this.state.nutritionData.calories} Cal
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row", marginLeft: 20 }}>
                    <View
                      style={{
                        marginRight: 20,
                        backgroundColor: "#c5e1a5",
                        padding: 10,
                        borderRadius: 5,
                      }}
                    >
                      <Text
                        style={{ fontSize: 20, color: "#4caf50", textAlign: "center" }}
                      >
                        {
                          this.state.nutritionData.totalNutrientsKCal["PROCNT_KCAL"]
                            .quantity
                        }
                      </Text>
                      <Text
                        style={{ fontSize: 10, color: "#4caf50", textAlign: "center" }}
                      >
                        Protein
                      </Text>
                    </View>
                    <View
                      style={{
                        marginRight: 20,
                        backgroundColor: "#ef9a9a",
                        padding: 10,
                        paddingLeft: 20,
                        paddingRight: 20,
                        borderRadius: 5,
                      }}
                    >
                      <Text
                        style={{ fontSize: 20, color: "#b71c1c", textAlign: "center" }}
                      >
                        {this.state.nutritionData.totalNutrientsKCal["FAT_KCAL"].quantity}
                      </Text>
                      <Text
                        style={{ fontSize: 10, color: "#b71c1c", textAlign: "center" }}
                      >
                        Fat
                      </Text>
                    </View>
                    <View
                      style={{
                        marginRight: 20,
                        backgroundColor: "#ffcc80",
                        padding: 10,
                        borderRadius: 5,
                      }}
                    >
                      <Text
                        style={{ fontSize: 20, color: "#bf360c", textAlign: "center" }}
                      >
                        {
                          this.state.nutritionData.totalNutrientsKCal["CHOCDF_KCAL"]
                            .quantity
                        }
                      </Text>
                      <Text
                        style={{ fontSize: 10, color: "#bf360c", textAlign: "center" }}
                      >
                        Carbs
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={{
                  padding: 15,
                  marginLeft: 20,
                  marginRight: 20,
                  backgroundColor: "#fff",
                  borderRadius: 15,
                  flexDirection: "row",
                  marginBottom: 20,
                }}
              >
                <View style={styles.healthLabelsContainer}>
                  {this.state.nutritionData.healthLabels.map((healthLabel, key) => {
                    return (
                      <Text key={key} style={styles.healthLabel}>
                        {healthLabel.split("_").join(" ")}
                      </Text>
                    );
                  })}
                  {this.state.nutritionData.dietLabels.map((dietLabel, key) => {
                    return (
                      <Text key={key} style={styles.dietLabel}>
                        {dietLabel.split("_").join(" ")}
                      </Text>
                    );
                  })}
                  {this.state.nutritionData.cautions.map((caution, key) => {
                    return (
                      <Text key={key} style={styles.cautionLabel}>
                        {caution.split("_").join(" ")}
                      </Text>
                    );
                  })}
                </View>
              </View>
              <View
                style={{
                  padding: 15,
                  marginLeft: 20,
                  marginRight: 20,
                  backgroundColor: "#fff",
                  borderRadius: 15,
                  flexDirection: "row",
                  marginBottom: 40,
                }}
              >
                <View style={styles.nutritionDetails}>
                  {(() => {
                    return Object.keys(this.state.nutritionData.totalNutrients).map(
                      (item, key) => {
                        return (
                          <View key={key} style={styles.nutrientsLabel}>
                            <Text style={styles.nutrientLabel}>
                              {this.state.nutritionData.totalNutrients[item].label}
                            </Text>
                            <Text style={styles.nutrientValue}>
                              {this.state.nutritionData.totalNutrients[
                                item
                              ].quantity.toFixed(2)}
                            </Text>
                          </View>
                        );
                      }
                    );
                  })()}
                </View>
              </View>
            </>
          ) : null}
        </ScrollView>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  recipeData: {
    data: state.analyzeRecipeReducer.data,
    loading: state.analyzeRecipeReducer.loading,
    error: state.analyzeRecipeReducer.error,
  },
});

export default connect(mapStateToProps, null)(AnalyzeMeal);
