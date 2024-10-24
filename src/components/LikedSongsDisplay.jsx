import React, { useContext,useState, useEffect } from "react";
import Navbar from "./Navbar";
import { PlayerContext } from "../context/PlayerContext";
import SongItem from "./SongItem";

export default function LikedSongs(){

    const [likedSongs, setLikedSongs] = useState([]);
    const {songs, setSongs} = useContext(PlayerContext);

    useEffect(()=>{
        const filteredSongs = songs.filter((song)=> song.liked);
        setLikedSongs(filteredSongs);
    }, [songs])

   
    return(
        <>
            <Navbar/>
            <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl">Liked By You</h1>
                <div className="flex overflow-auto h-max">
                    {
                        likedSongs.map((item, index)=>(
                            <SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} liked={item.liked}/>
                        ))
                    }
                </div> 
            </div>

        </>
    )
}