import { ForwardedRef, forwardRef } from "react";
import styled from "styled-components";

const BundleItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3px;
  width: min-content;
`;

const BundleItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 1px;
  align-items: center;
  text-align: center;
`;

const BundleItemText = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: ${(props) => props.color};
`;

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
      <BundleItemsContainer ref={ref}>
        {products.products.map((product) => {
          return (
            <BundleItem key={product.id}>
              <img
                width={65}
                height={65}
                src={`/src/assets/${product.productImage}`}
                alt={product.name}
              />
              <BundleItemText color={product.productTextColor}>
                {product.amount}
              </BundleItemText>
            </BundleItem>
          );
        })}
      </BundleItemsContainer>
    );
  },
);
