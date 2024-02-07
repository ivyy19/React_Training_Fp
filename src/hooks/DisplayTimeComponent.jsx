export default function DisplayTimeComponent()
{
    var currentTime=``

    function returnCurrentTime()
    {
        return `${new Date().getHours()} :${new Date().getMinutes()}:${new Date().getSeconds()}`

    }
    var currentTime=returnCurrentTime();
    setInterval(function getlatestdata()
    {
        currentTime=returnCurrentTime();
        console.log(currentTime);
    },1000)
    return <h1>{currentTime}</h1>
}