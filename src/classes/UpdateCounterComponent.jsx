import React from 'react';

export default class UpdateCounterComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 1
        }
    }
    

    //THIS SHOWS THE PROPERTY WHERE ALL THE SET STATE AR EXECUTED AND THEN LAST VALUE IS DISPLAYED

    // updateCounter = () => {//setstate are synchronous- wait for stable output
    //     this.setState({
    //         counter: this.state.counter + 1
    //     })
        
    //     this.setState({
    //         counter: this.state.counter + 2
    //     })
        
    //     this.setState({
    //         counter: this.state.counter + 3
    //     })
        
    //     this.setState({
    //         counter: this.state.counter + 4
    //     })//only the last set state works- coz of the concept of 2 virtual dom and real dom
    // }       //after all the set state are executed then the value left after all changes will be shown

    //CALL BACK FUNCTION

    updateCounter = () => {
        
       
        this.setState({
            counter: this.state.counter + 1
        }, () => {
            this.setState({
                counter: this.state.counter + 2
            }, () => {
                this.setState({
                    counter: this.state.counter + 3
                }, () => {
                    this.setState({
                        counter: this.state.counter + 4
                    })
                })
            })
        });
    }


    render() {
        return (
            <div>
                <h1>The Counter Value is: {this.state.counter}</h1>
                <input type="button" value="Update Counter" onClick={this.updateCounter} />
            </div>
        )
    }
}