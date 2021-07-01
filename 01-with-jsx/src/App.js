// import { div } from 'prelude-ls'
import React from 'react'
import Header from './components/Header'
import Button from './components/Button'
import './App.css'

// const Header = props => <h1>JSX Expression test</h1>
// const agree = true

// const App = props => (
//     <div>
//         <Header />
//         <Header></Header>
//         <h2>{1 + 3}</h2>
        
//     </div>
// )

// const App = props => {
//     if(agree) {
//         return <h1>Agree</h1>
//     } else {
//         return <h1>Not Agree</h1>
//     } 
// }

// const App = props => {
//     return agree ? <h1>Agree</h1> : <h1>Disagree</h1>
// }

const App = props => (
    <div className='App'>
        <Header />
        <Button />
    </div>
)

export default App