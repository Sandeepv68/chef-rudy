/**
 * ListPlaceHolderGraph
 * A reusable customizable placeholder animation component
 */

/**
 * Import React and React Native components
 */
import React from "react";
import { View } from "react-native";
import { Placeholder, PlaceholderMedia, PlaceholderLine, Fade } from "rn-placeholder";

/**
 * Import Interfaces and stylesheet required for the component
 */
import { ListPlaceHolderGraphProps } from "./ListPlaceHolderGraphInterface";
import { styles } from "./style";

/**
 * ListPlaceHolderGraph
 * A reusable customizable placeholder animation component
 * @param props - The interface <ListPlaceHolderGraphProps>
 */
export const ListPlaceHolderGraph: React.SFC<ListPlaceHolderGraphProps> = (props) => {
  return (
    <View style={styles.placeHolderContainer}>
      <Placeholder Animation={Fade} Left={PlaceholderMedia} style={{ opacity: 1 }}>
        <PlaceholderLine width={80} />
        <PlaceholderLine />
        <PlaceholderLine width={30} />
      </Placeholder>
      <Placeholder Animation={Fade} Left={PlaceholderMedia} style={{ opacity: 0.3 }}>
        <PlaceholderLine width={80} />
        <PlaceholderLine />
        <PlaceholderLine width={30} />
      </Placeholder>
    </View>
  );
};
