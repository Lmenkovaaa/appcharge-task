import { ForwardedRef, forwardRef } from "react";
import "./BundleItems.css";

type Product = {
  id: number;
  name: string;
  productImage: string;
  amount: string;
  productTextColor: string;
};

type BundleItemsProps = {
  products: Product[];
  ref: ForwardedRef<HTMLDivElement>;
};

export const BundleItems = forwardRef(
  (products: BundleItemsProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div ref={ref} className="bundle__items">
        {products.products.map((product) => {
          return (
            <div className="bundle__item" key={product.id}>
              <img
                width={65}
                height={65}
                src={`/src/assets/${product.productImage}`}
                alt={product.name}
              />
              <span style={{ color: product.productTextColor }}>
                {product.amount}
              </span>
            </div>
          );
        })}
      </div>
    );
  },
);
