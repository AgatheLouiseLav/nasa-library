import { useLocation, useNavigate } from 'react-router-dom';
import './AsteroidItem';

export default function AsteroidItem() {
	const location = useLocation();
	const navigate = useNavigate();
	if(!location.state){
		navigate("/asteroids")
	}
	console.log(location.state)
  return (
	<div>AsteroidItem</div>
  )
}

