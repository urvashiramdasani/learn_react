import React from "react";

import styled from 'styled-components'

// import { createUseStyles } from "react-jss";

// import FirstButton from './FirstButton'
// import SecondButton from './SecondButton'

// import './App.scss'

// --> Normal CSS
// import './App.css'

// const App = () => <div className="App">
//     <h1 className="Header">Very important header</h1>
//     <p className="Paragraph">Really serious paragraph without any lorem text</p>
//     <button className="Button">Useful button (nope)</button>
// </div>

// --> Inline CSS
// const styles = {
//     app: {
//         backgroundColor: '#512DA8',
//         padding: '1rem',
//         color: '#fff'
//     },
//     header: {
//         fontFamily: 'monospace',
//         margin: 0,
//         fontSize: '1.75rem'
//     }
// }

// const App = () => <div style={styles.app}>
//     <h1 style={styles.header}>Very important header</h1>
//     <p
//         style={
//             {
//                 fontFamily: 'sans-serif',
//                 fontSize: '1rem',
//             }
//         }
//     >Really serious paragraph without any lorem text</p>
//     <button
//         style={
//             {
//                 border: '2px solid #fff',
//                 backgroundColor: '#03A9F4',
//                 color: '#fff',
//                 textTransform: 'uppercase'
//             }
//         }
//     >Useful button (nope)</button>
// </div>

// SCSS Module
// const App = () => <div className="App">
//     <h1 className="Header">Very important header</h1>
//     <p className="Paragraph">Really serious paragraph without any lorem text</p>
//     <button className="Button">Useful button (nope)</button>
// </div>

// CSS Modules
// const App = () => <div>
//     <FirstButton />
//     <SecondButton />
// </div>

// CSS in JS (JSS)

// const useStyles = createUseStyles({
//     app: {
//         backgroundColor: '#f4f6f4',
//         color: '#414141',
//         padding: '0.5rem 1rem',
//         display: 'flex',
//         alignItems: 'center',
//         flexDirection: 'column'
//     },
//     header: {
//         margin: '0 0 0.5rem 0',
//         textAlign: 'center'
//     },
//     paragraph: {
//         margin: '0 0 0.5rem 0',
//         textAlign: 'center',
//         fontFamily: 'sans-serif'
//     },
//     button: {
//         backgroundColor: '#EBBF1C',
//         border: 'none',
//         padding: '0.25rem 1rem',
//         textTransform: 'uppercase',
//         color: '#575e58',
//         fontSize: '0.75rem',
//         fontFamily: 'monospace',
//         borderRadius: '0.375rem'
//     }
// })

// const App = () => {
//     const classes = useStyles()

//     return (
//         <div className={classes.app}>
//             <h1 className={classes.header}>Very important header</h1>
//             <p className={classes.paragraph}>Really serious paragraph without any lorem text</p>
//             <button className={classes.button}>Useful button (nope)</button>
//         </div>
//         )
// }

const Wrapper = styled.div`
    background-color: #f4f6f4;
    color: #414141;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const Header = styled.h1`
    margin: 0 0 0.5rem 0;
    text-align: center;
`

const Paragraph = styled.p`
    margin: 0 0 0.5rem 0;
    text-align: center;
    font-family: sans-serif;
`

const Button = styled.button`
    background-color: #EBBF1C;
    border: none;
    padding: 0.25rem 1rem;
    text-transform: uppercase;
    color: #575e58;
    font-size: 0.75rem;
    font-family: monospace;
    border-radius: 0.375rem;

    &:hover {
        cursor: pointer;
        filter: brightness(110%);
        font-weight: bold;
    }
`

const App = () => (
    <Wrapper>
        <Header>Very important header</Header>
        <Paragraph>Really serious paragraph without any lorem text</Paragraph>
        <Button>Useful button (nope)</Button>
    </Wrapper>
)


export default App