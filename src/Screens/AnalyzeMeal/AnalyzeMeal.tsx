/**
 * AnalyzeMeal
 * The screen to do nutritional analysis
 */

/**
 * Import React and Redux
 */
import React, { Component } from "react";
import { connect } from "react-redux";

/**
 * Import all the components required
 */
import { Text, TextInput, ScrollView, View, Image, TouchableOpacity } from "react-native";
import { PieChart } from "react-native-svg-charts";
import { ListPlaceHolderGraph } from "../../Components/ListPlaceHolderGraph/ListPlaceHolderGraph";

/**
 * Import Interfaces and stylesheet required for the component
 */
import { AnalyzeMealProps, AnalyzeMealState } from "./AnalyzeMealInterface";
import { styles } from "./style";

import { analyzeRecieAction } from "../../Redux/Actions/RecipeAnalyzeAction";

class AnalyzeMeal extends Component<AnalyzeMealProps, AnalyzeMealState> {
  constructor(props: AnalyzeMealProps) {
    super(props);
    this.state = {
      serving: 1,
      searchString: "",
      nutritionData: {},
    };
  }

  componentDidUpdate(prevProps: Object, prevState: Object) {
    if (this.props.recipeData !== prevProps.recipeData) {
      return this.setState({
        nutritionData: this.props.recipeData.data,
      });
    }
  }

  changeServing = (type: string) => {
    return this.setState({
      serving:
        type == "add"
          ? this.state.serving + 1
          : this.state.serving == 1
          ? this.state.serving
          : this.state.serving - 1,
    });
  };

  getSearchString = (text: string) => {
    return this.setState({
      searchString: text,
    });
  };

  analyzeRecipe = (): void => {
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
          <View style={styles.analyzeControl}>
            <TouchableOpacity onPress={(e) => this.changeServing("add")}>
              <Text style={styles.addButton}>+</Text>
            </TouchableOpacity>
            <Text style={styles.servingCountText}>{this.state.serving} Servings</Text>
            <TouchableOpacity onPress={(e) => this.changeServing("sub")}>
              <Text style={styles.reduceButton}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.analyzeRecipe}>
              <Text style={styles.analyzeButton}>Analyze</Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={styles.resultScrollView}>
          {this.props.recipeData.loading ? (
            <ListPlaceHolderGraph></ListPlaceHolderGraph>
          ) : null}

          {Object.keys(this.state.nutritionData).length &&
          !this.props.recipeData.loading ? (
            <>
              <View style={styles.nutritionSummary}>
                <PieChart style={styles.pieChart} data={pieData} />
                <View>
                  <View style={styles.detailsView}>
                    <Text style={styles.pieChartDetailsText}>
                      {this.state.nutritionData.calories} Cal
                    </Text>
                  </View>
                  <View style={styles.detailsView}>
                    <View style={styles.summaryItemView1}>
                      <Text style={styles.summaryItemQuantity1}>
                        {
                          this.state.nutritionData.totalNutrientsKCal["PROCNT_KCAL"]
                            .quantity
                        }
                      </Text>
                      <Text style={styles.summaryItemLabel1}>Protein</Text>
                    </View>
                    <View style={styles.summaryItemView2}>
                      <Text style={styles.summaryItemQuantity2}>
                        {this.state.nutritionData.totalNutrientsKCal["FAT_KCAL"].quantity}
                      </Text>
                      <Text style={styles.summaryItemLabel2}>Fat</Text>
                    </View>
                    <View style={styles.summaryItemView3}>
                      <Text style={styles.summaryItemQuantity3}>
                        {
                          this.state.nutritionData.totalNutrientsKCal["CHOCDF_KCAL"]
                            .quantity
                        }
                      </Text>
                      <Text style={styles.summaryItemLabel3}>Carbs</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.subSummary}>
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
              <View style={styles.subSummary}>
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

const mapStateToProps = (state: any) => ({
  recipeData: {
    data: state.analyzeRecipeReducer.data,
    loading: state.analyzeRecipeReducer.loading,
    error: state.analyzeRecipeReducer.error,
  },
});

export default connect(mapStateToProps, null)(AnalyzeMeal);
