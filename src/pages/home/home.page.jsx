import React from "react";
import {
  HomePageContainer,
  HomePageSubtext,
  HomePageTextContainer,
  ReshawkBigText,
} from "./home.styles";

export default function HomePage() {
  return (
    <HomePageContainer>
      <HomePageTextContainer>
        <ReshawkBigText>ResHawk</ReshawkBigText>
        <HomePageSubtext>Made for university students.</HomePageSubtext>
      </HomePageTextContainer>
    </HomePageContainer>
  );
}
