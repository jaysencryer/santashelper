import React, { useState } from "react";
import GameSquare from "../GameSquare/GameSquare";

import {ELF_NAMES} from '../../constants/constants';

import "./App.css";

const randomStart = () => {
    return Math.floor(Math.random() * 7);
};



const App = () => {
    const [type, setType] = useState(randomStart());
    const [counter, setCounter] = useState(0);

    const pickRandom = () => {
        if (counter === 0 || counter % 5 !== 0) {
            setType(randomStart());
        } else {
            setType(7);
        }

        setCounter(counter + 1);

        // console.log(
        //     `counter = ${counter} type = ${type} counter % 5 = ${counter % 5}`
        // );
    };

    return (
        <div className="main-canvas">
            <header>
                <h1>Santa's Helper</h1>
            </header>
            <main className="game-space">
                <div>
                    <p>Choose your helper - click the image to select</p>
                </div>
                <GameSquare type={type} setType={setType} />
                <h2 className='elf-name'>{ELF_NAMES[type]}</h2>

                <div>
                    <button
                        aria-label="random helper"
                        onClick={() => pickRandom()}
                    >
                        Choose a Random Helper!
                    </button>
                </div>
            </main>
        </div>
    );
};

export default App;
