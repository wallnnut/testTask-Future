import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MainPage from "./pages/MainPage";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
	return (
		<Router>
			<Routes>
				<Route path="/:id?" element={<MainPage />} />
				{/* <Route path="/details/:id" Component={BookDetailPage} /> */}
			</Routes>
		</Router>
	);
}

export default App;
