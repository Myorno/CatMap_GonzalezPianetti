import React from "react";
import { Marker } from "react-native-maps";
import { View, Image, Text } from "react-native";
import styles from "./style";

const CatMarker = ({ coordinate, title, image }) => {
  return (
    <Marker coordinate={coordinate}>
      <View style={styles.markerTextContainer}>
        <Image source={image} style={styles.markerImage} />
        <Text style={styles.markerTitle}>{title}</Text>
      </View>
    </Marker>
  );
};

export default CatMarker;
