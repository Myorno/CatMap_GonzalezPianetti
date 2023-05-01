import React from "react";
import { Text, View, TouchableHighlight } from 'react-native';

const CustomButton = ({ title, onPress, style, disabled }) => {

    return (
        <TouchableHighlight
            onPress={onPress}
            disabled={disabled} >
            <View style={style.buttonCustom? style.buttonCustom : {}}>
                <Text style={style.textCustom? style.textCustom : {}}>
                    {title}
                </Text>
            </View>
        </TouchableHighlight >
    )
};

export default CustomButton;