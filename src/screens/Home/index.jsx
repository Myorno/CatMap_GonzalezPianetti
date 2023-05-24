import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

const Home = ({ route }) => {

    return (
        <View style={styles.mainContainer}>
            <View>
                <Text>Map Container</Text>
            </View>
        </View>
    )
};

export default Home;