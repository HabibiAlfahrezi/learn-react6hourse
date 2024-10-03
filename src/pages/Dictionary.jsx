import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dictionary = () => {
	const [word, setWord] = useState("");
	const navigate = useNavigate();
	return (
		<form className="flex justify-center space-x-2 max-w-[300px]"
			onSubmit={() => {
				navigate("/definition/" + word);
			}}
		>
			<input
				type="text"
				onChange={(e) => {
					setWord(e.target.value);
				}}
			/>
			<button>Search</button>
		</form>
	);
};

export default Dictionary;
