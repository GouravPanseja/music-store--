import React, { useContext } from "react";
import {PlayerContext} from "../context/PlayerContext";
import {assets, songsData} from "../assets/assets"


export default function SongItem({name, image, desc, id, liked}){
    const {playWithId, songs, setSongs} = useContext(PlayerContext);

    const {IoMdHeartEmpty, FaHeart} = assets;

    function likeSong(e){
        e.stopPropagation();

        const updatedSongs = songs.map((song, index) => {
            if (index === id) {
                return { ...song, liked: true }; 
            }
            return song;
        });

        setSongs(updatedSongs);
    }

    function disLike(e){
        e.stopPropagation();

        const updatedSongs = songs.map((song, index) => {
            if (index === id) {
                return { ...song, liked: false }; 
            }
            return song;
        });
        setSongs(updatedSongs);

    }

    return(
        <div onClick={()=> playWithId(id)} className="min-w-[180px] max-w-[180px] p-2 px-3 rounded mx-3 bg-[#252525c6] cursor-pointer hover:bg-[#ffffff26]">
            <img className="rounded" src={image} alt=""/>
            <p className="font-bold mt-2 mb-1 flex items-center justify-between">
                {name}
                {   
                    !liked ?
                    <IoMdHeartEmpty onClick={likeSong} className="text-lg hover:fill-red-600 hover:bg-black p-1 rounded-full h-[25px] w-[25px]"/>
                    :
                    <FaHeart onClick={disLike} className="text-lg fill-red-600 hover:bg-black p-1 rounded-full h-[25px] w-[25px]"/>
                }  
            </p>
            <p className="text-slate-200 text-sm">{desc}</p>
        </div>
    )
}