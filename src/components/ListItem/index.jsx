import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import styles from './style';
import { CustomButton } from '..';

const ListItem = ({ cat, onHandleModal, selectCat }) => {

    return (
        <View style={styles.renderItem}>
            <Text style={styles.textRenderItem}>
                {cat.name}
            </Text>
            <View style={styles.actionsContainer}>
                <CustomButton
                    onPress={() => selectCat(cat)}
                    title={"view"}
                    containerStyle={styles.viewContainer}
                    innerStyle={styles.viewText}
                />
                <CustomButton
                    onPress={() => onHandleModal(cat)}
                    title={"delete"}
                    containerStyle={styles.deleteContainer}
                    innerStyle={styles.deleteText}
                />
            </View>
        </View >
    )
};

export default ListItem;