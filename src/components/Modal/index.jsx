import { Text, View, Button, Modal } from 'react-native';
import styles from './style';

const Item = ({ isVisible, actionDeleteItem, itemSelected }) => {

    return (
        <Modal visible={isVisible} animationType="fade" transparent={true}>
            <View style={styles.modalContainer}>
                <View>
                    <Text>{`Do you really wan't to delete ${itemSelected.name}`}</Text>
                    <Button
                        title="Eliminar"
                        color={"red"}
                        onPress={() => actionDeleteItem()}
                    />
                </View>
            </View>
        </Modal>
    )
};

export default Item;