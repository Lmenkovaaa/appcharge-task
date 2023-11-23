export type BundleInfoProps = {
  timeLeftMs: number;
  available: number;
  maxAvailable: number;
  price: {
    currencySymbol: string;
    amount: number;
  };
};
