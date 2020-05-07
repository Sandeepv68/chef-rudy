/**
 * GridPlaceHolder
 * A reusable, customizable placeholder animation component
 */

/**
 * Import React and React Native components
 */
import React from "react";
import { View } from "react-native";
import { Placeholder, PlaceholderMedia, Fade } from "rn-placeholder";

/**
 * Import Interfaces and stylesheet required for the component
 */
import { GridPlaceHolderProps } from "./GridPlaceHolderInterface";
import { styles } from "./style";

/**
 * GridPlaceHolder
 * A reusable, customizable placeholder animation component
 * @param props - The interface <GridPlaceHolderProps>
 */
export const GridPlaceHolder: React.SFC<GridPlaceHolderProps> = (props) => {
  /**
   * Media
   * A customized PlaceholderMedia component
   */
  let Media: React.SFC = () => {
    return <PlaceholderMedia style={styles.placeHolderMedia}></PlaceholderMedia>;
  };

  return (
    <View style={styles.placeHolderContainer}>
      <Placeholder
        Animation={Fade}
        Left={Media}
        Right={Media}
        style={{ opacity: 1 }}
      ></Placeholder>
      <Placeholder
        Animation={Fade}
        Left={Media}
        Right={Media}
        style={{ opacity: 0.3 }}
      ></Placeholder>
      <Placeholder
        Animation={Fade}
        Left={Media}
        Right={Media}
        style={{ opacity: 0.1 }}
      ></Placeholder>
    </View>
  );
};
