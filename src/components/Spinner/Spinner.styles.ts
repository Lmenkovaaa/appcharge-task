import styled, { keyframes } from "styled-components";

export const spin = keyframes`
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
`;

export const StyledSpinner = styled.div`
  border: 5px solid rgba(128, 128, 128, 0.5);
  border-top: 5px solid rgba(255, 192, 203, 0.5);
  border-radius: 50%;
  width: 50px;
  height: 50px;

  animation: ${spin} 3s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
