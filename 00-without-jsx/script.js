const Human = props => {
    return React.createElement('div', {}, [
        React.createElement('h1', { key: 1 }, `Name: ${props.name}`),
        React.createElement('h2', { key: 2 }, `Age: ${props.age}`),
        React.createElement('h3', { key: 3 }, `Eye Color: ${props.eyesColor}`),
    ])
}

const children = [
    React.createElement('h1', {}, 'React is awesome!'),
    React.createElement('h3', {}, 'It really is'),
]

const App = () => {
    return React.createElement(
        'div', // component
        {}, // props
        [
            React.createElement(Human, {name: 'Govard', age: 29, eyesColor: 'blue', key: 'Govard'}),
            React.createElement(Human, {name: 'Anastasia', age: 25, eyesColor: 'blue', key: 'Anastasia'}),
            React.createElement(Human, {name: 'Nick', age: 35, eyesColor: 'black', key: 'Nick'}),
        ] // children
    )
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))