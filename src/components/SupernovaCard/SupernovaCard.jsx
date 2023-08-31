import { useNavigate } from "react-router-dom";
export default function SupernovaCard({item}){
	const navigate = useNavigate();
	const { data, links } = item;
	function handleNavigate() {
		navigate('/supernovaitem', {state : item})
	}
	return (
		<>
		<h3 onClick={handleNavigate}>{data[0].title}</h3>
		<img src={links[0].href} alt="" />
		</>
	)
}