import styled from 'styled-components';
import React from 'react';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

export const DashboardContainer = styled.div.attrs(props => ({
    className: "full-view"
}))`
    background: rgb(62,62,255);
    background: linear-gradient(158deg, rgba(62,62,255,1) 0%, rgba(45,217,157,1) 74%, rgba(0,212,255,1) 100%);
`;

export const SidebarContainer = styled.div`
    height: 100%;
    width: 300px;
    background-color: rgba(255, 255, 255, 0.7);
`;

export const ContentContainer = styled.div.attrs(props => ({
    className: "full-view"
}))`
    margin-left: 300px;

    .db-leftcard-1 {
        height: 300px;
        margin: 15px 7.5px 7.5px 15px;
    }

    .db-leftcard-2 {
        height : 300px;
        margin: 7.5px 7.5px 7.5px 15px;
    }

    .db-rightcard {
        height: 615px;
        margin: 15px 15px 7.5px 7.5px;
    }

    .db-bottomcard {
        margin: 7.5px 15px 15px 15px;
    }
    
    
`;

export const SidebarBrand = styled.h1`
    font-family: "Dancing Script", cursive;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 15px;
`;

const SidebarItemContainer = styled.div`
    height: 40px;
    width: 300px;

    background-color: ${({ active }) => active ? "white" : "transparent"};
    
    cursor: pointer;
`;

const SidebarItemText = styled.p`
    font-family: "Open Sans", sans-serif;
    font-size: 18px;
    padding-left: 10px;
    padding-top: 5px;
`;

export const SidebarItem = ({ children, active }) => {
    return (
        <SidebarItemContainer active={active}>
            <SidebarItemText>{children}</SidebarItemText>
        </SidebarItemContainer>
    )
}
