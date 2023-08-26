import './AsteroidCard.css'

export default function AsteroidCard({asteroid}) {
	return (
		<div className="AsteroidCard">
			<h2>{asteroid.name}</h2>
			<h5>AKA : {asteroid.name_limited}</h5>
		</div>
	)
}