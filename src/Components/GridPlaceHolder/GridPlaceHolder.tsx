import React from "react";
import { View } from "react-native";
import { Placeholder, PlaceholderMedia, Fade } from "rn-placeholder";

import { GridPlaceHolderProps } from "./GridPlaceHolderProps";
import { styles } from "./style";

export const GridPlaceHolder: React.SFC<GridPlaceHolderProps> = (props) => {
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
