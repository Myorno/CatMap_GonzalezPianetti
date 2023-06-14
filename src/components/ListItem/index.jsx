import React from "react";
import { Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./style";
import TextButton from "../TextButton";

const ListItem = ({ cat, onHandleModal, selectCat, catColor, catCountry }) => {
  return (
    <View style={styles.renderItem}>
      <View style={styles.catContainer}>
        <MaterialCommunityIcons name="cat" size={36} color={catColor.color} />
        <Text style={styles.textRenderItem}>{cat.name}</Text>
      </View>
      <View style={styles.actionsContainer}>
        <TextButton
          onPress={() => selectCat(cat, catColor, catCountry)}
          title={"view"}
          containerStyle={styles.viewContainer}
          innerStyle={styles.viewText}
        />
        <TextButton
          onPress={() => onHandleModal(cat)}
          title={"delete"}
          containerStyle={styles.deleteContainer}
          innerStyle={styles.deleteText}
        />
      </View>
    </View>
  );
};

export default ListItem;
