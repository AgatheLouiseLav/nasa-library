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
			<Link to="" onClick={handleLogOut}><i className="uil uil-signout"></i></Link>
		</div>
		<div className='sub-navbar'>
			<Link to="/"><i className="uil uil-estate"></i>Home</Link>
			<Link to="/asteroids"><i className="uil uil-asterisk"></i>Asteroids</Link>
			<Link to="/mars"><i className="uil uil-moon-eclipse"></i>Mars</Link>
			<Link to="/supernovas"><i className="uil uil-rocket"></i>Supernovas</Link>
			<Link to="/observations"><i className="uil uil-search"></i>Observation</Link>
		</div>
	</nav>
	);	
}