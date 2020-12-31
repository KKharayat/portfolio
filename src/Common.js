import React from "react";
import { NavLink } from "react-router-dom";
const Common = (props) => {
  return (
    <>
      <div
        id="header"
        className="container-sm row align-items-center mx-lg-5 mx-md-5"
      >
        <div className="col-md-6 px-5 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">
          <h3>{props.greet}</h3>
          <h1>
            <strong>
              {props.name}
              <span className="brand-name">{props.fname}</span>
            </strong>
          </h1>
          <h2 className="my-3">{props.para}</h2>
          <div className="mt-3 btns">
            <NavLink to={props.visit1} className=" btn-get-started hire  mb-3">
              {props.btname1}
            </NavLink>
            <a href={props.visit2} className=" btn-get-started  mb-3">
              {props.btname2}
            </a>
          </div>
        </div>

        <div className="col-lg-6 px-0 order-1 order-lg-2 header-img">
          <img
            src={props.imgsrc}
            className="img-fluid animated"
            alt="homeimage"
          />
        </div>
      </div>
    </>
  );
};

export default Common;
