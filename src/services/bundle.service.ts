import { BUDNLES } from "./bundle.data";

export function getBundleData() {
  return new Promise<typeof BUDNLES>((resolve) => {
    setTimeout(() => {
      resolve(BUDNLES);
    }, Math.random() * 1000); //неважно
  });
}

//паддинги на мобилке ++
//CSS модули ++
