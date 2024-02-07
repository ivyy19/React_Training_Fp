import { Component } from "react";

export default class ArrowFunctionComponent extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            userName:"Ivy"
        }
        this.alertData=this.alertData.bind(this)//in the constructor we have the value of "this"


    }
    alertData(inputValue)
    {
        alert(this.state.userName+" "+inputValue);

    }
    render()
    {
        return(
            <div>
                <input type="button" onClick={this.alertData} value="Click alert"/>
            </div>
        )

    }
}
//var newfunction=this.alertdate.bind(this)