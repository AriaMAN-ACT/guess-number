import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        paddingBottom: 20,
        backgroundColor: '#191716',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: '#FCF7F8',
        fontSize: 30
    }
});

export default Header;