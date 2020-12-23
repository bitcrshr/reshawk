import styled from 'styled-components';

export const HomePageContainer = styled.div.attrs(props => ({
    className: 'full-view',
}))`
    
`;

export const ReshawkBigText = styled.h1`
    font-family: "Dancing Script", cursive;
    font-size: 72px;
    color: white;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const HomePageSubtext = styled.p`
    font-family: "Open Sans", sans-serif;
    font-size: 24px;
    color: white;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%)
`;
