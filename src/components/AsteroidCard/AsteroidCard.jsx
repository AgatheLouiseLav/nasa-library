import './AsteroidCard.css'
import { useNavigate } from "react-router-dom";

export default function AsteroidCard({ asteroid }) {

	const navigate = useNavigate();
	function handleNavigate() {
		navigate('/asteroid-item', {state : asteroid})
	};

	return (
			<div className="AsteroidCard" onClick={handleNavigate}>
				<div className='AC-left'>
					<h2>{asteroid.name}</h2>
					<h5>AKA : {asteroid.name_limited}</h5>
					<p>{asteroid.neo_reference_id}</p>
				</div>
				<div className='AC-right'>
					<i className="uil uil-star"></i>
				</div>
			</div>
	);
};