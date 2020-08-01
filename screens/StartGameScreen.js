import React, {useState} from 'react';
import {View, Text, Button, TouchableWithoutFeedback, Keyboard, Alert, StyleSheet} from 'react-native';

import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";

const StartGameScreen = ({onStartGamePress}) => {
    const [number, setNumber] = useState('');
    const [isConfirm, setConfirm] = useState(false);
    const [confirmedNumber, setConfirmedNumber] = useState(0);

    const onNumberChange = value => {
        setNumber(value.replace(/[^0-9]/g, ''));
    };

    const onResetPress = () => {
        setNumber('');
        setConfirm(false);
    };

    const onConfirmPress = () => {
        const confirmedNumber = parseInt(number);
        if (isNaN(confirmedNumber) || confirmedNumber < 1 || confirmedNumber > 99) {
            Alert.alert('Invalid number!', 'Choose a number between 1 and 99. Otherwise you can\'t play.', [{
                text: 'Continue',
                style: 'destructive',
                onPress: onResetPress()
            }]);
            return;
        }
        setConfirm(true);
        setConfirmedNumber(confirmedNumber);
        setNumber('');
    };

    let confirmedOutput;

    if (isConfirm) {
        confirmedOutput = (
            <Card style={styles.outputContainer}>
                <Text style={styles.outputText}>You Selected:</Text>
                <NumberContainer>{confirmedNumber}</NumberContainer>
                <Button title="START GAME" onPress={() => onStartGamePress(confirmedNumber)}/>
            </Card>
        );
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start A New Game</Text>
                <Card style={styles.inputContainer}>
                    <Text style={styles.inputText}>Select a Number</Text>
                    <Input maxLength={2} keyboardType="number-pad" value={number} onChangeText={onNumberChange}
                           editable={!isConfirm} onSubmitEditing={onConfirmPress}/>
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Reset" color="#058ED9" onPress={onResetPress}/>
                        </View>
                        <View style={styles.button}>
                            <Button title="Confirm" color="#058ED9" onPress={onConfirmPress}/>
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#222222',
    },
    title: {
        fontSize: 24,
        color: '#1AC8ED',
        marginTop: 10,
        marginBottom: 30,
        fontFamily: 'roboto-mono-bold'
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    inputText: {
        color: '#FCF7F8',
        fontSize: 20,
        fontFamily: 'roboto-mono'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '50%',
        minWidth: 200,
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: '40%',
        minWidth: 80
    },
    outputContainer: {
        marginTop: 20,
        alignItems: 'center',
        width: 300,
        maxWidth: '80%'
    },
    outputText: {
        color: '#FCF7F8',
        fontFamily: 'roboto-mono',
        fontSize: 16
    }
});

export default StartGameScreen;