import { useRef, useState } from "react";
import styled from "styled-components";
import { BundleItems } from "../BundleItems/BundleItems";
import { BundleInfo } from "../BundleInfo/BundleInfo";

const BundleContainer = styled.div`
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

const BundleCover = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  background: url("/src/assets/cover.png") no-repeat center center;
  background-size: cover;
  border-radius: 10px;
  height: 130px;
`;

const BundleItemsWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const BundleItemsContainer = styled.div`
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

const ButtonScroll = styled.button`
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

const ButtonScrollLeft = styled(ButtonScroll)`
  left: 0;
`;

const ButtonScrollRight = styled(ButtonScroll)`
  right: 0;
`;

const BundleSpacer = styled.div`
  flex-grow: 1;
`;

type BundleProps = {
  timeLeftMs: number;
  maxAvailable: number;
  available: number;
  price: { amount: number; currencySymbol: string };
  products: {
    id: number;
    name: string;
    productImage: string;
    amount: string;
    productTextColor: string;
  }[];
};

export const Bundle = ({
  timeLeftMs,
  maxAvailable,
  available,
  price,
  products,
}: BundleProps) => {
  const [showButtons, setShowButtons] = useState(false);
  const bundleRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const { current } = bundleRef;
    if (current) {
      const scrollAmount =
        direction === "left" ? 0 : itemsRef.current?.offsetWidth;
      current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <BundleContainer>
      <BundleCover
        onMouseEnter={() => {
          if (products.length > 5) setShowButtons(true);
        }}
        onMouseLeave={() => setShowButtons(false)}
      >
        {showButtons && (
          <>
            <ButtonScrollRight onClick={() => scroll("right")}>
              ▶
            </ButtonScrollRight>
            <ButtonScrollLeft onClick={() => scroll("left")}>
              ◀
            </ButtonScrollLeft>
          </>
        )}
        <BundleItemsContainer ref={bundleRef}>
          <BundleSpacer />
          <BundleItemsWrapper>
            <BundleItems ref={itemsRef} products={products} />
          </BundleItemsWrapper>
          <BundleSpacer />
        </BundleItemsContainer>
      </BundleCover>

      <BundleInfo
        available={available}
        maxAvailable={maxAvailable}
        price={price}
        timeLeftMs={timeLeftMs}
      />
    </BundleContainer>
  );
};
