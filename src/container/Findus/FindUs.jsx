import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./findUs.css";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contacts">
    <div className="app__wrapper-info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <p
          className="p__opensans"
          style={{ color: "var(--color-grey)", marginBottom: "1rem" }}
        >
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
        </p>
        <p className="p__cormorant" style={{ color: "var(--color-golden)" }}>
          Opening Hours
        </p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
        <button
          type="button"
          className="custom__button"
          style={{ marginTop: "2rem" }}
        >
          Visit Us
        </button>
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="findUs_img" />
    </div>
  </div>
);

export default FindUs;
