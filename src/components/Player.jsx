import React, { useContext } from 'react';
import '@styles/Player.scss';
import GameContext from '@context/GameContext';

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
                    left: `${xPos}%`
                }
            }
        >
        </div>            
    );
};

export default Player;