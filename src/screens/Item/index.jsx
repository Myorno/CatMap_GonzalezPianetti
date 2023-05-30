import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import styles from "./style";

const Item = () => {
  const cat = useSelector((state) => state.items.selected.cat);
  const catColor = useSelector((state) => state.items.selected.catColor);

  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.propCat}> {`Full Name: ${cat.name}`} </Text>
      </View>
      <View>
        <Text style={styles.propCat}> {`Color: ${catColor.colorName}`} </Text>
      </View>
      <View>
        <Text style={styles.propCat}>{`Description: ${cat.description}`}</Text>
      </View>
    </View>
  );
};

export default Item;
