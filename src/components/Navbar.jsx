import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { playerContext } from "../context/PlayerContext";

export default function Navbar(){
    const navigate = useNavigate();
    const {profileData, setProfileData} = useContext(playerContext);


    return(
        <>
            <div className="w-full flex justify-between items-center font-semibold">
                <div className="flex items-center gap-2">
                    <img onClick={()=> navigate(-1)}  className="w-8 bg-black p-2 rounded-2xl cursor-pointer" src={assets.arrow_left} />
                    <img onClick={()=> navigate(1)} className="w-8 bg-black p-2 rounded-2xl cursor-pointer" src={assets.arrow_right} />
                </div>
                <div className="flex items-center gap-4 ">
                    <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">Explore Premium</p>
                    <p onClick={()=> navigate("/likedSongs")} className="bg-white hover:bg-[#dfdfdf] text-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer"> Liked Songs</p>
                    <p className="bg-purple-500 text-black w-[150px] h-7 rounded-sm flex items-center justify-center cursor-pointer hover:bg-purple-400">{profileData.name ? profileData.name : "User Profile"}</p>
                </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
                <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">All</p>
                <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">Music</p>
                <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">Podcast</p>
            </div>
        </>
    )
}