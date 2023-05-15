import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<h1> Home 페이지 입니다. </h1>
			<Link to="/Sum/1/2">
				<p> SUM(1, 2) Page 이동 </p>
			</Link>
			<Link to="/Sub/4/1">
				<p> SUB(4, 1) Page 이동 </p>
			</Link>
		</div>
	);
}

export default Home;