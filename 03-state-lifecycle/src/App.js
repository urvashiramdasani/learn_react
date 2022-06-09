import React from "react"

class App extends React.Component {
    state = { // Adding a state
        count: 0
    }

    render() {
        return (
            <div className="App">
                <h1>Current count: {this.state.count}</h1>
                <button>Increment</button>
                <button>Decrement</button>
            </div>
        )
    }
}

export default App