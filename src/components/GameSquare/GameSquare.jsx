import React, {useState} from 'react';

const typeDisplay = ["blank","ladder","conveyor"];

const GameSquare = ({type}) => {
    const [display, setDisplay] = useState(type);
    
    const clickHandler = () => {
        if (display === 2) {
            setDisplay(0);
            return;
        }
        const newDisplay = display + 1;
        setDisplay(newDisplay);
    }

    return(<button style={{width:"50px", height: "50px"}} id='game-square' onClick={() => clickHandler()}>{typeDisplay[display]}</button>);
}
export default GameSquare;