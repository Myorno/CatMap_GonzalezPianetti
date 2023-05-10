import React, { useState } from 'react';
import { View, FlatList, Text, TextInput } from 'react-native';
import { Modal, CustomButton, ListItem } from '../../components';
import styles from './style';

const List = ({ list, setList, selectCat }) => {

    const [textItem, setTextItem] = useState("");
    const [itemSelected, setItemSelected] = useState({});
    const [modalVisible, setModalVisible] = useState(false);

    const onHandleChangeText = text => {
        setTextItem(text);
    };

    const addItem = () => {
        setList(prevState => [
            ...prevState,
            { name: textItem, id: Math.random().toString() },
        ]);
        setTextItem("");
    };

    const onHandleModal = item => {
        setItemSelected(item);
        setModalVisible(true);
    };

    const onCloseModal = () => {
        setModalVisible(false);
    };

    const onHandleDelete = item => {
        setList(prevState =>
            prevState.filter(element => element.name !== item.name)
        );
        onCloseModal();
    };


    return (
        <View>
            <View style={styles.inputContainer}>
                <Text style={styles.titleContainer}>Cat List</Text>
                <View style={styles.addItemContainer}>
                    <TextInput
                        placeholder="New cat name"
                        style={styles.input}
                        onChangeText={onHandleChangeText}
                        value={textItem}
                    />
                    <CustomButton
                        onPress={addItem}
                        style={styles}
                        title={"Add cat"}
                        disabled={textItem === ""}
                        containerStyle={styles.buttonCustom}
                        innerStyle={styles.textCustom}
                    />

                </View>
            </View>
            <View style={styles.listContainer}>
                <FlatList
                    data={list}
                    renderItem={
                        ({ item }) =>
                        (<ListItem cat={item}
                            onCloseModal={onCloseModal}
                            onHandleModal={onHandleModal}
                            selectCat={selectCat} />)}
                    keyExtractor={item => item.id}
                />
            </View>
            <Modal
                isVisible={modalVisible}
                actionDeleteItem={() => onHandleDelete(itemSelected)}
                itemSelected={itemSelected}
                onCloseModal={onCloseModal}
            />
        </View>
    )
};

export default List;