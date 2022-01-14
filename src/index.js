import ReactDOM from "react-dom";
import React from "react";

import GameSquare from "./components/GameSquare/GameSquare";

const App = () => (<div><h1>Santa's Helper</h1><GameSquare type={0}/></div>);

ReactDOM.render(<App />, document.getElementById('app'));



