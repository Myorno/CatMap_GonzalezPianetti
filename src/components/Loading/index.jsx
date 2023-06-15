import React from "react";
import { View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { COLORS } from "../../constants/colors";
import styles from "./style";

const Loading = () => {
  return (
    <View style={styles.loadingContainer}>
      <Animatable.View
        animation="fadeIn"
        iterationCount="infinite"
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        <Animatable.Text
          animation="fadeIn"
          iterationCount="infinite"
          delay={300}
          style={styles.loadingItem}
        >
          <FontAwesome5 name="paw" size={24} color={COLORS.primary} />{" "}
        </Animatable.Text>
        <Animatable.Text
          animation="fadeIn"
          iterationCount="infinite"
          delay={600}
          style={styles.loadingItem}
        >
          <FontAwesome5 name="paw" size={24} color={COLORS.primary} />{" "}
        </Animatable.Text>
        <Animatable.Text
          animation="fadeIn"
          iterationCount="infinite"
          delay={900}
          style={styles.loadingItem}
        >
          <FontAwesome5 name="paw" size={24} color={COLORS.primary} />{" "}
        </Animatable.Text>
      </Animatable.View>
    </View>
  );
};

export default Loading;
