import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

const Item = ({ route }) => {

    const cat = route.params.cat;
    const catColor = route.params.catColor;

    return (
        <View style={styles.mainContainer}>
            <View>
                <Text style={styles.propCat}> {`Full Name: ${cat.name}`} </Text>
            </View>
            <View>
                <Text style={styles.propCat}> {`Color: ${catColor.colorName}`} </Text>
            </View>
            <View>
                <Text style={styles.propCat}> {`Description: ${cat.description}`} </Text>
            </View>
        </View>
    )
};

export default Item;