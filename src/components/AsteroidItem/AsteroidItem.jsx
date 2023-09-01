import { useLocation, useNavigate } from 'react-router-dom';
import './AsteroidItem.css';

export default function AsteroidItem() {

	const location = useLocation();
	const navigate = useNavigate();

	if(!location.state){
		navigate("/asteroids")
	};
	
  return (
	<div className='AsteroidItem'>
		<h1>{location.state.name}</h1>
		<h3>Estimated Diameter</h3>
		<table className='AsteroidItem-table'>
			<thead>
				<tr>
				<th>Unit</th>
				<th>Minimun</th>
				<th>Maximum</th>
				</tr>
			</thead>
			<tbody>
				<tr>
				<td>Feet (ft)</td>
				<td>{location.state.estimated_diameter.feet.estimated_diameter_min}</td>
				<td>{location.state.estimated_diameter.feet.estimated_diameter_max}</td>
				</tr>
				<tr>
				<td>Kilometers (Km)</td>
				<td>{location.state.estimated_diameter.kilometers.estimated_diameter_min}</td>
				<td>{location.state.estimated_diameter.kilometers.estimated_diameter_max}</td>
				</tr>
				<tr>
				<td>Meters (m)</td>
				<td>{location.state.estimated_diameter.meters.estimated_diameter_min}</td>
				<td>{location.state.estimated_diameter.meters.estimated_diameter_max}</td>
				</tr>
				<tr>
				<td>Miles (m)</td>
				<td>{location.state.estimated_diameter.miles.estimated_diameter_min}</td>
				<td>{location.state.estimated_diameter.miles.estimated_diameter_max}</td>
				</tr>
			</tbody>
		</table>
		&nbsp; &nbsp;
		<h3>Close Approach to the Earth Data</h3>
		<div className='AsteroidItem-date'>
			{
				location.state.close_approach_data.map((calendar) => {
					return	<p>{calendar.close_approach_date_full}</p>
				})
			}
		</div>
	</div>
  );
};

