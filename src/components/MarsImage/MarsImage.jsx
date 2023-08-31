export default function MarsImage({marsImg, index}){
	return(
		<div>
			<img src={marsImg.img_src} alt={`mars Image ${marsImg.id}`} />
		</div>
	)
}