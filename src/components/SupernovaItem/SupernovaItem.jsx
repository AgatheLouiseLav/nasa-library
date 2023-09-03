import { useLocation, useNavigate } from 'react-router-dom';
import './SupernovaItem.css';

export default function SupernovaItem() {

	const location = useLocation();
	const navigate = useNavigate();

	if(!location.state){
		navigate("/supernovas")
	}

		return (
				<div className='SupernovaItem'>
					<div className='SupernovaItem-Card'>
						<h1>{location.state.data[0].title}</h1>
						<img src={location.state.links[0].href} alt={location.state.data[0].title}/>
						<h3>Date : {(location.state.data[0].date_created)}</h3>
						<h3>At : {location.state.data[0].nasa_id}</h3>
						<p>{location.state.data[0].description}</p>
					</div>
				</div>
		);
	};

 