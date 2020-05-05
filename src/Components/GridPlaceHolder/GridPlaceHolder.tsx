import React from "react";
import { View } from "react-native";
import { Placeholder, PlaceholderMedia, PlaceholderLine, Fade } from "rn-placeholder";

import { styles } from "./style";

export default function GridPlaceHolder(props) {
  return (
    <View style={styles.placeHolderContainer}>
      <Placeholder Animation={Fade} style={{ opacity: 1 }}>
        <PlaceholderMedia
          style={{ width: 200, height: 160, marginBottom: 10 }}
        ></PlaceholderMedia>
        <PlaceholderLine width={30} />
        <PlaceholderLine width={20} />
      </Placeholder>
      <Placeholder Animation={Fade} style={{ opacity: 1 }}>
        <PlaceholderMedia
          style={{ width: 200, height: 160, marginBottom: 10 }}
        ></PlaceholderMedia>
        <PlaceholderLine width={30} />
        <PlaceholderLine width={20} />
      </Placeholder>
      <Placeholder Animation={Fade} style={{ opacity: 1 }}>
        <PlaceholderMedia
          style={{ width: 200, height: 160, marginBottom: 10 }}
        ></PlaceholderMedia>
        <PlaceholderLine width={30} />
        <PlaceholderLine width={20} />
      </Placeholder>
      <Placeholder Animation={Fade} style={{ opacity: 1 }}>
        <PlaceholderMedia
          style={{ width: 200, height: 160, marginBottom: 10 }}
        ></PlaceholderMedia>
        <PlaceholderLine width={30} />
        <PlaceholderLine width={20} />
      </Placeholder>
      <Placeholder Animation={Fade} style={{ opacity: 1 }}>
        <PlaceholderMedia
          style={{ width: 200, height: 160, marginBottom: 10 }}
        ></PlaceholderMedia>
        <PlaceholderLine width={30} />
        <PlaceholderLine width={20} />
      </Placeholder>
      <Placeholder Animation={Fade} style={{ opacity: 1 }}>
        <PlaceholderMedia
          style={{ width: 200, height: 160, marginBottom: 10 }}
        ></PlaceholderMedia>
        <PlaceholderLine width={30} />
        <PlaceholderLine width={20} />
      </Placeholder>
    </View>
  );
}
