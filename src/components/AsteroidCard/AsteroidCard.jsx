import './AsteroidCard.css'
import { Link } from "react-router-dom";

export default function AsteroidCard({asteroid}) {
	return (
		<div className="AsteroidCard">
			<Link to={`/asteroids/${asteroid.id}`}>
			<div className='AC-left'>
				<h2>{asteroid.name}</h2>
				<h5>AKA : {asteroid.name_limited}</h5>
				<p>{asteroid.neo_reference_id}</p>
			</div>
			</Link>
			<div className='AC-right'>
				<i class="uil uil-star"></i>
			</div>
		</div>
	)
}