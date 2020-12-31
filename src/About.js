import React from "react";
import Common from "./Common";
import img2 from "../src/images/img2.png";

const About = () => {
  return (
    <>
      <Common
        name="Let me Introduce Myself. "
        para="I am a Computer Engineer. I would like to describle a person like me who is hardworking, passionate about work and a person who loves learning."
        imgsrc={img2}
        visit1="/project"
        visit2="/contact"
        btname1="Projects"
        btname2="Contact"
      />
    </>
  );
};

export default About;
