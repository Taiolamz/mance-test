import React from "react";
import OnboardImg from "../../../assets/OnboardImg.svg";
import Section from "../section";

const SlideImage = () => {
  return (
    <div className="onboard-img">
        <Section />
      <img src={OnboardImg} alt="onboard_img" />
    </div>
  );
};

export default SlideImage;
