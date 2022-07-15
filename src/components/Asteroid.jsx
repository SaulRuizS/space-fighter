import React, { useContext } from 'react';
import GameContext from '@context/GameContext';
import '@styles/Asteroid.scss';

const Asteroid = () => {

    const {
        asteroidXPos,
        setAsteroidXPos,
    } = useContext(GameContext);

    // let xPos = asteroidXPos;

    const xPos = () => {
        let position = Math.ceil(Math.random() * 9) * 10;
        return position;
    }

    return (
        <div
            className='asteroid'
            style={
                {
                    left: `${xPos()}vw`
                }
            }
        >
        </div>
    );
};

export default Asteroid;