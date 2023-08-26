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
import Hero from '../../components/Hero/Hero';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [asteroids, setAsteroids] = useState([]);

	useEffect(function(){
		async function getAsteroids(){
			const allAsteroids = await asteroidsAPI.getAllAsteroids();
      setAsteroids(allAsteroids);
		}
		getAsteroids();
	},[])

  return (
   <main className='App'>
      { user ? 
      <>
      <div className='App-left'>
        <NavBar user={user} setUser={setUser}/>
        <Hero />
        <Routes>
          <Route path="/asteroids" element={<Asteroids asteroids={asteroids}/>}/>
          <Route path="/mars" element={<Mars />} />
          <Route path="/news" element={<News />}/>
          <Route path="/library" element={<Library />} />
        </Routes> 
      </div>
      <Notifications />
      </>
        : 
        <AuthPage setUser={setUser}/> }
   </main>
  );
}


