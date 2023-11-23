export type BundleProps = {
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
