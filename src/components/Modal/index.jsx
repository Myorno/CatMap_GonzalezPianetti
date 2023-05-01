import React from "react";
import { Text, View, Button, Modal } from 'react-native';
import styles from './style';
import { CustomButton } from "../index";

const Item = ({ isVisible, actionDeleteItem, itemSelected }) => {

    return (
        <Modal
            visible={isVisible}
            animationType="fade"
            transparent={true}
            presentationStyle="overFullScreen">
            <View style={styles.modalContainer}>
                <View style={styles.modalStyle}>
                    <Text
                        style={styles.modalTextStyle} >
                        {`Do you really want to delete ${itemSelected.name}?`}
                    </Text>
                    <View style={styles.modalButton}>
                        <CustomButton
                            onPress={() => actionDeleteItem()}
                            title={"Delete"}
                            style={styles}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
};

export default Item;