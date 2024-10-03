import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import NoResult from "../components/NoResult";

const Definition = () => {
	const [word, setWord] = useState([]);
	const [loading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const [error ,setError] = useState(false);

    
	console.log(useParams());
	const navigate = useNavigate();
	let { search } = useParams();

	useEffect(() => {
		setLoading(true);
		fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + search)
			.then((response) => {
				if (response.status === 404) {
					setNotFound(true);
				}

                if(!response.ok){
                    setError(true);
                    throw new Error("Something went wrong")
                }
				return response.json();
			})
			.then((data) => {
				setWord(data[0]?.meanings);
			}).catch((err) => {
                console.log(err)
            })
			.finally(() => {
				setLoading(false);
			});
	}, [search]);


    if(notFound === true){
        return (
            <>
                 <NoResult/>
                 <Link to="/dictionary">Search another word</Link>
            </>
        )
    }
	return (
		<>
			{loading ? (
				<p className="text-5xl font-bold">Loading...</p>
			) : word ? (
				<>
                    <h2>Here is the definition</h2>
					{word.map((meaning) => {
						return (
							<p key={uuidv4()}>
								{meaning.partOfSpeech}: {meaning.definitions[0].definition}
							</p>
						);
					})}
				</>
			) : null}
		</>
	);
};

export default Definition;
