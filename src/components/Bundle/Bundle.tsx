import { useRef, useState } from "react";
import { BundleItems } from "./BundleItems/BundleItems";
import { BundleInfo } from "./BundleInfo/BundleInfo";
import * as S from "./Bundle.styles";
import { BundleProps } from "./Bundle.types";

const MIN_INTEMS_FOR_SCROLL_DISPLAY = 5;

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

  const shouldShowScrollButtons =
    products.length > MIN_INTEMS_FOR_SCROLL_DISPLAY;

  const scroll = (direction: "left" | "right") => {
    const { current } = bundleRef;
    if (current) {
      const scrollAmount =
        direction === "left" ? 0 : itemsRef.current?.offsetWidth;
      current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <S.BundleContainer>
      <S.BundleCover
        onMouseEnter={() => shouldShowScrollButtons && setShowButtons(true)}
        onMouseLeave={() => setShowButtons(false)}
      >
        {showButtons && (
          <>
            <S.ButtonScrollRight onClick={() => scroll("right")}>
              ▶
            </S.ButtonScrollRight>
            <S.ButtonScrollLeft onClick={() => scroll("left")}>
              ◀
            </S.ButtonScrollLeft>
          </>
        )}
        <S.BundleItemsContainer ref={bundleRef}>
          <S.BundleSpacer />
          <S.BundleItemsWrapper>
            <BundleItems ref={itemsRef} products={products} />
          </S.BundleItemsWrapper>
          <S.BundleSpacer />
        </S.BundleItemsContainer>
      </S.BundleCover>

      <BundleInfo
        available={available}
        maxAvailable={maxAvailable}
        price={price}
        timeLeftMs={timeLeftMs}
      />
    </S.BundleContainer>
  );
};
