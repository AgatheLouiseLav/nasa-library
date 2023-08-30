import MarsImage from "../../components/MarsImage/MarsImage"

export default function Mars({marsImages}) {

	console.log(marsImages)
  	const marsDB = marsImages.photos;
  	console.log(marsDB);
  	//const newMarsDB = marsDB.map((mDB) => {console.log(mDB.img_src)})
  	//console.log(newMarsDB);

	//const allMarsImage = marsImages.map((marsImg, index) => (
	// 	<MarsImage marsImg={marsImg} key={marsImg._id} index={index}/>
	//))
	return (
		<>
			{/*{allMarsImage}*/}
		</>
	)
}