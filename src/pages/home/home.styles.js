import styled from "styled-components";

export const HomePageContainer = styled.div.attrs((props) => ({
  className: "full-view",
}))`
  background: rgb(62, 62, 255);
  background: linear-gradient(
    158deg,
    rgba(62, 62, 255, 1) 0%,
    rgba(45, 217, 157, 1) 74%,
    rgba(0, 212, 255, 1) 100%
  );
`;

export const ReshawkBigText = styled.h1`
  font-family: "Dancing Script", cursive;
  font-size: 72px;
  color: white;
  text-align: center;
`;

export const HomePageSubtext = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 24px;
  text-align: center;
  color: white;
`;

export const HomePageTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
