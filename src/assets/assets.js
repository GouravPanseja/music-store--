import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import spotify_logo from './spotify_logo.png'
import clock_icon from './clock_icon.png'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img6 from './img6.jpg'
import img7 from './img7.jpg'
import img8 from './img8.jpg'
import img9 from './img9.jpg'
import img10 from './img10.jpg'
import img11 from './img11.jpg'
import img12 from './img12.jpg'
import img13 from './img13.jpg'
import img14 from './img14.jpg'
import img15 from './img15.jpg'
import img16 from './img16.jpg'
import song1 from  './song1.mp3'
import song2 from  './song2.mp3'
import song3 from  './song3.mp3'
import logo from "./logo.png"
import { IoPersonSharp } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { FaShieldHalved } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import signupImage from "./signup.mp4";
import microsoftLogo from "./microsoftLogo.png";
import googleLogo from "./googleLogo.png";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import SingupImage2 from "./SingupImage2.png"
import SingupImage3 from "./SingupImage3.png"
import { IoIosAdd } from "react-icons/io";
import { TiTick } from "react-icons/ti";

import album1 from "./albums/album1.jpeg"
import album2 from "./albums/album2.jpeg"
import album3 from "./albums/album3.jpeg"
import album4 from "./albums/album4.jpeg"
import album5 from "./albums/album5.jpeg"
import album6 from "./albums/album6.jpeg"

import instr1 from "./instruments/mf1.jpg"
import instr2 from "./instruments/mf2.jpg"
import instr3 from "./instruments/mf3.jpg"
import instr4 from "./instruments/mf4.jpg"
import instr5 from "./instruments/mf5.jpg"
import instr6 from "./instruments/mf7.jpg"

export const login ={
    FaEye,
    IoPersonSharp,
    FaShieldHalved,
    FaEyeSlash,
    IoIosLock,
    signupImage,
    microsoftLogo,
    googleLogo,
    MdOutlineMailOutline,
    logo,
    signupImage,
}

export const assets = {
    
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    spotify_logo,
    clock_icon,
    logo,
    IoPersonSharp,
    IoMdHeartEmpty,
    FaHeart,
    SingupImage2,
    SingupImage3,
    IoIosAdd,
    TiTick,
    
}

export const albumsData = [
    {   
        id:0,
        name: "Top 50 Global",
        image: album1,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#2a4365"
    },
    {   
        id:1,
        name: "Top 50 India",
        image: album2,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#22543d"
    },
    {   
        id:2,
        name: "Trending India",
        image: album3,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#742a2a"
    },
    {   
        id:3,
        name: "Trending Global",
        image: album4,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#44337a"
    },
    {   
        id:4,
        name: "Mega Hits,",
        image: album5,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#234e52"
    },
    {   
        id:5,
        name: "Happy Favorites",
        image: album6,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#744210"
    }
]

export const instrumentData=[
    {
        name:"guitar",
        image:instr1,
        added:false,
    },
    {
        name:"violen",
        image:instr2,
        added:false,
    },
    {
        name:"drum",
        image:instr3,
        added:false,
    },
    {
        name:"trumphet",
        image:instr4,
        added:false,
    },
    {
        name:"flute",
        image:instr5,
        added:false,
    },
    {
        name:"electric guitar",
        image:instr6,
        added:false,
    },

]

export const songsData = [
    {
        id:0,
        name: "Song One",
        image: img1,
        file:song1,
        desc:"Put a smile on your face with these happy tunes",
        duration:"3:00",
        dateAdded:1,
        liked:false,
    },
    {
        id:1,
        name: "Song Two",
        image: img2,
        file:song2,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:20",
        dateAdded:3,
        liked:false,
    },
    {
        id:2,
        name: "Song Three",
        image: img3,
        file:song3,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:32",
        dateAdded:2,
        liked:false,
    },
    {
        id:3,
        name: "Song Four",
        image: img4,
        file:song1,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:50",
        dateAdded:7,
        liked:false,
    },
    {
        id:4,
        name: "Song Five",
        image: img5,
        file:song2,
        desc:"Put a smile on your face with these happy tunes",
        duration:"3:10",
        dateAdded:8,
        liked:false,
    },
    {
        id:5,
        name: "Song Six",
        image: img14    ,
        file:song3,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:45",
        dateAdded:10,
        liked:false,
    },
    {
        id:6,
        name: "Song Seven",
        image: img7,
        file:song1,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:18",
        dateAdded:2,
        liked:false,
    },
    {
        id:7,
        name: "Song Eight",
        image: img12,
        file:song2,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:35",
        dateAdded:5,
        liked:false,
    }
]