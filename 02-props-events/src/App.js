import React from "react"

import FunctionalButton from "./FunctionalButton"
import ClassButton from "./ClassButton"
import './App.css'

// const App = props => (
//     <div>Inside App
//         <div><FunctionalButton text="Test"/></div>
//         <div><ClassButton text="Test me"/></div>
//     </div>
// )

// const App = props => {
//     return (
//         <div>Inside App</div>
//     )
// }

// const App = props => <div>Inside App</div>

// function App (props) {
//     return (
//         <div>Inside App</div>
//     )
// }

class App extends React.Component {
    state = {
        times: 0
    }

    handleClick = (buttonName) => {
        console.log("Clicked hjhsb, button: ", buttonName)

        this.setState({times: this.state.times + 1})
    }

    render() {
        return (
            <div className="App">
                <FunctionalButton
                    times = {this.state.times}
                    onButtonClick = {this.handleClick}
                />
                <ClassButton
                    times = {this.state.times}
                    onButtonClick = {this.handleClick}
                />
            </div>
        )
    }
}
export default App