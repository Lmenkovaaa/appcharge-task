import styled from "styled-components";

export const BundleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-bottom: 50px;
  box-sizing: border-box;
  max-width: 400px;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px #7d4f00;
  font-family: "Roboto", sans-serif;
  background: repeating-linear-gradient(to left bottom, #c36d1e, #fef295);
`;

export const BundleCover = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  background: url("/src/assets/cover.png") no-repeat center center;
  background-size: cover;
  border-radius: 10px;
  height: 130px;
`;

export const BundleItemsWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const BundleItemsContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  overflow-x: auto;
  scrollbar-width: none;
  display: flex;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ButtonScroll = styled.button`
  position: absolute;
  height: 100%;
  top: 0;
  z-index: 3;
  background: transparent;
  font-size: 2rem;
  color: white;
  opacity: 0.6;
  border: 0;
  cursor: pointer;
`;

export const ButtonScrollLeft = styled(ButtonScroll)`
  left: 0;
`;

export const ButtonScrollRight = styled(ButtonScroll)`
  right: 0;
`;

export const BundleSpacer = styled.div`
  flex-grow: 1;
`;
