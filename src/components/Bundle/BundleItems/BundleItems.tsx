import { forwardRef } from "react";
import * as S from "./BundleItems.styles";
import { BundleItemsProps } from "./BundleItems.types";

export const BundleItems = forwardRef<HTMLDivElement, BundleItemsProps>(
  ({ products }, ref) => {
    return (
      <S.BundleItemsContainer ref={ref}>
        {products.map((product) => {
          return (
            <S.BundleItem key={product.id}>
              <img
                width={65}
                height={65}
                src={`/src/assets/${product.productImage}`}
                alt={product.name}
              />
              <S.BundleItemText color={product.productTextColor}>
                {product.amount}
              </S.BundleItemText>
            </S.BundleItem>
          );
        })}
      </S.BundleItemsContainer>
    );
  },
);
