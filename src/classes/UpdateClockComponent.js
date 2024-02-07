import { Component } from "react"




export default class UpdateClockComponent extends Component{

    returnCurrentTime()
    {
        return `${new Date().getHours()} :${new Date().getMinutes()}:${new Date().getSeconds()}`

    }
    constructor(props)//state is triggered and created 
    {
        super(props);//accessing the parent class ie component and initialising the state 
        this.state={
            currentTime: this.returnCurrentTime(),
            counter:0,
            applicationUser:"random"
        }
       
}
updateValue=(event)=>  //binding of data 2 ways , ui and frontend 

{
    this.setState({
        applicationUser:event.target.value
    })
}
shouldComponentUpdate(nextProps, nextState)     //after setting up satae it asks componten update , checks the calue , if false it wont change
{//re renders 
    return true;
}
incrementCounter=()=>//we can use arrow function also instead of bind function
{
    this.setState({
        counter:this.state.counter+1
    })
}

    render()
    {
        return(
            <div>
                Enter name:<input value={this.state.applicationUser} onChange={this.updateValue}type="text"/><br></br>
                <b> Enterd name is {this.state.applicationUser}</b>
                <h1> The curent time is {this.state.currentTime}</h1>
                <h2> Counter {this.state.counter}</h2>
                <input type="button" value="Click to Update" onClick={this.incrementCounter.bind(this)}/> 


            </div>
        )
    }

    ////bind means on increment changes the value into that
    componentDidMount()//after the first intitailise when this mount is called the value of the state gets changed in render
    {
        // setInterval(()=> //modifying state
        // {
        //     this.setState({
        //         counter:this.state.counter+1
        //     })
        // },1000)
    
        // this.setState({
        //     counter: this.state.counter+100
        // });
        
    
        setInterval(()=>
        {
            this.setState({
                currentTime:this.returnCurrentTime()
            })
        },1000)
    }




}