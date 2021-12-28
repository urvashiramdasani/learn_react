import React from "react"

const handleClick = () => {
    console.log(6);
}

const FunctionalButton = props => (
    <button onClick={() => props.onButtonClick('functional')}>functional, {props.times}</button>
)

export default FunctionalButton