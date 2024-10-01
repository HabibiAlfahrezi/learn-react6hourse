import "../style.css";
import { useState } from "react";
import Employee from "../components/Employee";
import AddEmployee from "../components/AddEmployee";
import { v4 as uuidv4 } from "uuid";
import EditEmployee from "../components/EditEmployee";
import dataEmployer from "../data/dataEmployer";

function Employees() {

	const [employees, setEmployees] = useState(dataEmployer);

	function updateEmployee(id, newName, newRole) {
		console.log(id, newName, newRole);
		const updateEmployee = employees.map((employeeSekarang) => {
			if (employeeSekarang.id == id) {
				return { ...employeeSekarang, name: newName, role: newRole };
			}
			return employeeSekarang;
		});

		setEmployees(updateEmployee);
	}

	function addEmployee(name, role, image) {
		const newEmployee = {
			id: uuidv4(),
			name: name,
			role: role,
			img: image,
		};
		setEmployees([...employees, newEmployee]);
	}

	const showEmployee = true;
	const [devMode, setDevMode] = useState(false);

	return (
		<div className="">
			{console.log("Inside the return")}
			{showEmployee ? (
				<div>
					<div className="w-full flex justify-center">
						<button
							onClick={() => {
								setDevMode((curretMode) => !curretMode);
								console.log(devMode);
							}}
							className="px-8 my-4 py-4 bg-black rounded-md text-white font-medium"
						>
							Developer Mode
						</button>
					</div>
					<div className="flex flex-wrap justify-center ">
						{employees.map((user) => {
							const editEmployee = (
								<EditEmployee
									key={user.id}
									id={user.id}
									name={user.name}
									role={user.role}
									updateEmployee={updateEmployee}
								/>
							);
							return (
								<Employee
									key={user.id}
									devMode={devMode}
									id={user.id}
									name={user.name}
									role={user.role}
									img={user.img}
									editEmployee={editEmployee}
								/>
							);
						})}
					</div>
					<AddEmployee addEmployee={addEmployee} />
				</div>
			) : (
				<p>You cannont see the employee</p>
			)}
		</div>
	);
}

export default Employees;
