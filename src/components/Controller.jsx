import React, { useContext } from 'react';
import GameContext from '@context/GameContext';
import '@styles/Controllers.scss';

const Controller = () => {

    const {
        playerXPos,
        setPlayerXPos,

        shootState,
        setShootState,
    } = useContext(GameContext)

    const speed = 10;

    let leftPos = playerXPos;

    let rightPos = playerXPos;

    const moveToLeft = () => {
        if(leftPos > 5) {
            leftPos -= speed;
            setPlayerXPos(leftPos);
        }

    }

    const moveToRight = (moving) => {
        if(rightPos < 85) {
            rightPos += speed;
            setPlayerXPos(rightPos);
        }
    }

    const shoot = () => {
        setShootState(true);
        setTimeout(
            () => {
                setShootState(false);
                console.log(shootState);
            }, 500
        );
    }

    return (
        <div className='controllers'>
            <button
                className='controllers__button left'
                onMouseDown={(e) => {
                    moveToLeft();
                }}
            > /- </button>
            <button
                className='controllers__button shoot'
                onClick={shoot}
            > * </button>
            <button
                className='controllers__button right'
                onMouseDown={(e) => {
                    moveToRight();
                }}
            > -\ </button>
        </div>
    );
};

export default Controller;