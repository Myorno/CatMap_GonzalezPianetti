import React from "react";
import { Text, View, TouchableHighlight } from 'react-native';
import styles from './style';
import {CustomButton} from "../index";

const ListItem = ({ item, onHandleModal }) => {

    return (
        <View style={styles.renderItemStyle}>
            <Text style={styles.textRenderItem}>
                {item.name}
            </Text>
            <CustomButton 
             onPress={() => onHandleModal(item)}
             title={"X"}
             style={styles}
            />
        </View >
    )
};

export default ListItem;