import React from 'react';
import { HomePageContainer, HomePageSubtext, ReshawkBigText } from './home.styles';

export default function HomePage() {
    return <HomePageContainer>
        <ReshawkBigText>ResHawk</ReshawkBigText>
        <HomePageSubtext>Made for university students.</HomePageSubtext>
    </HomePageContainer>
}