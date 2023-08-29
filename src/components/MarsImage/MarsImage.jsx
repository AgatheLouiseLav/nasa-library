export default function MarsImage({marsImg, index}){
	return(
		<div>
			<img src={marsImg.photos[0].img_src} alt="mars image" />
		</div>
	)
}