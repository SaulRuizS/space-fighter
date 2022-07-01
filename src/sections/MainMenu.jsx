import React from 'react';
import '../styles/MainMenu.scss'

const MainMenu = () => {
    return (
        <div className='main-menu'>
            <h1 className='main-menu__title'>SpaceFighter</h1>
            <button className='main-menu__start-btn'>Start</button>
            <h2 className='main-menu__best-score'>Best Score</h2>
            <span className='main-menu__score'>0</span>
        </div>
    );
};

export default MainMenu;