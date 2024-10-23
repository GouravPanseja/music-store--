import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const audioRef = useRef();
    const seekBar = useRef();
    const seekBg = useRef();

    const [track, setTrack] = useState(songsData[1]);
    const [playStatus, setPlayStatus] = useState(false);

    const [time, setTime] = useState({
        currentTime: {
            second:0,
            minute: 0,
        },
        totalTime:{
            second:0,
            minute:0,
        }
    })

    useEffect(()=>{
      
        audioRef.current.addEventListener('timeupdate', ()=>{          
            seekBar.current.style.width =  `${Math.floor(audioRef.current.currentTime*100/audioRef.current.duration)}%`;
            
            setTime({
                currentTime: {
                    second:Math.floor(audioRef.current.currentTime%60), 
                    minute: Math.floor(audioRef.current.currentTime/60),
                },
                totalTime:{
                    second:Math.floor(audioRef.current.duration%60),
                    minute:Math.floor(audioRef.current.duration/60),
                }
            })
        })

    },[audioRef])

    const play = ()=>{
        audioRef.current.play();
        setPlayStatus(true);
     
    }
    const pause = ()=>{
        audioRef.current.pause();
        setPlayStatus(false);
    }

    async function playWithId(id){

        setTrack(songsData[id]);
        await audioRef.current.play();
        setPlayStatus(true);
    }

    useEffect(()=>{
        async function func(){
            try{
                await audioRef.current.play();
            }
            catch(err){
                console.log("cannot play")
            }
        }
        func();
    }, [track])

    async function prev(){
        if(track.id > 0){
            setTrack(songsData[track.id-1]);
            setPlayStatus(true);
        }
    }
    async function next(){
        if(track.id < songsData.length-1){
            setTrack(songsData[track.id+1]);
            setPlayStatus(true);
        }
    }

    async function seekSong(e){
        audioRef.current.currentTime = ((e.nativeEvent.offsetX/seekBg.current.offsetWidth)*audioRef.current.duration)

    }



    const contextValue = {
        audioRef,
        seekBar,
        seekBg,
        track,
        setTrack,
        playStatus,
        setPlayStatus,
        time, 
        setTime,
        play,
        pause,
        playWithId,
        prev,
        next,
        seekSong
    };

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    );
};

export default PlayerContextProvider;