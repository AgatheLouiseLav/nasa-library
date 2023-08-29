import { useState,useEffect } from 'react';
import * as apodAPI from '../../utilities/apod-api';
import './Hero.css'
export default function Hero() {
	const [apod, setApod]=useState([]);

	useEffect(function(){
		async function getApod(){
		const apodImg = await apodAPI.getApod();
      	setApod(apodImg);
		}
		getApod();
	},[])

	return (
		<div className="Hero">
			<img src={`${apod.url}`} alt={apod.title} />
			<div className='Hero-text'>
				<h1>{apod.title}</h1>
				<h4>By: {apod.copyright}</h4>
				<p>{apod.explanation}</p>
				<p><span>{apod.date}</span></p>
			</div>
		</div>
		)
}