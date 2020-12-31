import React from "react";
import p1 from "../src/images/p1.jpg";
import p2 from "../src/images/p2.jpg";
import p3 from "../src/images/p3.jpg";
import p4 from "../src/images/p4.jpg";
import p5 from "../src/images/p5.jpg";
import p6 from "../src/images/p6.jpg";
import Card from "./Card";
const Project = () => {
  return (
    <>
      <div className="container  ">
        <div className="row justify-content-center my-5">
          <h1 className="text-center">My Projects</h1>
          <Card
            imgsrc={p1}
            title="Netflix Clone Using React "
            content="This is the responsive Netflix Clone. Movies are fetched using netflix API and Youtube API is also used ."
            link="https://netflix-clone-df22c.web.app/"
          />
          <Card
            imgsrc={p3}
            title="Recipedia"
            content="This is used to search Recipes and  it also shows the nutrients of that recipe. "
            link="https://enigmatic-retreat-81195.herokuapp.com/ "
          />
          <Card
            imgsrc={p2}
            title="Amazone Clone "
            content="This is made using React and Login authentication is done using Firebase  "
            link="https://e-clone-7c20c.web.app "
          />
          <Card
            imgsrc={p4}
            title="Google Keep Notes"
            content="This application is like Google keep app which is used to store notes. "
            link="https://kkharayat.github.io/keepnotes/ "
          />
          <Card
            imgsrc={p5}
            title=" Quiz"
            content="This is a demo quiz made using JavaScript "
            link=" https://kkharayat.github.io/quiz/"
          />
          <Card
            imgsrc={p6}
            title="Bootstrap"
            content=" This website is made using Boostrap "
            link=" https://kkharayat.github.io/techbootStrap/"
          />
        </div>
      </div>
    </>
  );
};

export default Project;
