import React from "react";
import WhoWeAre from "./aboutComp/whoWeAre";
import WhyUs from "./aboutComp/whyUs";
import '../css/AboutUs.css';

export default function About() {
  return (
    <div className="about-us-section">
      <WhoWeAre />
      <WhyUs />
    </div>
  );
}
