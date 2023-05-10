import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';
import { CustomButton } from '../../components';

const Item = ({ cat, selectCat }) => {

    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}> {`${cat.name}'s profile`} </Text>
                <CustomButton
                    innerStyle={styles.backText}
                    containerStyle={styles.backContainer}
                    title={"<"}
                    onPress={() => selectCat(null)} />
            </View>
            <View>
                <Text style={styles.propCat}> {`Full Name: ${cat.name}`} </Text>
            </View>
        </View>
    )
};

export default Item;