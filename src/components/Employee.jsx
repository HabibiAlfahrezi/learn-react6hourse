const Employee = (props) => {
	return (
		<>
			<h3>Employee {props.name}</h3>
			<p>{props.role ? props.role : 'This Employee Has No Role'}</p>
		</>
	);
};


export default Employee;


