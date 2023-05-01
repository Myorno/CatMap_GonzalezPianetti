import { Text, View, Button } from 'react-native';
import styles from './style';

const Item = ({ item, onHandleModal}) => {

    return (
        <View style={styles.renderItemStyle}>
            <Text>{item.name}</Text>
            <Button title="X" onPress={() => onHandleModal(item)} />
        </View>
    )
};

export default Item;