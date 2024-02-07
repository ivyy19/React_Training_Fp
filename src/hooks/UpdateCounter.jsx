import { useState } from "react";

export default function UpdateCounter() {
    var [count,setCounter] = useState(0);//usestate return s 2 values-getter,setter
    //count keeeps the getter value which is default and setcounter store the setter value which is aaray
    var[empDetails,setEmpDetails]=useState({
        userName:"Ivy",
        userDesignation:"intern",
        userAge:20
    })


    function UpdateEmployee()
    {//immutatbility=object should not be mutated
        var newObject = {
            ...empDetails,
            userName: "Sia"
        }
        
        setEmpDetails(newObject)

        
        }
        //console.log(userName)
    
    

    return(
        <div> <h1>the name is {empDetails.userName}</h1>
        <h2> designation is {empDetails.userDesignation}</h2>
        <h3> age is {empDetails.userAge}</h3>
        <input type="button" onClick={UpdateEmployee} value="change"/>
        </div>
    )
    
    
    // function incrementCounter() {
    //     //setCounter(count+1); //using directly

    //     setCounter((counter)=>{ //this is more efficient way of doing, takes the old value into consideration ie counter
    //         return counter+1   //setcounter is dependent on old value of counter
    //     });
    //     console.log(count)
    // }
    
    // return (
    //     <div>
    //         <h1>The Counter is {count}</h1>
    //         <input type="button" onClick={incrementCounter} value="Increment" />
    //     </div>
    // )
}