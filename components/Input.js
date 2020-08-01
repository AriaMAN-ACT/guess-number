import React, {useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = ({style = {}, ...props}) => {
    const [isFocus, setFocus] = useState(false);

    return (
        <TextInput style={{...styles.input, ...(isFocus ? styles.focusInput : {}), ...style}}
                   onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} blurOnSubmit
                   placeholderTextColor="#FCF7F8BB" {...props}/>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomWidth: 3,
        borderBottomColor: '#7F7B82',
        borderRadius: 5,
        width: '80%',
        marginBottom: 20,
        marginTop: 10,
        textAlign: 'center',
        color: '#FCF7F8',
        fontFamily: 'roboto-mono'
    },
    focusInput: {
        borderBottomColor: '#FCF7F8'
    }
});

export default Input;