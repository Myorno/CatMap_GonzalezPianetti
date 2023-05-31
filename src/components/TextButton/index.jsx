import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./style";

const TextButton = ({
  title,
  onPress,
  containerStyle,
  innerStyle,
  disabled,
}) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View
        style={
          containerStyle
            ? { ...styles.default, ...containerStyle }
            : styles.default
        }
      >
        <Text style={innerStyle ? innerStyle : {}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TextButton;
