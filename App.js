import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Screens from "./models/Screens";
import GameOverScreen from "./screens/GameOverScreen";

const App = () => {
    const [confirmedNumber, setConfirmedNumber] = useState(0);

    const [screen, setScreen] = useState(Screens.startGame);

    const [rounds, setRounds] = useState(0);

    const onStartGamePress = (number) => {
        setConfirmedNumber(number);
        setScreen(Screens.game);
    };

    const onGameOver = (rounds) => {
        setScreen(Screens.gameOver);
        setRounds(rounds);
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
                <GameScreen userNumber={confirmedNumber} onGameOver={onGameOver}/>
            }
            {
                screen === Screens.gameOver &&
                <GameOverScreen rounds={rounds}/>
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