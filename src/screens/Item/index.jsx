import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';
import { CAT_COLORS } from '../../data/catColors';

const Item = ({ route }) => {

    const cat = route.params.cat;
    const catColor = CAT_COLORS.find((catColor)=> catColor.id === cat.mainColor).color;

    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}> {`${cat.name}'s profile`} </Text>
            </View>
            <View>
                <Text style={styles.propCat}> {`Full Name: ${cat.name}`} </Text>
            </View>
            <View>
                <Text style={styles.propCat}> {`Color: ${catColor}`} </Text>
            </View>
            <View>
                <Text style={styles.propCat}> {`Description: ${cat.description}`} </Text>
            </View>
        </View>
    )
};

export default Item;