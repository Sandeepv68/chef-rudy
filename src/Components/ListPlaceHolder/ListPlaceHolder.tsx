/**
 * ListPlaceHolder
 * A reusable customisable placeholder animation component
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
import { ListPlaceHolderProps } from "./ListPlaceHolderInterface";
import { styles } from "./style";

/**
 * ListPlaceHolder
 * A reusable customisable placeholder animation component
 * @param props - The interface <ListPlaceHolderProps>
 */
export const ListPlaceHolder: React.SFC<ListPlaceHolderProps> = (props) => {
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
