import React from "react"
import reactDom from "react-dom"

import App from './App'

reactDom.render(<App/>, document.getElementById('root'))

// Props are short for properties. Just an object. We use props to transfer data.
// State is also an object. It allows to create and manage data
// Adding a state, accessing a state, updating a state