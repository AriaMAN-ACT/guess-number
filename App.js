import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Screens from "./models/Screens";

const App = () => {
    const [confirmedNumber, setConfirmedNumber] = useState(0);
    const [screen, setScreen] = useState(Screens.startGame);

    const onStartGamePress = (number) => {
        setConfirmedNumber(number);
        setScreen(Screens.game);
    };

    return (
        <View style={styles.screen}>
            <Header title="Guess Number"/>
            {
                screen === Screens.startGame &&
                <StartGameScreen onStartGamePress={onStartGamePress}/>
            }
            {
                screen === Screens.game &&
                <GameScreen userNumber={confirmedNumber}/>
            }
            </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});

export default App;