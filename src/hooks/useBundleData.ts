import { useQuery } from "react-query";
import { getBundleData } from "../services/bundle.service";

const BUNDLE_DATA_KEY = "BUNDLE_DATA_KEY";

export const useBundleData = () => {
  return useQuery(BUNDLE_DATA_KEY, () => getBundleData());
};
