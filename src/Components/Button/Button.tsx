import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

export const CustomButton = (props: any) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{ ...styles.buttonStyleBase, ...props.styles }}>
        <Text
          style={{ ...styles.buttonTextStyleBase, ...props.buttonTextStyle }}
        >
          {props.children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
