import React from 'react';
import { View, Text} from 'react-native';
import styles from './style';
import { CustomButton } from '../../components';

const Item = ({ cat, selectCat }) => {

    return (
        <View>
            <View yles={styles.headerContainer}>
                <Text> {`${cat.name}'s profile`} </Text>
                <CustomButton title={"<<"} onPress={() => selectCat(null)} />
            </View>
            <View>
                <Text> {`Full Name: ${cat.name}`} </Text>
            </View>
        </View>
    )
};

export default Item;