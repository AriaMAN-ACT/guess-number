import React from 'react';
import {View, StyleSheet} from "react-native";

const Card = ({children, style}) => {
    return (
        <View style={{...styles.card, ...style}}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderWidth: 2,
        padding: 20,
        borderRadius: 10,
        borderColor: '#FCF7F8CC',
        margin: 10
    }
});

export default Card;