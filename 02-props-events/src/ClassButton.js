import React, {Component} from "react"

class ClassButton extends Component {
    // state = {
    //     times: 1
    // }

    // handleClick = () => {
    //     console.log("Clicked hjhsb")

    //     this.setState({times: this.state.times + 1})
    // }
    // const {onButtonClick, times} = this.props -> then replace this.props.onButtonClick with onButtonClick. 
    // Similarly for times
    render () {
        return <button onClick={() => this.props.onButtonClick('class')}>class, {this.props.times}</button>
    }
}

export default ClassButton;