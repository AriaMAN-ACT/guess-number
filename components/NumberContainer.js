import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const NumberContainer = ({children}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: '#D400F7',
        padding: 10,
        borderRadius: 10,
        marginTop: 15,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    number: {
        color: '#D400F7',
        fontSize: 20
    }
});

export default NumberContainer;