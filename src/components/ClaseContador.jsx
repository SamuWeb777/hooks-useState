import React, { Component } from 'react'
import { useState } from 'react';

class ClaseContador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador : 0
        };
    }
    incrementar = () => {
        this.setState({contador: this.state.contador + 1})
    }
    decrementar = ()  => {
        this.setState({contador: this.state.contador - 1})
    }
render () {
    return  (
        <div >
            <h2>clase contador</h2>
            <div>{this.state.contador}</div>
            <button onClick={this.decrementar}>-</button>
            <button onClick={this.incrementar}>+</button>
        </div>
    )

}

}

export default ClaseContador