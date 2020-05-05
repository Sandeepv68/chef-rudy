import React from "react";
import { View } from "react-native";
import { Placeholder, PlaceholderMedia, Fade } from "rn-placeholder";

import { styles } from "./style";

export default function GridPlaceHolder(props) {
  let Media = () => {
    return (
      <PlaceholderMedia
        style={{ width: 200, height: 160, marginBottom: 10, margin: 10 }}
      ></PlaceholderMedia>
    );
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
}
