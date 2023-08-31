import { useNavigate } from "react-router-dom";
import './SupernovaCard.css';

export default function SupernovaCard({item}){
	const navigate = useNavigate();
	const { data, links } = item;
	function handleNavigate() {
		navigate('/supernova-item', {state : item})
	}
	return (
		<div className="SupernovaCard">
			<h3 onClick={handleNavigate}>{data[0].title}</h3>
			<img src={links[0].href} alt="" />
		</div>
	)
}