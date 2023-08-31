import { useLocation, useNavigate } from 'react-router-dom';
import React from 'react'

export default function SupernovaItem() {
	const location = useLocation();
	const navigate = useNavigate();
	if(!location.state){
		navigate("/supernovas")
	}
	console.log(location.state)
  return (
	<>
	<div>SuperNova</div>
	</>
  )
}

 