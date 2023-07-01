import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faTerminal, faUniversity, faPenAlt, faBuilding, faRobot } from '@fortawesome/free-solid-svg-icons';

const Component = styled.div`
    color: #a0aec0;
`

const Text = styled.p`
    margin: 0 0 1rem 0;
    text-align: center;
    font-weight: 600;
`

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Item = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #d2d6dc;
    padding: 0.5rem;
    border-radius: 0.375rem;
    margin-bottom: 1rem;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

    &:not(:last-of-type) {
        margin-right: 1rem;
    }
`

const Type = styled.p`
    margin: 0 0 0 0.5rem;
    font-size: 0.85rem;

`

// regular people - users
// developer - terminal
// students - university
// writers - pen-alt
// corporations - building
// robots - robot

const Addition = () => (
    <Component>
        <Text>Used by</Text>
        <Wrapper>
            <Item>
                <FontAwesomeIcon icon={faUsers} />
                <Type>Regular people</Type>
            </Item>
            <Item>
                <FontAwesomeIcon icon={faTerminal} />
                <Type>Developers</Type>
            </Item>
            <Item>
                <FontAwesomeIcon icon={faUniversity} />
                <Type>Students</Type>
            </Item>
            <Item>
                <FontAwesomeIcon icon={faPenAlt} />
                <Type>Writers</Type>
            </Item>
            <Item>
                <FontAwesomeIcon icon={faBuilding} />
                <Type>Corporations</Type>
            </Item>
            <Item>
                <FontAwesomeIcon icon={faRobot} />
                <Type>Robots</Type>
            </Item>
        </Wrapper>
    </Component>
)

export default Addition;