import MarsImage from "../../components/MarsImage/MarsImage"
import './Mars.css'

export default function Mars({marsImages}) {
	
	return (
		<div className="Mars">
			<h1>Mars Images</h1>
			<div className="Mars-Container">
				{marsImages && marsImages.photos.map((marsImg) => (
					<MarsImage marsImg={marsImg} key={marsImg.id} />
				))}
			</div>
		</div>
	)
}