import React from 'react';
import { Text, View, Modal } from 'react-native';
import styles from './style';
import { CustomButton } from '..';

const Item = ({ isVisible, actionDeleteItem, itemSelected }) => {

    return (
        <Modal
            visible={isVisible}
            animationType="fade"
            transparent={true}
            presentationStyle="overFullScreen">
            <View style={styles.modalContainer}>
                <View style={styles.modal}>
                    <Text
                        style={styles.modalText} >
                        {`Do you really want to delete ${itemSelected.name}?`}
                    </Text>
                    <View style={styles.modalButton}>
                        <CustomButton
                            onPress={() => actionDeleteItem()}
                            title={"Delete"}
                            containerStyle={styles.buttonContainer}
                            innerStyle={styles.buttonText}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
};

export default Item;