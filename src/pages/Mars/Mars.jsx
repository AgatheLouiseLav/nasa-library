import MarsImage from "../../components/MarsImage/MarsImage"

export default function Mars({marsImage}) {

	const allMarsImage = marsImage.map((marsImg, index) => (
	 	<MarsImage marsImg={marsImg} key={marsImg._id} index={index}/>
	))
	return (
		<>
			{allMarsImage}
		</>
	)
}