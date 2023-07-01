import React from "react";
import styled from 'styled-components';

const Component = styled.div`
    background-color: #1a202c;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
`

const Wrapper = styled.div`
    width: 100%;
    max-width: 800px;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 2fr 1fr;
`

const Header = styled.h3`
    margin: 0;
`

const SmallText = styled.p`
    margin: 0;
`

const Row = styled.div`
    display: flex;
    flex-direction: column;
`

const Link = styled.a`
    color: #fff;
    text-decoration: none;
    font-size: 0.85rem;

    &:not(:last-of-type) {
        margin-bottom: 0.5rem;
    }
`

const Footer = () => (
    <Component>
        <Wrapper>
            <Header>SuperHero Inc. is a company that makes people productive</Header>
            <Row>
                <Link href='#'>About</Link>
                <Link href='#'>Our vision</Link>
                <Link href='#'>Products</Link>
                <Link href='#'>Contact Us</Link>
            </Row>
            <Row>
                <Link href='#'>GitHub</Link>
                <Link href='#'>Facebook</Link>
                <Link href='#'>LinkedIn</Link>
            </Row>
            <SmallText>(C) SuperHero Inc.</SmallText>
            <Link href='#'>Legal Information</Link>
            <Link href='#'>Cookie Policy</Link>
        </Wrapper>
    </Component>
)

export default Footer;