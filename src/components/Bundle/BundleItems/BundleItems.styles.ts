import styled from "styled-components";

export const BundleItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3px;
  width: min-content;
`;

export const BundleItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 1px;
  align-items: center;
  text-align: center;
`;

export const BundleItemText = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: ${(props) => props.color};
`;
