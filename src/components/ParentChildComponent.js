export  function ChildComponent(props)
{
    return(
        <div>
            <h1> This is child {props.salary}</h1>
        </div>
    )

}
export default function ParentComponent(props)
{
    
    return(
        <div>
            <h1> This is Parent element {props.name}</h1>
            <div style={{marginLeft:"20px"}}>
            <ChildComponent {...props}></ChildComponent>
            </div>
        </div>
    )

}