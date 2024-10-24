import React, {useEffect, useRef, useContext} from "react";
import DisplayHome from "./DisplayHome";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import DisplayAlbum from "./DisplayAlbum";
import { albumsData } from "../assets/assets";
import Login from "./Login";
import Signup from "./Signup";
import LikedSongs from "./LikedSongsDisplay";
import { PlayerContext } from "../context/PlayerContext";
import Popup from "./Popup";

export default React.memo(function Display(){


    const displayRef = useRef();
    const location = useLocation();

    const isAlbum = location.pathname.includes("album");

    const albumId = isAlbum ? location.pathname.slice(-1) : "";

    const bgColor = albumsData[Number(albumId)].bgColor;

    const isLoginPage = location.pathname.includes("login");
    const isSignupPage = location.pathname.toLowerCase().includes("signup");

    useEffect(()=>{
        if(isAlbum){
            displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`;
        }else{
            displayRef.current.style.background = `#121212`;
        }
    })

    return (
        <div ref={displayRef} className={`w-[100%]  rounded bg-[#121212] text-white overflow-auto ${isLoginPage || isSignupPage ? "lg:w-[100%]" : "lg:w-[75%] px-6 pt-4 m-2"} lg:ml-0`}>
            <Popup/>
            <Routes>
                <Route path="/" element={<DisplayHome/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/likedSongs" element={<LikedSongs/>}/>
                <Route path="/album/:id" element={<DisplayAlbum/>}/>
            </Routes>
        </div>
    )
})