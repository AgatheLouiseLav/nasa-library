import './AsteroidCard.css'

export default function AsteroidCard({asteroid}) {
	return (
		<div className="AsteroidCard">
			<div className='AC-left'>
				<h2>{asteroid.name}</h2>
				<h5>AKA : {asteroid.name_limited}</h5>
				<p>{asteroid.neo_reference_id}</p>
			</div>
			<div className='AC-right'>
				<i class="uil uil-star"></i>
			</div>
		</div>
	)
}