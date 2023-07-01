import React from "react";

import { Component, Wrapper, Subheader, Header, PlaceholderImage, Text, Item } from './Components';

const RightSection = () => (
    <Component>
        <Wrapper row>
            <Item right mr>
                <PlaceholderImage />
                <Text>
                    SuperHero To-Do list allows you to work with unique features not found in any other To-Do List. You'll really always be locked in to perform your tasks.
                </Text>
            </Item>
            <Item>
                <Subheader>Incredible Features</Subheader>
                <Header>Universal App to manage your tasks</Header>
            </Item>
        </Wrapper>
    </Component>
)

export default RightSection;