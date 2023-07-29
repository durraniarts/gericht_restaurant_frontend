import React from "react";
import SubHeading from "../SubHeading/SubHeading";

import "./Newsletter.css";

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="newsletter__headtext">Subscribe To Our Newsletter</h1>
      <p className="p__opensans">And never miss latest Updates</p>
    </div>
    <form className="app__newsletter-inputSection">
      <input
        type="email"
        placeholder="Enter Email"
        className="p__cormorant"
        required
      ></input>
      <button type="submit" className="custom__button">
        Subscribe
      </button>
    </form>
  </div>
);

export default Newsletter;
