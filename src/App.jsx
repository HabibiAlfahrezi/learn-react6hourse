import "./style.css";
import Employees from "./pages/Employee";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customer from "./pages/Customer";
import Dictionary from "./pages/Dictionary";
import Definition from "./pages/Definition";
import NoResult from "./components/NoResult";


function App() {
	return (
		<BrowserRouter>
			<Header>
				<Routes>
					<Route path="/" element={<h4>This is Home Page</h4>} />
					<Route path="/employee" element={<Employees />} />
					<Route path="/dictionary" element={<Dictionary />} />
					<Route path="/definition/:search" element={<Definition />} />
 					<Route path="/customer" element={<Customer />} />
					<Route path="/404" element={<NoResult/>} />
					<Route path="*" element={<NoResult/>} />
				</Routes>
			</Header>
		</BrowserRouter>
	);
}

export default App;
