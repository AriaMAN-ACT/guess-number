import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const MainButton = ({children, onPress, style, textStyle}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{...styles.button, ...style}}>
                <Text style={{...styles.text, ...textStyle}}>{children}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#09A5ED',
        paddingVertical: 8,
        paddingHorizontal: 10,
        alignItems: 'center',
        borderRadius: 5
    },
    text: {
        color: '#FCF7F8',
        fontFamily: 'roboto-mono-bold',
        fontSize: 12
    }
});

export default MainButton;