import React from "react";

import { Component, Wrapper, Subheader, Header, PlaceholderImage, Text, Item } from './Components';

const LeftSection = () => (
    <Component bg>
        <Wrapper row>
            <Item right>
                <Subheader>Amazing collaboration</Subheader>
                <Header>Connect to everyone you need</Header>
            </Item>
            <Item left ml>
                <PlaceholderImage />
                <Text>
                    You can work with everyone, anywhere. Just invite them using email and get things done.
                </Text>
            </Item>
        </Wrapper>
    </Component>
)

export default LeftSection;