import {useEffect, useState} from "react";
import * as React from "react";



type PropsType = {

}
const get2digitString=(num:number)=>num < 10 ? '0'+num: num

export const Clock :React.FC< PropsType> =() => {
    const[date, setDate] = useState(new Date())

   useEffect(()=>{
       const intervalID=setInterval(()=>{
           setDate(new Date())
       },1000)
       return ()=>{
           clearInterval(intervalID)
       }
   },[])

const secString=get2digitString(date.getSeconds())
const minString=get2digitString(date.getMinutes())
const hourString=get2digitString(date.getHours())

    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    const secDeg = seconds * 6;
    const minDeg = minutes * 6 + seconds * 0.1;
    const hourDeg = (hours % 12) * 30 + minutes * 0.5;

    return <div>

        <span>{hourString}</span>
        :
        <span>{minString}</span>
        :
        <span>{secString}</span>

        <div className="flex flex-col items-center gap-4">
            {/* Analog clock */}
            <div className="relative w-52 h-52 rounded-full border-8 border-gray-800 bg-white shadow-lg">


                {/* Hour hand */}
                <div
                    className="absolute w-1 h-15 bg-gray-800 bottom-1/2 left-1/2 origin-bottom"
                    style={{ transform: `translateX(-50%) rotate(${hourDeg}deg)` }}
                />

                {/* Minute hand */}
                <div
                    className="absolute w-1 h-22 bg-gray-600 bottom-1/2 left-1/2 origin-bottom"
                    style={{ transform: `translateX(-50%) rotate(${minDeg}deg)` }}
                />

                {/* Second hand */}
                <div
                    className="absolute w-0.5 h-22 bg-red-500 bottom-1/2 left-1/2 origin-bottom"
                    style={{ transform: `translateX(-50%) rotate(${secDeg}deg)` }}
                />

                {/* Center dot */}
                <div className="absolute w-3 h-3 bg-black rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>

            {/* Digital time */}
            <div className="text-xl font-mono tracking-wider text-gray-800">
                {date.toLocaleTimeString()}
            </div>
        </div>
    </div>

}