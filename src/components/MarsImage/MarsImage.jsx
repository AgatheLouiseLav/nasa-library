import './MarsImage.css'
export default function MarsImage({marsImg, index}){
	return(
		<div className='MarsImage'>
			<img src={marsImg.img_src} alt={`mars Image ${marsImg.id}`} />
		</div>
	)
}