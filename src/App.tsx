import axios from "axios";
import { useEffect, useState } from "react";
import "./styles/style.scss";

function App() {
	const [posts, setPosts] = useState<any>([]);
	const url = "/api/posts2";

	const getPosts = async () => {
		try {
			const response = await axios.get(url).then((r) => r.data);
      console.log(response);
			setPosts(response);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	useEffect(() => {
		getPosts();
	}, []);

	return (
		<div>
			{posts.map((e: any, idx: number) => (
				<div key={idx}>{e.id}/{e.title}/{e.views}</div>
			))}
		</div>
	);
}

export default App;
