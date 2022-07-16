import React, { useContext } from 'react';
import GameContext from '@context/GameContext';
import '@styles/Player.scss';

const Player = () => {

    const {
        playerXPos,
    } = useContext(GameContext);

    const xPos = playerXPos;

    return (
        <div
            className='player'
            style={
                {
                    left: `${xPos}vw`
                }
            }
        >
        </div>            
    );
};

export default Player;