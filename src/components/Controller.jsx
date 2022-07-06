import React from 'react';
import '../styles/Controllers.scss';

const Controller = () => {
    return (
        <div className='controllers'>
            <button className='controllers__button left'></button>
            <button className='controllers__button shoot'></button>
            <button className='controllers__button right'></button>
        </div>
    );
};

export default Controller;