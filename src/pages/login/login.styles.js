import styled, { css } from "styled-components";

import Container from "react-bootstrap/Container";

const fullPage = css`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
`;
export const LoginPageContainer = styled.div.attrs((props) => ({
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

export const LoginContainer = styled(Container)`
  position: absolute;
  max-height: 500px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 0;
  max-width: 800px;

  @media screen and (max-height: 768px) {
    margin-top: 25px;
  }
`;

export const LoginLeftSideContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  height: 500px;
  border-radius: 8px 0 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginRightSideContainer = styled.div`
  height: 500px;
  background-color: white;
  border-radius: 0 8px 8px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    border-radius: 8px;
    margin: 0px 15px;
  }

  #loading-spinner {
    color: rgb(80, 80, 255);
  }

  #submit-button {
    margin-left: 5px;
  }

  #invite-code-input {
    margin-right: 5px;
  }
`;

export const LeftSideHeader = styled.h1`
  font-family: "Dancing Script", cursive;
  text-align: center;
`;

export const RightSideHeader = styled.h3`
  font-family: "Open Sans", sans-serif;
  text-align: center;
  padding: 15px 5px; ;
`;

export const TopHeaderContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  height: 50px;
`;

export const TopHeader = styled.h1`
  font-family: "Dancing Script", cursive;
  text-align: center;
`;
