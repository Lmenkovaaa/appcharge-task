import styled from "styled-components";

export const BundleInfoContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  padding: 5px;
`;

export const BundleInfoItem = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  font-size: 1rem;
  font-weight: 700;
  align-items: center;
  box-sizing: border-box;
  color: white;
`;

export const BundleInfoButtonPrice = styled.button`
  background-color: #4caf50;
  color: #003806;
  width: 100%;
  max-width: 13rem;
  padding: 0.4rem 2.5rem;
  border-radius: 8px;
  box-shadow: 0 2px #347a0e;
  font-size: 1rem;
  font-weight: bold;
  border: #003806;
  transform: translate(0, -25px);
`;
