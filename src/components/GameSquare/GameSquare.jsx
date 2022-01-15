import React from 'react';

import {ELF_NAMES} from '../../constants/constants'

import './GameSquare.css';

const face = ["ast", "gid", "kri", "nat", "wes", "jag", "jay", "dad"];

const GameSquare = ({type, setType}) => {
    
    const clickHandler = () => {
        if (type >= 6) {
            setType(0);
            return;
        }
        const newDisplay = type + 1;
        setType(newDisplay);
    }

    return(
        <button className='game-square' id='game-square' onClick={() => clickHandler()}>
            <div className='game-square-content'>
                <img className='square-face' src={`images/${face[type]}450.png`} alt={ELF_NAMES[type]}></img>
            </div>
        </button>);
}
export default GameSquare;