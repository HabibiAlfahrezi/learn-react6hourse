import PropTypes from "prop-types";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const AddEmployee = (props) => {
	const [show, setShow] = useState(false);

    const [employee, setEmployee] = useState({
        id: '',
        name: '',
        role: '',
        image:'',
    })

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<button
				onClick={handleShow}
				className="px-12 mx-auto block m-2 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
			>
				+ Add Employee
			</button>

			<Modal
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>Create Employee</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form
						id="addModal"
						className="w-full max-w-sm"
						onSubmit={(e) => {
							e.preventDefault();
                            setEmployee({
                                id: '',
                                name: '',
                                role: '',
                                image:'',
                            });
                            props.addEmployee(employee.name, employee.role, employee.image);
						}}
					>
						<div className="md:flex md:items-center mb-6">
							<div className="md:w-1/3">
								<label
									className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
									htmlFor="name"
								>
									Full Name
								</label>
							</div>
							<div className="md:w-2/3">
								<input
									className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
									id="name"
									type="text"
									value={employee.name}
                                    onChange={(e) => {
                                        setEmployee((employeeSekarang) => ({...employeeSekarang, name:e.target.value}))
                                    }}
								/>
							</div>
						</div>

						<div className="md:flex md:items-center mb-6">
							<div className="md:w-1/3">
								<label
									className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
									htmlFor="role"
								>
									Role
								</label>
							</div>
							<div className="md:w-2/3">
								<input
									className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
									id="role"
									type="text"
									value={employee.role}
                                    onChange={(e) => {
                                        setEmployee((employeeSekarang) => ({...employeeSekarang, role: e.target.value}))
                                    }}
								/>
							</div>
						</div>

                        <div className="md:flex md:items-center mb-6">
							<div className="md:w-1/3">
								<label
									className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
									htmlFor="image"
								>
									Image URL
								</label>
							</div>
							<div className="md:w-2/3">
								<input
									className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
									id="image"
									type="text"
									value={employee.image}
                                    onChange={(e) => {
                                        setEmployee((employeeSekarang) => ({...employeeSekarang, image: e.target.value}))
                                    }}
								/>
							</div>
						</div>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<button
						className="text-white rounded-md font-semibold py-2 px-4 bg-blue-500"
						form="addModal"
                        onClick={handleClose}
					>
						Save
					</button>
				</Modal.Footer>
			</Modal>
		</>
	);
};


AddEmployee.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        role: PropTypes.string
    }),
    updateEmployee: PropTypes.func,
    addEmployee: PropTypes.func,
}

export default AddEmployee;
