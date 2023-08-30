import MarsImage from "../../components/MarsImage/MarsImage"

export default function Mars({marsImages}) {

	console.log(marsImages)
  	//const marsDB = marsImages.photos;
  	//console.log(marsDB);

	
	return (
		<>
			{marsImages && marsImages.photos.map((marsImg) => (
	 			<MarsImage marsImg={marsImg} key={marsImg.id} />
			))}
		</>
	)
}