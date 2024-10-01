import PropTypes from "prop-types";

const Employee = (props) => {



	return (
		<div className="min-w-[350px] max-w-[350px] m-2 py-8 px-8   bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
			<img
				className="object-cover  h-[100px] w-[100px] block mx-auto  rounded-full sm:mx-0 sm:shrink-0"
				src={props.img}
				alt="Woman's Face"
			/>

			<div className="text-center space-y-2 sm:text-left">
				<div className="space-y-0.5">
					<p className="text-lg text-black font-semibold">{props.name}</p>
					<p className="text-slate-500 font-medium">
						{props.role ? props.role : "This employee didnt have role"}
					</p>
				</div>
				{props.devMode && (
					props.editEmployee
				) }
			</div>
		</div>
	);
};

Employee.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	role: PropTypes.string.isRequired,
	devMode: PropTypes.bool,
	editEmployee: PropTypes.object
}


export default Employee;
