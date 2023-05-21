import React, { Component } from "react";

import Header from './Header';
import Button from './Button';

class Counter extends Component {
    state = {
        count: 0
    }

    handleIncrease = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleDecrease = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return <div className="Counter">
            <Header count={ this.state.count } />
            <Button onClick={ this.handleIncrease }>Increase</Button>
            <Button onClick={ this.handleDecrease }>Decrease</Button>
        </div>
    }
}

export default Counter;