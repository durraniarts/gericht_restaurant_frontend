import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer  ">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer_dataSection section__padding">
      <div className="app__footer_dataSection-content">
        {/* section 1 */}

        <div className="app__footer_dataSection-content_Section1">
          <h2 className="p__cormorant">Contact Us</h2>
          <p className="p__opensans  " style={{ marginBottom: "0.5rem" }}>
            9 W 53rd St, New York, NY 10019, USA
          </p>
          <p className="p__opensans">+1 212-555-1230</p>
          <p className="p__opensans">+1 212-344-1230 </p>
        </div>

        {/* section 2 */}

        <div className="app__footer_dataSection-content_Section2">
          <h2
            className="headtext__cormorant"
            style={{ textTransform: "uppercase" }}
          >
            Gerícht
          </h2>
          <div style={{ marginBottom: "1rem" }}>
            <p className="p__opensans " style={{ marginBottom: "0.5rem" }}>
              "The best way to find yourself is to lose yourself in the service
              of others.”
            </p>
            <img src={images.spoon} alt="spoon_img" />
          </div>
          <div className="app__footer_socialMedia-icons">
            <FiFacebook fontSize={30} color="#f5efdb" />
            <FiTwitter fontSize={30} color="#f5efdb" />
            <FiInstagram fontSize={30} color="#f5efdb" />
          </div>
        </div>

        {/* section 3 */}

        <div className="app__footer_dataSection-content_Section3">
          <h2 className="p__cormorant">Working Hours</h2>
          <p className="p__opensans">Monday-Friday: </p>
          <p className="p__opensans" style={{ marginBottom: "0.5rem" }}>
            08:00 am -12:00 am
          </p>
          <p className="p__opensans">Saturday-Sunday: </p>
          <p className="p__opensans">07:00am -11:00 pm</p>
        </div>
      </div>
      <p className="p__opensans app__footer-copyright">
        2021 Gerícht. All Rights reserved.
      </p>
    </div>
  </div>
);

export default Footer;
