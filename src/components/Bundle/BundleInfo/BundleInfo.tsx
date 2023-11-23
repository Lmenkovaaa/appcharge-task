import { convertMsToTime } from "../../../utils/timeUtils";
import * as S from "./BundleInfo.styles";
import { BundleInfoProps } from "./BundleInfo.types";

export const BundleInfo = ({
  available,
  maxAvailable,
  price,
  timeLeftMs,
}: BundleInfoProps) => {
  const timer = convertMsToTime(timeLeftMs);

  return (
    <S.BundleInfoContainer>
      <S.BundleInfoItem>
        Available {available}/{maxAvailable}
      </S.BundleInfoItem>
      <S.BundleInfoItem>
        <S.BundleInfoButtonPrice>
          {price.currencySymbol + price.amount}
        </S.BundleInfoButtonPrice>
      </S.BundleInfoItem>
      <S.BundleInfoItem>{timer}</S.BundleInfoItem>
    </S.BundleInfoContainer>
  );
};
