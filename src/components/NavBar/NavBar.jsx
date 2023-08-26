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
			<h1>Welcome, to <span>Nasa Library's</span> {user.name} !</h1>
			<Link to="" onClick={handleLogOut}>Log Out</Link>
		</div>
		<div className='sub-navbar'>
			<Link to="/asteroids">Asteroids</Link>
			&nbsp; | &nbsp;
			<Link to="/mars">Mars</Link>
			&nbsp; | &nbsp;
			<Link to="/news">News</Link>
			&nbsp; | &nbsp;
			<Link to="/library">Library</Link>
		</div>
	</nav>
	);	
}