import React ,{useContext, useState} from "react";
import Navbar from "./Navbar";
import { albumsData, songsData, instrumentData} from "../assets/assets";
import AlbumItem from "./AlbumItem"
import SongItem from "./SongItem"
import { PlayerContext } from "../context/PlayerContext";
import { useLocation, useNavigate } from "react-router-dom";
import InstrumentItem from "./InstrumentItem";

export default function DisplayHome(){

    const {songs, setSongs,profileData, setProfileData} = useContext(PlayerContext);
    const navigate = useNavigate();


   
   

    return (
        <>
            <Navbar/>
            <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
                <div className="flex overflow-auto">
                    {
                        albumsData.map((item, index)=>(
                            <AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>
                        ))
                    }
                </div> 
            </div>
            <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl">Today's Biggest Hits</h1>
                <div className="flex overflow-auto">
                    {
                        songs.map((item, index)=>(
                            <SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} liked={item.liked}/>
                        ))
                    }
                </div> 
            </div>
            <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl">Music Instruments</h1>
                <div className="flex overflow-auto">
                    {
                        instrumentData.map((item, index)=>(
                            <InstrumentItem data={item}/>
                        ))
                    }
                </div> 
            </div>
        </>
    )
}