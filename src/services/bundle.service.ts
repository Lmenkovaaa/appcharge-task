import { BUNDLES } from "./bundle.data";

export function getBundleData() {
  const delay = Math.random() * 5000;

  return new Promise<typeof BUNDLES>((resolve) => {
    setTimeout(() => {
      resolve(BUNDLES);
    }, delay);
  });
}
