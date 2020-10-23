import styled from "styled-components";

export const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

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

export const LoginContainer = styled.div`
  min-height: 200px;
  width: 40vh;
  background-color: white;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
