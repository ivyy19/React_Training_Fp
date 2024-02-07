import React from "react";

export default function FirstComponent() {
    return React.createElement("div", {}, [
        React.createElement("div", {}, 
            React.createElement("h1", {}, "This is The Main Content...")
        ), React.createElement("div", {}, 
            React.createElement("p", {}, React.createElement("h2", {}, "This is some other content"))
        )
    ])
}

export function FirstEquivalent()
{
    return (
        <div>
            <div>
            <h1> Main content</h1>
            </div>

            <div>
                <p>
                    <h2> Welcome</h2>
                </p>
            </div>

        </div>
    )
}