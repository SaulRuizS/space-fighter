import React from 'react';
import '../styles/MovingBG.scss';

const MovingBG = () => {

    

    return (
        <div className='moving-bg'>
            <div className='moving-bg__small-stars'>
                <div className='star small'></div>
                <div className='star small'></div>
                <div className='star small'></div>
                <div className='star small'></div>
                <div className='star small'></div>
                <div className='star small'></div>
                <div className='star small'></div>
                <div className='star small'></div>
            </div>
            <div className='moving-bg__medium-stars'>
                <div className='star medium'></div>
                <div className='star medium'></div>
                <div className='star medium'></div>
                <div className='star medium'></div>
            </div>
        </div>
    );
};

export default MovingBG;