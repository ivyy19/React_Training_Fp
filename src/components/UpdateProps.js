export default function UpdateProps(props)
{
    props.employeeDetails.salary=10000;
    props.employeeDetails.bonus=10000;
    props.arr.push(300);

    // props.userName="freddy"
    return(
        <div>
            <h1> Lets update props {props.employeeDetails.salary} {props.employeeDetails.bonus} {props.arr.length}</h1>
        </div>
    )
}