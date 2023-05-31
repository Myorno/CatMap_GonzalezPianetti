import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import styles from "./style";

const CatProp = ({ propTitle, prop }) => {
  const [propText, setPropText] = useState(prop);
  const [inEdit, setInEdit] = useState(false);

  const onHandleChange = (text) => {
    setPropText(propText);
  };

  return (
    <View>
      <Text style={styles.propCat}> {propTitle} </Text>
      {inEdit ? (
        <View>
          <Text style={styles.propCat}>{prop}</Text>
          <MaterialIcons name="mode-edit" size={24} color="black" />
        </View>
      ) : (
        <View>
          <TextInput
            placeholder={propTitle}
            style={styles.input}
            onChangeText={onHandleChange}
            value={propText}
          />
          <FontAwesome name="check" size={24} color="black" />
        </View>
      )}
    </View>
  );
};

export default CatProp;
