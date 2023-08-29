import './App.css';
import { useState, useEffect } from "react";
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import { Routes, Route } from "react-router-dom";
import NavBar from '../../components/NavBar/NavBar';
import Asteroids from '../Asteroids/Asteroids';
import Mars from '../Mars/Mars';
import News from '../News/News';
import Library from '../Library/Library';
import Notifications from '../../components/Notifications/Notifications';
import * as asteroidsAPI from '../../utilities/asteroids-api';
import * as commentAPI from '../../utilities/comment-api';
import * as marsAPI from '../../utilities/mars-img-api';
import Hero from '../../components/Hero/Hero';
import Comments from '../../components/Comments/Comments';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [asteroids, setAsteroids] = useState([]);
  const [marsImages, setMarsImages] = useState([]);
  const [comments, setComments] = useState([]);

  /*Create comment */
  async function getComments() {
      const comments = await commentAPI.getAll();
      setComments(comments);
  	}

	  useEffect(function() {
  	  getComments();
	  },[user]);

	function addComment(comment) {
    	setComments([...comments, comment]);
  	}
    console.log(comments)
  /*End Create comment */

	useEffect(function(){
		async function getAsteroids(){
			const allAsteroids = await asteroidsAPI.getAllAsteroids();
      setAsteroids(allAsteroids);
		}
		getAsteroids();
	},[])

  useEffect(function(){
		async function getMarsImages(){
			const allMarsImages = await marsAPI.getMarsImages();
      setMarsImages(allMarsImages);
		}
		getMarsImages();
	},[])

  console.log(marsImages)

  return (
   <main className='App'>
      { user ? 
      <>
      <div className='App-left'>
        <NavBar user={user} setUser={setUser}/>
        <Hero />
        <Routes>
          <Route path="/asteroids" element={<Asteroids asteroids={asteroids}/>}/>
          <Route path="/mars" element={<Mars marsImages={marsImages} />} />
          <Route path="/news" element={<News />}/>
          <Route path="/library" element={<Library />} />
          <Route path="/comments" element={<Comments addComment={addComment} getComments={getComments} comments={comments} />} />        
        </Routes> 
      </div>
      <Notifications />
      </>
        : 
        <AuthPage setUser={setUser}/> }
   </main>
  );
}


