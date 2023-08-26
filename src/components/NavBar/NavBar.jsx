import './Navbar.css';
import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service';
import Hero from '../Hero/Hero';

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
			<Link to="/asteroids"><i class="uil uil-asterisk"></i>Asteroids</Link>
			<Link to="/mars"><i class="uil uil-mars"></i>Mars</Link>
			<Link to="/news"><i class="uil uil-newspaper"></i>News</Link>
			<Link to="/library"><i class="uil uil-search"></i>Library</Link>
		</div>
	</nav>
	);	
}