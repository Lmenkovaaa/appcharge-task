import { convertMsToTime } from "../../utils/timeUtils";
import "./BundleInfo.css";

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
    <div className="bundle__info">
      <div className="bundle__info_item bundle__info-text">
        Available {available}/{maxAvailable}
      </div>
      <div className="bundle__info-item">
        <button className="bundle__info-button-price">
          {price.currencySymbol + price.amount}
        </button>
      </div>
      <div className="bundle__info-item bundle__info-text">{timer}</div>
    </div>
  );
};
