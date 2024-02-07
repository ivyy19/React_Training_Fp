
import { useState } from "react";
export default function DisplayTimeComponetsHooks()
{
    var [currentTime,setCurrentTime]=useState(returnCurrentTime());
    var [currentCounter,setCurrentCounter]=useState(0);

    function returnCurrentTime()
    {
        return `${new Date().getHours()} :${new Date().getMinutes()}:${new Date().getSeconds()}`

    }
    var currentTime=returnCurrentTime();
    setTimeout(function getlatestdata()
    {
        setCurrentTime(returnCurrentTime());
        setCurrentCounter(currentCounter+1);
        console.log(currentTime);
    },1000)
    return <h1>{currentTime} {currentCounter}</h1>
}