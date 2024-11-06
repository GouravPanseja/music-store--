import React, { useContext } from "react";

import {assets} from "../assets/assets"


export default function InstrumentItem({data}){
  
    const {TiTick, IoIosAdd} = assets;

    return(
        <div onClick={()=> playWithId(id)} className="min-w-[120px] max-w-[180px] p-2 px-3 rounded mx-3 bg-[#252525c6] cursor-pointer hover:bg-[#ffffff26]">
            <img className="rounded w-full h-[70%] object-cover" src={data.image} alt=""/>
            <p className="font-bold mt-3 mb-1 flex items-center justify-between">
                {data.name}
                {
                    !data.added ?

                    <IoIosAdd className="font-lg"/>
                    :
                    <TiTick/>
                }
            </p>
        </div>
    )
}