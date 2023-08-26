import AsteroidCard from "../../components/AsteroidCard/AsteroidCard";

export default function Asteroids({ asteroids }) {

	console.log(asteroids)
	const newAsteroids = asteroids.near_earth_objects;

	const allAsteroids = newAsteroids.map((asteroid, idx) => (
		<AsteroidCard key={idx} asteroid={asteroid}/>
	))

	return (
		<main>
			{allAsteroids}
		</main>
	)
}