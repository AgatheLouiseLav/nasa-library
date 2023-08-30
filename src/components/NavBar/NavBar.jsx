import './Navbar.css';
import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
	function handleLogOut() {
		userService.logOut();
		setUser(null);
	}

	return (
	<nav className="Navbar">
		<div className="welcome-navbar">
			<h1>Welcome, to <span>Nasa's Library</span> {user.name} !</h1>
			<Link to="" onClick={handleLogOut}><i class="uil uil-signout"></i></Link>
		</div>
		<div className='sub-navbar'>
			<Link to="/"><i class="uil uil-estate"></i>Home</Link>
			<Link to="/asteroids"><i class="uil uil-asterisk"></i>Asteroids</Link>
			<Link to="/mars"><i class="uil uil-mars"></i>Mars</Link>
			<Link to="/forecast"><i class="uil uil-cloud-rain-sun"></i>Forecast</Link>
			<Link to="/comments"><i class="uil uil-search"></i>Observation</Link>
		</div>
	</nav>
	);	
}