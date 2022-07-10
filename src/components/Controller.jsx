import React, { useContext, useState } from 'react';
import GameContext from '@context/GameContext';
import '@styles/Controllers.scss';

const Controller = () => {

    const {
        playerXPos,
        setPlayerXPos,
        shootState,
        setShootState,
    } = useContext(GameContext)

    // const [  ]

    const speed = 5;

    const moveToLeft = () => {
        let leftPos = playerXPos;
        if(leftPos > 0) {
            leftPos -= speed;
            setPlayerXPos(leftPos);
        }
    }

    const moveToRight = () => {
        let rightPos = playerXPos;
        if(rightPos < 90) {
            rightPos += speed;
            setPlayerXPos(rightPos);
        }
    }

    const shoot = () => {
        setShootState(true);
        console.log(shootState);
        setTimeout(
            () => {
                setShootState(false);
                console.log(shootState);
            }, 500
        )
    }

    return (
        <div className='controllers'>
            <button
                className='controllers__button left'
                // onClick={moveToLeft}
                onMouseDown={moveToLeft}
                // onMouseUp={}
            > /- </button>
            <button
                className='controllers__button shoot'
                onClick={shoot}
            > * </button>
            <button
                className='controllers__button right'
                // onClick={moveToRight}
                onMouseDown={moveToRight}
            > -\ </button>
        </div>
    );
};

export default Controller;