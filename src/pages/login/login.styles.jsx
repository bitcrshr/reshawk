import styled from "styled-components";

export const PageContainer = styled.div.attrs((props) => ({
  className: "w3-display-container",
}))`
  height: 100vh;

  background: #b993d6; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #8ca6db,
    #b993d6
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #8ca6db,
    #b993d6
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export const LoginContainer = styled.div.attrs((props) => ({
  className: "w3-display-container w3-display-middle w3-mobile w3-round",
}))`
  min-height: 200px;
  min-width: 400px;
  background-color: white;
`;
