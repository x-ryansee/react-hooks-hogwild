import React from "react";
import Nav from "./Nav";
import {useState} from 'react'
import hogs from "../porkers_data";
import HogTiles from "./HogTiles"
// import DisplayDetails from "./DisplayDetails"


function App() {








	return (
		<div className="App">
			<Nav />
			<HogTiles hogs={hogs}/>
			{/* <DisplayDetails/> */}
		</div>
	);
}

export default App;
