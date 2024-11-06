import { useContext, useState } from 'react'
import Sidebar from "./components/Sidebar"
import Player from './components/Player'
import Display from './components/Display'
import { playerContext } from './context/PlayerContext'; // Correct import
import { useLocation, useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

function App() {
  const {audioRef, track} = useContext(playerContext);
  const location = useLocation();
  console.log(location);

  const onLogin = (location.pathname.includes("login"));
  const onSignup = (location.pathname.toLowerCase().includes("signup"));

  return (
    <>
      <Toaster
        position="top-left"
        reverseOrder={false}
      />
      <div className="h-screen bg-black ">
        <div className={`${onLogin || onSignup ? "h-[100vh]" : "h-[90%]"} flex`}>
         {(!onLogin && !onSignup ) && <Sidebar/>} 
          <Display/>
        </div>
        {(!onLogin && !onSignup) && <Player/>}
        <audio ref={audioRef} src={track.file} preload='auto'></audio>
      </div>
    </>
  )
}

export default App
