import { ForwardedRef } from "react";

export type Product = {
  id: number;
  name: string;
  productImage: string;
  amount: string;
  productTextColor: string;
};

export type BundleItemsProps = {
  products: Product[];
  ref: ForwardedRef<HTMLDivElement>;
};
