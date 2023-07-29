import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";

import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_img" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's World" />

      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <i className="p__opensans">
            <img src={images.quote} alt="quote_img" />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor
            sit.auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
            sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
            molestie lectus eu. Congue iaculis integer curabitur semper sit
            nunc.
          </i>
        </div>
      </div>
      <div className="app__chef-sign">
        <h3>Kevin Luo</h3>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="signature_img" />
      </div>
    </div>
  </div>
);

export default Chef;
