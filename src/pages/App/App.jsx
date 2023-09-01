import './App.css';
import { useState, useEffect } from "react";
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import { Routes, Route } from "react-router-dom";
import NavBar from '../../components/NavBar/NavBar';
import Asteroids from '../Asteroids/Asteroids';
import Mars from '../Mars/Mars';
import Supernovas from '../Supernovas/Supernovas';
import * as asteroidsAPI from '../../utilities/asteroids-api';
import * as commentAPI from '../../utilities/comment-api';
import * as marsAPI from '../../utilities/mars-img-api';
import * as supernovaAPI from '../../utilities/supernova-api';
import Hero from '../../components/Hero/Hero';
import Observations from '../Observations/Observations';
import SupernovaItem from '../../components/SupernovaItem/SupernovaItem';
import AsteroidItem from '../../components/AsteroidItem/AsteroidItem';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [asteroids, setAsteroids] = useState(null);
  const [marsImages, setMarsImages] = useState(null);
  const [supernovasData, setSupernovasData] = useState(null);
  const [comments, setComments] = useState([]);

  /*Create comment */
  async function getComments() {
    const comments = await commentAPI.getAll();
    setComments(comments);
  }

	  useEffect(function() {
      if(user !== null){
        getComments();
      } 
	  },[user]);

	function addComment(comment) {
    	setComments([...comments, comment]);
  	}
  /*End Create comment */

  /* Get Asteroids */
	useEffect(function(){
		async function getAsteroids(){
			const allAsteroids = await asteroidsAPI.getAllAsteroids();
      setAsteroids(allAsteroids);
		}
		getAsteroids();
	},[])
  /* End Get Asteroids */

  /* Get Mars Img */
  useEffect(function(){
		async function getMarsImages(){
			const allMarsImages = await marsAPI.getMarsImages();
      setMarsImages(allMarsImages);
		}
		getMarsImages();
	},[])

  /* End Get Mars Img */

  /* Get Mars Weather */
  useEffect(function(){
		async function getSupernova(){
			const supernovaImg = await supernovaAPI.getSupernova();
      setSupernovasData(supernovaImg);
		}
		getSupernova();
	},[]) 
  /* End Get Mars Weather */

  return (
   <main className='App'>
      { user ? 
      <div className='App-left'>
        <NavBar user={user} setUser={setUser}/>
        <Routes>
          <Route path="/" element={<Hero />}/>
          <Route path="/asteroids" element={<Asteroids asteroids={asteroids}/>}/>
          <Route path="/asteroid-item" element={<AsteroidItem />}/>
          <Route path="/mars" element={<Mars marsImages={marsImages} />} />
          <Route path="/supernovas" element={<Supernovas supernovasData={supernovasData}/>}/>
          <Route path="/supernova-item" element={<SupernovaItem />} />
          <Route path="/observations" element={<Observations addComment={addComment} getComments={getComments} comments={comments} setComments={setComments} />} />        
        </Routes> 
      </div>
        : 
        <AuthPage setUser={setUser}/> }
   </main>
  );
}


