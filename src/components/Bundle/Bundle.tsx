import { useRef, useState } from "react";
import "./Bundle.css";
import { BundleItems } from "../BundleItems/BundleItems";
import { BundleInfo } from "../BundleInfo/BundleInfo";

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
    <div className="bundle">
      <div
        className="bundle__cover"
        onMouseEnter={() => {
          if (products.length > 5) setShowButtons(true);
        }}
        onMouseLeave={() => setShowButtons(false)}
      >
        {showButtons && (
          <>
            <button
              className="bundle__button-scroll  bundle__button-scroll-right"
              onClick={() => scroll("right")}
            >
              ▶
            </button>
            <button
              className="bundle__button-scroll  bundle__button-scroll-left"
              onClick={() => scroll("left")}
            >
              ◀
            </button>
          </>
        )}
        <div className="bundle__items-container" ref={bundleRef}>
          <div className="bundle__spacer" />
          <div className="bundle__items-wrapper">
            <BundleItems ref={itemsRef} products={products} />
          </div>
          <div className="bundle__spacer" />
        </div>
      </div>

      <BundleInfo
        available={available}
        maxAvailable={maxAvailable}
        price={price}
        timeLeftMs={timeLeftMs}
      />
    </div>
  );
};
