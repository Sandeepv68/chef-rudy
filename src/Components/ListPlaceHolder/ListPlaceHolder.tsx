import React from 'react';
import { View } from "react-native";
import { Placeholder, PlaceholderMedia, PlaceholderLine, Fade } from "rn-placeholder";

import { styles } from "./style";

export default ListPlaceHolder = (props) => {
  return (
    <View style={styles.placeHolderContainer}>
      <Placeholder Animation={Fade} Left={PlaceholderMedia} style={{ opacity: 1 }}>
        <PlaceholderLine width={80} />
        <PlaceholderLine />
        <PlaceholderLine width={30} />
      </Placeholder>
      <Placeholder Animation={Fade} Left={PlaceholderMedia} style={{ opacity: 0.5 }}>
        <PlaceholderLine width={80} />
        <PlaceholderLine />
        <PlaceholderLine width={30} />
      </Placeholder>
      <Placeholder Animation={Fade} Left={PlaceholderMedia} style={{ opacity: 0.3 }}>
        <PlaceholderLine width={80} />
        <PlaceholderLine />
        <PlaceholderLine width={30} />
      </Placeholder>
      <Placeholder Animation={Fade} Left={PlaceholderMedia} style={{ opacity: 0.1 }}>
        <PlaceholderLine width={80} />
        <PlaceholderLine />
        <PlaceholderLine width={30} />
      </Placeholder>
      <Placeholder Animation={Fade} Left={PlaceholderMedia} style={{ opacity: 0.1 }}>
        <PlaceholderLine width={80} />
        <PlaceholderLine />
        <PlaceholderLine width={30} />
      </Placeholder>
    </View>
  );
};
