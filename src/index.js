import React from "react";
import ReactDOM from "react-dom";

import  ReactComponent from "./hooks/DisplayTimeComponetsHooks";
// var userName = "Sample"
// var userDesignation = "VP";
// var arr=[10,20,30];

// var employeeDetails = {
//     salary: 2000,
//     bonus: 1000

// }

var userInfo={
    name:"Ivy",
    salary:30,
    city:"jsr",
    designation:"sde"
}

ReactDOM.createRoot(document.getElementById("root")).render((
    <>
    <ReactComponent ></ReactComponent>
        {/* <ReactComponent userName={userName} userDesignation={userDesignation} employeeDetails={employeeDetails} arr={arr}></ReactComponent> */}
    </>
))
