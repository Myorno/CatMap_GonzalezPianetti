import { useState } from "react";
import { View, FlatList } from 'react-native';
import { Modal, Item } from "../../components";

const List = ({ }) => {

    const [textItem, setTextItem] = useState("");
    const [list, setList] = useState([]);
    const [itemSelected, setItemSelected] = useState({});
    const [modalVisible, setModalVisible] = useState(false);

    const onHandleChangeText = text => {
        setTextItem(text);
        console.log(text);
    };

    const addItem = () => {
        console.log("aqui agregamos el item", textItem);
        setList(prevState => [
            ...prevState,
            { name: textItem, id: Math.random().toString() },
        ]);
        setTextItem("");
    };

    const onHandleModal = item => {
        console.log("en esta funcion seteo el item y abro el modal");
        setItemSelected(item);
        setModalVisible(true);
    };

    const onHandleDelete = item => {
        console.log("eliminar este item", item);
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
                    <Button title="Click here" onPress={addItem} />
                </View>
            </View>
            <View style={styles.listContainer}>
                <FlatList
                    data={list}
                    renderItem={<Item onHandleDelete={onHandleDelete} />}
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