import React from "react";
import styled from 'styled-components';

import Card from './Card';

const Wrapper = styled.div`
    /* mobile */
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;
    justify-items: center;
    max-width: 1000px;
    margin: 0 auto;

    /* tablet */
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }

    /* desktop */
    @media (min-width: 1024px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`

const Cards = ({ data }) => (
    <Wrapper>
        {data.map(person => (
            <Card key={person.name} name={person.name} role={person.role} avatar={person.avatar} />
        ))}
    </Wrapper>
)

export default Cards;