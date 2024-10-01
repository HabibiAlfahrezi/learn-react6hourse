import { useEffect, useState } from "react";

const Dictionary = () => {
	const [word, setWord] = useState("");

    useEffect(() => {
        console.log('State Updated', word);
        
    })
	return (
		<>
			<div>
				<span>Word:</span><br />
				<span>{word}</span>
				<br />
			</div>
			<br />
			<input
				type="text"
				onChange={(e) => {
					setWord(e.target.value);
				}}
			/>

            <h1>Lets get the definition of {word}</h1>
		</>
	);
};

export default Dictionary;
