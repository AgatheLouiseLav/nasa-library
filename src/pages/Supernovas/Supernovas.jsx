import SupernovaCard from "../../components/SupernovaCard/SupernovaCard";
import './Supernovas.css';

export default function Supernovas({ supernovasData }) {
	
	return (
		<div className="Supernovas">
			<h1>Supernovas library</h1>
			<div className="Supernovas-flex">
				{supernovasData && supernovasData.collection.items.map((item) => (
					<SupernovaCard item={item} key={item.data[0].nasa_id} />
				))}
			</div>
		</div>
	);
};