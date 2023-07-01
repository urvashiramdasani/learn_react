import React from 'react';
import styled from 'styled-components';

const Component = styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem;
`

const Wrapper = styled.div`
    display: flex;
`

const Button = styled.button`
    background-color: transparent;
    border: 0;
    padding: 0.5rem 1.25rem;
    border-radius: 0.375rem;
    font-size: 0.85rem;
    transition: background-color 0.25s ease-in;

    &:not(:last-of-type) {
        margin-right: 1rem;
    }

    &:hover {
        cursor: pointer;
        background-color: #EDF2F7;
    }
`

const Header = () => (
    <Component>
        <Wrapper>
            <Button>Features</Button>
            <Button>Prices</Button>
            <Button>Blog</Button>
        </Wrapper>
    </Component>
)

export default Header;