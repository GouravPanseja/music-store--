import React, {useState, useContext} from "react";
import "./styles/Signup.css";
import {  login} from "../assets/assets.js"
import { useNavigate,Link } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import toast from "react-hot-toast";
import { playerContext } from "../context/PlayerContext";


export default function Login(){
    console.log("hih")
    const navigate = useNavigate();
    const {MdOutlineMailOutline, IoIosLock,FaEye,FaEyeSlash, googleLogo,microsoftLogo, logo , signupImage} = login;
    const [isShowPassword, setIsShowPassword] =  useState(false);
    const [email , setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const {profileData, setProfileData} = useContext(playerContext);

    function sendDangerToast(msg){
        toast(msg,{
            icon: '⚠️',
            style: {
            borderRadius: '10px',
            background: '#e70126',
            color: '#fff',
            },
        });
    }
    function sendSuccessToast(msg){
        toast(msg,{
            icon: '✔',
            style: {
            borderRadius: '10px',
            background: '#36b64c',
            color: '#fff',
            },
        });
    }
    async function formSubmit(e){
        e.preventDefault();

        if(!email || !password){
            sendDangerToast("Invalid input credentials")
        }

        const userData = JSON.parse(localStorage.getItem(`userData/${email}`));
        console.log(userData);

        if(!userData){
            sendDangerToast("User doesn't exist");
            return;
        }
        if(userData.password !== password){
            sendDangerToast("Incorrect password");
            return;
        }

        sendSuccessToast("User loggedIn succesfully!");

        console.log('hi"')

        setProfileData(userData);


        window.location.href="http://localhost:5500/landing/add.html"
    }

    return (

        <div 
            className="bg-[#191919] h-[100vh]  w-full flex flex-row "
        >

            {/* left part */}
            <div 
                className="lg:w-[55%] w-full  flex items-center  bg-white lg:rounded-tr-xl lg:rounded-br-xl "
                key="signup"
                animate={{opacity:1}}
                initial={{opacity:0.97}}
                transition={{
                    duration:0.5,
                    ease:"easeInOut"
                }}
                exit={{opacity:0}}
            >

                
                <form onSubmit={(e)=> formSubmit(e)}  className="w-full  p-[20px] flex flex-col justify-center items-center my-auto ">

                    {/* heading */}
                    <div className="flex flex-col justify-center items-center gap-4">
                        <h2 className="heading text-black">Sync Music</h2>
                        <p className=" text-[0.8rem] sm:[1rem] md:text-[1.3rem] font-extralight text-center text-[#5E5E5E]">Hello, who's this ? </p>
                    </div>
                
                    {/* fields */}
                    <div className="w-full flex flex-col  items-center justify-center ">
                        
            
                        {/* email */}
                        <p className="min-h-7 text-red-500"></p>
                        <div className="flex gap-5 xxs:min-w-[300px] xxs:max-w-[300px] min-w-[250px] max-w-[250px] items-center justify-center border-[1px] border-black px-2 rounded-md">
                          
                            <label htmlFor="email">
                                <MdOutlineMailOutline className="text-xl text-black"/>
                            </label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email"
                                placeholder="Email" 
                                className="outline-none p-2 w-full h-[45px] text-black"
                                value={email}
                                onChange = {(e)=> setEmail(e.target.value)}
                               
                            />
                        </div>
                        
                        {/* password */}
                        <p className="min-h-7 text-red-500"></p>
                        <div className="flex gap-5  xxs:min-w-[300px] xxs:max-w-[300px] min-w-[250px] max-w-[250px] items-center justify-center border-[1px] border-black px-2 rounded-md">
                            
                            <label htmlFor="pass">
                                <IoIosLock className="text-xl text-black"/>
                            </label>

                            <input 
                                type={`${isShowPassword ? "text" : "password"}`} 
                                name="password" 
                                id="pass"
                                placeholder="Password" 
                                className="outline-none p-2 w-full h-[45px] text-black"  
                                value={password}
                                onChange = {(e)=> setPassword(e.target.value)}
                                
                            />
                            {
                                isShowPassword ?
                                <FaEye onClick={()=> setIsShowPassword( prev => !prev)} className="text-[#c3c8ce] cursor-pointer text-md"/>
                                :
                                <FaEyeSlash onClick={()=> setIsShowPassword( prev => !prev)} className="text-[#c3c8ce] cursor-pointer text-md"/>
                            }
                            
                        </div>

                        <div className="mt-2  md:hidden xxs:min-w-[300px] xxs:max-w-[300px] min-w-[250px] max-w-[250px]">
                            <p className="text-sm text-gray-500"> 
                                Don't have an account ? <Link to="/signup" className="underline text-black">Signup</Link>
                            </p>
                        </div>

                        <div className="xxs:min-w-[300px] xxs:max-w-[300px] min-w-[250px] max-w-[250px] mt-4 ">
                            <div className="flex gap-4 items-baseline">
                                <input
                                    type="checkbox"
                                    value={isChecked}
                                    onChange = {()=> setIsChecked((prev) => !prev)}
                                    className="relative translate-y-1"
                                    required={true}
                            
                                />
                                <p className="text-[0.88rem] text-black">
                                    I hereby acknowledge and  <Link className="underline">agree to abide by the terms</Link> set forth by Sync Music.
                                </p>
                            </div>
                        </div>

                        
                        {/* sign in button */}
                        <div className="flex xxs:min-w-[300px] xxs:max-w-[300px] min-w-[250px] max-w-[250px] items-center justify-center mt-7">
                            <button 
                                className="bg-black w-full flex items-center justify-center text-white px-[4rem] hover:bg-gray-800 transition-all duration-100 py-3 rounded-md active:scale-[.98] disabled:bg-gray-400"
                                disabled = {isLoading}
                            >
                                { 
                                    
                                    isLoading ? 
                                    <Oval className="flex justify-center items-center" visible={true} height="25" width="25" color="#4fa94d" ariaLabel="oval-loading" /> 
                                    : 
                                    "Signin to continue"
                                }
                      
                            </button>
                        </div>     
                        
                        {/* OR  */}
                        <div className="flex w-[40%] items-center mt-7">
                            <div className="bg-gray-400 h-[1px] w-full"></div>
                            <p className="p-2 text-black">OR</p>
                            <div className="bg-gray-400 h-[1px] w-full"></div>
                        </div>
                        
                        {/* other signup options */}
                        <div className="flex flex-row gap-5 md:w-[45%] items-center justify-center">
                            <div className="max-w-[150px] py-2 px-3 flex justify-between items-center sm:border-[1px] border-black rounded-lg cursor-pointer">
                                <img 
                                    src={googleLogo}
                                    alt="google logo"
                                    className="h-8 w-8 "
                                /> 
                                <p className="sm:block hidden mx-2 text-black"> Google </p>
                            </div>
                            <div className="max-w-[150px] py-2 px-3 flex justify-between items-center sm:border-[1px] border-black rounded-lg cursor-pointer">
                                <img 
                                    src={microsoftLogo}
                                    alt="microsoft logo object-cover"
                                    className="h-8 w-8 object-cover"
                                /> 
                                <p className="sm:block hidden  mx-2 text-black"> Microsoft </p>
                            </div>
                      
                           
                        </div>                      
                        
                    </div>

                </form> 
                 
            </div>

            {/* right part */}
            <div 
                key="signup2"
                animate={{opacity:1}}
                initial={{opacity:0.97}}
                transition={{
                    duration:0.5,
                    ease:"easeInOut"
                }}
                exit={{opacity:0}}
                className="lg:flex hidden gap-3 flex-col items-center  justify-center w-[45%] overflow-hidden relative">   

                <div className="absolute top-3 right-0 flex items-center gap-5 mr-4">
                    <p className="text-white text-sm font-extralight">New to Sync Music ? </p>
                    <Link to="/signup" className="text-white font-extralight border-[1px] border-white px-2 rounded-md"> Signup </Link>
                </div>
                <div className=" text-center">
                    <p className="text-white text-[2.3rem] ">Login <br/> and come on in</p>
     
                </div>

                <div className="w-[300px] h-[300px] mt-3 rounded-full overflow-hidden">
                    <video
                        src={signupImage}
                        alt="signupImage"
                        autoPlay
                        loop
                        muted
                        className="object-cover h-full w-full rounded-full"
                    />
                </div>

                <p className="text-gray-200">&#169; Sync Music</p>
            </div>

        </div>
    )
}