/**
 * CustomButton
 * A reusable customizable button component
 */

/**
 * Import React and React Native components
 */
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

/**
 * Import Interfaces and stylesheet required for the component
 */
import { CustomButtonProps } from "./CustomButtonProps";
import { styles } from "./style";

/**
 * CustomButton
 * A customizable , reusable button component
 * @param props - The interface <CustomButtonProps>
 */
export const CustomButton: React.SFC<CustomButtonProps> = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{ ...styles.buttonStyleBase, ...props.styles }}>
        <Text style={{ ...styles.buttonTextStyleBase, ...props.buttonTextStyle }}>
          {props.children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
