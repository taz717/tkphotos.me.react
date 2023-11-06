// using this as the router

import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

// imports
import NavBar from "./components/Navbar";
import Main from "./pages/Main";

function App() {
	return (
		<div className="App">
			<NavBar />
			<HashRouter>
				<Routes>
					<Route exact path="/" element={<Main />} />
				</Routes>
			</HashRouter>
		</div>
	);
}

export default App;
