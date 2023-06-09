import React from "react";
import { Text, View, Modal } from "react-native";
import styles from "./style";
import TextButton from "../TextButton";

const Item = ({ isVisible, onCloseModal, actionDeleteItem, itemSelected }) => {
  return (
    <Modal
      visible={isVisible}
      animationType="fade"
      transparent={true}
      presentationStyle="overFullScreen"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          <View style={styles.closeContainer}>
            <TextButton
              onPress={() => onCloseModal()}
              title={"X"}
              innerStyle={styles.closeButtonText}
              containerStyle={styles.closeButtonContainer}
            />
          </View>
          <Text style={styles.modalText}>
            {`Do you really want to delete ${itemSelected.name}?`}
          </Text>
          <View style={styles.modalButton}>
            <TextButton
              onPress={() => actionDeleteItem()}
              title={"Delete"}
              containerStyle={styles.buttonContainer}
              innerStyle={styles.buttonText}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Item;
