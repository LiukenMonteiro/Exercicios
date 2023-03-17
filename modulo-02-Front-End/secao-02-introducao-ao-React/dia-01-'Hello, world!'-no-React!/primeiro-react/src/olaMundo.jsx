import React, { Component } from "react";

class OlaMun extends Component {
    render () {
        return (
            <>
        <span>Casaram?</span>
       <h1>Hello, {this.props.name}</h1>
       </>
        )
    }
}

export default OlaMun;