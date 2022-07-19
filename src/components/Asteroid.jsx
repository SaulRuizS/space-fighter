import React, { memo, useContext } from 'react';
// import GameContext from '@context/GameContext';
import '@styles/Asteroid.scss';

const Asteroid = ({ asteroidsCount }) => {

    // const {
    //     asteroidXPos,
    //     setAsteroidXPos,
    // } = useContext(GameContext);

    const randomAsteroidXPos = () => {
        let position = (Math.floor(Math.random() * 5) * 20) + 5;
        console.log(position);
        return position;
    }

    const xPos = randomAsteroidXPos();

    return (
        <div
            className='asteroid'
            style={
                {
                    left: `${xPos}vw`
                }
            }
        >
        </div>
    );
};

export default memo(Asteroid);