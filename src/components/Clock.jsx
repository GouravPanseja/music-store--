import React, {useState, useEffect} from "react";


export default function Clock(){

    const [time, setTime] = useState("");

    useEffect(()=>{
        setInterval(()=>{
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();

            setTime(`${hours} : ${minutes} : ${seconds}`)

        }, 1000)
    },[])
    return(
        <div className="min-w-[100px]">
            {time}
        </div>
    )
}