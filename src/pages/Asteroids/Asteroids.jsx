import AsteroidCard from "../../components/AsteroidCard/AsteroidCard";
import './Asteroids.css'

export default function Asteroids({ asteroids }) {

	const newAsteroids = asteroids.near_earth_objects;

	const allAsteroids = newAsteroids.map((asteroid, idx) => (
		<AsteroidCard key={idx} asteroid={asteroid}/>
	))

	return (
		<main className="Asteroids">
			<h1>Asteroids</h1>
			{allAsteroids}
		</main>
	)
}