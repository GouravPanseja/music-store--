import React, {useContext, useState, useEffect} from "react";
import "./styles/signup.css";
import {login, assets} from "../assets/assets";
import { useNavigate,Link } from "react-router-dom";
import {Oval} from "react-loader-spinner";
import toast from "react-hot-toast";


export default function Signup(){
    const [isShowPassword_1, setIsShowPassword_1] =  useState(false);
    const [isShowPassword_2, setIsShowPassword_2] =  useState(false);

    const {IoPersonSharp, MdOutlineMailOutline, IoIosLock,FaEye,FaEyeSlash,FaShieldHalved, googleLogo,microsoftLogo,signupImage, RiErrorWarningLine} = login;
    const {SingupImage2} = assets;
    const [isLoading , setIsLoading] = useState(false);

    const [quotes, setQuotes] = useState([]);

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const navigate = useNavigate();

    useEffect(()=>{
        async function fetchData(){
            const url = 'https://the-personal-quotes.p.rapidapi.com/quotes/tags/music';
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '948c9f9febmsh32218e289f31c3bp184ae8jsnf2a39278dd81',
                    'x-rapidapi-host': 'the-personal-quotes.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();

                console.log(result);
                
                setQuotes(result);

            } catch (error) {
                console.error(error.message);
            }
        }
        fetchData();
    },[])

    async function handleSubmit(e){

        try{
        
            e.preventDefault();

            // const encryptedPassword = await bcrypt.hash(password, 10);

            const userData ={
                email,
                name,
                password,
                confirmPassword
            }

            if(!email || !name || !password || !confirmPassword){
                toast("Incorrect data!",{
                    icon: '⚠️',
                    style: {
                    borderRadius: '10px',
                    background: 'red',
                    color: '#fff',
                    },
                });
                return;
            }

            localStorage.setItem(`userData/${email}`, JSON.stringify(userData));

            setEmail("");
            setPassword("");
            setConfirmPassword("")
            setName("");

            

            toast("User register sucessfully!",{
                icon: '👍🏻',
                style: {
                borderRadius: '10px',
                background: '#288e0f',
                color: '#fff',
                },
            });



            navigate("/login");

        } 
        catch(err){
            console.log(err.message);
        } 
   
    }

    return (
        <div
            
            className="bg-[#191919] h-[100vh] w-full flex flex-row ">

            <div 
                className="lg:w-[55%] w-full  flex items-center  bg-white lg:rounded-tr-xl lg:rounded-br-xl ">

                
                <form onSubmit={handleSubmit} className="w-full  p-[20px] flex flex-col justify-center items-center my-auto ">

                    {/* heading */}
                    <div className="flex flex-col justify-center items-center gap-7 mb-5">
                        <h2 className="heading text-black">Register</h2>
                        <p className=" text-[0.8rem] sm:[1rem] lg:text-[1.3rem] font-extralight text-center text-[#5E5E5E]">Match your vibe with Sync Music Now.</p>
                    </div>

                    {/* fields */}
                    <div className="w-full flex flex-col  gap-5 items-center justify-center space-between">
                        
                      
        
                        <div className="flex gap-5 xxs:min-w-[300px] xxs:max-w-[300px] min-w-[250px] max-w-[250px] items-center justify-center relative border-[1px] border-black px-2 rounded-md">
                           
                            <label htmlFor="name">
                                <IoPersonSharp className="text-xl text-black"/>
                            </label>
                            
                            <input 
                                type="text" 
                                name="name" 
                                id="name"
                                placeholder="Name" 
                                className="outline-none p-2 w-full h-[45px]  text-black"
                                value={name}
                                onChange={(e)=> setName(e.target.value)}
                            
                            />
                        </div>

                    
                        <div className="flex gap-5  xxs:min-w-[300px] xxs:max-w-[300px] min-w-[250px] max-w-[250px] items-center justify-center border-[1px] border-black px-2 rounded-md">
                          
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
                                onChange={(e)=> setEmail(e.target.value)}
                            />
                        </div>

                     
                        <div className="flex gap-5 xxs:min-w-[300px] xxs:max-w-[300px] min-w-[250px] max-w-[250px] items-center justify-center border-[1px] border-black px-2 rounded-md">
                            
                            <label htmlFor="pass">
                                <IoIosLock className="text-xl text-black"/>
                            </label>

                            <input 
                                type={`${isShowPassword_1 ? "text" : "password"}`} 
                                name="password" 
                                id="pass"
                                placeholder="Password" 
                                className="outline-none p-2 w-full h-[45px]  text-black"  
                                value={password}
                                onChange={(e)=> setPassword(e.target.value)}
                            />
                            {
                                isShowPassword_1 ?
                                <FaEye onClick={()=> setIsShowPassword_1( prev => !prev)} className="text-[#c3c8ce] cursor-pointer text-md "/>
                                :
                                <FaEyeSlash onClick={()=> setIsShowPassword_1( prev => !prev)} className="text-[#c3c8ce] cursor-pointer text-md"/>
                            }
                            
                        </div>

       
                        <div className="flex gap-5  xxs:min-w-[300px] xxs:max-w-[300px] min-w-[250px] max-w-[250px] items-center justify-center border-[1px] border-black px-2 rounded-md">

                            <label htmlFor="confirmPassword">
                                <FaShieldHalved className="text-xl text-black"/> 
                            </label>

                            <input 
                                type={`${isShowPassword_2 ? "text" : "password"}`} 
                                name="confirmPassword" 
                                id="confirmPassword"
                                placeholder="Confirm Password" 
                                className="outline-none p-2 w-full h-[45px] text-black"  
                                value={confirmPassword}
                                onChange={(e)=> setConfirmPassword(e.target.value)}
                            />
                            {
                                isShowPassword_2 ?
                                <FaEye onClick={()=> setIsShowPassword_2( prev => !prev)} className="text-[#c3c8ce] cursor-pointer text-md"/>
                                :
                                <FaEyeSlash onClick={()=> setIsShowPassword_2( prev => !prev)} className="text-[#c3c8ce] cursor-pointer text-md"/>
                            }
                            
                        </div>  
                        
                        <div className="mt-2  md:hidden">
                            <p className="text-sm text-gray-500"> 
                                Already have an account ? <Link to="/login" className="underline text-black">Sign in</Link>
                            </p>
                        </div>

                        

                        <div className="flex md:w-[40%] items-center justify-center mt-7">
                            <button 
                                className="bg-black xxs:min-w-[300px] xxs:max-w-[300px] min-w-[250px] max-w-[250px] flex items-center justify-center text-white px-[4rem] hover:bg-gray-800 transition-all duration-100 py-3 rounded-md active:scale-[.98] disabled:active:scale-[1] disabled:bg-gray-600"
                                disabled = {isLoading}
                            >
                                <p className="no-wrap whitespace-nowrap text-white ">
                                { 
                                    isLoading ? 
                                    <Oval visible={true} height="25" width="25" color="#4fa94d" ariaLabel="oval-loading" wrapperStyle={{}} wrapperClass="" /> 
                                :   "Sign up with email"}
                                </p>
                            </button>
                        </div>     
              
                        <div className="flex w-[40%] items-center mt-7">
                            <div className="bg-gray-400 h-[1px] w-full"></div>
                            <p className="p-2 text-black">OR</p>
                            <div className="bg-gray-400 h-[1px] w-full"></div>
                        </div>

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
                                <p className="sm:block hidden mx-2 text-black"> Microsoft </p>
                            </div>
                      
                           
                        </div>                      
                        
                       

                    </div>
                </form>
                 
            </div>

            <div 
                animate={{opacity:1}}
                initial={{opacity:0.97}}
                transition={{
                    duration:0.5,
                    ease:"easeInOut"
                }}
                exit={{opacity:0}}
                className="lg:flex hidden gap-3 flex-col items-center  justify-center w-[45%] overflow-hidden relative">   

                <div className="absolute top-3 right-0 flex items-center gap-5 mr-4">
                    <p className="text-white text-sm font-extralight">Already have an account ? </p>
                    <Link to="/login" className="text-white font-extralight border-[1px] border-white px-2 rounded-md"> Login </Link>
                </div>
                <div className=" text-center">
                    <p className="text-white text-[2.3rem] ">
                    {
                       quotes.length > 0 && quotes.find((data)=> data.quote.length <= 20)?.quote
                    }
                    </p>
     
                </div>

                <div className="xl:w-[350px] w-[300px] xl:h-[350px] h-[300px] mt-3 rounded-full">
                    

                    <img
                        src={SingupImage2}
                        alt="signupImage"
                        className="object-cover w-full h-full rounded-full"
                    />
                </div>

                <p className="text-gray-200">&#169; Sync Music</p>
            </div>

        </div>
    )
}