import React from "react";
import { images, data } from "../../constants";
import { SubHeading } from "../../components";
import "./Laurels.css";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="award_card_logo" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
        {title}
      </p>
      <p className="app__laurels_awards-card_content-subtitle">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => {
  return (
    <div className="app__bg app__wrapper section__padding" id="awards">
      <div className="app__laurel_section-logo">
        <img src={images.logo} alt="laurel_section_logo" />
      </div>
      <div className="app__wrapper_info ">
        <SubHeading title="Awards & Recognition" />
        <h1 className="headtext__cormorant"> Our Laurels</h1>
        <div className="app__laurels_awards">
          {data.awards.map((award) => (
            <AwardCard award={award} key={award.title} />
          ))}
        </div>
      </div>
      <div className="app__wrapper_img">
        <img src={images.laurels} alt="laurel_food_img" />
      </div>
    </div>
  );
};

export default Laurels;
