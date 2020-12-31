import React from "react";
import img1 from "../src/images/img1.jpg";
import Common from "./Common";
const Home = () => {
  return (
    <>
      <Common
        greet="Hey"
        name="I am "
        fname="Keerti"
        para="Learner, Sincere, Patient."
        imgsrc={img1}
        visit1="/about"
        visit2="https://drive.google.com/file/d/1OZiURRpPWDxyZ18JCd3nkXaHcCCUvwG4/view?usp=sharing"
        btname1="Hire Me"
        btname2="Get CV"
      />
    </>
  );
};

export default Home;
