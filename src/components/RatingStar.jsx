import React from "react";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";

const RatingStar = ({ value, classNameVal }) => {
  const calculateRate = (val) => {
    const result = ((val - 1) / 9) * 5;
    return result;
  };

  return (
    <Rating
      initialRating={calculateRate(value)}
      readonly={true}
      fullSymbol={<FaStar />}
      emptySymbol={<FaStar color="gray" />}
      className={classNameVal}
    />
  );
};

export default RatingStar;
