import styled from "styled-components";

export const NFPageContainer = styled.div`
  background: rgb(62, 62, 255);
  background: linear-gradient(
    158deg,
    rgba(62, 62, 255, 1) 0%,
    rgba(45, 217, 157, 1) 74%,
    rgba(0, 212, 255, 1) 100%
  );
`;

export const NFTextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const NFBigText = styled.h1`
  font-family: "Open Sans", sans-serif;
  color: white;
  text-align: center;
`;

export const NFSubtext = styled.h4`
  font-family: "Open Sans", sans-serif;
  color: white;
  text-align: center;
`;
