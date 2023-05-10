import React, { useState } from 'react';
import { View, FlatList, Text, TextInput, TouchableHighlight } from 'react-native';
import { Modal, CustomButton, ListItem } from '../../components';
import styles from './style';

const List = ({ selectCat }) => {

    const [textItem, setTextItem] = useState("");
    const [list, setList] = useState([]);
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

    const onHandleDelete = item => {
        setList(prevState =>
            prevState.filter(element => element.name !== item.name)
        );
        setModalVisible(false);
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
                        disabled={textItem === ""} />

                </View>
            </View>
            <View style={styles.listContainer}>
                <FlatList
                    data={list}
                    renderItem={
                        ({ item }) =>
                            (<ListItem cat={item} onHandleModal={onHandleModal} selectCat={selectCat} />)}
                    keyExtractor={item => item.id}
                />
            </View>
            <Modal
                isVisible={modalVisible}
                actionDeleteItem={() => onHandleDelete(itemSelected)}
                itemSelected={itemSelected}
            />
        </View>
    )
};

export default List;