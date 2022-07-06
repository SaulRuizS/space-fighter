import React from 'react';
import MovingBG from './components/MovingBG';
import MainMenu from './sections/MainMenu';
import './styles/global.scss'

const App = () => {
    return (
        <div>
            <MainMenu />
            <MovingBG />
        </div>
    );
};

export default App;