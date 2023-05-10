import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import styles from './style';

const CustomButton = ({ title, onPress, containerStyle, innerStyle, disabled }) => {

    return (
        <TouchableHighlight
            onPress={onPress}
            disabled={disabled} >
            <View style={containerStyle ? {...styles.default, ...containerStyle} : styles.default}>
                <Text style={innerStyle ? innerStyle : {}}>
                    {title}
                </Text>
            </View>
        </TouchableHighlight >
    )
};

export default CustomButton;