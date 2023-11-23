import { BUDNLES } from "./bundle.data";

// const schema = z.object({
//   bundles: z.array(
//     z.object({
//       bgImage: z.string(),
//       timeLeftMs: z.number(),
//       maxAvailable: z.number(),
//       price: z.object({
//         amount: z.number(),
//         currencySymbol: z.string(),
//       }),
//       products: z.array(
//         z.object({
//           productImage: z.string(),
//           amount: z.string(),
//           productTextColor: z.string(),
//         }),
//       ),
//     }),
//   ),
// });

export function getBundleData() {
  return new Promise<typeof BUDNLES>((resolve) => {
    setTimeout(() => {
      resolve(BUDNLES);
    }, Math.random() * 1000); //неважно
  });
}

//паддинги на мобилке
//CSS модули
//

// class BundleService {
//   async getData() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(BUDNLES);
//       }, 1000);
//     });
//   }
// }

// export const bundleService = new BundleService();
