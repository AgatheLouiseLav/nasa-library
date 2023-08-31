import { useNavigate } from "react-router-dom";
import './SupernovaCard.css';

export default function SupernovaCard({item}){
	const navigate = useNavigate();
	const { data, links } = item;
	function handleNavigate() {
		navigate('/supernova-item', {state : item})
	}
	return (
		<div className="SupernovaCard" onClick={handleNavigate}>
			<img src={links[0].href} alt={data[0].title} />
			<h3>{data[0].title}</h3>
		</div>
	)
}