import "./style.css";
import Employees from "./pages/Employee";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customer from "./pages/Customer";
import Dictionary from "./components/Dictionary";

function App() {
	return (
		<BrowserRouter>
			<Header>
				<Routes>
					<Route path="/" element={<h4>This is Home Page</h4>} />
					<Route path="/employee" element={<Employees />} />
					<Route path="/customer" element={<Customer />} />
					<Route path="/dictionary" element={<Dictionary />} />
				</Routes>
			</Header>
		</BrowserRouter>
	);
}

export default App;
