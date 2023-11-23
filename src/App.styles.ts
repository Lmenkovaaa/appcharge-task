import styled from "styled-components";

const mobileBreakpoint = "756px";

export const AppContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  background: url("/src/assets/main-cover.svg") no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
  padding-top: 100px;
  padding-bottom: 100px;

  @media (max-width: ${mobileBreakpoint}) {
    padding-right: 10px;
    padding-left: 10px;
  }
`;
