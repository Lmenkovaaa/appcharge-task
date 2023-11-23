import styled from "styled-components";
import { convertMsToTime } from "../../utils/timeUtils";

const BundleInfoContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  padding: 5px;
`;

const BundleInfoItem = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  font-size: 1rem;
  font-weight: 700;
  align-items: center;
  box-sizing: border-box;
  color: white;
`;

const BundleInfoButtonPrice = styled.button`
  background-color: #4caf50;
  color: #003806;
  width: 100%;
  max-width: 13rem;
  padding: 0.4rem 2.5rem;
  border-radius: 8px;
  box-shadow: 0 2px #347a0e;
  font-size: 1rem;
  font-weight: bold;
  border: #003806;
  transform: translate(0, -25px);
`;

type BundleInfoProps = {
  timeLeftMs: number;
  available: number;
  maxAvailable: number;
  price: {
    currencySymbol: string;
    amount: number;
  };
};

export const BundleInfo = ({
  available,
  maxAvailable,
  price,
  timeLeftMs,
}: BundleInfoProps) => {
  const timer = convertMsToTime(timeLeftMs);

  return (
    <BundleInfoContainer>
      <BundleInfoItem>
        Available {available}/{maxAvailable}
      </BundleInfoItem>
      <BundleInfoItem>
        <BundleInfoButtonPrice>
          {price.currencySymbol + price.amount}
        </BundleInfoButtonPrice>
      </BundleInfoItem>
      <BundleInfoItem>{timer}</BundleInfoItem>
    </BundleInfoContainer>
  );
};
