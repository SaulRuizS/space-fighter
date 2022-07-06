import React from 'react';
import MovingBG from './components/MovingBG';
import GameStarted from './sections/GameStarted';
import MainMenu from './sections/MainMenu';
import './styles/global.scss'

const App = () => {
    return (
        <div>
            {/* <MainMenu /> */}
            <GameStarted />
            <MovingBG />
        </div>
    );
};

export default App;