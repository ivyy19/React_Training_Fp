const ConditionAndIteration=(props)=>{
    var name="dia";
    //scope1
    function getdetails()
    //scope 2 (inner scope for condition and iteration)=closure in js
    {
        function three()
        {
            alert(name)
        }
        three();
        if(props.city=="jsr"||props.city=="delhi")
        {
            return <h2> welcome sde</h2>
        }
        else if(props.city=="goa")
        {
            return <h2> welcome intern</h2>
        }
        
    }
    return(
        <div>
            <h1>The User Name is: {props.name}</h1>
            {(props.salary >= 20) && (
                <div>
                    { getdetails() }
                    <h3>Your designation is { props.designation }</h3>
                </div>
            )}
            { props.salary < 20  && <h2>Welcome as Junior Developer</h2> }
        </div>
    )
            }

export default ConditionAndIteration;
